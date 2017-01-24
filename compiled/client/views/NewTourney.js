"use strict";

var NewTourney = function NewTourney(_ref) {
  var postTourney = _ref.postTourney;
  return React.createElement(
    "div",
    { className: "componentBox" },
    React.createElement(
      "form",
      null,
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
            $(".addPlayerOrTeam").append("<p>New Player or Team Name <input name='player'></input></p>");
          } },
        "Add New Player Or Team"
      ),
      React.createElement("div", { className: "addPlayerOrTeam" }),
      React.createElement(
        "button",
        { onClick: function onClick() {
            postTourney(tourneyName);
          } },
        "Submit"
      )
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9OZXdUb3VybmV5LmpzeCJdLCJuYW1lcyI6WyJOZXdUb3VybmV5IiwicG9zdFRvdXJuZXkiLCIkIiwiYXBwZW5kIiwidG91cm5leU5hbWUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsYUFBYSxTQUFiQSxVQUFhO0FBQUEsTUFBRUMsV0FBRixRQUFFQSxXQUFGO0FBQUEsU0FDZjtBQUFBO0FBQUEsTUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFnQix1Q0FBTyxNQUFLLGFBQVo7QUFBaEIsT0FGRjtBQUdFO0FBQUE7QUFBQSxVQUFLLFNBQVMsbUJBQU07QUFDaEJDLGNBQUUsa0JBQUYsRUFBc0JDLE1BQXRCLENBQTZCLDhEQUE3QjtBQUNELFdBRkg7QUFBQTtBQUFBLE9BSEY7QUFNRSxtQ0FBSyxXQUFVLGlCQUFmLEdBTkY7QUFPRTtBQUFBO0FBQUEsVUFBUSxTQUFTLG1CQUFNO0FBQUNGLHdCQUFZRyxXQUFaO0FBQTJCLFdBQW5EO0FBQUE7QUFBQTtBQVBGO0FBREYsR0FEZTtBQUFBLENBQWpCIiwiZmlsZSI6Ik5ld1RvdXJuZXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTmV3VG91cm5leSA9ICh7cG9zdFRvdXJuZXl9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50Qm94XCI+XG4gICAgPGZvcm0+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5TdGFydCBOZXcgVG91cm5leTwvaDI+XG4gICAgICA8cD5Ub3VybmV5IE5hbWUgPGlucHV0IG5hbWU9XCJ0b3VybmV5TmFtZVwiPjwvaW5wdXQ+PC9wPlxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgJChcIi5hZGRQbGF5ZXJPclRlYW1cIikuYXBwZW5kKFwiPHA+TmV3IFBsYXllciBvciBUZWFtIE5hbWUgPGlucHV0IG5hbWU9J3BsYXllcic+PC9pbnB1dD48L3A+XCIpO1xuICAgICAgICB9fT5BZGQgTmV3IFBsYXllciBPciBUZWFtPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZFBsYXllck9yVGVhbVwiPjwvZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7cG9zdFRvdXJuZXkodG91cm5leU5hbWUsICl9fT5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuKVxuIl19