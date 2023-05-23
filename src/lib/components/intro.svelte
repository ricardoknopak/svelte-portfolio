<script>
	import { onDestroy } from 'svelte';
    import { profile } from '../store/store.js';
    
    let initial_color
    let end_color
    
    const unsubscribe = profile.subscribe(value => {
        initial_color = value.startColorRgb
        end_color = value.endColorRgb
	})
	onDestroy(unsubscribe)
</script>

<section id="intro" class="flex flex-col items-center">
    <div class="mx-auto mb-8 ">
        <h1 id="mynameis" class="pb-12 font-medium text-center text-8xl"
	        style="font-family: 'Helvetica Neue', sans-serif; text-shadow: 4px 6px 0px #000000; color: #fff; text-shadow:0 0 7px { initial_color }, 0 0 10px { initial_color }, 0 0 21px { initial_color }, 0 0 42px { end_color }, 0 0 82px { end_color }, 0 0 92px { end_color }, 0 0 102px { end_color }, 0 0 151px { end_color }">
            Ricardo Knopak
        </h1>
        <h2 class="text-5xl font-bold text-center"
	        style="font-family: 'Helvetica Neue', sans-serif; text-shadow: 4px 6px 0px #000000; color: #fff; text-shadow:0 0 7px { initial_color }, 0 0 10px { initial_color }, 0 0 21px { initial_color }, 0 0 42px { end_color }, 0 0 82px { end_color }, 0 0 92px { end_color }, 0 0 102px { end_color }, 0 0 151px { end_color }">
            Desenvolvedor de Sistemas
        </h2>
        <h2 class="text-5xl font-bold text-center"
	        style="font-family: 'Helvetica Neue', sans-serif; text-shadow: 4px 6px 0px #000000; color: #fff; text-shadow:0 0 7px { initial_color }, 0 0 10px { initial_color }, 0 0 21px { initial_color }, 0 0 42px { end_color }, 0 0 82px { end_color }, 0 0 92px { end_color }, 0 0 102px { end_color }, 0 0 151px { end_color }">
            Web Developer
        </h2>
    </div>
</section>