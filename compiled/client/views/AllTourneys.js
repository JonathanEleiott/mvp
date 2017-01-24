"use strict";

var AllTourneys = function AllTourneys(_ref) {
  var tournaments = _ref.tournaments;
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
      tournaments.map(function (tournament) {
        return React.createElement(SingleTourney, { tournament: tournament });
      })
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9BbGxUb3VybmV5cy5qc3giXSwibmFtZXMiOlsiQWxsVG91cm5leXMiLCJ0b3VybmFtZW50cyIsIm1hcCIsInRvdXJuYW1lbnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFBRUMsV0FBRixRQUFFQSxXQUFGO0FBQUEsU0FDaEI7QUFBQTtBQUFBLE1BQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUksV0FBVSxPQUFkO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0dBLGtCQUFZQyxHQUFaLENBQWdCLFVBQUNDLFVBQUQ7QUFBQSxlQUNmLG9CQUFDLGFBQUQsSUFBZSxZQUFZQSxVQUEzQixHQURlO0FBQUEsT0FBaEI7QUFESDtBQUZGLEdBRGdCO0FBQUEsQ0FBbEIiLCJmaWxlIjoiQWxsVG91cm5leXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWxsVG91cm5leXMgPSAoe3RvdXJuYW1lbnRzfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudEJveFwiPlxuICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPlNob3cgQWxsIFRvdXJuZXlzITwvaDI+XG4gICAgPHRhYmxlPlxuICAgICAge3RvdXJuYW1lbnRzLm1hcCgodG91cm5hbWVudCkgPT5cbiAgICAgICAgPFNpbmdsZVRvdXJuZXkgdG91cm5hbWVudD17dG91cm5hbWVudH0vPlxuICAgICAgKX1cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cbilcbiJdfQ==