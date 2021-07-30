<script>
    import { createEventDispatcher } from 'svelte'
    import dateformat from 'dateformat'

    import TeamLogo from './TeamLogo.svelte'
    export let game
    export let selected = false

    const date = new Date(game.start_date_time)
    const formattedDate = dateformat(date, 'dd/mm HH:MM')

    const dispatch = createEventDispatcher()
    const dispatchEvent = () => {
        dispatch('select-game', { game })
    }
</script>

<div class={`root ${selected ? 'selected' : ''}`} on:click={dispatchEvent}>
    <div class="teams">
        <TeamLogo teamCode={game.home_team_code} /> <span class="team">{game.home_team_code}</span> 
        <span class="score">
            {game.home_team_result}<span class="mini">vs</span>{game.away_team_result} 
        </span>
        <TeamLogo teamCode={game.away_team_code} /> <span class="team">{game.away_team_code}</span>
    </div>
    <div class="dates">{formattedDate}</div>
</div>

<style>
    div.root {
        padding: 10px;
        border-bottom: 1px solid lightgrey;
    }
    div.root:hover {
        background-color: lightyellow;
        cursor: pointer;
    }
    div.root.selected {
        background-color: #FFEFB7;
    }
    div.teams {
        font-size: 24px;
    }
    span.team {
        margin-left: -3px;
        font-size: 16px;
        font-weight: 500;
    }
    span.score {
        font-size: 18px;
        font-weight: 999;
        margin: 0 4px;
    }
    span.mini {
        font-size: 12px;
        font-weight: 100;
        margin: 0 4px;
        color: #afafaf;
    }
    div.dates {
        font-size: 12px;
        color: #afafaf;
    }
</style>