<script>

    import {Launch} from "../handlers/northstar"


    import PlayButton from "../components/PlayButton.svelte";

    export let Color = "bg-sky-blue"

</script>

<div class="w-screen h-full flex flex-col justify-between">
    <div>

    </div>
    <div class="w-screen px-12 py-6 flex justify-end backdrop-blur-lg backdrop-grayscale space-x-6 bg-opacity-80 bg-zinc-900 rounded-b-2xl">
        
        <button class="
        p-4 my-2 px-8 
        font-semibold text-lg text-white 
        bg-zinc-300 bg-opacity-30 
        rounded-lg
        hover:scale-110 hover:shadow-2xl transition duration-500">
            UPDATE 
        </button>
        <PlayButton Color={Color} on:click={Launch}/>
    </div>
</div>