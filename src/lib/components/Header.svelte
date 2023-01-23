<script>
	import Container from './Container.svelte';
	import Logo from './Logo.svelte';
	import Nav from './Nav.svelte';
	import ModeSwitch from './ModeSwitch.svelte';
</script>

<header class="relative z-50 flex flex-col py-8 mb-24">
	<Container>
		<div class="relative flex gap-4">
			<div class="flex flex-1">
				<Logo />
			</div>
			<div class="flex flex-2 justify-center">
				<Nav />
			</div>
			<div class="flex justify-end flex-1">
				<div class="pointer-events-auto">
					<ModeSwitch />
				</div>
			</div>
		</div>
	</Container>
</header>
