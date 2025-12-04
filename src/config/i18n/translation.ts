import type { Language } from "../type";

const globalLanguages: Language[] = ["fr", "en"];

function normalizePath(path: string, currentLang: Language): string {
    if (!path) return currentLang === "fr" ? "/fr/" : "/";
    if (path === '/') return path;
    return path.endsWith('/') ? path.slice(0, -1) : path;
}

export const navItemsHeader= [
    { fr: { href: '/fr/', label: 'Accueil' }, en: { href: '/', label: 'Home' } },
    { fr: { href: '/fr/a-propos', label: 'À propos' }, en: { href: '/about-us', label: 'About' } },
    { fr: { href: '/fr/termes-reserves', label: 'Termes réservés' }, en: { href: '/reserved-terms', label: 'Reserved terms' } },
    { fr: { href: '/fr/whmcs-ma-anrt', label: 'WHMCS' }, en: { href: '/whmcs-ma-anrt', label: 'WHMCS' } }
]

const pages = [
    { fr: '/fr/', en: '/' },
    { fr: '/fr/a-propos', en: '/about-us' },
    { fr: '/fr/nom-domaine-maroc', en: '/ma-domain-name' },
    { fr: '/fr/termes-reserves', en: '/reserved-terms' },
    { fr: '/fr/whmcs-ma-anrt', en: '/whmcs-ma-anrt' },
    { fr: '/fr/mentions-legales', en: '/legal-notice' },
    { fr: '/fr/conditions-generales', en: '/terms' },
    { fr: '/fr/contact', en: '/contact' },
]

export function selectLanguage (currentLang: Language, currentPath: string){
    currentPath = normalizePath(currentPath, currentLang);
    const currentLangItem = pages.find(item => item[currentLang] === currentPath);
    if(!currentLangItem){
        return {
            currentLangLabel: currentLang,
            switchTo: [{language: currentLang === "fr" ? "en" : "fr", href: currentLang === "fr" ? "/" : "/fr/"}]
        }
    }
    
    else{
        let otherLangs = globalLanguages.filter(lang => lang !== currentLang);
        const otherLangItem = otherLangs.map(item =>{ return{language:item, href: currentLangItem?.[item as Language]};});
        return {
            currentLangLabel: currentLang,
            switchTo: otherLangItem
        }
    }
}