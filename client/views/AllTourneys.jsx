var AllTourneys = ({tournaments, players}) => {
  console.log('players', players)
  return (
  <div className="componentBox">
    <h2 className="title">Show All Tourneys!</h2>
    <table>
      <tbody>
        {tournaments.map((tournament, key) =>
          <SingleTourney tournament={tournament} key={key}/>
        )}
      </tbody>
    </table>
    <table>
      <tbody>
        {players.map((player, key) =>
          (
            <PlayerList player={player} key={key}/>
          )
        )}
      </tbody>
    </table>
  </div>
)}
