<script>
	import ApiCards from '../components/ApiCards.svelte';
</script>

<svelte:head>
	<title>Cek Username API</title>
	<meta name="description" content="Cek Username Page" />
</svelte:head>

<section class="mt-28">
	<div class="text-center">
	<h1 class=" text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-400 to-violet-500">
		Cek Username API
	</h1>
	<h6 class="max-w-2xl mx-auto text-sm font-bold pt-4 self-center content-center">
		Layanan API untuk validasi username beberapa layanan digital,
		<br> seperti uid game, e-money, rekening bank,
		pelanggan listrik, dan lainnya.
	</h6>
	<ApiCards/>
	</div>
</section>

<style>
	
</style>
