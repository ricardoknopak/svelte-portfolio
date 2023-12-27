<script>
    import { afterUpdate } from 'svelte';
    import { Themes, projetos, profile } from '$lib/store/store.js'
    import {LinkSolid, GithubBrand } from "svelte-awesome-icons";

    let selectedProject = $projetos[0]

    function switchProject ( order ) {
        let project = $projetos.find(( selected ) => {
            return selected.order == order
        })
        selectedProject = project
        console.log('sp', selectedProject)
    }
</script>

<div class="flex flex-col justify-center items-center">
    <h1 class="text-gray-200 my-3 text-2xl">Projetos</h1>
    <div class="flex">

        <div id="col-1" class="flex flex-col min-w-max">
            <div class="min-h-[50px]"/>

            <!-- Info Projeto -->
            <div class="flex relative max-w-4xl pb-4">
                { #if selectedProject.order }
                <div class="flex flex-col mr-3 gap-3">
                        <ul>
                            <li class="text-white">{ selectedProject.name }</li>
                            <li class="text-white">{ selectedProject.description }</li>
                            <li class="text-white">
                                <div class="flex w-20 justify-between">
                                    <a href="{ selectedProject.link }">
                                        <LinkSolid color="{ $profile.neonGlow }" class="w-4" />
                                    </a>
                                    <a href="{ selectedProject.github }">
                                        <GithubBrand color="{ $profile.neonGlow }" class="w-4" />
                                    </a>
                                </div>
                            </li>
                            <li class="text-white">{ selectedProject.stack }</li>
                        </ul>
                        <!-- <button class="font-bold py-2 px-4 rounded border-2 border-blue-500 hover:border-blue-700 text-white">Info</button>
                        <button class="font-bold py-2 px-4 rounded border-2 border-orange-500 hover:border-orange-700 text-white">Demo</button> -->
                    </div>
                {/if}
            </div>
        </div>

        <div id="col-2" class="flex flex-col">
            <div class="min-w-min min-h-[50px] flex">
                {#each $projetos as projeto}
                    <div>
                         <button class="flex justify-center items-center m-1 font-medium py-2 px-3 rounded border-2 active:border-0"
                            style:border-color={$Themes[projeto.order].neon} style:color={$Themes[projeto.order].neon} 
                            on:click={ switchProject(projeto.order) }>
                            <span class="text-xs font-normal leading-none max-w-full flex-initial">{ projeto.name }</span>
                        </button>
                    </div>
                {/each}
            </div>
            <div style="width: 75vw; height: 75vh" class="border border-1 border-red-500 rounded-lg">
                <!-- <video class="border-1 border-black sm:border-3 rounded-lg sm:rounded-2xl w-full max-w-[920px] mb-2 sm:mb-4"
                    autoplay="true" loop="repeat" muted="" Crossorigin="anonymous">
                    <source src="https://livecycle.io/static/lc-new-video-376484781a58a77677b0156ef3b2b88b.mp4" type="video/mp4">
                        Your browser does not support the videos
                </video> -->
            </div>
        </div>
    </div>
</div>