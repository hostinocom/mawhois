// Helper function to check if a link is active
export function isActive(href: string, index: number, currentPath: string): boolean {
	// Remove locale prefix for comparison
	const pathWithoutLocale = currentPath.replace(/^\/fr/, '').replace(/^\/$/, '/') || '/';
	const hrefWithoutLocale = href.replace(/^\/fr/, '').replace(/^\/$/, '/') || '/';
	
	// Special case for home page - only active if exactly "/" and it's the first item
	if (hrefWithoutLocale === '/') {
		// Only the first "/" link should be active on home page
		if (index === 0) {
			return pathWithoutLocale === '/' || pathWithoutLocale === '';
		}
		// The last "/" link should not be active on home page
		return false;
	}
	// For other pages, check if current path starts with the href
	return pathWithoutLocale.startsWith(hrefWithoutLocale);
}

// Helper function to get link classes
export function getLinkClasses(href: string, index: number, currentPath: string): string {
	const baseClasses = 'hover:text-(--color-primary) transition-colors';
	const activeClasses = 'text-(--color-primary)';
	const inactiveClasses = 'text-white/80';
	
	return isActive(href, index, currentPath) 
		? `${baseClasses} ${activeClasses}` 
		: `${baseClasses} ${inactiveClasses}`;
}
