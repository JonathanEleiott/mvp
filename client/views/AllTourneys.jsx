var AllTourneys = ({tournaments}) => (
  <div className="componentBox">
    <h2 className="title">Show All Tourneys!</h2>
    <table>
      {tournaments.map((tournament) =>
        <SingleTourney tournament={tournament}/>
      )}
    </table>
  </div>
)
