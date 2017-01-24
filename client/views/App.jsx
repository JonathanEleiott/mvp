class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div>
          <Rankings />
        </div>
        <div>
          <NewTourney />
        </div>
      </div>
    )
  }

}

window.App = App;
