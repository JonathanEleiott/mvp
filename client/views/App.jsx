class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllTourneys: false,
      showNewTourney: true,
      tournaments: [{tournamentName:'Jon'}, {tournamentName:'Bill'}]
    }
  }

  // this.props.retrieveAllTournaments(allTournaments) =>
  // this.setState({
  //   this.state.players.push(allTournaments)
  // })

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
            <NewTourney />
          </div>
        </div>
      )
    }
  }
}

window.App = App;
