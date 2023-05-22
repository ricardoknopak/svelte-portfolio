<script>
    import { onDestroy } from 'svelte';
	import { profile } from '../store/store.js';
    
    let initialColor
    let endColor
    
    const unsubscribe = profile.subscribe(value => {
        initialColor = value.startColorTailwind
        endColor = value.endColorTailwind
	})
	onDestroy(unsubscribe)
</script>

 <!-- text-transparent font-bold bg-clip-text bg-gradient-to-r from-{ } to-lime-500 -->

<section id="about" class="w-6/12">
    <p class="text-lg leading-8 text-justify first-letter:text-7xl first-letter:font-bold first-letter:text-teal-500 first-letter:mr-4 first-letter:float-left">
        <strong class="font-color">Programador de computadores,</strong>
        de sistemas, developer, não importa, se tiver 
        <strong class="font-color">código eu gosto.</strong> Gosto muito de
        interagir com pessoas, 
        <strong class="font-color">trabalhar junto, barulho de gente,</strong>
        mas se tiver programação... 
        <strong class="font-color">com programação brilha!</strong><br/>
        Para ter uma idéia, gosto tanto de pessoas e de programação, claro, que 
        <strong class="font-color">minha profissão é resolver problemas de gente com código e computador,</strong>
        veja só!<br/>
        Sou organizado, analítico e nada, nada, me tira a concentração quando estou programando. Mas quando não estou, ah, daí a
        coisa muda, melhor nem comentar, 
        <strong class="font-color">mas chego no horário e quase sempre lembro de levar tudo que preciso. Ou não lembro de
        que precisava algo que esqueci.</strong><br/>
        <em>Mas acaba sendo assim com todo mundo, não é?!</em>
    </p>
</section>


<style>
    .font-color {
        @apply text-transparent font-bold bg-clip-text bg-gradient-to-r from-teal-500 to-lime-500;
    }
</style>