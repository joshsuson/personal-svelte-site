<script>
	import { page } from '$app/stores';
	export let href;
</script>

<li>
	<a
		{href}
		class="relative block px-3 py-2 transition hover:text-persian-green-400"
		class:active={$page.url.pathname === href}
	>
		<slot />
		{#if $page.url.pathname === href}
			<span
				class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-persian-green-400/0 via-persian-green-400/40 to-persian-green-400/0"
			/>
		{/if}
	</a>
</li>

<style lang="postcss">
	.active {
		@apply relative block px-3 py-2 transition text-persian-green-400;
	}
</style>
