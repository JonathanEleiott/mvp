"use strict";

var NewTourney = function NewTourney(_ref) {
  var postTourney = _ref.postTourney;
  return React.createElement(
    "div",
    { className: "componentBox" },
    React.createElement(
      "h2",
      { className: "title" },
      "Start New Tourney"
    ),
    React.createElement(
      "p",
      null,
      "Tourney Name ",
      React.createElement("input", { name: "tourneyName" })
    ),
    React.createElement(
      "div",
      { onClick: function onClick() {
          $(".addPlayerOrTeam").append("<p>New Player or Team Name <input className='player'></input></p>");
        } },
      "Add New Player Or Team"
    ),
    React.createElement("div", { className: "addPlayerOrTeam" }),
    React.createElement(
      "button",
      { type: "submit", onClick: function onClick() {
          var tournName = $('input[name=tourneyName]').val();
          var playerNames = [];
          var playerPoints = [];
          $('input').each(function (index) {
            playerNames.push($(this).val());
            playerPoints.push(0);
          });
          postTourney(tournName, playerNames.slice(1), playerPoints.slice(1));
        } },
      "Submit"
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9OZXdUb3VybmV5LmpzeCJdLCJuYW1lcyI6WyJOZXdUb3VybmV5IiwicG9zdFRvdXJuZXkiLCIkIiwiYXBwZW5kIiwidG91cm5OYW1lIiwidmFsIiwicGxheWVyTmFtZXMiLCJwbGF5ZXJQb2ludHMiLCJlYWNoIiwiaW5kZXgiLCJwdXNoIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsYUFBYSxTQUFiQSxVQUFhO0FBQUEsTUFBRUMsV0FBRixRQUFFQSxXQUFGO0FBQUEsU0FDZjtBQUFBO0FBQUEsTUFBSyxXQUFVLGNBQWY7QUFDSTtBQUFBO0FBQUEsUUFBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBLEtBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFnQixxQ0FBTyxNQUFLLGFBQVo7QUFBaEIsS0FGSjtBQUdJO0FBQUE7QUFBQSxRQUFLLFNBQVMsbUJBQU07QUFDaEJDLFlBQUUsa0JBQUYsRUFBc0JDLE1BQXRCLENBQTZCLG1FQUE3QjtBQUNELFNBRkg7QUFBQTtBQUFBLEtBSEo7QUFNSSxpQ0FBSyxXQUFVLGlCQUFmLEdBTko7QUFPSTtBQUFBO0FBQUEsUUFBUSxNQUFLLFFBQWIsRUFBc0IsU0FBUyxtQkFBTTtBQUNqQyxjQUFJQyxZQUFZRixFQUFFLHlCQUFGLEVBQTZCRyxHQUE3QixFQUFoQjtBQUNBLGNBQUlDLGNBQWMsRUFBbEI7QUFDQSxjQUFJQyxlQUFlLEVBQW5CO0FBQ0FMLFlBQUUsT0FBRixFQUFXTSxJQUFYLENBQWdCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDOUJILHdCQUFZSSxJQUFaLENBQWlCUixFQUFFLElBQUYsRUFBUUcsR0FBUixFQUFqQjtBQUNBRSx5QkFBYUcsSUFBYixDQUFrQixDQUFsQjtBQUNELFdBSEQ7QUFJQVQsc0JBQVlHLFNBQVosRUFBdUJFLFlBQVlLLEtBQVosQ0FBa0IsQ0FBbEIsQ0FBdkIsRUFBNkNKLGFBQWFJLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBN0M7QUFDRCxTQVRIO0FBQUE7QUFBQTtBQVBKLEdBRGU7QUFBQSxDQUFqQiIsImZpbGUiOiJOZXdUb3VybmV5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE5ld1RvdXJuZXkgPSAoe3Bvc3RUb3VybmV5fSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudEJveFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+U3RhcnQgTmV3IFRvdXJuZXk8L2gyPlxuICAgICAgPHA+VG91cm5leSBOYW1lIDxpbnB1dCBuYW1lPVwidG91cm5leU5hbWVcIj48L2lucHV0PjwvcD5cbiAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICQoXCIuYWRkUGxheWVyT3JUZWFtXCIpLmFwcGVuZChcIjxwPk5ldyBQbGF5ZXIgb3IgVGVhbSBOYW1lIDxpbnB1dCBjbGFzc05hbWU9J3BsYXllcic+PC9pbnB1dD48L3A+XCIpO1xuICAgICAgICB9fT5BZGQgTmV3IFBsYXllciBPciBUZWFtPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZFBsYXllck9yVGVhbVwiPjwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHZhciB0b3Vybk5hbWUgPSAkKCdpbnB1dFtuYW1lPXRvdXJuZXlOYW1lXScpLnZhbCgpO1xuICAgICAgICAgIHZhciBwbGF5ZXJOYW1lcyA9IFtdO1xuICAgICAgICAgIHZhciBwbGF5ZXJQb2ludHMgPSBbXTtcbiAgICAgICAgICAkKCdpbnB1dCcpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgIHBsYXllck5hbWVzLnB1c2goJCh0aGlzKS52YWwoKSk7XG4gICAgICAgICAgICBwbGF5ZXJQb2ludHMucHVzaCgwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwb3N0VG91cm5leSh0b3Vybk5hbWUsIHBsYXllck5hbWVzLnNsaWNlKDEpLCBwbGF5ZXJQb2ludHMuc2xpY2UoMSkpXG4gICAgICAgIH1cbiAgICAgIH0+U3VibWl0PC9idXR0b24+XG4gIDwvZGl2PlxuKVxuIl19