<script>
    import TeamLogo from "./TeamLogo.svelte";


    export let standing
</script>

<tr>
    <td>#{standing.rank}</td>
    <td><TeamLogo teamCode={standing.team_code} /></td>
    <td>{standing.team_code}</td>
    <td>{standing.gp}</td>
    <td>{standing.points}</td>
</tr>

<style>
    td {
        padding: 5px;
    }
</style>