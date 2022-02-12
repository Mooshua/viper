<script>
    import {fly} from "svelte/transition"

    export let Icon = ""
    export let IsSelected = false;

    let IsHovered = false;

    function MouseEnter() {
        IsHovered = true;
    }

    function MouseLeave() {
        IsHovered = false;
    }
</script>

<button on:click on:mouseover={MouseEnter} on:focus={MouseEnter} on:mouseleave={MouseLeave} class="h-full aspect-square relative overflow-hidden"> 
    <img class="absolute top-0 h-10 w-10 m-3" src="{Icon}">
    {#if IsHovered}
    <div in:fly={{y:24, duration:200}} out:fly={{y:24, duration:600}} class="absolute h-1.5 bottom-0 left-3 w-10 bg-white rounded-t-full" />
    {:else if IsSelected}
    <div class="absolute h-1 bottom-0 left-5 w-6 bg-white rounded-t-full" />
    {/if}
</button>