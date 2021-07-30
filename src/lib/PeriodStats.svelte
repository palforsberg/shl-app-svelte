<script>
    export let stats
</script>

<table>
    <tr>
        <td>{stats?.homeSOG || 0}</td>
        <td class="mini" title="Shoots On Goal">SOG</td>
        <td>{stats?.awaySOG || 0}</td>
    </tr>
    <tr>
        <td>{stats?.homeHits || 0}</td>
        <td class="mini">HITS</td>
        <td>{stats?.awayHits || 0}</td>
    </tr>
    <tr>
        <td>{stats?.homePIM || 0}</td>
        <td class="mini" title="Penalty Infraction Minutes">PIM</td>
        <td>{stats?.awayPIM || 0}</td>
    </tr>
    <tr>
        <td>{stats?.homeFOW || 0}</td>
        <td class="mini" title="Face Offs Won">FOW</td>
        <td>{stats?.awayFOW || 0}</td>
    </tr>
</table>
<style>
    table {
        width: 100%;
    }
    td {
        padding: 2px 0;
        text-align: center;
        font-weight: 999;
    }
    .mini {
        font-size: 12px;
        font-weight: 100;
    }
</style>