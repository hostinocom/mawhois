const baseUrl = "https://www.mawhois.com";
export const defaultImageUrl = `${baseUrl}/images/og-image.png`;

// Home Page Meta
const homePageMeta = {
	title: "Whois MA | Search & Lookup for Moroccan Domains",
	description: "Whois MA domain name. Find who owns a .MA with our WHOIS Morocco tool. Search and secure your ma domain easily",
	canonical_url: "https://www.mawhois.com/",
	ogAlt: "Whois MA | Search & Lookup for Moroccan Domains",
	imageUrl: "http://www.mawhois.com/images/ma-whois.jpg",
};

// About Page Meta
const aProposMeta = {
	title: "About WHOIS Morocco – Information about our service",
	description: "WHOIS Morocco Tool, online directory service based on the official .ma registry database.",
	canonical_url: "https://www.mawhois.com/a-propos/",
	ogAlt: "About WHOIS Morocco",
	imageUrl: "http://www.mawhois.com/images/ma-whois.jpg",
	};

// Domain Registration Page Meta
const nomDeDomaineMarocMeta = {
	title: "Ma Domain Name | Official Morocco Domains Registration",
	description: "Ma Domain Name. Protect your brand in Morocco — search and secure your official .MA domain name instantly.",
	canonical_url: "https://www.mawhois.com/ma-domain-name/",
	ogAlt: "Ma Domain Name",
	imageUrl: "http://www.mawhois.com/images/ma-domain-name.jpg",
};

// Reserved Terms Page Meta
const termesReservesMeta = {
	title: "Termes réservés pour les noms de domaine .ma - WHOIS Maroc",
	description: "Consultez la liste des termes réservés pour les noms de domaine .ma. Découvrez quels mots et expressions sont protégés par l'ANRT et les conditions d'enregistrement.",
	canonical_url: `${baseUrl}/termes-reserves`,
	ogAlt: "Termes réservés pour les noms de domaine .ma",
	imageUrl: defaultImageUrl,
};

// Terms of Service Page Meta
const conditionsGeneralesMeta = {
	title: "Conditions générales d'utilisation - WHOIS Maroc",
	description: "Consultez les conditions générales d'utilisation du site whoisma.com. Règles d'utilisation du WHOIS, responsabilités, propriété intellectuelle et contact.",
	canonical_url: `${baseUrl}/conditions-generales`,
	ogAlt: "Conditions générales d'utilisation - WHOIS Maroc",
	imageUrl: defaultImageUrl,
};


export const metaTags = {
	homePage: {
		...homePageMeta,
		articleSchema: {
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "WebSite",
					"@id": `${baseUrl}/#website`,
					url: homePageMeta.canonical_url,
					name: "WHOIS Maroc",
					description: homePageMeta.description,
					publisher: {
						"@type": "Organization",
						name: "WHOIS Maroc",
						url: homePageMeta.canonical_url,
					},
				},
				{
					"@type": "WebPage",
					"@id": `${homePageMeta.canonical_url}/#webpage`,
					url: homePageMeta.canonical_url,
					name: homePageMeta.title,
					description: homePageMeta.description,
					isPartOf: {
						"@id": `${baseUrl}/#website`,
					},
				},
				{
					"@type": "BreadcrumbList",
					"@id": `${homePageMeta.canonical_url}/#breadcrumb`,
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							item: {
								"@id": homePageMeta.canonical_url,
								name: "Accueil",
							},
						},
					],
				},
				{
					"@type": "Service",
					name: homePageMeta.title,
					description: homePageMeta.description,
					provider: {
						"@type": "Organization",
						name: "WHOIS Maroc",
						url: homePageMeta.canonical_url,
					},
					areaServed: "MA",
					serviceType: "Domain Name Search",
				},
			],
		},
	},
	aPropos: {
		...aProposMeta,
		articleSchema: {
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "WebPage",
					"@id": `${aProposMeta.canonical_url}/#webpage`,
					url: aProposMeta.canonical_url,
					name: aProposMeta.title,
					description: aProposMeta.description,
					isPartOf: {
						"@id": `${baseUrl}/#website`,
					},
				},
				{
					"@type": "BreadcrumbList",
					"@id": `${aProposMeta.canonical_url}/#breadcrumb`,
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							item: {
								"@id": baseUrl,
								name: "Accueil",
							},
						},
						{
							"@type": "ListItem",
							position: 2,
							item: {
								"@id": aProposMeta.canonical_url,
								name: "À propos",
							},
						},
					],
				},
				{
					"@type": "AboutPage",
					name: aProposMeta.title,
					description: aProposMeta.description,
				},
			],
		},
	},
	nomDeDomaineMaroc: {
		...nomDeDomaineMarocMeta,
		articleSchema: {
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "WebPage",
					"@id": `${nomDeDomaineMarocMeta.canonical_url}/#webpage`,
					url: nomDeDomaineMarocMeta.canonical_url,
					name: nomDeDomaineMarocMeta.title,
					description: nomDeDomaineMarocMeta.description,
					isPartOf: {
						"@id": `${baseUrl}/#website`,
					},
				},
				{
					"@type": "BreadcrumbList",
					"@id": `${nomDeDomaineMarocMeta.canonical_url}/#breadcrumb`,
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							item: {
								"@id": baseUrl,
								name: "Accueil",
							},
						},
						{
							"@type": "ListItem",
							position: 2,
							item: {
								"@id": nomDeDomaineMarocMeta.canonical_url,
								name: "Nom de domaine Maroc",
							},
						},
					],
				},
				{
					"@type": "Product",
					name: "Nom de domaine .MA",
					description: nomDeDomaineMarocMeta.description,
					brand: {
						"@type": "Brand",
						name: "WHOIS Maroc",
					},
					offers: {
						"@type": "Offer",
						url: nomDeDomaineMarocMeta.canonical_url,
						price: "118",
						priceCurrency: "MAD",
						availability: "https://schema.org/InStock",
					},
				},
			],
		},
	},
	termesReserves: {
		...termesReservesMeta,
		articleSchema: {
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "WebPage",
					"@id": `${termesReservesMeta.canonical_url}/#webpage`,
					url: termesReservesMeta.canonical_url,
					name: termesReservesMeta.title,
					description: termesReservesMeta.description,
					isPartOf: {
						"@id": `${baseUrl}/#website`,
					},
				},
				{
					"@type": "BreadcrumbList",
					"@id": `${termesReservesMeta.canonical_url}/#breadcrumb`,
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							item: {
								"@id": baseUrl,
								name: "Accueil",
							},
						},
						{
							"@type": "ListItem",
							position: 2,
							item: {
								"@id": termesReservesMeta.canonical_url,
								name: "Termes réservés",
							},
						},
					],
				},
			],
		},
	},
	conditionsGenerales: {
		...conditionsGeneralesMeta,
		articleSchema: {
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "WebPage",
					"@id": `${conditionsGeneralesMeta.canonical_url}/#webpage`,
					url: conditionsGeneralesMeta.canonical_url,
					name: conditionsGeneralesMeta.title,
					description: conditionsGeneralesMeta.description,
					isPartOf: {
						"@id": `${baseUrl}/#website`,
					},
				},
				{
					"@type": "BreadcrumbList",
					"@id": `${conditionsGeneralesMeta.canonical_url}/#breadcrumb`,
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							item: {
								"@id": baseUrl,
								name: "Accueil",
							},
						},
						{
							"@type": "ListItem",
							position: 2,
							item: {
								"@id": conditionsGeneralesMeta.canonical_url,
								name: "Conditions générales",
							},
						},
					],
				},
			],
		},
	},
};
