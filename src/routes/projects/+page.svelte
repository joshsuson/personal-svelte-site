<script>
	import Container from '$lib/components/Container.svelte';
	export let data;

	$: ({ projects } = data);
</script>

<Container>
	<ul>
		{#each projects as project}
			<li>
				<h2>
					<a href={project.path}>
						{project.meta.title}
					</a>
				</h2>
				Published {project.meta.date}
			</li>
		{/each}
	</ul>
</Container>
