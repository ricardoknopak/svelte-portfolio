<script>
	import "../app.css";
	import { shortcut } from '../lib/shortcut';
	import { onDestroy } from 'svelte';
	import { profile } from '../lib/store/store.js';
	import { EnvelopeSolid } from "svelte-awesome-icons";

	let color
	const unsubscribe = profile.subscribe(value => {
        color = value.endColorRgb
	})
	onDestroy(unsubscribe)
</script>

<div class="min-w-full min-h-full" use:shortcut={{control: true, alt: true, code: 'Digit2', callback: () => alert('Yupi!!')}}>
	<slot />
	<EnvelopeSolid color={ color } class="fixed w-8 text-teal-500 right-9 bottom-9 mix-blend-difference" />
</div>