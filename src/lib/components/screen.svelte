<script>
	import { onDestroy } from 'svelte';
	import { profile } from '../store/store.js';
	
	/**
	 * @type {string}
	 */
	export let schema = 'secondary'

	/**
	 * @type {string}
	 */
	let bgcolor;
	
	const unsubscribe = profile.subscribe(value => {
		bgcolor = schema == 'primary' ? value.primary_bg_color : value.secondary_bg_color
	});
	onDestroy(unsubscribe);
</script>

<div class="flex items-center justify-center min-h-screen bg-{ bgcolor } min-w-screen">
	<slot />
</div>