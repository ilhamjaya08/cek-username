<script>
    import GameCarousel from "../../components/GameCarousel.svelte";
    import { Label, Select, Input } from 'flowbite-svelte';
    let selected;

    let games = [
        { value: "ff", name: "Garena Free Fire" },
        { value: "ml", name: "Mobile Legends:Bang Bang" },
        { value: "pubgm", name: "PUBG Mobile" },
        { value: "codm", name: "Call Of Duty Mobile" },
        { value: "genshin", name: "Genshin Impact" },
        { value: "hsr", name: "Honkai Star Rail" },
    ]
</script>

<svelte:head>
    <title>Game Nickname Validator</title>
</svelte:head>

<div class="relative w-3/4 h-64 overflow-hidden">
    <GameCarousel/>
</div>

<h1 class="text-xl font-extrabold mx-auto mt-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-sky-600 to-purple-700">
    Game Nickname Validator
</h1>

<div class="mx-auto mt-12">
    <Label>
        <span class="text-blue-700 font-bold">Game</span>
        <Select class="mt-2" placeholder="Select a game"items={games} bind:value={selected} />
    </Label>
    {#if selected === "ml"}
    <Label class="mt-2">
      <span class="text-blue-700 font-bold">Zone ID</span>
      <Input id="default-input" class="mt-2" placeholder="Your Zone ID" />
    </Label>
    {/if}
    {#if selected === "genshin" || selected === "hsr"}
    <Label>
        <span class="text-blue-700 font-bold">Game</span>
        <Select class="mt-2" placeholder="Select a game"items={games} bind:value={selected} />
    </Label>
    {/if}
</div>