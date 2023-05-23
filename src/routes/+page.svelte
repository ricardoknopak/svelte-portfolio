<script>
	import Screen from "$lib/components/screen.svelte"
	import Intro from "$lib/components/intro.svelte"
	import About from "$lib/components/about.svelte"
	import Projects from "$lib/components/projects.svelte"
	import Contact from "$lib/components/contact.svelte"
	import SchemaButton from "$lib/components/schema_button.svelte"
</script>

<SchemaButton />
<Screen schema = "primary">
	<Intro />
</Screen>
<Screen>
	<About />
</Screen>
<Screen schema = "primary">
	<Projects />
</Screen>
<Screen>
	<Contact />
</Screen>