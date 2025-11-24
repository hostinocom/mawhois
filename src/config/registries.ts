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
		code: 'net.ma',
		name: 'Net (.net.ma)',
		placeholder: 'Chercher un domaine .NET.MA',
		extension: '.net.ma'
	},
	{
		code: 'ac.ma',
		name: 'Ac (.ac.ma)',
		placeholder: 'Chercher un domaine .AC.MA',
		extension: '.ac.ma'
	},
	{
		code: 'co.ma',
		name: 'Co (.co.ma)',
		placeholder: 'Chercher un domaine .CO.MA',
		extension: '.co.ma'
	},
	{
		code: 'press.ma',
		name: 'Press (.press.ma)',
		placeholder: 'Chercher un domaine .PRESS.MA',
		extension: '.press.ma'
	},
	{
		code: 'org.ma',
		name: 'Org (.org.ma)',
		placeholder: 'Chercher un domaine .ORG.MA',
		extension: '.org.ma'
	},
	{
		code: 'gov.ma',
		name: 'Gov (.gov.ma)',
		placeholder: 'Chercher un domaine .GOV.MA',
		extension: '.gov.ma'
	},
	{
		code: 'com',
		name: 'Com (.com)',
		placeholder: 'Chercher un domaine .COM',
		extension: '.com'
	},
	{
		code: 'net',
		name: 'Net (.net)',
		placeholder: 'Chercher un domaine .NET',
		extension: '.net'
	},
	{
		code: 'org',
		name: 'Org (.org)',
		placeholder: 'Chercher un domaine .ORG',
		extension: '.org'
	}
];


// Helper function to get registry by code
export function getRegistryByCode(code: string): Registry | undefined {
	return registries.find(r => r.code === code);
}

// Helper function to get all extension names
export function getAllExtensions(): string[] {
	return registries.map(r => r.extension);
}

