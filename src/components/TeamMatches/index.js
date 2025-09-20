// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: [],
    matchcardDetils: [],
    teamBannerUrl: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTheMoutnData()
  }

  getTheMoutnData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const listdata = data.latest_match_details
    const matchdata = data.recent_matches

    console.log(data.team_banner_url)

    const matchcardData = matchdata.map(each => ({
      result: each.result,
      id: each.id,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      matchStatus: each.match_status,
    }))
    const newListdata = {
      umpires: listdata.umpires,
      result: listdata.result,
      manOfTheMatch: listdata.man_of_the_match,
      id: listdata.id,
      date: listdata.date,
      venue: listdata.venue,
      competingTeam: listdata.competing_team,
      competingTeamLogo: listdata.competing_team_logo,
      firstInnings: listdata.first_innings,
      secondInnings: listdata.second_innings,
      matchStatus: listdata.match_status,
    }

    const teamnewData = {
      teamBannerUrl: data.team_banner_url,
    }

    this.setState({
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: newListdata,
      matchcardDetils: matchcardData,
      isLoading: false,
    })
  }

  render() {
    const {teamBannerUrl, latestMatchDetails, matchcardDetils, isLoading} =
      this.state

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="background-color">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="teamets-img"
            />
            <p className="p">Latest matches</p>
            <LatestMatch newLatest={latestMatchDetails} />
            <ul className="ul">
              {matchcardDetils.map(each => (
                <MatchCard forAllmatch={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
