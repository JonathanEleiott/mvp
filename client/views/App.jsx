class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllTourneys: false,
      showNewTourney: true,
      tournaments: []
    }
  }

  //RETRIEVE ALL THE TOURNAMENTS FROM DATABASE
  retrieveAllTournaments() {
    var context = this;
    console.log('retrieveAllTournaments')
    axios.get('/tourneys').then(function(tourneys) {
      var tourneyArray = [];
      tourneyArray.push(tourneys);
      console.log('tourneyArray', tourneyArray)
      context.setState({
        showAllTourneys: true,
        showNewTourney: false,
        tournaments: tourneyArray[0].data
      })
    }).catch(function(err) {
      console.log('err', err);
    })
  }

  //SWITCH VIEWS BETWEEN CREATE A NEW TOURNEY AND SHOW ALL TOURNEYS
  switchToNewTourneyView() {
    this.setState({
      showAllTourneys: false,
      showNewTourney: true
    });
  }

  switchToShowAllTourneyView() {
    this.retrieveAllTournaments();
  }

  //POST A NEW TOURNAMENT TO THE DATABASE
  postTourneyToDatabase(tournamentName, username, points) {
    var context = this;
    console.log('axiosPOST')
    axios.post('/', {
      tournamentName: tournamentName,
      username: username,
      points: points
    }).then(function(res) {
      context.switchToShowAllTourneyView();
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
