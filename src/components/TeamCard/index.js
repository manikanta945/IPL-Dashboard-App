// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {forAll} = props
  const {name, teamImageUrl, id} = forAll
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="Team-card">
        <img src={teamImageUrl} alt={name} className="team-card-img" />
        <p className="h1">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
