<script>
    import { Card, Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    import ApiData from '../lib/core/ApiData.js';
</script>

<div class='grid md:grid-cols-3 gap-4'>
{#each ApiData as data}
<div  class="space-y-4 mt-12">
    <Card img={data.banner}>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{data.desc}</p>
      <Button href={data.link}>
        Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
      </Button>
    </Card>
</div>
{/each}
</div>