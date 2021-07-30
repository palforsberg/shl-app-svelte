<script>
    export let teamCode
    export let size = 20
</script>

{#if teamCode != undefined}
    <img
        alt={`${teamCode} logo`}
        style={`width:${size}px;`}
        src={`http://xn--pl-yia.se/shl/logos/${teamCode.toLowerCase()}.png`}
    />
{/if}
{#if teamCode == undefined}
    <div
        alt={`${teamCode} logo`}
        style={`width:${size}px;height:${size}px;border-radius:${size / 2}px;`}
    />
{/if}

<style>
    img {
        vertical-align: middle;
    }
    div {
        background-color: #dfdfdf;
    }
</style>