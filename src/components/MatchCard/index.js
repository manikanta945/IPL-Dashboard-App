// Write your code here
import './index.css'

const MatchCard = props => {
  const {forAllmatch} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = forAllmatch
  const trueOrFalse = matchStatus === 'Won' ? true : false

  return (
    <li className="matchcard">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="img"
      />
      <p>{competingTeam}</p>
      <p>{result} </p>
      {trueOrFalse ? (
        <p className="green">{matchStatus}</p>
      ) : (
        <p className="red">{matchStatus}</p>
      )}
    </li>
  )
}
export default MatchCard
