<script>
import Standing from "./Standing.svelte";

    export let season
    let standings = []
    $: {
        standings = []
        fetch("/api/standings/" + season)
            .then(rsp => {
                if (rsp.status == 200) {
                    return rsp.json()
                } else {
                    return rsp.text().then(e => { throw e })
                }
            })
            .then(data => {
                standings = data
            }).catch(error => {
                console.error(error);
                standings = []
            });
    }
</script>

<div>
    {#each standings as standing}
        <Standing {standing} />
    {/each}
</div>

<style>
</style>