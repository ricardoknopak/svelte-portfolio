<script>
	import { changeTheme, password, setPassword } from '../store/store.js';
    function switchTheme ( newColor, code ) {
        changeTheme( newColor )
        setPassword( code )
        console.log('password', $password)
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="fixed right-8 top-2/4 -translate-y-2/4">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="w-6 h-6 mx-3 my-2 bg-yellow-400 border-2 rounded-full border-slate-500" on:click={ () => switchTheme("yellow", 1) }></div>
    <div class="w-6 h-6 mx-3 my-2 bg-orange-500 border-2 rounded-full border-slate-500" on:click={ () => switchTheme("orange", 2) }></div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="w-6 h-6 mx-3 my-2 bg-pink-500 border-2 rounded-full border-slate-500" on:click={ () => switchTheme("pink", 3) }></div>
    <div class="w-6 h-6 mx-3 my-2 border-2 rounded-full bg-rose-500 border-slate-500" on:click={ () => switchTheme("rose", 4) }></div>
    <div class="w-6 h-6 mx-3 my-2 bg-blue-500 border-2 rounded-full border-slate-500" on:click={ () => switchTheme("blue", 5) }></div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="w-6 h-6 mx-3 my-2 border-2 rounded-full bg-emerald-500 border-slate-500" on:click={ () => switchTheme("emerald", 6) }></div>
    <div class="w-6 h-6 mx-3 my-2 border-2 rounded-full bg-gray-500 border-slate-500" on:click={ () => switchTheme("off", "C") }></div>
</div>