<script>
	// @ts-nocheck
	import { ParallaxLayer } from 'svelte-parallax';
	let fancy = 'Stay Safe'.split('');
	let src = 'coronalogo.png';
</script>

{#each fancy as char, index (index)}
	<ParallaxLayer
		rate={(index + 1) / (fancy.length - 1)}
		offset={1}
		style="
    	margin-left: {32 + index * 5}%; 
      	display: flex; 
      	justify-content: flex-start; 
      	align-items: center;"
	>
		<h1 class="fancy">
			{char}
		</h1>
	</ParallaxLayer>
{/each}

<ParallaxLayer offset="0.9" rate="0.8" style="opacity: 0.3;">
	<img {src} alt="" style="display: block; width: 20%; margin-left: 55%;" />
	<img {src} alt="" style="display: block; width: 10%; margin-left: 15%;" />
</ParallaxLayer>
<ParallaxLayer offset="0.95" rate="0.2" style="opacity: 0.2;">
	<img {src} alt="" style="display: block; width: 10%; margin-left: 10%;" />
	<img {src} alt="" style="display: block; width: 20%; margin-left: 75%;" />
</ParallaxLayer>

<ParallaxLayer offset="1" rate="0.8" style="opacity: 0.6;">
	<img {src} alt="" style="display: block; width: 20%; margin-left: 55%;" />
	<img {src} alt="" style="display: block; width: 10%; margin-left: 15%;" />
</ParallaxLayer>

<ParallaxLayer offset="1.2" rate="0.5" style="opacity: 0.1;">
	<img {src} alt="" style="display: block; width: 20%; margin-left: 70%;" />
	<img {src} alt="" style="display: block; width: 20%; margin-left: 40%;" />
</ParallaxLayer>

<ParallaxLayer offset="1.4" rate="0.2" style="opacity: 0.2;">
	<img {src} alt="" style="display: block; width: 10%; margin-left: 10%;" />
	<img {src} alt="" style="display: block; width: 20%; margin-left: 75%;" />
</ParallaxLayer>

<ParallaxLayer offset="1.6" rate={-0.1} style="opacity: 0.4;">
	<img {src} alt="" style="display: block; width: 20%; margin-left: 60%;" />
	<img {src} alt="" style="display: block; width: 25%; margin-left: 30%;" />
	<img {src} alt="" style="display: block; width: 10%; margin-left: 80%;" />
</ParallaxLayer>

<ParallaxLayer offset="1.8" rate="0.4" style="opacity: 0.6;">
	<img {src} alt="" style="display: block; width: 20%; margin-left: 5%;" />
	<img {src} alt="" style="display: block; width: 15%; margin-left: 75%;" />
</ParallaxLayer>
<ParallaxLayer offset="2" rate="0.8" style="opacity: 0.5;">
	<img {src} alt="" style="display: block; width: 20%; margin-left: 55%;" />
	<img {src} alt="" style="display: block; width: 10%; margin-left: 15%;" />
</ParallaxLayer>

<style>
	.fancy {
		font-size: 2.5rem;
		color: white;
	}
</style>
