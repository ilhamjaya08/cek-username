<script>
    import PlnCarousel from '../../components/PlnCarousel.svelte';
    import { Label, Input, Button, GradientButton } from 'flowbite-svelte';
    import axios from "axios";

    let uid;
    let response;
    let res;
    let ping;
    async function fetchData() {
        try {
            const startTime = Date.now();
            response = await axios
                            .get("https://cek-username.onrender.com/pln?uid=" + uid);
            const endTime = Date.now();
            ping = endTime - startTime;
            res = JSON.stringify(response.data.data.Username, null, 2);
            console.log(res)
        } catch (error) {
            alert(error)
            return error
        }
    }
</script>

<svelte:head>
    <title>PLN Checker</title>
</svelte:head>

<div class="relative w-4/4 h-64 overflow-hidden">
    <PlnCarousel/>
</div>

<h1 class="text-xl font-extrabold mx-auto mt-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-sky-600 to-purple-700">
    PLN Checker (Prabayar)
</h1>

<p class="mx-auto text-sm font-mono text-sky-400 mt-2">
    Endpoint: https://cek-username.onrender.com/pln?uid=
</p>

<div class="mx-auto mt-12">
<Label class="mt-4">
    <span class="text-blue-700 font-bold">Nomor Pelanggan PLN Anda</span>
    <Input id="default-input" bind:value={uid} class="mt-2" placeholder="Your PLN number" />
</Label>
<Button class="mt-4 w-1/2 mx-auto" on:click={() => fetchData()} color="blue">Submit</Button>
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