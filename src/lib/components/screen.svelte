<script>
	import { profile } from '../store/store.js';
	
	export let schema = 'white'
	let bgcolor	= schema == 'white' ? $profile.white : $profile.black
</script>

<div class="flex items-center justify-center min-h-screen min-w-screen" style:background={ bgcolor }>
	<slot />
</div>