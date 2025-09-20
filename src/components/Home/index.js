// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamcardList: [], isLoading: true}

  componentDidMount() {
    this.getcomponent()
  }

  getcomponent = async () => {
    const requireUrl = await fetch('https://apis.ccbp.in/ipl')
    const data = await requireUrl.json()
    const newData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamcardList: newData, isLoading: false})
  }

  render() {
    const {teamcardList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="background-img">
            <div className="img-ipl">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-img"
              />
              <h1>IPL Dashboard</h1>
            </div>

            <ul className="ul">
              {teamcardList.map(each => (
                <TeamCard forAll={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
