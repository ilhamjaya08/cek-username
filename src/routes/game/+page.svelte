<script>
    import GameCarousel from "../../components/GameCarousel.svelte";
    import { Label, Select, Input, Button, GradientButton } from 'flowbite-svelte';
    import axios from "axios";

    const baseUrl = "https://cek-username.onrender.com/game/"
    let selected;
    let uid;
    let zoneId;

    let games = [
        { value: "freefire", name: "Garena Free Fire" },
        { value: "mobilelegends", name: "Mobile Legends:Bang Bang" },
        { value: "pubgm", name: "PUBG Mobile" },
        { value: "codm", name: "Call Of Duty Mobile" },
        { value: "genshinimpact", name: "Genshin Impact" },
        { value: "honkaistarrail", name: "Honkai Star Rail" },
        { value: "honkaiimpact", name: "Honkai Impact" },
        { value: "sausageman", name: "Sausage Man" },
        { value: "arenaofvalor", name: "Arena of Valor" },
        { value: "lolwildrift", name: "League of Legends:Wild Rift" },
        { value: "fcmobile", name: "EA FC Mobile" },
        { value: "clashroyale", name: "Clash Royale" },
        
    ]

    let zSelected;
    let zone = [
        { value: "os_asia", name: "Asia"},
        { value: "os_euro", name: "Europe"},
        { value: "os_usa", name: "America"},
        { value: "os_cht", name: "CH/TW/HK"}
   ]

    let res;
    let ping;
    let response
    async function fetchData() {
        if (selected === "freefire") {
         try {
            const startTime = Date.now();
            response = await axios
                            .get(baseUrl + "freefire?uid=" + uid);
            const endTime = Date.now();
            ping = endTime - startTime;
            res = JSON.stringify(response.data.data, null, 2);
            console.log(res)
         } catch (error) {
            alert(error)
            return error
         }
        }
    }
</script>

<svelte:head>
    <title>Game Nickname Validator</title>
</svelte:head>

<div class="relative w-4/4 h-64 overflow-hidden">
    <GameCarousel/>
</div>

<h1 class="text-xl font-extrabold mx-auto mt-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-sky-600 to-purple-700">
    Game Nickname Validator
</h1>

<div class="mx-auto mt-12">
    <Label class="mt-2">
        <span class="text-blue-700 font-bold">Game</span>
        <Select class="mt-2" placeholder="Select a game" items={games} bind:value={selected} />
    </Label>
    <Label class="mt-2">
        <span class="text-blue-700 font-bold">UID</span>
        <Input id="default-input" class="mt-2" placeholder="Your Game UID" bind:value={uid} />
    </Label>
    {#if selected === "mobilelegends"}
    <Label class="mt-2">
      <span class="text-blue-700 font-bold">Zone ID</span>
      <Input id="default-input" class="mt-2" placeholder="Your Zone ID" bind:value={zoneId} />
    </Label>
    {/if}
    {#if selected === "genshinimpact" || selected === "honkaistarrail"}
    <Label class="mt-2">
        <span class="text-blue-700 font-bold">Zone</span>
        <Select class="mt-2" placeholder="Select your zone id" items={zone} bind:value={zSelected} />
    </Label>
    {/if}
    <Button on:click={() => fetchData()} class="mt-4 w-1/2 mx-auto" color="blue">Submit</Button>
    
</div>

{#if res}
    <div class="mx-auto mt-4 text-sm">
        <Label class="mt-2">
            <span class="text-blue-700 font-bold">Result:</span>
            <br>
            <span class="text-blue-700 font-bold">Time: {ping} ms</span>
            <span class="text-blue-700 font-bold">Status: {response.status}</span>
            <Input id="disabled-input-2" class="mb-6 mt-2" disabled readonly value={res} />
        </Label>
    </div>
{/if}