"use strict";

var NewTourney = function NewTourney(_ref) {
  var postTourney = _ref.postTourney;
  return React.createElement(
    "div",
    { className: "componentBox" },
    React.createElement(
      "form",
      { action: "/", method: "POST", encType: "application/x-www-form-urlencoded" },
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
        { type: "submit" },
        "Submit"
      )
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9OZXdUb3VybmV5LmpzeCJdLCJuYW1lcyI6WyJOZXdUb3VybmV5IiwicG9zdFRvdXJuZXkiLCIkIiwiYXBwZW5kIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGFBQWEsU0FBYkEsVUFBYTtBQUFBLE1BQUVDLFdBQUYsUUFBRUEsV0FBRjtBQUFBLFNBQ2Y7QUFBQTtBQUFBLE1BQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQU0sUUFBTyxHQUFiLEVBQWlCLFFBQU8sTUFBeEIsRUFBK0IsU0FBUSxtQ0FBdkM7QUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFnQix1Q0FBTyxNQUFLLGFBQVo7QUFBaEIsT0FGRjtBQUdFO0FBQUE7QUFBQSxVQUFLLFNBQVMsbUJBQU07QUFDaEJDLGNBQUUsa0JBQUYsRUFBc0JDLE1BQXRCLENBQTZCLDhEQUE3QjtBQUNELFdBRkg7QUFBQTtBQUFBLE9BSEY7QUFNRSxtQ0FBSyxXQUFVLGlCQUFmLEdBTkY7QUFPRTtBQUFBO0FBQUEsVUFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBUEY7QUFERixHQURlO0FBQUEsQ0FBakIiLCJmaWxlIjoiTmV3VG91cm5leS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBOZXdUb3VybmV5ID0gKHtwb3N0VG91cm5leX0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRCb3hcIj5cbiAgICA8Zm9ybSBhY3Rpb249XCIvXCIgbWV0aG9kPVwiUE9TVFwiIGVuY1R5cGU9XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPlN0YXJ0IE5ldyBUb3VybmV5PC9oMj5cbiAgICAgIDxwPlRvdXJuZXkgTmFtZSA8aW5wdXQgbmFtZT1cInRvdXJuZXlOYW1lXCI+PC9pbnB1dD48L3A+XG4gICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAkKFwiLmFkZFBsYXllck9yVGVhbVwiKS5hcHBlbmQoXCI8cD5OZXcgUGxheWVyIG9yIFRlYW0gTmFtZSA8aW5wdXQgbmFtZT0ncGxheWVyJz48L2lucHV0PjwvcD5cIik7XG4gICAgICAgIH19PkFkZCBOZXcgUGxheWVyIE9yIFRlYW08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkUGxheWVyT3JUZWFtXCI+PC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiA+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbilcbiJdfQ==