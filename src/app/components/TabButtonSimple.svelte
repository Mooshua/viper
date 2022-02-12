<script>
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

<button on:click on:mouseover={MouseEnter} on:focus={MouseEnter} on:mouseleave={MouseLeave}> 
    <img class="h-6 w-6 my-5 mx-1" src="{Icon}">
</button>