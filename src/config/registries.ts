// Registry configuration for domain extensions
// This centralizes all registry data for easy maintenance and updates

export interface Registry {
	code: string;
	name: string;
	placeholder: string;
	extension: string;
}

export const enRegistries: Registry[] = [
	{ 
		code: 'ma', 
		name: 'Morocco (.ma)', 
		placeholder: 'Search for a .MA domain', 
		extension: '.ma' 
	},
	{
		code: 'net.ma',
		name: 'Net (.net.ma)',
		placeholder: 'Search for a .NET.MA domain',
		extension: '.net.ma'
	},
	{
		code: 'ac.ma',
		name: 'Ac (.ac.ma)',
		placeholder: 'Search for a .AC.MA domain',
		extension: '.ac.ma'
	},
	{
		code: 'co.ma',
		name: 'Co (.co.ma)',
		placeholder: 'Search for a .CO.MA domain',
		extension: '.co.ma'
	},
	{
		code: 'press.ma',
		name: 'Press (.press.ma)',
		placeholder: 'Search for a .PRESS.MA domain',
		extension: '.press.ma'
	},
	{
		code: 'org.ma',
		name: 'Org (.org.ma)',
		placeholder: 'Search for a .ORG.MA domain',
		extension: '.org.ma'
	},
	{
		code: 'gov.ma',
		name: 'Gov (.gov.ma)',
		placeholder: 'Search for a .GOV.MA domain',
		extension: '.gov.ma'
	},
	{
		code: 'com',
		name: 'Com (.com)',
		placeholder: 'Search for a .COM domain',
		extension: '.com'
	},
	{
		code: 'net',
		name: 'Net (.net)',
		placeholder: 'Search for a .NET domain',
		extension: '.net'
	},
	{
		code: 'org',
		name: 'Org (.org)',
		placeholder: 'Search for a .ORG domain',
		extension: '.org'
	}
];

export const frRegistries: Registry[] = [
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





