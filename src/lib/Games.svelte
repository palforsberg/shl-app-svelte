<script>
    import { createEventDispatcher } from "svelte";

    import Game from "./Game.svelte";

    export let season
    let games = []
    let selectedGameUuid = undefined
    $: {
        selectedGameUuid = undefined
        games = []
        fetch("/api/games/" + season)
            .then(rsp => {
                if (rsp.status == 200) {
                    return rsp.json()
                } else {
                    return rsp.text().then(e => { throw e })
                }
            })
            .then(data => {
                games = data.sort((a, b) => a.start_date_time.localeCompare(b.start_date_time))
            }).catch(error => {
                console.error(error);
                games = []
            });
    }

    const dispatch = createEventDispatcher()
    const onSelectGame = (e) => {
        dispatch('select-game', { game: e.detail.game })
        selectedGameUuid = e.detail.game.game_uuid
    }
</script>

<div>
    {#each games as game}
        <Game game={game} on:select-game={onSelectGame} selected={game.game_uuid == selectedGameUuid} />
    {/each}
</div>

<style>
</style>