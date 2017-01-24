"use strict";

var AllTourneys = function AllTourneys(_ref) {
  var tournaments = _ref.tournaments,
      players = _ref.players;

  console.log('players', players);
  return React.createElement(
    "div",
    { className: "componentBox" },
    React.createElement(
      "h2",
      { className: "title" },
      "Show All Tourneys!"
    ),
    React.createElement(
      "table",
      null,
      React.createElement(
        "tbody",
        null,
        tournaments.map(function (tournament, key) {
          return React.createElement(SingleTourney, { tournament: tournament, key: key });
        })
      )
    ),
    React.createElement(
      "table",
      null,
      React.createElement(
        "tbody",
        null,
        players.map(function (player, key) {
          return React.createElement(PlayerList, { player: player, key: key });
        })
      )
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9BbGxUb3VybmV5cy5qc3giXSwibmFtZXMiOlsiQWxsVG91cm5leXMiLCJ0b3VybmFtZW50cyIsInBsYXllcnMiLCJjb25zb2xlIiwibG9nIiwibWFwIiwidG91cm5hbWVudCIsImtleSIsInBsYXllciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxjQUFjLFNBQWRBLFdBQWMsT0FBNEI7QUFBQSxNQUExQkMsV0FBMEIsUUFBMUJBLFdBQTBCO0FBQUEsTUFBYkMsT0FBYSxRQUFiQSxPQUFhOztBQUM1Q0MsVUFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJGLE9BQXZCO0FBQ0EsU0FDQTtBQUFBO0FBQUEsTUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDR0Qsb0JBQVlJLEdBQVosQ0FBZ0IsVUFBQ0MsVUFBRCxFQUFhQyxHQUFiO0FBQUEsaUJBQ2Ysb0JBQUMsYUFBRCxJQUFlLFlBQVlELFVBQTNCLEVBQXVDLEtBQUtDLEdBQTVDLEdBRGU7QUFBQSxTQUFoQjtBQURIO0FBREYsS0FGRjtBQVNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNHTCxnQkFBUUcsR0FBUixDQUFZLFVBQUNHLE1BQUQsRUFBU0QsR0FBVDtBQUFBLGlCQUVULG9CQUFDLFVBQUQsSUFBWSxRQUFRQyxNQUFwQixFQUE0QixLQUFLRCxHQUFqQyxHQUZTO0FBQUEsU0FBWjtBQURIO0FBREY7QUFURixHQURBO0FBb0JBLENBdEJGIiwiZmlsZSI6IkFsbFRvdXJuZXlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFsbFRvdXJuZXlzID0gKHt0b3VybmFtZW50cywgcGxheWVyc30pID0+IHtcbiAgY29uc29sZS5sb2coJ3BsYXllcnMnLCBwbGF5ZXJzKVxuICByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudEJveFwiPlxuICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPlNob3cgQWxsIFRvdXJuZXlzITwvaDI+XG4gICAgPHRhYmxlPlxuICAgICAgPHRib2R5PlxuICAgICAgICB7dG91cm5hbWVudHMubWFwKCh0b3VybmFtZW50LCBrZXkpID0+XG4gICAgICAgICAgPFNpbmdsZVRvdXJuZXkgdG91cm5hbWVudD17dG91cm5hbWVudH0ga2V5PXtrZXl9Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgICA8dGFibGU+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtwbGF5ZXJzLm1hcCgocGxheWVyLCBrZXkpID0+XG4gICAgICAgICAgKFxuICAgICAgICAgICAgPFBsYXllckxpc3QgcGxheWVyPXtwbGF5ZXJ9IGtleT17a2V5fS8+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cbil9XG4iXX0=