<script>
	import { onDestroy } from 'svelte';
	import { profile } from '../store/store.js';
	
	export let schema = 'secondary'
	let bgcolor	
	const unsubscribe = profile.subscribe(value => {
		bgcolor = 'background-color: '
		bgcolor += schema == 'primary' ? value.primary_bg_color : value.secondary_bg_color
	});
	onDestroy(unsubscribe);
</script>

<div class="flex items-center justify-center min-h-screen min-w-screen" style={ bgcolor }>
	<slot />
</div>