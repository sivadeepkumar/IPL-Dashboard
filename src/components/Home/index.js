import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplData: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updateData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({iplData: updateData, isLoading: false})
  }

  render() {
    const {iplData, isLoading} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <div className="ipl-container">
            <img
              className="ipl-logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="header">IPL DashBoard</h1>
          </div>

          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul>
              {iplData.map(each => (
                <TeamCard key={each.id} each={each} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home

//  testid="loader"
