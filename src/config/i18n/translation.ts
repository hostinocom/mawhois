import type { Language } from "../type";

const globalLanguages: Language[] = ["fr", "en"];

export const navItems= [
    { fr: { href: '/fr/', label: 'Accueil' }, en: { href: '/', label: 'Home' } },
    { fr: { href: '/fr/a-propos', label: 'À propos' }, en: { href: '/about', label: 'About' } },
    { fr: { href: '/fr/nom-de-domaine-maroc', label: 'Acheter un .MA' }, en: { href: '/buy-ma-domain', label: 'Buy a .MA' } },
    { fr: { href: '/fr/termes-reserves', label: 'Termes réservés' }, en: { href: '/reserved-terms', label: 'Reserved terms' } },
    { fr: { href: '/fr/WHMCS', label: 'WHMCS' }, en: { href: '/WHMCS', label: 'WHMCS' } }
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