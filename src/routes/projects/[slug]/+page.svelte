<script>
	import Container from '$lib/components/Container.svelte';
	export let data;
</script>

<Container>
	<h2>Hello!!</h2>
	<article>
		<h1>{data.title}</h1>
		<p>Published: {data.date}</p>
		<svelte:component this={data.content} />
	</article>
</Container>
