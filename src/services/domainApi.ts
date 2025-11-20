// Domain API Service
// This file contains mock API calls for domain availability checking
// In production, replace with real API endpoints

export interface DomainAvailabilityResult {
	available: boolean;
	domain: string;
	price?: string;
	registrar?: string;
	expiryDate?: string;
	registeredDate?: string;
	owner?: string;
	status?: string;
	nameservers?: string[];
	dnssec?: boolean;
}

/**
 * Mock API call to check domain availability
 * In production, this would call a real WHOIS API
 * 
 * @param domainName - The domain name without extension
 * @param extension - The domain extension (e.g., .ma, .com)
 * @returns Promise with domain availability information
 */
export async function checkDomainAvailability(
	domainName: string,
): Promise<DomainAvailabilityResult> {
	// Simulate API delay (remove in production)
	await new Promise(resolve => setTimeout(resolve, 800));
	
	// Clean domain name
	const cleanDomain = domainName.toLowerCase().trim();
	
	// Mock logic: domains with even number of characters are "available"
	// In production, this would be replaced with actual API call
	const isAvailable = cleanDomain.length % 2 === 0;
	
	const fullDomain = cleanDomain;
	
	if (isAvailable) {
		return {
			available: true,
			domain: fullDomain,
			price: getPriceForExtension(),
			registrar: 'WHOIS Maroc'
		};
	} else {
		return {
			available: false,
			domain: fullDomain,
			registeredDate: getRandomDate(2015, 2022),
			expiryDate: getRandomDate(2025, 2027),
			owner: 'Registrant Name Hidden (Privacy Protected)',
			status: getRandomStatus(),
			registrar: getRandomRegistrar(),
			nameservers: [
				'ns1.hosting-provider.com',
				'ns2.hosting-provider.com'
			],
			dnssec: Math.random() > 0.5
		};
	}
}

/**
 * Get pricing based on extension
 */
function getPriceForExtension(): string {
	return '150 MAD/an';
}

/**
 * Generate random date for mock data
 */
function getRandomDate(startYear: number, endYear: number): string {
	const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
	const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
	const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
	return `${year}-${month}-${day}`;
}

/**
 * Get random domain status
 */
function getRandomStatus(): string {
	const statuses = [
		'Active',
		'clientTransferProhibited',
		'serverTransferProhibited',
		'Active - Locked'
	];
	return statuses[Math.floor(Math.random() * statuses.length)];
}

/**
 * Get random registrar
 */
function getRandomRegistrar(): string {
	const registrars = [
		'WHOIS Maroc Registry',
		'GoDaddy',
		'Namecheap',
		'Google Domains',
		'OVH',
		'Gandi'
	];
	return registrars[Math.floor(Math.random() * registrars.length)];
}

/**
 * Generate domain suggestions based on search term
 */
export function generateDomainSuggestions(
	domainName: string,
	count: number = 5
): string[] {
	const cleanDomain = domainName.toLowerCase().trim();
	const prefixes = ['get', 'my', 'the', 'try', 'go'];
	const suffixes = ['shop', 'online', 'app', 'pro', 'web', 'site', 'hub'];
	
	const suggestions: string[] = [];
	
	// Add prefix suggestions
	for (let i = 0; i < Math.min(2, count); i++) {
		suggestions.push(`${prefixes[i]}-${cleanDomain}.ma`);
	}
	
	// Add suffix suggestions
	for (let i = 0; i < Math.min(3, count - suggestions.length); i++) {
		suggestions.push(`${cleanDomain}-${suffixes[i]}.ma`);
	}
	
	return suggestions.slice(0, count);
}

/**
 * Validate domain name format
 */
export function validateDomainName(domain: string): {
	valid: boolean;
	error?: string;
} {
	// Remove whitespace
	const cleaned = domain.trim();
	
	// Check length
	if (cleaned.length < 2) {
		return { valid: false, error: 'Le nom de domaine doit contenir au moins 2 caractères' };
	}
	
	if (cleaned.length > 63) {
		return { valid: false, error: 'Le nom de domaine ne peut pas dépasser 63 caractères' };
	}
	
	// Check for valid characters (alphanumeric and hyphens)
	const validPattern = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/i;
	if (!validPattern.test(cleaned)) {
		return { 
			valid: false, 
			error: 'Le nom de domaine ne peut contenir que des lettres, chiffres et tirets' 
		};
	}
	
	// Check for consecutive hyphens
	if (cleaned.includes('--')) {
		return { valid: false, error: 'Les tirets consécutifs ne sont pas autorisés' };
	}
	
	return { valid: true };
}

