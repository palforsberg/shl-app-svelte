<script context="module">
	export const prerender = true;
</script>

<script>
	import Games from "$lib/Games.svelte";
	import GameStats from "$lib/GameStats.svelte";
import Standings from "$lib/Standings.svelte";

	let season = 2021
	const updateSeason = (delta) => () => {
		season = season + delta
		selectedGame = undefined
	}

	let selectedGame = undefined
	const gameSelected = e => {
		selectedGame = e.detail.game
	}
</script>

<svelte:head>
	<title>SHL {season}</title>
</svelte:head>

<section>
	<div class="title">
		<h1 class="inline">SHL</h1>
		<div class="inline">
			<button on:click={updateSeason(-1)} disabled={season <= 2017}>{'<'}</button>
			<h1 class="inline">{season}/{(season + 1 + "").slice(2)}</h1>
			<button on:click={updateSeason(+1)} disabled={season >= 2021}>{'>'}</button>
		</div>
	</div>
	<div class="body flex-root">
		<div class="inline">
			<Standings {season} />
		</div>
		<div class="inline">
			<Games {season} on:select-game={gameSelected} />
		</div>
		<div class="inline">
			<GameStats game={selectedGame} />
		</div>
	</div>
</section>

<style>
	.title {
		margin: 0 0 20px 0;
	}
	.inline {
		display: inline-block;
	}
	.flex-root {
		display:flex;
		justify-content: space-around;
	}
</style>
