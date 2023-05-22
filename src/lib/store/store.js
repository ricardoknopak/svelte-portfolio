import { writable } from 'svelte/store';

export const profile = writable({
    'primary_bg_color': 'black',
    'secondary_bg_color': 'white',
    'startColorRgb': '#fff',
    'endColorRgb': '#10B981',
    'startColorTailwind': 'emerald-500',
    'endColorTailwind': 'black'
});
