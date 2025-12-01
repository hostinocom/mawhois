const baseUrl = "https://whoisma.com";
export const defaultImageUrl = `${baseUrl}/images/og-image.png`;

// Home Page Meta
const homePageMeta = {
	title: "WHOIS Maroc - Recherche de domaine .MA",
	description: "Service de répertoire en ligne basé sur la base de données du registre .ma qui permet de rechercher des renseignements sur les noms de domaine.",
	canonical_url: baseUrl,
	ogAlt: "WHOIS Maroc - Recherche de domaine .MA",
	imageUrl: defaultImageUrl,
};

// About Page Meta
const aProposMeta = {
	title: "À propos de WHOIS Maroc - Informations sur notre service",
	description: "Découvrez WHOIS Maroc, un service de répertoire en ligne basé sur la base de données du registre .ma. Informations sur notre entreprise, accréditation ANRT et coordonnées.",
	canonical_url: `${baseUrl}/a-propos`,
	ogAlt: "À propos de WHOIS Maroc",
	imageUrl: defaultImageUrl,
};

// Domain Registration Page Meta
const nomDeDomaineMarocMeta = {
	title: "Nom de domaine Maroc - Acheter un domaine .MA à 118 MAD",
	description: "Achetez votre nom de domaine .MA au Maroc à seulement 118 MAD. Enregistrement instantané, activation immédiate. Découvrez pourquoi enregistrer un domaine .ma et comment procéder.",
	canonical_url: `${baseUrl}/nom-de-domaine-maroc`,
	ogAlt: "Nom de domaine Maroc - Acheter un domaine .MA",
	imageUrl: defaultImageUrl,
};

// Reserved Terms Page Meta
const termesReservesMeta = {
	title: "Termes réservés pour les noms de domaine .ma - WHOIS Maroc",
	description: "Consultez la liste des termes réservés pour les noms de domaine .ma. Découvrez quels mots et expressions sont protégés par l'ANRT et les conditions d'enregistrement.",
	canonical_url: `${baseUrl}/termes-reserves`,
	ogAlt: "Termes réservés pour les noms de domaine .ma",
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
};