var AllTourneys = ({tournaments}) => (
  <div className="componentBox">
    <h2 className="title">Show All Tourneys!</h2>
    <table>
      <tbody>
        {tournaments.map((tournament, key) =>
          <SingleTourney tournament={tournament} key={key}/>
        )}
      </tbody>
    </table>
  </div>
)
