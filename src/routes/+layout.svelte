<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { inject } from '@vercel/analytics';
	inject()
</script>

<div class="app bg-sky-100">
	<Header />

	<main>
		<slot />
	</main>
	<script type="text/javascript">
		atOptions = {
			'key' : '55ef8bfb6b7748db3f21080f7faaa22b',
			'format' : 'iframe',
			'height' : 60,
			'width' : 468,
			'params' : {}
		};
	</script>
	<script type="text/javascript" src="//www.topcreativeformat.com/55ef8bfb6b7748db3f21080f7faaa22b/invoke.js"></script>
	<footer>
		<p>Made with ❤️ by ilhamjaya08</p>
	</footer>

	<!--Start of Tawk.to Script-->
    <script type="text/javascript">
	var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
	(function(){
	var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
	s1.async=true;
	s1.src='https://embed.tawk.to/6666c07f981b6c56477b7cef/1i00lvt0o';
	s1.charset='UTF-8';
	s1.setAttribute('crossorigin','*');
	s0.parentNode.insertBefore(s1,s0);
	})();
	</script>
	<!--End of Tawk.to Script-->
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
