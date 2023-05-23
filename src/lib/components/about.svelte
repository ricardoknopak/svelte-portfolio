<script>
    import { onDestroy } from 'svelte';
	import { profile } from '../store/store.js';
    
    let initialColor
    let endColor
    let gradientText
    let paragraph
    const unsubscribe = profile.subscribe(value => {
        gradientText = `
            background: ${ value.endColorRgb };
            background: linear-gradient(to right, ${ value.endColorRgb } 0%, #000000 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        `
        paragraph = `
            font-size: 4.5rem;
            line-height: 1;
            font-weight: 700;
            color: ${ value.endColorRgb };
            margin-right: 1rem;
            float: left;
        `
	})
	onDestroy(unsubscribe)
</script>

<section id="about" class="w-6/12">
    <p class="text-lg leading-8 text-justify">
        <strong style={paragraph} >P</strong>
        <strong style={ gradientText }>rogramador de computadores,</strong>
        de sistemas, developer, não importa, se tiver 
        <strong style={ gradientText }>código eu gosto.</strong> Gosto muito de 
        interagir com pessoas, 
        <strong style={ gradientText }>trabalhar junto, barulho de gente,</strong>
        mas se tiver programação... 
        <strong style={ gradientText }>com programação brilha!</strong><br/>
        Para ter uma idéia, gosto tanto de pessoas e de programação, claro, que 
        <strong style={ gradientText }>minha profissão é resolver problemas de gente com código e computador,</strong> veja só!<br/>
        Sou organizado, analítico e nada, nada, me tira a concentração quando estou programando. Mas quando não estou, ah, daí a
        coisa muda, melhor nem comentar, 
        <strong style={ gradientText }>mas chego no horário e quase sempre lembro de levar tudo que preciso. Ou não lembro de
        que precisava algo que esqueci.</strong><br/>
        <em>Mas acaba sendo assim com todo mundo, não é?!</em>
    </p>
</section>

<style />