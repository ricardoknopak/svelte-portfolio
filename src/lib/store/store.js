import { writable } from 'svelte/store';

const themes = [
    {
        "theme": "yellow",
        "startColorRgb": "#FFF",
        "endColorRgb": "#FACC14"
    },
    {
        "theme": "orange",
        "startColorRgb": "#FFF",
        "endColorRgb": "#F97316"
    },
    {
        "theme": "pink",
        "startColorRgb": "#FFF",
        "endColorRgb": "#bc13fe"
    },
    {
        "theme": "rose",
        "startColorRgb": "#FFF",
        "endColorRgb": "#F43F5E"
    },
    {
        "theme": "blue",
        "startColorRgb": "#FFF",
        "endColorRgb": "#3B82F6"
    },
    {
        "theme":"emerald",
        "startColorRgb": '#fff',
        "endColorRgb": '#10B981'
    },
    {
        "theme": "off",
        "startColorRgb": "#fff",
        "endColorRgb": "#000000"
    }
]

export const profile = writable({
    "black": "#000000",
    "white": "#FFFFFF",
    "startColorRgb": "#FFF",
    "endColorRgb": "#3B82F6"
});
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