// Registry configuration for domain extensions
// This centralizes all registry data for easy maintenance and updates

export interface Registry {
	code: string;
	name: string;
	placeholder: string;
	extension: string;
}

export const registries: Registry[] = [
	{ 
		code: 'ma', 
		name: 'Maroc (.ma)', 
		placeholder: 'Chercher un domaine .MA', 
		extension: '.ma' 
	},
	{ 
		code: 'en', 
		name: 'International (.com)', 
		placeholder: 'Search for a domain .COM', 
		extension: '.com' 
	},
	{ 
		code: 'fr', 
		name: 'France (.fr)', 
		placeholder: 'Chercher un domaine .FR', 
		extension: '.fr' 
	},
	{ 
		code: 'uk', 
		name: 'United Kingdom (.uk)', 
		placeholder: 'Search for a domain .UK', 
		extension: '.uk' 
	},
	{ 
		code: 'de', 
		name: 'Germany (.de)', 
		placeholder: 'Suchen Sie eine Domain .DE', 
		extension: '.de' 
	},
	{ 
		code: 'es', 
		name: 'España (.es)', 
		placeholder: 'Buscar un dominio .ES', 
		extension: '.es' 
	}
];

export const defaultRegistry: Registry = registries[0];

// Helper function to get registry by code
export function getRegistryByCode(code: string): Registry | undefined {
	return registries.find(r => r.code === code);
}

// Helper function to get all extension names
export function getAllExtensions(): string[] {
	return registries.map(r => r.extension);
}

