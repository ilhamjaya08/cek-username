<script>
    import { Card, Button, Toggle } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    let vCard = false;
</script>

<div  class="space-y-4">
    <Card img="https://telegra.ph/file/839443d270c6ee419dad4.jpg">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      <Button>
        Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
      </Button>
    </Card>
  </div>