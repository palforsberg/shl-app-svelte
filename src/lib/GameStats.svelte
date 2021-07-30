<script>
import PeriodStats from "./PeriodStats.svelte";

import TeamLogo from "./TeamLogo.svelte"

    export let game

    let stats = {}
    $: {
        stats = {}
        if (game) {
            fetch(`/api/game/${game.game_uuid}/${game.game_id}`)
            .then(e => e.json())
            .then(e => {
                console.log('stats ', e)
                stats = e
            })
        }
    }
</script>

<div>
    <div class="header">
        <span class="team">
            <div><TeamLogo size="40" teamCode={game?.home_team_code} /></div>
            <div class="team-name">{game?.home_team_code || ''}</div>
        </span>
        <span class="score">
            {game?.home_team_result|| 0}
            <span class="mini">vs</span>
            {game?.away_team_result || 0}
        </span>
        <span class="team">
            <div><TeamLogo size="40" teamCode={game?.away_team_code} /></div>
            <div class="team-name">{game?.away_team_code || ''}</div>
        </span>
    </div>
    <div class="period">
        Match
        <PeriodStats stats={stats?.recaps?.gameRecap} />
    </div>
    <div class="period">
        Period 1
        <PeriodStats stats={stats?.recaps?.['0']} />
    </div>
    <div class="period">
        Period 2
        <PeriodStats stats={stats?.recaps?.['1']} />
    </div>
    <div class="period">
        Period 3
        <PeriodStats stats={stats?.recaps?.['2']} />
    </div>
</div>
<style>
    .header {
        text-align: center;
    }
    .team-name {
        margin-top: 4px;
        font-size: 12px;
    }
    .team {
        padding: 10px;
    }
    span {
        display: inline-block;
    }
    .score {
        font-size: 24px;
        font-weight: 999;
    }
    .mini {
        font-size: 12px;
        font-weight: 100;
    }
    .period {
        margin: 20px 0;
        font-size: 14px;
        text-transform: uppercase;
    }
</style>

