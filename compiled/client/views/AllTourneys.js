"use strict";

var AllTourneys = function AllTourneys(_ref) {
  var tournaments = _ref.tournaments,
      players = _ref.players;


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
      { className: "left" },
      tournaments.map(function (tournament, key) {
        return React.createElement(SingleTourney, { tournament: tournament, key: key });
      })
    ),
    React.createElement(
      "table",
      { className: "right" },
      players.map(function (player) {
        return React.createElement(PlayerList, { player: player });
      })
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9BbGxUb3VybmV5cy5qc3giXSwibmFtZXMiOlsiQWxsVG91cm5leXMiLCJ0b3VybmFtZW50cyIsInBsYXllcnMiLCJtYXAiLCJ0b3VybmFtZW50Iiwia2V5IiwicGxheWVyIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGNBQWMsU0FBZEEsV0FBYyxPQUE0QjtBQUFBLE1BQTFCQyxXQUEwQixRQUExQkEsV0FBMEI7QUFBQSxNQUFiQyxPQUFhLFFBQWJBLE9BQWE7OztBQUU1QyxTQUNBO0FBQUE7QUFBQSxNQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxRQUFJLFdBQVUsT0FBZDtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFPLFdBQVUsTUFBakI7QUFDR0Qsa0JBQVlFLEdBQVosQ0FBZ0IsVUFBQ0MsVUFBRCxFQUFhQyxHQUFiO0FBQUEsZUFDZixvQkFBQyxhQUFELElBQWUsWUFBWUQsVUFBM0IsRUFBdUMsS0FBS0MsR0FBNUMsR0FEZTtBQUFBLE9BQWhCO0FBREgsS0FGRjtBQU9FO0FBQUE7QUFBQSxRQUFPLFdBQVUsT0FBakI7QUFDR0gsY0FBUUMsR0FBUixDQUFZLFVBQUNHLE1BQUQ7QUFBQSxlQUVULG9CQUFDLFVBQUQsSUFBWSxRQUFRQSxNQUFwQixHQUZTO0FBQUEsT0FBWjtBQURIO0FBUEYsR0FEQTtBQWdCQSxDQWxCRiIsImZpbGUiOiJBbGxUb3VybmV5cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBbGxUb3VybmV5cyA9ICh7dG91cm5hbWVudHMsIHBsYXllcnN9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRCb3hcIj5cbiAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5TaG93IEFsbCBUb3VybmV5cyE8L2gyPlxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICB7dG91cm5hbWVudHMubWFwKCh0b3VybmFtZW50LCBrZXkpID0+XG4gICAgICAgIDxTaW5nbGVUb3VybmV5IHRvdXJuYW1lbnQ9e3RvdXJuYW1lbnR9IGtleT17a2V5fS8+XG4gICAgICApfVxuICAgIDwvdGFibGU+XG4gICAgPHRhYmxlIGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICB7cGxheWVycy5tYXAoKHBsYXllcikgPT5cbiAgICAgICAgKFxuICAgICAgICAgIDxQbGF5ZXJMaXN0IHBsYXllcj17cGxheWVyfS8+XG4gICAgICAgIClcbiAgICAgICl9XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+XG4pfVxuIl19