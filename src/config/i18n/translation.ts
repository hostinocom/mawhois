import type { Language } from "../type";

const globalLanguages: Language[] = ["fr", "en"];

export const navItems= [
    { fr: { href: '/fr/', label: 'Accueil' }, en: { href: '/', label: 'Home' } },
    { fr: { href: '/fr/a-propos', label: 'À propos' }, en: { href: '/about-us', label: 'About' } },
    { fr: { href: '/fr/nom-domaine-maroc', label: 'Acheter un .MA' }, en: { href: '/ma-domain-name', label: 'Buy a .MA' } },
    { fr: { href: '/fr/termes-reserves', label: 'Termes réservés' }, en: { href: '/reserved-terms', label: 'Reserved terms' } },
    { fr: { href: '/fr/whmcs-ma-anrt', label: 'WHMCS' }, en: { href: '/whmcs-ma-anrt', label: 'WHMCS' } }
]

export function selectLanguage (currentLang: Language, currentPath: string){
    const currentLangItem = navItems.find(item => item[currentLang].href === currentPath);
    let otherLangs = globalLanguages.filter(lang => lang !== currentLang);
    const otherLangItem = otherLangs.map(item =>{ return{language:item, href: currentLangItem?.[item as Language]?.href};});
    return {
        currentLangLabel: currentLang,
        switchTo: otherLangItem
    }
}