<script>
	import ChevronRight from '../icons/ChevronRight.svelte';

	export let article;
	export let href;

	$: ({ title, date, description } = article);
</script>

<div class="group relative flex flex-col items-start">
	<h2 class="text-base font-semibold tracking-tight text-zinc-100">
		<div
			class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
		/>
		<a {href}>
			<span class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
			<span class="relative z-10">{title}</span>
		</a>
	</h2>
	<p class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 pl-3.5">
		<span class="absolute inset-y-0 left-0 flex items-center">
			<span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
		</span>
		{date}
	</p>
	<p class="relative z-10 mt-2 text-sm text-zinc-400">
		{description}
	</p>
	<div class="relative z-10 mt-4 flex items-center text-sm font-medium text-persian-green-500">
		Read Article
		<ChevronRight styles="ml-1 h-4 w-4 stroke-current" />
	</div>
</div>
