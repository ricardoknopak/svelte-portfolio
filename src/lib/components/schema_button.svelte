<script>
	import { changeTheme, password, setPassword } from '$lib/store/store.js';
    function switchTheme ( newColor, code ) {
        changeTheme( newColor )
        setPassword( code )
        console.log('password', $password)
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="fixed right-8 top-2/4 -translate-y-2/4">
    <div class="w-6 h-6 mx-3 my-2 bg-red-500 border-2 rounded-full border-slate-500" on:click={ () => switchTheme("red", 1) }></div>
    <div class="w-6 h-6 mx-3 my-2 bg-pink-500 border-2 rounded-full border-slate-500" on:click={ () => switchTheme("pink", 2) }></div>
    <div class="w-6 h-6 mx-3 my-2 bg-purple-500 border-2 rounded-full border-slate-500" on:click={ () => switchTheme("purple", 3) }></div>
    <div class="w-6 h-6 mx-3 my-2 border-2 rounded-full bg-blue-500 border-slate-500" on:click={ () => switchTheme("blue", 4) }></div>
    <div class="w-6 h-6 mx-3 my-2 bg-green-500 border-2 rounded-full border-slate-500" on:click={ () => switchTheme("green", 5) }></div>
    <div class="w-6 h-6 mx-3 my-2 border-2 rounded-full bg-yellow-500 border-slate-500" on:click={ () => switchTheme("yellow", 6) }></div>
    <div class="w-6 h-6 mx-3 my-2 border-2 rounded-full bg-slate-500 border-slate-500" on:click={ () => switchTheme("white", "C") }></div>
</div>