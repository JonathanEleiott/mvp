var NewTourney = ({postTourney}) => (
  <div className="componentBox">
    <form>
      <h2 className="title">Start New Tourney</h2>
      <p>Tourney Name <input name="tourneyName"></input></p>
      <div onClick={() => {
          $(".addPlayerOrTeam").append("<p>New Player or Team Name <input name='player'></input></p>");
        }}>Add New Player Or Team</div>
      <div className="addPlayerOrTeam"></div>
      <button onClick={() => {postTourney(tourneyName, )}}>Submit</button>
    </form>
  </div>
)
