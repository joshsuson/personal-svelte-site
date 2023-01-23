<script>
	import '../app.css';
	import '../styles/prism-nyte-owl.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="fixed inset-0 flex justify-center sm:px-8">
	<div class="flex w-full max-w-7xl lg:px-8">
		<div class="w-full ring-1 bg-zinc-900 ring-zinc-300/20" />
	</div>
</div>
<div class="relative">
	<main>
		<Header />
		<slot />
		<Footer />
	</main>
</div>
