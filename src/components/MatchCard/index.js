import './index.css'

const MatchCard = props => {
  const {each} = props
  console.log(each)
  const updatedEach = {
    competingTeamLogo: each.competing_team_logo,
    competingTeam: each.competing_team,
    matchStatus: each.match_status,
    result: each.result,
  }
  const {competingTeamLogo, competingTeam, matchStatus, result} = updatedEach
  console.log(competingTeamLogo, competingTeam, matchStatus, result)
  const statusColor = matchStatus === 'Won' ? 'won-title' : 'lost-title'

  return (
    <li>
      <img
        className="imager"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="bref-para">{competingTeam}</p>
      <p>{result}</p>
      <p className={statusColor}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
