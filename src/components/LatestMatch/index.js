import './index.css'

const LastestMatch = props => {
  const {latestMatch} = props

  const updateRecentMatch = {
    id: latestMatch.id,
    competingTeam: latestMatch.competing_team,
    competingTeamLogo: latestMatch.competing_team_logo,
    date: latestMatch.date,
    firstInnings: latestMatch.first_innings,
    manOfTheMatch: latestMatch.man_of_the_match,
    matchStatus: latestMatch.match_status,
    result: latestMatch.result,
    secondInnings: latestMatch.second_innings,
    umpires: latestMatch.umpires,
    venue: latestMatch.venue,
  }

  const {
    id,
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = updateRecentMatch

  return (
    <div className="card">
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      </div>
      <div className="end-card">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man of the Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LastestMatch
