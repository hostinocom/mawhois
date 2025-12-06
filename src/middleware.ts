import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = new URL(context.request.url);
  
  // Skip redirect for API routes and static assets
  if (
    url.pathname.startsWith('/api/') ||
    url.pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js|woff|woff2|ttf|eot|webp|pdf|json|xml)$/i)
  ) {
    return next();
  }
  
  // Check if pathname contains uppercase letters
  const lowercasePath = url.pathname.toLowerCase();
  const hasUppercase = url.pathname !== lowercasePath;
  
  // Allow localhost and 127.0.0.1 for local development
  const isLocalhost = url.hostname === 'localhost' || url.hostname === '127.0.0.1' || url.hostname.startsWith('192.168.') || url.hostname.startsWith('10.') || url.hostname.endsWith('.local');
  
  // Redirect all requests to www.hostino.ma with trailing slash (except localhost)
  if (!isLocalhost && url.hostname !== 'www.mawhois.com' && url.hostname !== 'mawhois.com') {
    const pathWithSlash = lowercasePath.endsWith('/') ? lowercasePath : `${lowercasePath}/`;
    return Response.redirect(
      `https://www.mawhois.com${pathWithSlash}${url.search}`, 
      301
    );
  }
  
  // Redirect hostino.ma to www.hostino.ma
  if (url.hostname === 'hostino.ma') {
    const pathWithSlash = lowercasePath.endsWith('/') ? lowercasePath : `${lowercasePath}/`;
    return Response.redirect(
      `https://www.mawhois.com${pathWithSlash}${url.search}`, 
      301
    );
  }
  
  // If already on correct domain but path has uppercase, redirect to lowercase with trailing slash
  if (hasUppercase) {
    const pathWithSlash = lowercasePath.endsWith('/') ? lowercasePath : `${lowercasePath}/`;
    return Response.redirect(
      `${url.origin}${pathWithSlash}${url.search}`,
      301
    );
  }
  
  // Add trailing slash if missing (and not root path)
  if (!url.pathname.endsWith('/') && url.pathname !== '/') {
    return Response.redirect(
      `${url.origin}${url.pathname}/${url.search}`,
      301
    );
  }
  
  // Get the response
  const response = await next();
  
  // Create a new response with modified headers
  const newResponse = new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });
  
  // Add security headers for both hostino.ma and www.hostino.ma
  if (url.hostname === 'www.mawhois.com' || url.hostname === 'mawhois.com') {
    newResponse.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );
    newResponse.headers.set('X-Frame-Options', 'DENY');
    newResponse.headers.set('X-Content-Type-Options', 'nosniff');
    newResponse.headers.set('X-XSS-Protection', '1; mode=block');
    newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    newResponse.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  }
  
  return newResponse;
};