<script>
	import "../app.css";
	import { shortcut } from '../lib/shortcut';
	import { profile, password } from '../lib/store/store.js';
	import { EnvelopeSolid, LitecoinSignSolid } from "svelte-awesome-icons";

	function showModal() {
		if($password != '654321') {
			console.log('wrong')
			return
		}
		const modal = document.querySelector("#login")
		modal.showModal()
	}

</script>

<div class="min-w-full min-h-full" use:shortcut={{control: true, alt: true, code: 'Digit2', callback: () => showModal()}}>
	<slot />
	<div>
		<EnvelopeSolid color={ $profile.endColorRgb } class="fixed w-8 text-teal-500 right-9 bottom-9 mix-blend-difference" />
	</div>
	<dialog id="login">
		Área secreta
	</dialog>
</div>