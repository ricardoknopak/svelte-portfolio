<script>
// @ts-nocheck

    import { onDestroy } from 'svelte';
	import { profile } from '../store/store.js';

    const themes = [
        {
            "theme": "yellow",
            "startColorRgb": "#FFF",
            "endColorRgb": "#FACC14",
            "startColorTailwind": "yellow-400",
            "endColorTailwind": "white"
        },
        {
            "theme": "orange",
            "startColorRgb": "#FFF",
            "endColorRgb": "#F97316",
            "startColorTailwind": "orange-500",
            "endColorTailwind": "white-500"
        },
        {
            "theme": "pink",
            "startColorRgb": "#FFF",
            "endColorRgb": "#bc13fe",
            "startColorTailwind": "pink-500",
            "endColorTailwind": "white-500"
        },
        {
            "theme": "rose",
            "startColorRgb": "#FFF",
            "endColorRgb": "#F43F5E",
            "startColorTailwind": "rose-500",
            "endColorTailwind": "white-500"
        },
        {
            "theme": "blue",
            "startColorRgb": "#FFF",
            "endColorRgb": "#3B82F6",
            "startColorTailwind": "blue-500",
            "endColorTailwind": "white-500"
        },
        {
            "theme":"emerald",
            "startColorRgb": '#fff',
            "endColorRgb": '#10B981',
            "startColorTailwind": 'emerald-500',
            "endColorTailwind": 'white-500'
        },
    ]

    let startColorTailwind, endColorTailwind, startColorRgb, endColorRgb 
    
    const unsubscribe = profile.subscribe(value => {
        startColorTailwind = value.startColorTailwind
        endColorTailwind = value.endColorTailwind
        startColorRgb = value.startColorRgb
        endColorRgb = value.endColorRgb
	})

    function switchTheme ( newColor ) {
        themes.forEach(tema => {
            if (tema.theme == newColor) {
                $profile.startColorTailwind = tema.startColorTailwind
                $profile.endColorTailwind = tema.endColorTailwind
                $profile.startColorRgb = tema.startColorRgb
                $profile.endColorRgb = tema.endColorRgb
            }
        });
    }

	onDestroy(unsubscribe)
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="fixed right-0 top-2/4">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="w-6 h-6 mx-3 my-1 bg-yellow-400 border-2 rounded-full border-slate-500" on:click={ () => switchTheme("yellow") }>
        <!-- #FACC14 -->
    </div>
    <div class="w-6 h-6 mx-3 my-1 bg-orange-500 border-2 rounded-full border-slate-500" on:click={ () => switchTheme("orange") }>
        <!-- #F97316 -->
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="w-6 h-6 mx-3 my-1 bg-pink-500 border-2 rounded-full border-slate-500" on:click={ () => switchTheme("pink") }>
        <!-- #bc13fe -->
    </div>
    <div class="w-6 h-6 mx-3 my-1 border-2 rounded-full bg-rose-500 border-slate-500" on:click={ () => switchTheme("rose") }>
        <!-- #F43F5E -->
    </div>
    <div class="w-6 h-6 mx-3 my-1 bg-blue-500 border-2 rounded-full border-slate-500" on:click={ () => switchTheme("blue") }>
        <!-- #3B82F6 -->
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="w-6 h-6 mx-3 my-1 border-2 rounded-full bg-emerald-500 border-slate-500" on:click={ () => switchTheme("emerald") }>
        <!-- #10B981 -->
    </div>
</div>
