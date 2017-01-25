var AllTourneys = ({tournaments, players}) => {

  return (
  <div className="componentBox">
    <h2 className="title">Show All Tourneys!</h2>
    <table className="left">
      {tournaments.map((tournament, key) =>
        <SingleTourney tournament={tournament} key={key}/>
      )}
    </table>
    <table className="right">
      {players.map((player) =>
        (
          <PlayerList player={player}/>
        )
      )}
    </table>
  </div>
)}
