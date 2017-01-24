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
          $('input').each(function (index) {
            playerNames.push($(this).val());
          });
          postTourney(tournName, playerNames.slice(1), 0);
        } },
      "Submit"
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9OZXdUb3VybmV5LmpzeCJdLCJuYW1lcyI6WyJOZXdUb3VybmV5IiwicG9zdFRvdXJuZXkiLCIkIiwiYXBwZW5kIiwidG91cm5OYW1lIiwidmFsIiwicGxheWVyTmFtZXMiLCJlYWNoIiwiaW5kZXgiLCJwdXNoIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsYUFBYSxTQUFiQSxVQUFhO0FBQUEsTUFBRUMsV0FBRixRQUFFQSxXQUFGO0FBQUEsU0FDZjtBQUFBO0FBQUEsTUFBSyxXQUFVLGNBQWY7QUFDSTtBQUFBO0FBQUEsUUFBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBLEtBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFnQixxQ0FBTyxNQUFLLGFBQVo7QUFBaEIsS0FGSjtBQUdJO0FBQUE7QUFBQSxRQUFLLFNBQVMsbUJBQU07QUFDaEJDLFlBQUUsa0JBQUYsRUFBc0JDLE1BQXRCLENBQTZCLG1FQUE3QjtBQUNELFNBRkg7QUFBQTtBQUFBLEtBSEo7QUFNSSxpQ0FBSyxXQUFVLGlCQUFmLEdBTko7QUFPSTtBQUFBO0FBQUEsUUFBUSxNQUFLLFFBQWIsRUFBc0IsU0FBUyxtQkFBTTtBQUNqQyxjQUFJQyxZQUFZRixFQUFFLHlCQUFGLEVBQTZCRyxHQUE3QixFQUFoQjtBQUNBLGNBQUlDLGNBQWMsRUFBbEI7QUFDQUosWUFBRSxPQUFGLEVBQVdLLElBQVgsQ0FBZ0IsVUFBU0MsS0FBVCxFQUFnQjtBQUM5QkYsd0JBQVlHLElBQVosQ0FBaUJQLEVBQUUsSUFBRixFQUFRRyxHQUFSLEVBQWpCO0FBQ0QsV0FGRDtBQUdBSixzQkFBWUcsU0FBWixFQUF1QkUsWUFBWUksS0FBWixDQUFrQixDQUFsQixDQUF2QixFQUE2QyxDQUE3QztBQUNELFNBUEg7QUFBQTtBQUFBO0FBUEosR0FEZTtBQUFBLENBQWpCIiwiZmlsZSI6Ik5ld1RvdXJuZXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTmV3VG91cm5leSA9ICh7cG9zdFRvdXJuZXl9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50Qm94XCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5TdGFydCBOZXcgVG91cm5leTwvaDI+XG4gICAgICA8cD5Ub3VybmV5IE5hbWUgPGlucHV0IG5hbWU9XCJ0b3VybmV5TmFtZVwiPjwvaW5wdXQ+PC9wPlxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgJChcIi5hZGRQbGF5ZXJPclRlYW1cIikuYXBwZW5kKFwiPHA+TmV3IFBsYXllciBvciBUZWFtIE5hbWUgPGlucHV0IGNsYXNzTmFtZT0ncGxheWVyJz48L2lucHV0PjwvcD5cIik7XG4gICAgICAgIH19PkFkZCBOZXcgUGxheWVyIE9yIFRlYW08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkUGxheWVyT3JUZWFtXCI+PC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgdmFyIHRvdXJuTmFtZSA9ICQoJ2lucHV0W25hbWU9dG91cm5leU5hbWVdJykudmFsKCk7XG4gICAgICAgICAgdmFyIHBsYXllck5hbWVzID0gW107XG4gICAgICAgICAgJCgnaW5wdXQnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICBwbGF5ZXJOYW1lcy5wdXNoKCQodGhpcykudmFsKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHBvc3RUb3VybmV5KHRvdXJuTmFtZSwgcGxheWVyTmFtZXMuc2xpY2UoMSksIDApXG4gICAgICAgIH1cbiAgICAgIH0+U3VibWl0PC9idXR0b24+XG4gIDwvZGl2PlxuKVxuIl19