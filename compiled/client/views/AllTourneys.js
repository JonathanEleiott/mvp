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
      React.createElement(
        "tbody",
        null,
        tournaments.map(function (tournament, key) {
          return React.createElement(SingleTourney, { tournament: tournament, key: key });
        })
      )
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9BbGxUb3VybmV5cy5qc3giXSwibmFtZXMiOlsiQWxsVG91cm5leXMiLCJ0b3VybmFtZW50cyIsIm1hcCIsInRvdXJuYW1lbnQiLCJrZXkiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFBRUMsV0FBRixRQUFFQSxXQUFGO0FBQUEsU0FDaEI7QUFBQTtBQUFBLE1BQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUksV0FBVSxPQUFkO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0dBLG9CQUFZQyxHQUFaLENBQWdCLFVBQUNDLFVBQUQsRUFBYUMsR0FBYjtBQUFBLGlCQUNmLG9CQUFDLGFBQUQsSUFBZSxZQUFZRCxVQUEzQixFQUF1QyxLQUFLQyxHQUE1QyxHQURlO0FBQUEsU0FBaEI7QUFESDtBQURGO0FBRkYsR0FEZ0I7QUFBQSxDQUFsQiIsImZpbGUiOiJBbGxUb3VybmV5cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBbGxUb3VybmV5cyA9ICh7dG91cm5hbWVudHN9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50Qm94XCI+XG4gICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+U2hvdyBBbGwgVG91cm5leXMhPC9oMj5cbiAgICA8dGFibGU+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHt0b3VybmFtZW50cy5tYXAoKHRvdXJuYW1lbnQsIGtleSkgPT5cbiAgICAgICAgICA8U2luZ2xlVG91cm5leSB0b3VybmFtZW50PXt0b3VybmFtZW50fSBrZXk9e2tleX0vPlxuICAgICAgICApfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cbilcbiJdfQ==