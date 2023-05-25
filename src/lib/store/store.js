import { writable } from 'svelte/store';

export const profile = writable({
    "primary_bg_color": "black",
    "secondary_bg_color": "white",
    "startColorRgb": "#FFF",
    "endColorRgb": "#3B82F6"
});
