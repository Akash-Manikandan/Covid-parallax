<script>
	// @ts-nocheck

	import { ParallaxLayer } from 'svelte-parallax';
	import { tweened } from 'svelte/motion';
	import Card from '$lib/card.svelte';
	export let Countries;
	export let parallax;
	let selected = 'Select';
	let count = Countries.length;

	const cNewConfirmed = tweened(0, {
		duration: 2000
	});
	const cTotalConfirmed = tweened(0, {
		duration: 2000
	});
	const cNewDeaths = tweened(0, {
		duration: 2000
	});
	const cTotalDeaths = tweened(0, {
		duration: 2000
	});
	const cNewRecovered = tweened(0, {
		duration: 2000
	});
	const cTotalRecovered = tweened(0, {
		duration: 2000
	});
	let date;
	$: if (selected) {
		for (let j = 0; j < count; j++) {
			if (Countries[j].Country === selected) {
				cNewConfirmed.set(Countries[j].NewConfirmed);
				cTotalConfirmed.set(Countries[j].TotalConfirmed);
				cNewDeaths.set(Countries[j].NewDeaths);
				cTotalDeaths.set(Countries[j].TotalDeaths);
				cNewRecovered.set(Countries[j].NewRecovered);
				cTotalRecovered.set(Countries[j].TotalRecovered);
				date = Countries[j].Date;
			} else if (selected === 'Select') {
				cNewConfirmed.set(0);
				cTotalConfirmed.set(0);
				cNewDeaths.set(0);
				cTotalDeaths.set(0);
				cNewRecovered.set(0);
				cTotalRecovered.set(0);
				date = new Date();
				date = date.toDateString();
			}
		}
	}
</script>

<ParallaxLayer
	offset={2}
	rate={4}
	style="background-image: url('virusside.jpg'); background-size:cover; opacity:0.95"
>
	<div class="top-btn">
		<Card>
			<h1>Select Country</h1>
			<div style="padding: 10px;">
				<select bind:value={selected}>
					<optgroup>
						<option>Select</option>
						{#each Countries as i}
							<option>{i.Country}</option>
						{/each}
					</optgroup>
				</select>
			</div>
			<div>
				<h3>New Confirmed : {parseInt($cNewConfirmed)}</h3>
				<h3>Total Confirmed : {parseInt($cTotalConfirmed)}</h3>
				<h3>New Deaths : {parseInt($cNewDeaths)}</h3>
				<h3>Total Deaths : {parseInt($cTotalDeaths)}</h3>
				<h3>New Recovered : {parseInt($cNewRecovered)}</h3>
				<h3>Total Recovered : {parseInt($cTotalRecovered)}</h3>
				<small>Date : {date}</small>
			</div>
		</Card>
		<div class="middle">
			<!-- svelte-ignore a11y-missing-attribute -->
			<a
				on:click={() => parallax.scrollTo(0, { selector: '.slide1', duration: 1000 })}
				class="btn btn3">Global Status</a
			>
		</div>
	</div>
</ParallaxLayer>

<style>
	h3 {
		padding: 10px;
	}
	h1 {
		padding: 10px;
	}
	.btn {
		position: relative;
		display: block;
		cursor: pointer;
		color: white;
		font-size: 15px;
		font-weight: bold;
		text-decoration: none;
		margin: 30px 0;
		border: 2px solid #8c2e17;
		padding: 14px 60px;
		text-transform: uppercase;
		overflow: hidden;
		transition: 1s all ease;
	}
	.btn::before {
		background: #8c2e17;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: -1;
		transition: all 0.6s ease;
	}

	.btn3::before {
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	.btn3:hover::before {
		height: 380%;
	}

	.top-btn {
		color: white;
		display: grid;
		place-items: center;
		height: 550px;
		opacity: 1;
	}
	optgroup {
		font-size: 14px;
	}
	select {
		padding: 4px;
		font-size: 14px;
	}
	.middle {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
</style>
