import { writable } from 'svelte/store';

const themes = [
    {
        "theme": "red",
        "black": "#000000",
        "white": "#FFFFFF",
        "neon": "#FF5161",
        "neonGlow": "#D30302"
    },{
        "theme": "pink",
        "neon": "#FF53cd",
        "neonGlow": "#e10361"
    },{
        "theme": "purple",
        "neon": "#9461fd",
        "neonGlow": "#4003e6"
    },{
        "theme": "blue",
        "neon": "#2dd9fe",
        "neonGlow": "#00a3d5"
    },{
        "theme": "green",
        "neon": "#00fe9b",
        "neonGlow": "#02c435"
    },{
        "theme": "yellow",
        "neon": "#ffdb4e",
        "neonGlow": "#b48505"
    },{
        "theme": "white",
        "neon": "#fefefe",
        "neonGlow": "#ffffff"
    }
]
export const Themes = writable(themes)
export const profile = writable( themes[0]);

export const changeTheme = ( selectedTheme ) => {
    themes.forEach(theme => {
        if (theme.theme == selectedTheme) {
            profile.set(theme)
        }
    });
}

export const password = writable("");
export const setPassword = ( code ) => {
    if (code == "C") {
        password.set("")
    } else {
        password.update(n => n + String (code) )
    }
}
export const projetos = writable([
    {
        'order': 1,
        'name':'SveltePortfolio',
        'description': 'Home page / portifolio',
        'link': 'ricardok.com.br',
        'github': 'github.com/ricardoknopak/svelte-portfolio',
        'stack': [
            'sveltekit', 'supabase'
        ]
    },{
        'order': 2,
        'name': 'LinkShortner',
        'description': 'Encurtado de url com analytics',
        'link': 'linkshortner.ricardok.com.br',
        'github': 'github.com/ricardoknopak/link-shortner',
        'stack': [
            'deno', 'deno kv'
        ]
    },{
        'order': 3,
        'name': 'BookMa(r)ker',
        'description': 'Bookmarker mananger',
        'link': 'bookmarker.ricardok.com.br',
        'github': 'github.com/ricardoknopak/bookmarker',
        'stack': [
            'indefinida até o momento'
        ]
    }
])