// Write your code here
import './index.css'

const LatestMatch = props => {
  const {newLatest} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = newLatest

  return (
    <div className="latestmatch-box">
      <div className="left-side">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue} </p>
        <p>{result} </p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="team-logo-img"
      />
      <div className="right-side">
        <p>First innings</p>
        <p>{firstInnings}</p>
        <p>second innings</p>
        <p>{secondInnings}</p>
        <p>man of the match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
