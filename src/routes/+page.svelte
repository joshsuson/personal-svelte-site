<script>
	import Container from '$lib/components/Container.svelte';
	import ImageBanner from '$lib/components/ImageBanner.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Article from '$lib/components/Article.svelte';

	export let data;

	$: ({ projects } = data);
	$: console.log(projects);
</script>

<Container>
	<div class="max-w-2xl">
		<h1 class="text-4xl text-supernova-500 font-bold tracking-light sm:text-5xl">
			Developer, husband, father, and story aficionado
		</h1>
		<p class="mt-6 text-base text-zinc-400">
			I'm a developer from Concord, North Carolina. I started in frontend but am actively trying to
			shed that title by learning full stack and mobile development. I love building software and
			users experiences and want to create beautiful, simple products that have a postive impact on
			peoples lives. I live for my family and love them deeply. Everything I do, I do for them. When
			I'm not spending time with them I am usually enthralled in a great story. Whether it's a comic
			book or novel, I love a good story.
		</p>
	</div>
	<div class="mt-6 flex gap-6">
		<a href="https://twitter.com/joshsuson" class="group -m-1 p-1">
			<Twitter styles="h-6 w-6 fill-zinc-400 group-hover:fill-zinc-300 transition" />
		</a>
		<a href="https://twitter.com/joshsuson" class="group -m-1 p-1">
			<Github styles="h-6 w-6 fill-zinc-400 group-hover:fill-zinc-300 transition" />
		</a>
	</div>
</Container>
<ImageBanner />
<Container extraStyles="mt-24 md:mt-28">
	<h2 class="text-zinc-300 font-semibold text-3xl mb-12">Recent Articles</h2>
	<div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
		<div class="flex flex-col gap-16">
			{#each projects as project}
				<Article article={project.meta} href={project.path} />
			{/each}
		</div>
		<div class="space-y-10 lg:pl-16 xl:pl-24">
			<h3 class="text-white text-2xl">I'll put the reading list here</h3>
		</div>
	</div>
</Container>
