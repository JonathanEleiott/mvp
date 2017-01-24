class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllTourneys: false,
      showNewTourney: true,
      tournaments: [{tournamentName:'Monickers'}, {tournamentName:'Avalon'}]
    }
  }

  // this.props.retrieveAllTournaments(allTournaments) =>
  // this.setState({
  //   this.state.players.push(allTournaments)
  // })

  //SWITCH VIEWS BETWEEN CREATE A NEW TOURNEY AND SHOW ALL TOURNEYS
  switchToNewTourneyView() {
    this.setState({
      showAllTourneys: false,
      showNewTourney: true
    })
  }

  switchToShowAllTourneyView() {
    this.setState({
      showAllTourneys: true,
      showNewTourney: false
    })
  }

  //POST A NEW TOURNAMENT TO THE DATABASE
  postTourneyToDatabase(tournamentName, username, points) {
    axios.post('/', {
      tournamentName: tournamentName,
      username: username,
      points: points
    }).then(function(res) {
      console.log('tournament posted');
    }).catch(function(err) {
      console.log('err', err);
    })
  }

  render() {
    if (this.state.showAllTourneys) {
      return (
        <div>
          <button onClick={() => this.switchToShowAllTourneyView()}>Show All Tourneys</button>
          <button onClick={() => this.switchToNewTourneyView()}>Start A New Tourney</button>
          <div>
            <AllTourneys tournaments={this.state.tournaments}/>
          </div>
        </div>
      )
    } else if (this.state.showNewTourney) {
      return (
        <div>
          <button onClick={() => this.switchToShowAllTourneyView()}>Show All Tourneys</button>
          <button onClick={() => this.switchToNewTourneyView()}>Start A New Tourney</button>
          <div>
            <NewTourney postTourney={this.postTourneyToDatabase.bind(this)}/>
          </div>
        </div>
      )
    }
  }
}

window.App = App;
