class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0
    }
  }

  render() {
    return (
      <td
        onClick={() =>
          this.setState({
          points: this.state.points += 1
        })}>{this.props.name}: {this.state.points}
      </td>
    )
  }
}
