<script>
	import NavLink from './NavLink.svelte';
</script>

<nav>
	<ul
		class="flex justify-center rounded-full font-medium shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10"
	>
		<NavLink href="/">Home</NavLink>
		<NavLink href="/about">About Me</NavLink>
		<NavLink href="/projects">Projects</NavLink>
		<NavLink href="/reading">Reading List</NavLink>
		<NavLink href="/uses">Uses</NavLink>
	</ul>
</nav>
