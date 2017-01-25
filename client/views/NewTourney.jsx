var NewTourney = ({postTourney}) => (
  <div className="componentBox">
      <h2 className="title">Start New Tourney</h2>
      <p>Tourney Name <input name="tourneyName"></input></p>
      <div onClick={() => {
          $(".addPlayerOrTeam").append("<p>New Player or Team Name <input className='player'></input></p>");
        }}>Add New Player Or Team</div>
      <div className="addPlayerOrTeam"></div>
      <button type="submit" onClick={() => {
          var tournName = $('input[name=tourneyName]').val();
          var playerNames = {};
          $('input').each(function(index) {
            playerNames[$(this).val())] = 0;
          });
          postTourney(tournName, playerNames)
        }
      }>Submit</button>
  </div>
)
