<script>
	// @ts-nocheck
	import { ParallaxLayer } from 'svelte-parallax';
	import { tweened } from 'svelte/motion';
	import Card from '$lib/card.svelte';
	export let parallax;
	export let Global;
	const NewConfirmed = tweened(0, {
		duration: 2000
	});
	const TotalConfirmed = tweened(0, {
		duration: 2000
	});
	const NewDeaths = tweened(0, {
		duration: 2000
	});
	const TotalDeaths = tweened(0, {
		duration: 2000
	});
	const NewRecovered = tweened(0, {
		duration: 2000
	});
	const TotalRecovered = tweened(0, {
		duration: 2000
	});
	let date = Global.Date;
	NewConfirmed.set(Global.NewConfirmed);
	TotalConfirmed.set(Global.TotalConfirmed);
	NewDeaths.set(Global.NewDeaths);
	TotalDeaths.set(Global.TotalDeaths);
	NewRecovered.set(Global.NewRecovered);
	TotalRecovered.set(Global.TotalRecovered);
</script>

<ParallaxLayer
	offset={0}
	rate={4}
	style="background-image: url('base.jpg'); background-size: cover;opacity:0.9 "
>
	<div class="slide1">
		<Card>
			<div class="global">
				<h1 style="padding: 10px;">Global</h1>
				<div class="global-entries">
					<h3>New Confirmed : {parseInt($NewConfirmed)}</h3>
					<h3>Total Confirmed : {parseInt($TotalConfirmed)}</h3>
					<h3>New Deaths : {parseInt($NewDeaths)}</h3>
					<h3>Total Deaths : {parseInt($TotalDeaths)}</h3>
					<h3>New Recovered : {parseInt($NewRecovered)}</h3>
					<h3>Total Recovered : {parseInt($TotalRecovered)}</h3>
					<small>Date : {date}</small>
				</div>
			</div>
		</Card>
		<div class="middle">
			<!-- svelte-ignore a11y-missing-attribute -->
			<a
				on:click={() => parallax.scrollTo(3, { selector: '.top-btn', duration: 1000 })}
				class="btn btn3">Search by Country</a
			>
		</div>
	</div>
</ParallaxLayer>

<style>
	.slide1 {
		display: grid;
		place-items: center;
		height: 550px;
	}
	.global {
		flex: 1;
		color: white;
	}
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
		border: 2px solid #ff7675;
		padding: 14px 60px;
		text-transform: uppercase;
		overflow: hidden;
		transition: 1s all ease;
	}
	.btn::before {
		background: #ff7675;
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
	.middle {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
</style>
