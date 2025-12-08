export const frHomePage = {
	home: {
		title:`Recherche d'un<br />domaine dans <em class="italic font-serif">le<br />registre WHOIS Maroc</em>`,
	},
    Description: {
        title:`<span class="font-semibold">"WHOIS Maroc"</span> est un <em class="italic font-serif">service de répertoire en ligne basé sur la base de données du registre .ma</em> qui permet de rechercher des renseignements sur les noms de domaine.`,
    },
    ServiceInfo: {
        title:`Service WHOIS — Base de données du registre .MA`,
        paragraphs: [
            "Avec notre service Whois Maroc, accédez instantanément aux <strong>informations publiques</strong> de n'importe quel nom de domaine.ma.",
            "En interrogeant la base officielle gérée par l'ANRT, vous vérifiez en temps réel la disponibilité et les données techniques d'un site web.",
            "Vous obtiendrez des détails précis sur le titulaire, affichant le nom de la société pour les <strong>personnes morales</strong> ou l'identité pour les <strong>personnes physiques</strong>.",
            "Notez toutefois que l'utilisation de ces données est restreinte. La <strong>consultation du WHOIS</strong> est limitée à la recherche sur les domaines «.ma », les serveurs et les contacts, uniquement dans le cadre légitime de l'enregistrement ou de la gestion d'un nom de domaine.",
        ],
        image: {
            src: "/service-whois-maroc.jpg",
            alt: "Service WHOIS Maroc - Logo .MA et drapeau marocain avec ANRT"
        }
    },
    UseCases: {
        title:`À quoi sert l'outil Whois Maroc ?`,
        paragraphTitle: [
            {
                title: "Vérifier la disponibilité d'un domaine .MA",
                description: "L'outil Whois Maroc permet de <strong>vérifier la disponibilité</strong> d'un domaine .MA. Testez votre nom ou ses variantes pour trouver rapidement le domaine idéal pour votre site web.",
            },
            {
                title: "Trouver le propriétaire d'un domaine .MA",
                description: "Consultez les informations publiques (nom, e-mail, téléphone) du <strong>propriétaire d'un domaine</strong> .MA enregistré, ainsi que toutes les données fournies par le registre .MA.",
            },
            {
                title: "Consulter la date d'expiration du domaine",
                description: "Consultez la date d'expiration d'un domaine, ainsi que les informations de renouvellement et le bureau d'enregistrement, <strong>pour éviter toute interruption</strong> de service.",
            },
            {
                title: "État d'un domaine .MA",
                description: "Whois Maroc affiche le statut d'un domaine .MA — <strong>pending create</strong>, pending transfer, redemption period — et de suivre son cycle de vie en temps réel.",
            },
        ]
    },
    PublicData: {
        title: "Accès aux données publiques via Whois Maroc",
        paragraphs: [
            "Les données accessibles via notre platform Whois Maroc regroupent l'ensemble des <strong>informations publiques</strong> liées à un domaine enregistré sous l'extension .MA.",
            "Whois Maroc permettent de connaître le <strong>statut actuel</strong> du domaine (actif, suspendu ou expiré), ainsi que les dates importantes, comme la création, la dernière mise à jour et l'expiration.",
            "Vous pouvez également consulter le prestataire responsable du domaine et ses coordonnées. Le service affiche en outre les <strong>serveurs DNS</strong> associés, les données du titulaire du domaine, telles que le nom, l'organisation, l'adresse e-mail ou le numéro de téléphone.",
        ],
        image: {
            src: "/donnees-whois-maroc.jpg",
            alt: "Exemple de données WHOIS pour le domaine hostino.ma"
        }
    },
    Privacy: {
        title: "Confidentialité des informations pour les domaines .MA",
        paragraphs: [
            "L'option <strong>'Whois Privacy .MA'</strong> n'est pas proposée pour les domaines .ma. Selon les informations officielles, toutes les données de contact essentielles des titulaires sont rendues publiques dans la base WHOIS du registre .MA.",
            "En vertu du règlement de l'ANRT, certaines données — comme le nom du titulaire, son prestataire, les dates de création ou d'expiration — doivent obligatoirement être publiées.",
            "Cela répond à une exigence de transparence imposée par l'organisme de régulation des télécommunications au Maroc.",
            "Toute tentative de masquer ces informations (via un service de 'privacy WHOIS') n'est légalement pas autorisée pour les domaines .ma.",
        ],
        image: {
            src: "/whois-privacy-maroc.jpg",
            alt: "WHOIS Privacy - Protection des données pour les domaines .MA"
        }
    },
    Reliability: {
        title: "Fiabilité de la base Whois Maroc : mise à jour obligatoire du CIN ou de l'ICE",
        paragraphs: [
            "L'ANRT rappelle, via une notification officielle adressée aux prestataires le 16 octobre 2025, que pour garantir la fiabilité des informations dans la base Whois Maroc, toutes les données fournies lors de l'enregistrement d'un domaine doivent être exactes et régulièrement mises à jour.",
            "Cette exigence concerne tous les titulaires, qu'il s'agisse de particuliers ou d'entreprises, et implique la fourniture ou la mise à jour du CIN pour les particuliers et de l'ICE pour les entreprises, conformément aux articles <strong>45 et 54 de la Décision ANRT/DG/N°02/2024</strong>.",
            "Le respect de cette obligation permet de maintenir la transparence et la sécurité des noms de domaine .MA, tout en facilitant la gestion des transferts, des réclamations et des actions correctives éventuelles.",
        ]
    },
    FAQ: {
        title: "FAQ - Whois Maroc",
        faqs:[
            {
              "question": "Qu'est-ce que le WHOIS Maroc ?",
              "answer": [
                "Le WHOIS Maroc est un service de publication public <strong>synchronisé avec le Registre .MA</strong> (ANRT) (<a href='https://www.anrt.ma/fr/' class='underline'>l'Agence Nationale de Réglementation des Télécommunications</a>), l'autorité marocaine responsable des domaines .MA. Il permet à tout un chacun de visualiser les informations publiques d'un domaine .MA, telles que le titulaire enregistré, le bureau d'enregistrement (registrar) accrédité, et les serveurs DNS actuellement assignés au domaine.",
                "En termes simples, il agit comme une <strong>fiche d'identité numérique</strong> pour les noms de domaine marocains. Cette transparence renforce la confiance, la sécurité et la traçabilité au sein de l'écosystème numérique marocain. Les organismes et les entreprises utilisent souvent le WHOIS Maroc pour <strong>vérifier la propriété d'un domaine</strong> ou pour s'assurer qu'un <strong>nom de domaine .MA</strong> est disponible avant de procéder à son enregistrement ou au lancement d'un projet.",
                "Pour les entreprises locales, les particuliers et les sociétés internationales ciblant le marché marocain, le WHOIS est un outil essentiel pour <strong>surveiller le statut du domaine</strong>, suivre toute mise à jour et garantir la pleine conformité avec les exigences de l'ANRT et les réglementations nationales de cybersécurité."
              ]
            },
            {
              "question": "Est-il obligatoire de fournir le CIN ou l'ICE pour enregistrer un domaine .MA ?",
              "answer": [
                "Oui, la fourniture d'une pièce d'identification officielle est désormais une <strong>exigence obligatoire</strong> pour enregistrer ou maintenir un domaine .MA. Les personnes physiques doivent fournir une pièce d'identité nationale (CIN) ou un passeport valide, tandis que les entreprises doivent présenter leur <strong>Identifiant Commun de l'Entreprise (ICE)</strong> (ou RC ou statuts le cas échéant). Cette vérification est appliquée directement par l'ANRT par l'intermédiaire des registrars accrédités.",
                "Cette règle vise à réduire la <strong>fraude, le cybersquatting</strong> et l'utilisation de fausses identités commerciales en ligne. L'écosystème numérique marocain est de plus en plus réglementé pour garantir que le détenteur d'un domaine .MA soit pleinement <strong>identifié et légalement responsable</strong> du contenu hébergé.",
                "Cela fait de l'extension .MA un choix local fiable pour les entreprises, les startups et les professionnels souhaitant <strong>établir leur crédibilité</strong> auprès de la clientèle marocaine."
              ]
            },
            {
              "question": "Comment mettre à jour mes informations sur WHOIS Maroc ?",
              "answer": [
                "Les informations WHOIS ne sont pas gérées directement par l'ANRT, mais par votre <strong>registrar accrédité</strong> – la société auprès de laquelle vous avez enregistré votre nom de domaine. Si vous avez besoin de mettre à jour les détails de propriété, les coordonnées ou la documentation de l'entreprise, vous devez en faire la demande via votre registrar.",
                "Dans la plupart des cas, les mises à jour nécessitent que des documents officiels soient <strong>re-validés par l'ANRT</strong> (par exemple, changement de raison sociale, changement d'ID, changement de représentant légal). Les registrars vous assistent dans la vérification et la soumission de ces documents en votre nom. Il est <strong>crucial de maintenir vos données WHOIS exactes et à jour</strong>, d'autant plus que la réglementation marocaine exige une identité réelle et vérifiable pour les domaines .MA.",
                "Des informations incorrectes peuvent entraîner des retards, des suspensions, voire la <strong>suppression du domaine</strong> par le registre."
              ]
            },
            {
              "question": "Le WHOIS Maroc est-il accessible au public?",
              "answer": [
                "Oui, le <a href='/fr/' class='underline'>WHOIS Maroc</a> est un <strong>service d'accès public</strong>. Toute personne peut effectuer une recherche pour consulter les données essentielles et non-sensibles de tout domaine .MA. Ceci fait partie de la politique de <strong>transparence</strong> de la gouvernance numérique marocaine.",
                "Cependant, certains détails peuvent être partiellement <strong>masqués ou limités</strong> pour des raisons de protection de la vie privée (particulièrement pour les titulaires individuels). Le système assure un équilibre entre l'information du public et les obligations de <strong>protection des données</strong> conformément aux normes juridiques marocaines.",
                "L'accès public contribue à <strong>renforcer la confiance en ligne</strong> : les clients peuvent vérifier si une marque ou une boutique en ligne est <strong>officiellement liée à une entité commerciale marocaine réelle</strong>."
              ]
            },
            {
              "question": "Mon domaine .MA est toujours en “Pending Create”, quel est le problème ?",
              "answer": [
                "Lorsqu'un domaine .MA est bloqué en <strong>“Pending Create” (Création en attente)</strong>, cela signifie généralement que l'ANRT est encore en train d'examiner la demande d'enregistrement et qu'elle pourrait nécessiter des <strong>informations supplémentaires</strong> avant d'activer le domaine. Même si le paiement est effectué, le domaine ne sera pas mis en ligne tant que le registre n'aura pas tout approuvé.",
                "Cela peut se produire pour plusieurs raisons :",
                "• L'ANRT a besoin de <strong>documents additionnels</strong> ou de clarifications de la part du titulaire.",
                "• Les informations fournies ne correspondent pas entièrement aux détails de contact WHOIS.",
                "• Le nom de domaine choisi inclut un <a href='/fr/termes-reserves/' class='underline'>terme réservé</a> qui nécessite une justification (par exemple : noms de villes, termes liés au gouvernement ou mots-clés d'industries protégées).",
                "La meilleure démarche est de <strong>contacter votre registrar accrédité</strong> pour assurer le suivi de la demande. Il peut vous fournir des détails sur ce que l'ANRT attend, vous assister avec la documentation requise et s'assurer que le dossier est complété. Une fois que l'ANRT valide la demande, le domaine passera automatiquement à l'état “Actif” et commencera à fonctionner normalement."
              ]
            },
            {
              "question": "Comment fonctionne le changement de propriétaire d'un domaine .MA ?",
              "answer": [
                "Un transfert de propriété .MA n'est pas un simple changement administratif : il est traité comme un <strong>changement légal de droits</strong>. L'ANRT exige des pièces d'identité ou des documents d'entreprise valides à la fois du <strong>titulaire actuel</strong> et du <strong>nouveau titulaire</strong>. Le registrar gère le processus et transmet l'ensemble au registre pour approbation.",
                "Ceci garantit que le domaine n'est pas transféré sans le consentement du propriétaire actuel et aide à prévenir les litiges. C'est particulièrement important lors de la vente d'une entreprise, d'un changement de marque ou de la mise à jour d'informations d'entreprise.",
                "Une fois que le registre valide la demande, les données WHOIS sont mises à jour et le nouveau titulaire devient officiellement l'<strong>entité responsable</strong> du domaine en vertu de la loi marocaine."
              ]
            },
            {
              "question": "Mon domaine contient un terme réservé, que dois-je faire ?",
              "answer": [
                "Certains mots sont considérés comme <strong>restreints ou protégés au Maroc</strong> – tels que les noms de villes, les termes liés au gouvernement ou les mots-clés d'industries sensibles. Si votre domaine choisi en inclut un, l'ANRT pourrait demander des <strong>documents justificatifs</strong> pour prouver votre éligibilité.",
                "Le domaine ne sera pas activé tant que vous n'aurez pas fourni la preuve (par exemple : certificat de marque, licence commerciale ou une autorisation écrite). Cela contribue à <strong>protéger les institutions nationales</strong>, l'intérêt public et l'identité des marques dans le cyberespace marocain.",
                "Si vous estimez avoir des droits légitimes sur le terme, <strong>contactez votre registrar</strong> pour soumettre les documents requis. Dans le cas contraire, vous devrez peut-être choisir un nom de domaine différent qui respecte la liste des termes réservés."
              ]
            }
          ]
    }
};

export const frNomDeDomaineMaroc = {
    Hero: {
        subtitle: "Nom de domaine Maroc",
        title: "Acheter un nom<br />de domaine .MA",
        price: "à 118 MAD"
    },
    DomainInfo: {
        title: "Nom de domaine en .MA",
        paragraphs: [
            "Nous accompagnons nos clients, particuliers et professionnels, au <strong>Maroc et à l'étranger</strong>, dans l'acquisition, la gestion et la <strong>protection</strong> de leurs noms de domaine .ma.",
            "Depuis nos bureaux au Maroc, notre équipe d'experts vous propose un service <strong>client réactif</strong> et une <strong>plateforme intuitive</strong>, facile à utiliser, vous permettant de gérer simplement et à tout moment tous les aspects de vos noms de domaine.",
            "Grâce à l'automatisation des processus, l'<strong>activation immédiate</strong> d'un nom de domaine .ma est effective après validation de votre commande, vous permettant de lancer vos projets sans délai.",
            "En tant que Bureau d'enregistrement accrédité par l'ANRT (sous le numéro ANRT/SVA/\"MA\"/119/2022), nous garantissons un service conforme aux <strong>normes locales</strong> les plus rigoureuses."
        ],
        image: {
            src: "/nom-domaine-maroc.jpg",
            alt: "Service WHOIS Maroc - Logo .MA et drapeau marocain avec ANRT"
        }
    },
    WhyRegister: {
        title: "Pourquoi dois-je enregistrer un nom de domaine Maroc ?",
        columns: [
            {
                subtitle: "L'adresse web pour votre site internet",
                paragraph: "L'achat d'un nom de domaine .ma vous permet de mettre votre site web en ligne, de le lier à votre <strong>hébergement</strong> existant ou d'opter pour un hébergement dès maintenant."
            },
            {
                subtitle: "Créer des adresses mail @domaine.ma",
                paragraph: "Avec un nom de domaine .ma, vous pouvez créer un nombre illimité d'adresses mail en <strong>@entreprise.ma</strong>. Nous vous accompagnons par la suite pour configurer votre e-mail professionnel."
            },
            {
                subtitle: "Sécuriser le nom de votre marque",
                paragraph: "<strong>Anticipez et enregistrez</strong> votre nom de domaine maroc à l'avance : évitez les utilisations abusives et assurez-vous que personne d'autre ne puisse enregistrer le nom de votre entreprise en .ma."
            }
        ]
    },
    WhatIsDomain: {
        title: "Qu'est ce qu'un nom de domaine Maroc ?",
        paragraphs: [
            "Un nom de domaine marocain est toute adresse de site web se terminant par l'<strong>extension nationale .ma</strong>, servant d'identifiant unique et mémorable sur Internet.",
            "Ce <strong>domaine national de premier niveau (ccTLD)</strong> est essentiel pour les entreprises, professionnels ou particuliers souhaitant établir une identité numérique forte et crédible au Maroc, signalant aux clients et aux moteurs de recherche que votre contenu est destiné au marché marocain.",
            "L'enregistrement des domaines <strong>\".ma\"</strong> <strong>est ouvert à tous</strong> les projets liés au Maroc, sans exigence de résidence ou de présence physique dans le pays."
        ],
        image: {
            src: "/nom-de-domaine-maroc-que.jpg",
            alt: "Service WHOIS Maroc - Logo .MA et drapeau marocain avec ANRT"
        }
    },
    Pricing: {
        title: "Prix nom de domaine Maroc",
        intro: "Pour l'enregistrement d'un nom de domaine en .ma, le tarif est fixé à 118 MAD HT par an pour une durée allant de 1 à 5 ans. Le renouvellement est quant à lui proposé à 150 MAD HT par an, également pour une durée de 1 à 5 ans. Si vous souhaitez transférer un domaine, le coût est de 150 MAD HT avec un délai de 1 à 5 jours, tandis qu'un changement de titulaire vous coûtera 118 MAD HT.",
        features: {
            characters: "CARACTÈRES",
            noPremium: "PAS DE<br/>PREMIUM",
            noIdn: "Pas d'IDN",
            noIdnSubtext: "CARACTÈRES<br/>ASCII<br/>UNIQUEMENT",
            noWhoisPrivacy: "PAS DE<br/>CONFIDENTIALITÉ<br/>WHOIS",
            restricted: "RESTREINTE",
            noDnssec: "PAS DE<br/>DNSSEC"
        },
        pricing: {
            registration: { label: "Enregistrement", price: "118 MAD HT / an" },
            renewal: { label: "Renouvellement", price: "150 MAD HT / an" },
            transfer: { label: "Transfert", price: "150 MAD HT" },
            restoration: { label: "Restauration", price: "Non disponible" },
            ownerChange: { label: "Changement de titulaire", price: "118 MAD HT" }
        },
        details: {
            registrationDuration: { label: "Durée d'enregistrement", value: "1 à 5 ans" },
            renewalDuration: { label: "Durée de renouvellement", value: "1 à 5 ans" },
            registrationDelay: { label: "Délai d'enregistrement", value: "Activation instantanée" },
            transferDelay: { label: "Délai de transfert", value: "1 à 5 jours" }
        }
    },
    FAQ: {
        title: "FAQ - Nom de domaine Maroc",
        faqs: [
            {
              "question": "Qu'est-ce qu'un nom de domaine .MA ?",
              "answer": [
                "Un nom de domaine .MA est le <strong>domaine de premier niveau national (ccTLD) officiel du Maroc</strong>, géré par l'ANRT. Il représente votre identité numérique au sein de l'écosystème marocain et est le signe le plus fort qu'un site web est <strong>authentiquement lié au Maroc</strong>.",
                "Les entreprises et les particuliers utilisent les domaines .MA pour <strong>établir la confiance</strong> avec les clients marocains, <strong>améliorer la visibilité en SE-O local</strong> et se conformer aux normes numériques nationales. Une extension .MA signale que votre marque est <strong>légalement identifiable</strong> et opère dans un environnement local réglementé, supervisé par l'ANRT.",
                "Choisir le .MA vous donne également une <strong>forte empreinte numérique marocaine</strong> — cela ancre votre présence en ligne au Maroc et indique le respect des règles nationales de cybersécurité."
              ]
            },
            {
              "question": "Qui peut enregistrer un nom de domaine .MA ?",
              "answer": [
                "Toute <strong>personne physique ou morale</strong> peut enregistrer un nom de domaine .MA — qu'elle soit basée au Maroc ou à l'étranger — à condition de fournir une <strong>identification valide</strong>. Les particuliers doivent fournir une pièce d'identité officielle (<a href='https://www.cnie.ma/fr' class='underline'>CIN</a> ou passeport), tandis que les entreprises doivent fournir des documents commerciaux tels que <strong>l'ICE, le RC ou les statuts</strong>.",
                "Les marques internationales ciblant le Maroc peuvent également obtenir un domaine .MA pour protéger leur marque localement. L'exigence fondamentale est de <strong>prouver une identité légitime</strong>, garantissant que le domaine n'est pas utilisé pour usurper l'identité d'autrui."
              ]
            },
            {
              "question": "La protection WHOIS est-elle disponible pour les domaines .MA ?",
              "answer": [
                "Non — la protection de la vie privée (<strong>WHOIS privacy protection</strong>) n'est <strong>pas disponible</strong> pour les noms de domaine .MA. L'ANRT exige une <strong>transparence totale de l'identité</strong> pour s'assurer que chaque titulaire de domaine est <strong>réel, vérifié et légalement responsable</strong> de sa présence en ligne.",
                "Cette règle est conçue pour prévenir la fraude, les entreprises fictives et les abus d'anonymat au sein de l'espace numérique marocain.",
                "Le registre doit toujours être en mesure de <strong>retrouver la personne réelle ou l'entité juridique</strong> derrière un domaine .MA lorsque les autorités ou les contrôles de conformité l'exigent. Contrairement aux extensions génériques comme le .com, l'espace de noms .MA <strong>privilégie la confiance et la responsabilité</strong> sur l'anonymat. C'est pourquoi la protection WHOIS n'est pas autorisée par les politiques de l'ANRT."
              ]
            },
            {
              "question": "Comment puis-je vérifier la disponibilité d'un nom de domaine .MA ?",
              "answer": [
                "Vous pouvez facilement vérifier la disponibilité d'un nom de domaine .MA en utilisant une <strong>recherche WHOIS</strong> ou l'outil de recherche de tout registrar marocain accrédité. Si le domaine est libre, vous pouvez l'enregistrer immédiatement, à condition de soumettre vos documents et votre paiement.",
                "Si le nom apparaît indisponible, le résultat WHOIS indiquera qui le possède et quel fournisseur le gère. Cela aide les entreprises à <strong>vérifier les marques</strong>, à prévenir le cybersquatting et à évaluer une négociation s'ils souhaitent acquérir le domaine."
              ]
            },
            {
              "question": "Mon domaine .MA a expiré et le fournisseur est indisponible, que dois-je faire ?",
              "answer": [
                "Si votre registrar ne répond plus ou a cessé ses services, votre domaine est toujours <strong>enregistré auprès du Registre ANRT</strong>, et vous en restez le propriétaire légal tant qu'il n'a pas atteint le statut de suppression (deletion status). Vous pouvez demander une <strong>récupération ou un transfert de domaine</strong> par l'intermédiaire de n'importe quel autre registrar accrédité.",
                "Tant que le domaine est encore dans la période de grâce ou de rédemption, vous pouvez le restaurer en fournissant vos documents d'identité et en confirmant votre propriété. Le nouveau fournisseur vous aidera à <strong>reprendre le contrôle, à renouveler le domaine et à mettre à jour votre WHOIS</strong>."
              ]
            },
            {
              "question": "Je souhaite changer la propriété d'un domaine .MA, comment cela fonctionne-t-il ?",
              "answer": [
                "Changer la propriété d'un domaine .MA est traité comme un <strong>transfert légal de droits</strong>. Le titulaire actuel et le futur titulaire doivent tous deux fournir des documents d'identification ou d'entreprise valides via le registrar, qui les soumettra à l'ANRT pour vérification.",
                "Une fois que le registre approuve la demande, les données de contact WHOIS sont mises à jour et le nouveau propriétaire devient <strong>entièrement responsable</strong> du domaine conformément à la réglementation marocaine. Cela garantit des transferts sûrs et transparents sans litiges."
              ]
            },
            {
              "question": "Est-il autorisé de vendre ou revendre des noms de domaine .MA ?",
              "answer": [
                "Non — le commerce de noms de domaine .MA à des fins lucratives (<strong>revente de domaine ou activité spéculative</strong>) n'est <strong>pas autorisé</strong> par l'ANRT. Un domaine .MA doit rester lié à une <strong>identité réelle et justifiée</strong> ou à une activité commerciale, et ne peut être traité comme un produit commercial destiné à la vente aux enchères ou à la revente.",
                "Les transferts de propriété ne sont autorisés que dans des <strong>cas légitimes</strong> tels que l'acquisition d'entreprise, le changement de marque ou le transfert de droits de projet. Dans tous les cas, le nouveau titulaire doit fournir une identification valide et l'ANRT doit approuver le transfert avant qu'il ne devienne officiel.",
                "Cette règle protège les entreprises et les titulaires de marques au Maroc en empêchant le cybersquatting, les faux marchés de domaines et l'accumulation spéculative de noms de domaine. Toute tentative de vendre un domaine .MA en dehors du processus réglementé peut entraîner un litige, une suspension ou la <strong>suppression du domaine par le registre</strong>."
              ]
            },
            {
              "question": "Y a-t-il des termes restreints ou réservés pour les domaines .MA ?",
              "answer": [
                "Oui — certains mots-clés sont considérés comme <strong>réglementés ou réservés</strong> au Maroc. Cela inclut les noms de villes, les termes liés au gouvernement, les institutions nationales et certains secteurs sensibles. L'enregistrement de tels domaines peut nécessiter une <strong>autorisation ou des documents justificatifs</strong>.",
                "Si votre domaine demandé inclut un terme protégé, l'ANRT peut placer le domaine en <strong>Pending Create</strong> et exiger une preuve justificative. Votre registrar vous guidera tout au long du processus d'approbation et, s'il est accepté, le domaine sera activé normalement."
              ]
            }
          ]
    }
};

export const frAPropos = {
    Hero: {
        title: "À propos"
    },
    About: {
        title: "À propos de Whois Maroc",
        paragraphs: [
            "WhoisMaroc est une plateforme développée par la <span class=\"font-bold\">société Hostino</span>, spécialisée dans les solutions d'hébergement web, la gestion de noms de domaine et les services numériques au Maroc. À travers cette plateforme, Hostino met à disposition un outil simple, rapide et fiable permettant de consulter les informations et la disponibilité des noms de domaine .MA.",
            "Hostino s'engage depuis ses débuts à offrir des services performants, sécurisés et adaptés aux besoins des professionnels comme des particuliers. Notre expertise technique, associée à <span class=\"font-bold\">une volonté constante d'innovation</span>, nous permet de proposer des solutions digitales modernes et accessibles.",
            "Avec WhoisMaroc et l'ensemble de nos services, notre objectif est de faciliter l'accès aux outils numériques, d'accompagner nos clients dans leur croissance et de garantir une expérience utilisateur fluide, transparente et de haute qualité."
        ],
        image: {
            src: "/anrt.png",
            alt: "anrt logo"
        },
        companyInfo: {
            title: "Hostino SARL AU",
            address: {
                label: "Adresse du siège",
                value: "T100 Technopark, Tanger"
            },
            director: {
                label: "Directeur général",
                value: "Aniss KIASSI"
            },
            email: {
                label: "E-mail",
                value: "info@hostino.com"
            },
            website: {
                label: "Site web",
                value: "https://www.hostino.ma",
                display: "www.hostino.ma"
            }
        },
        legalInfo: {
            rc: { label: "R.C", value: "123893" },
            patente: { label: "Patente", value: "50412781" },
            if: { label: "I.F", value: "51707097" },
            rib: { label: "R.I.B", value: ["164 640 21211", "52330320002 28"] },
            ice: { label: "ICE", value: "002984236000036" }
        },
        accreditation: {
            title: "Accréditation ANRT",
            number: "N°ANRT \\ SVA \\ «.ma» \\ 119 \\ 2022"
        },
        legalNotice: "Toutes les informations sur ce site Internet sont en conformité avec la loi Marocaine et internationale.",
		contact: {
			title: "Coordonnées",
			email: {
				label: "E-mail :",
				value: "info@hostino.com"
			},
			website: {
				label: "Site web :",
				value: "https://www.hostino.ma"
			}
		}
	}
};

export const frWHMCS = {
	Hero: {
		title: "Module WHMCS EPP <br/> Domaines .MA"
	},
	WhmcsInfo: {
		title: "Module WHMCS EPP pour le .MA (ANRT)",
		paragraphs: [
			"Le module WHMCS pour le .MA permet de gérer automatiquement les noms de domaine .MA via le SRS de l'ANRT : enregistrement, renouvellement, transfert et mise à jour des informations.",
			"Nous prenons en charge l'installation et le paramétrage complet du module, incluant la <strong> configuration des accès SRS </strong> , les tâches automatiques et les réglages spécifiques à l'extension .MA. Notre solution est <strong> déjà adoptée par plusieurs prestataires agréés de l'ANRT </strong>, garantissant une intégration fiable et éprouvée. Grâce à cette expérience, nous sommes prêts à assurer une mise en service rapide et conforme – y compris pour les nouveaux prestataires de l'ANRT.",
			"Appelez le +212 663 75 09 08 et commandez dès maintenant le module EPP WHMCS pour les domaines .MA."
		],
		button: {
			text: "Contactez-nous",
			href: "https://www.hostino.ma/contact/"
		},
		image: {
			src: "/ma-epp-whmcs-module.jpg",
			alt: "module WHMCS EPP"
		}
	},
	WhmcsInfoMa: {
		title: "Module Registrar (ANRT) WHMCS pour l'Extension .MA",
		paragraphs: [
			"Le module WHMCS EPP pour les domaines .MA (ANRT) permet aux registraires et prestataires de services d'automatiser entièrement la gestion des noms de domaine .MA au sein de leur plateforme WHMCS. Grâce à une intégration native du protocole EPP utilisé par l'ANRT, il assure une communication fiable, sécurisée et conforme aux exigences techniques du registre marocain. Ce module simplifie la gestion opérationnelle tout en garantissant une qualité de service optimale pour les utilisateurs finaux.",
			"L'une des nouveautés majeures introduites par l'ANRT est l'ajout du champ obligatoire NID (National ID), désormais requis lors des opérations d'enregistrement, de transfert ou de mise à jour de contacts. Le module intègre pleinement cette exigence : il vérifie la présence du NID, empêche les commandes incomplètes et transmet correctement la donnée au registre via les commandes EPP dédiées. Cette conformité native évite les erreurs de provisioning et garantit que toutes les opérations respectent les règles du registre .MA.",
			"Le module inclut également une fonction de synchronisation à la demande via le SRS de l'ANRT. À tout moment, l'administrateur peut déclencher une requête pour récupérer l'état réel des domaines : dates d'expiration, statuts, verrous EPP, suspensions éventuelles, ou encore renouvellements effectués directement depuis le registre. Cette synchronisation manuelle garantit un alignement parfait entre WHMCS et le registre, évitant les divergences de données sans dépendre d'un cycle automatique journalier.",
			"En plus de cette synchronisation flexible, le module prend en charge toutes les opérations EPP essentielles : création et mise à jour des contacts, enregistrement de domaines, transferts avec auth-code, modifications de serveurs DNS, verrouillage/déverrouillage EPP et suppressions programmées. L'ensemble des actions est exécuté en temps réel, avec un retour d'information clair dans WHMCS, renforçant l'efficacité opérationnelle pour le prestataire."
		]
	},

    FAQ: {
		title: "FAQ - WHMCS EPP Module<br/> for .MA Domains",
		faqs: [
            {
              "question": "Qu'est-ce que le Module EPP WHMCS pour les domaines .MA ?",
              "answer": [
                "C'est un module qui connecte votre plateforme WHMCS directement au <strong>registre EPP de l'ANRT</strong> afin que vous puissiez automatiser l'enregistrement, le renouvellement, le transfert et la gestion de <a href='/fr/nom-domaine-maroc/' class='underline'>nom de domaine .MA</a> sans intervention manuelle."
              ]
            },
            {
              "question": "Pourquoi ai-je besoin de ce module pour mon activité de domaine .MA ?",
              "answer": [
                "Parce que l'extension .MA est gérée par l'ANRT et requiert une communication basée sur le <strong>protocole EPP (Extensible Provisioning Protocol)</strong>. Ce module permet aux registrars ou aux revendeurs d'offrir les domaines .MA de manière transparente au sein de WHMCS, tout comme les extensions génériques (<strong>.com</strong>, <strong>.net</strong>)."
              ]
            },
            {
              "question": "Quelles fonctionnalités le module prend-il en charge ?",
              "answer": [
                "Le module prend en charge toutes les opérations essentielles requises pour gérer efficacement les domaines .MA dans le système de registre marocain.",
                "Cela inclut l'enregistrement de nouveaux domaines, le renouvellement de ceux existants, et la gestion des mises à jour administratives ou techniques tout au long du cycle de vie du domaine.",
                "Il permet également la création et la gestion des contacts de domaine, les transferts sécurisés à l'aide des codes d'autorisation, et les modifications de DNS ou de serveurs de noms en temps réel. Ces opérations sont entièrement alignées sur les règles de l'ANRT pour garantir une expérience de gestion fluide pour les titulaires et les revendeurs.",
                "De plus, le module assure une <strong>synchronisation automatique</strong> avec le registre .MA, y compris le <strong>champ NID</strong> – un identifiant obligatoire introduit par l'ANRT pour chaque domaine."
              ]
            },
            {
              "question": "Le module est-il conforme aux exigences de l'ANRT ?",
              "answer": [
                "Oui — un module EPP correctement développé respecte les <strong>politiques EPP de l'ANRT</strong>, assure une communication sécurisée et prend en charge les dernières règles .MA telles que la <strong>validation de l'identité du propriétaire</strong> ou les champs de contact obligatoires."
              ]
            },
            {
              "question": "Qui peut utiliser un Module EPP .MA dans WHMCS ?",
              "answer": [
                "Seuls les <strong>registrars officiellement accrédités par l'ANRT</strong> peuvent se connecter directement au registre en utilisant le protocole EPP."
              ]
            }
          ]
	}
};

export const frTermesReserves = {
	Hero: {
		title: "Termes réservés"
	},
	ReservedTermsInfo: {
		title: "Termes réservés pour<br/> les noms de domaine .ma",
		paragraphs: [
			"Les termes réservés pour les noms de domaine .ma constituent une liste de mots et d'expressions protégés par l'ANRT afin d'assurer l'intérêt public et d'éviter un usage abusif ou trompeur. Ces termes sont généralement liés aux institutions nationales, aux fonctions officielles, aux collectivités territoriales ou aux services publics. L'objectif est de garantir <strong>un usage conforme</strong> de ces dénominations sensibles.",
			"Certaines catégories de termes sont automatiquement protégées en raison de leur sensibilité ou de leur importance réglementaire. Il s'agit notamment des noms d'institutions de l'État, des <strong>dénominations des autorités administratives</strong>, des titres officiels, ou de tout terme qui pourrait faussement représenter une activité réglementée. L'objectif est de préserver l'intégrité de l'espace de noms .ma.",
			"L'enregistrement d'un domaine avec un terme réservé n'est possible que sous des conditions strictes, nécessitant des justifications officielles. L'ANRT vérifie systématiquement si le demandeur est autorisé à utiliser le terme. Cela peut impliquer des documents juridiques, des autorisations administratives ou des preuves d'usage légitime. Sans ces éléments, la demande sera refusée afin de <strong>protéger les droits et l'ordre public</strong>."
		]
	}
};

export const frDomain = {
	DomainAvailable: {
		lang: "fr",
		hero: {
			congratulations: "Félicitations!",
			available: "est disponible!",
			price: "1 an à",
			priceAmount: "118.00 MAD",
			dnsFree: "+ DNS Gratuit",
			addToCart: "Ajouter au panier"
		},
		whoisInfo: {
			title: "Informations Whois sur le domaine",
			sections: {
				domain: {
					title: "Information sur le domaine",
					labels: {
						domainName: "Nom de domaine",
						status: "Statut du domaine"
					},
					statusAvailable: "Disponible"
				},
				registrar: {
					title: "Information sur le registraire",
					labels: {
						registrar: "Registraire",
						creationDate: "Date de création",
						expiryDate: "Date d'expiration",
						lastUpdate: "Dernière mise à jour"
					}
				},
				registrant: {
					title: "Information sur le titulaire",
					labels: {
						registrant: "Titulaire"
					}
				},
				contact: {
					title: "Information sur le contact",
					labels: {
						admin: "Contact administratif",
						tech: "Contact technique"
					}
				},
				nameServers: {
					title: "Serveurs de noms"
				}
			},
			notAvailable: "N/A",
			newSearch: "Nouvelle recherche"
		}
	},
	DomainUnavailable: {
		lang: "fr",
		hero: {
			title: "Le domaine",
			registered: "est déjà enregistré"
		},
		whoisInfo: {
			title: "Informations Whois sur le domaine",
			sections: {
				domain: {
					title: "Information sur le domaine",
					labels: {
						domainName: "Nom de domaine",
						status: "Statut du domaine"
					}
				},
				registrar: {
					title: "Information sur le registraire",
					labels: {
						registrar: "Registraire",
						creationDate: "Date de création",
						expiryDate: "Date d'expiration",
						lastUpdate: "Dernière mise à jour"
					}
				},
				registrant: {
					title: "Information sur le titulaire",
					labels: {
						registrant: "Titulaire"
					}
				},
				contact: {
					title: "Information sur le contact",
					labels: {
						admin: "Contact administratif",
						tech: "Contact technique"
					}
				},
				nameServers: {
					title: "Serveurs de noms"
				}
			},
			notAvailable: "N/A",
			noData: "N/A",
			newSearch: "Nouvelle recherche"
		}
	},
	error: {
		fetchError: "Une erreur est survenue lors de la récupération des données du domaine."
	}
};

export const frHeader = {
	menu: "Menu",
    logo: {
        href: '/fr/',
        alt: "WHOIS Maroc Logo"
    },
    buttonMaDomain: {
        href: '/fr/nom-domaine-maroc',
        label: 'Acheter un .MA'
    }
};

export const frFooter = {
    logo: {
        href: '/fr/',
        alt: "WHOIS Maroc Logo"
    },
	description: "Service de répertoire en ligne basé sur la base de données du registre .ma qui permet de rechercher des renseignements sur les noms de domaine.",
	sections: {
		pages: {
			title: "Pages",
			links: [
				{ href: '/fr/', label: 'Accueil' },
				{ href: '/fr/nom-domaine-maroc/', label: 'Nom de domaine .MA' },
				{ href: '/fr/a-propos/', label: 'À propos' }
			]
		},
		contact: {
			title: "Contact",
			email: "info(at)hostino.com",
			phone: "+212 663 75 09 08",
			location: "Technopark, Maroc"
		},
		usefulLinks: {
			title: "Liens utiles",
			links: [
				{ href: '/fr/', label: 'Whois Maroc' },
				{ href: '/fr/nom-domaine-maroc/', label: 'Enregistrer un domaine .MA' },
				{ href: '/fr/a-propos/', label: 'Qui sommes-nous' },
                { href: '/fr/contact/', label: 'Contact' }
			]
		}
	},
	copyright: `© ${new Date().getFullYear()} WHOIS Maroc. Tous droits réservés.`,
	legal: {
		legalNotice: {href: "/fr/mentions-legales/", label: "Mentions légales"},
		privacyPolicy: {href: "/fr/conditions-generales/", label: "Politique de confidentialité"}
	}
};

export const frConditionsGenerales = {
    Hero: {
        title: "Conditions générales"
    },
    Terms :{
        mainTitle: "Conditions générales d'utilisation",
        mainParagraph:["Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») encadrent l'accès et l'utilisation du site whoisma.com, exploité par la société Hostino. En utilisant ce site, vous acceptez pleinement les présentes CGU."],
        paragraphsAndSubtitles: [{
            subtitle: "1. Objet du site",
            paragraphs: ["Le site whoisma.com fournit des services liés aux noms de domaine, notamment la consultation d'informations publiques (WHOIS), l'accès à des outils techniques, et la mise à disposition de modules ou solutions de gestion de domaines."]
        },
        {
            subtitle: "2. Accès au site",
            paragraphs: ["L'accès au site est libre. Certaines fonctionnalités peuvent toutefois nécessiter la création d'un compte client ou une autorisation spécifique. Hostino se réserve le droit de modifier, suspendre ou interrompre tout ou partie du site à tout moment."]
        },
        {
            subtitle: "3. Utilisation du WHOIS",
            paragraphs: ["L'utilisation de la base de données WHOIS est limitée à la recherche d'informations sur les noms de domaine « .ma », les noms de serveurs et les personnes contact. Elle ne peut être effectuée que dans le cadre de l'enregistrement d'un nom de domaine, de la mise à jour des informations associées, ou pour un besoin de vérification visant à résoudre des problèmes techniques ou administratifs liés aux noms de domaine et à leurs titulaires.",
                "La base de données WHOIS est maintenue à jour par les prestataires agréés, chaque fois qu'une modification des données leur est communiquée par le titulaire.",
                "<div class=\"mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded\"><strong>⚠ Important :</strong> Tout usage abusif du WHOIS ou des données d'identification qui y sont publiées engage la responsabilité de la ou des personnes concernées. L'utilisation des données WHOIS à des fins de prospection, d'extraction massive, de spam ou de toute activité non autorisée est strictement interdite.</div>"
            ],
        },
        {
            subtitle: "4. Utilisation du site",
            paragraphs: ["L'utilisateur s'engage à utiliser le site conformément aux lois en vigueur et à ne pas en faire un usage abusif. Toute tentative d'extraction automatisée de données, de contournement de sécurité ou d'utilisation malveillante pourra entraîner une suspension ou une interdiction d'accès."]
        },
        {
            subtitle: "5. Données et confidentialité",
            paragraphs: ["Certaines informations peuvent être collectées dans le cadre de l'utilisation du site (formulaires, inscriptions, actions techniques). Hostino s'engage à respecter la confidentialité des données conformément à sa politique interne et à la réglementation applicable."],
        },
        {
            subtitle: "6. Propriété intellectuelle",
            paragraphs: ["L'ensemble des contenus présents sur whoisma.com (textes, logos, outils, modules, éléments graphiques) est la propriété exclusive d'Hostino ou de ses partenaires. Toute reproduction, distribution ou utilisation non autorisée est strictement interdite."]
        },
        {
            subtitle: "7. Responsabilité",
            paragraphs: ["Hostino met tout en œuvre pour garantir la disponibilité du site et l'exactitude des informations, sans pour autant offrir de garantie absolue. Hostino ne peut être tenu responsable en cas d'indisponibilité, de perte de données, d'erreur technique ou de dommages indirects."]
        },
        {
            subtitle: "8. Modification des conditions générales",
            paragraphs: ["Hostino se réserve le droit de modifier à tout moment les présentes CGU. Les versions actualisées seront publiées sur le site et applicables immédiatement."]
        },
        {
            subtitle: "9. Contact",
            paragraphs: ["Pour toute question relative aux présentes conditions :",
                '<p class="mt-4"><strong>Hostino – Service Support</strong></p><p class="mt-2">Email : <a href="mailto:support@whoisma.com" class="text-(--color-primary) underline hover:text-(--color-secondary)">support@whoisma.com</a></p>',
            ]
        }
        
    ]
    }

};

export const fr404 = {
    message: "Cette page est introuvable.",
    buttonText: "Retour à l'accueil"
};

export const frMentionsLegales = {
    information: {
        title: "Mentions légales",
        paragraphs: [
            "Dans cet espace, l'utilisateur peut consulter toutes les informations relatives aux mentions légales encadrant l'utilisation du site Hostino.<strong> Il est essentiel, en tant qu'utilisateur, de prendre connaissance de ces mentions avant de poursuivre la navigation.</strong>"
        ],
        image: {
            src: "/anrt.png",
            alt: "anrt logo"
        },
        companyInfo: {
            title: "Hostino SARL AU",
            address: {
                label: "Adresse du siège",
                value: "T100 Technopark, Tanger"
            },
            director: {
                label: "Directeur général",
                value: "Aniss KIASSI"
            },
            email: {
                label: "E-mail",
                value: "info@hostino.com"
            },
            website: {
                label: "Site web",
                value: "https://www.hostino.ma",
                display: "www.hostino.ma"
            }
        },
        legalInfo: {
            rc: { label: "R.C", value: "123893" },
            patente: { label: "Patente", value: "50412781" },
            if: { label: "I.F", value: "51707097" },
            rib: { label: "R.I.B", value: ["164 640 21211", "52330320002 28"] },
            ice: { label: "ICE", value: "002984236000036" }
        },
        accreditation: {
            title: "Accréditation ANRT",
            number: "N°ANRT \\ SVA \\ «.ma» \\ 119 \\ 2022"
        },
        legalNotice: "Toutes les informations sur ce site Internet sont en conformité avec la loi Marocaine et internationale.",
		contact: {
			title: "Coordonnées",
			email: {
				label: "E-mail :",
				value: "info@hostino.com"
			},
			website: {
				label: "Site web :",
				value: "https://www.hostino.ma"
			}
		}
	}
};

export const frContact = {
    title: "Contacter un conseiller Hostino™",
    description: "L'équipe Hostino se met à votre disposition pour répondre à toutes vos questions.",
    phone: {
        label: "Des questions ?",
        value: "+212 05 31 03 11 86"
    },
    whatsapp: {
        label: "WhatsApp",
        value: "+212 663 75 09 08"
    },
    email: {
        label: "Consultation par email ?",
        value: "info@hostino.com"
    },
    privacyPolicyUrl: {
        href: "/fr/conditions-generales",
        linkText: "Politique de confidentialité",
        label: 'En cliquant sur "Envoyer", vous acceptez notre'
    },
    formFields: {
        name: {
            label: "Nom et prénom",
            placeholder: "Votre nom complet"
        },
        company: {
            label: "Entreprise",
            placeholder: "Nom de votre entreprise"
        },
        phone: {
            label: "Téléphone",
            placeholder: "Votre numéro de téléphone"
        },
        email: {
            label: "E-mail",
            placeholder: "votre@email.com"
        },
        message: {
            label: "Message",
            placeholder: "Votre message..."
        },
        submit: {
            label: "Envoyer"
        },
    }
}
