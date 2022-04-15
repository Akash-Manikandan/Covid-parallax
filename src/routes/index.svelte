<script>
	// @ts-nocheck
	import {Parallax} from 'svelte-parallax';
	import Effect from '$lib/effect.svelte';
	import Globalcomp from "$lib/globalcomp.svelte"
	import Countrycomp from "$lib/countrycomp.svelte";
	let parallax;
	export let data;
	let Global = data.Global;
	let Countries = data.Countries;
	
</script>

<div style="background-color:#000;">
	<Parallax sections={3} bind:this={parallax}>
		<Globalcomp {Global} {parallax}/>
		<Effect />
		<Countrycomp {Countries} {parallax} />
	</Parallax>
</div>

<style>

</style>
