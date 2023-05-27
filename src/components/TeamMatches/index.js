import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'

import LastestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {isLoading: true, teamBanner: '', latestMatch: {}, recentMatch: []}

  componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.getEachData(id)
  }

  getEachData = async id => {
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()
    cosole.log(data)
    const updateData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const {teamBannerUrl, latestMatchDetails, recentMatches} = updateData

    this.setState({
      isLoading: false,
      teamBanner: teamBannerUrl,
      latestMatch: latestMatchDetails,
      recentMatch: recentMatches,
    })
  }

  render() {
    const {isLoading, teamBanner, latestMatch, recentMatch} = this.state

    return (
      <div className="main-container">
        <img alt="team banner" src={teamBanner} />
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <LastestMatch latestMatch={latestMatch} />
            <ul>
              {recentMatch.map(each => (
                <MatchCard key={each.id} each={each} />
              ))}
            </ul>
            )
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches

//  testid="loader"
