<script>
    import GameCarousel from "../../components/GameCarousel.svelte";
    import { Label, Select, Input, Button, Toast, GradientButton } from 'flowbite-svelte';
    import axios from "axios";
    import { ExclamationCircleSolid } from 'flowbite-svelte-icons';

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
    let response;
    let err;
    async function fetchData() {
        switch(selected) {
            case "freefire": {
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
                break;
            }
            case "mobilelegends": {
                try {
                    const startTime = Date.now();
                    response = await axios
                                    .get(baseUrl + "mobilelegends?uid=" + uid + "&zone=" + zoneId);
                    const endTime = Date.now();
                    ping = endTime - startTime;
                    res = JSON.stringify(response.data.data, null, 2);
                    console.log(res)
                } catch (error) {
                    alert(error)
                    return error
                }
                break;
            }
            case "pubgm": {
                try {
                    const startTime = Date.now();
                    response = await axios
                                    .get(baseUrl + "pubgm?uid=" + uid);
                    const endTime = Date.now();
                    ping = endTime - startTime;
                    res = JSON.stringify(response.data.data, null, 2);
                    console.log(res)
                } catch (error) {
                    alert(error)
                    return error
                }
                break;
            }
            case "codm": {
                try {
                    const startTime = Date.now();
                    response = await axios
                                    .get(baseUrl + "codm?uid=" + uid);
                    const endTime = Date.now();
                    ping = endTime - startTime;
                    res = JSON.stringify(response.data.data, null, 2);
                    console.log(res)
                } catch (error) {
                    alert(error)
                    return error
                }
                break;
            }
            case "honkaiimpact": {
                try {
                    const startTime = Date.now();
                    response = await axios
                                    .get(baseUrl + "honkaiimpact?uid=" + uid);
                    const endTime = Date.now();
                    ping = endTime - startTime;
                    res = JSON.stringify(response.data.data, null, 2);
                    console.log(res)
                } catch (error) {
                    alert(error)
                    return error
                }
                break;
            }
            case "honkaistarrail": {
                try {
                    const startTime = Date.now();
                    response = await axios
                                    .get(baseUrl + "honkaistarrail?uid=" + uid + "&zone=" + zSelected);
                    const endTime = Date.now();
                    ping = endTime - startTime;
                    res = JSON.stringify(response.data.data, null, 2);
                    console.log(res)
                } catch (error) {
                    alert(error)
                    return error
                }
                break;
            }
            case "genshinimpact": {
                try {
                    const startTime = Date.now();
                    response = await axios
                                    .get(baseUrl + "genshinimpact?uid=" + uid + "&zone=" + zSelected);
                    const endTime = Date.now();
                    ping = endTime - startTime;
                    res = JSON.stringify(response.data.data, null, 2);
                    console.log(res)
                } catch (error) {
                    alert(error)
                    return error
                }
                break;
            }
            case "arenaofvalor": {
                try {
                    const startTime = Date.now();
                    response = await axios
                                    .get(baseUrl + "arenaofvalor?uid=" + uid);
                    const endTime = Date.now();
                    ping = endTime - startTime;
                    res = JSON.stringify(response.data.data, null, 2);
                    console.log(res)
                } catch (error) {
                    alert(error)
                    return error
                }
                break;
            }
            case "sausageman": {
                try {
                    const startTime = Date.now();
                    response = await axios
                                    .get(baseUrl + "sausageman?uid=" + uid);
                    const endTime = Date.now();
                    ping = endTime - startTime;
                    res = JSON.stringify(response.data.data, null, 2);
                    console.log(res)
                } catch (error) {
                    alert(error)
                    return error
                }
                break;
            }
            case "lolwildrift": {
                try {
                    const startTime = Date.now();
                    response = await axios
                                    .get(baseUrl + "lolwildrift?uid=" + uid);
                    const endTime = Date.now();
                    ping = endTime - startTime;
                    res = JSON.stringify(response.data.data, null, 2);
                    console.log(res)
                } catch (error) {
                    alert(error)
                    return error
                }
                break;
            }
            case "fcmobile": {
                try {
                    const startTime = Date.now();
                    response = await axios
                                    .get(baseUrl + "fcmobile?uid=" + uid);
                    const endTime = Date.now();
                    ping = endTime - startTime;
                    res = JSON.stringify(response.data.data, null, 2);
                    console.log(res)
                } catch (error) {
                    alert(error)
                    return error
                }
                break;
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

<p class="mx-auto text-center text-sm font-mono text-sky-400 mt-2">
    Endpoint: https://cek-username.onrender.com/game/gameName<br/>
    Contoh:<br/>
    GET https://cek-username.onrender.com/game/freefire?uid=1583297502<br/>
    Note: Khusus Mobile Legends, Genshin Impact, dan Honkai Star Rail sertakan zone id<br/>
    GET https://cek-username.onrender.com/game/mobilelegends?uid=189676589&zone=2985<br/>
    GET https://cek-username.onrender.com/game/genshinimpact?uid=9292828&zone=os_asia<br/>
    GET https://cek-username.onrender.com/game/honkaistarrail?uid=73773288&zone=os_usa<br/>
</p>

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

{#if err}
<Toast color="orange">
    <svelte:fragment slot="icon">
      <ExclamationCircleSolid class="w-5 h-5" />
      <span class="sr-only">Warning icon</span>
    </svelte:fragment>
    Improve password difficulty.
</Toast>
{/if}

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