<script>
	import image1 from '$lib/assets/image1.png';
	import image2 from '$lib/assets/image2.png';
	import image3 from '$lib/assets/image3.png';
	import image4 from '$lib/assets/image4.jpg';
	import image5 from '$lib/assets/image5.png';

	let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];
</script>

<div class="mt-16 sm:mt-20">
	<div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
		{#each [image1, image2, image3, image4, image5] as image, i}
			<div
				class={`relative aspect-[9/10] w-44 flex-none border-2 border-supernova-500 overflow-hidden rounded-xl bg-zing-800 sm:w-72 sm:rounded-2xl ${
					rotations[i % rotations.length]
				}`}
			>
				<img src={image} alt="" class="absolute inset-0 h-full w-full object-cover" />
			</div>
		{/each}
	</div>
</div>
