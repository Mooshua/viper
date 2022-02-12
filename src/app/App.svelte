<script>


    import "./main.css"
	export let name = "world"

    import {Close} from "./handlers/base"

    import PlayButton from "./components/PlayButton.svelte";
    import TabButtonSimple from "./components/TabButtonSimple.svelte"
    import TabButton from "./components/TabButton.svelte";

    import GamePage from "./pages/GamePage.svelte"

    let Page = "Northstar"
    let Pages = {
        Northstar: GamePage
    }

    let Props = {
        Northstar: {
            Color: "bg-orange-500"
        }
    }

</script>

<div class="w-screen h-screen overflow-hidden bg-transparent">
    <img class="absolute w-full h-full rounded-2xl" src="../assets/bg/northstar.jpg">
    <div class="absolute z-10 flex flex-col justify-between h-screen overflow-hidden">
        <div class="w-screen  h-16 rounded-t-2xl border-opacity-90 flex justify-between">
            <div class="h-16 ml-8">
                <TabButton Icon="icons/northstar.png" />
                <TabButton Icon="icons/titanfall2.png" IsSelected={true} />

            </div>
            <div class="h-16 mr-5">
                <TabButtonSimple Icon="icons/minimize.png"/>
                <TabButtonSimple Icon="icons/close.png" on:click={Close}/>
            </div>
        </div>
        <div class="h-full">
            <svelte:component this={Pages[Page]} {...Props[Page]}/>
        </div>
    </div>
</div>