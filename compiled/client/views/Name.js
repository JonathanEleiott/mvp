"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Name = function (_React$Component) {
  _inherits(Name, _React$Component);

  function Name(props) {
    _classCallCheck(this, Name);

    var _this = _possibleConstructorReturn(this, (Name.__proto__ || Object.getPrototypeOf(Name)).call(this, props));

    _this.state = {
      points: 0
    };
    return _this;
  }

  _createClass(Name, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "td",
        {
          onClick: function onClick() {
            return _this2.setState({
              points: _this2.state.points += 1
            });
          } },
        this.props.name,
        ": ",
        this.state.points
      );
    }
  }]);

  return Name;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9OYW1lLmpzeCJdLCJuYW1lcyI6WyJOYW1lIiwicHJvcHMiLCJzdGF0ZSIsInBvaW50cyIsInNldFN0YXRlIiwibmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRO0FBREcsS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsbUJBQVM7QUFBQSxtQkFDUCxPQUFLQyxRQUFMLENBQWM7QUFDZEQsc0JBQVEsT0FBS0QsS0FBTCxDQUFXQyxNQUFYLElBQXFCO0FBRGYsYUFBZCxDQURPO0FBQUEsV0FEWDtBQUlPLGFBQUtGLEtBQUwsQ0FBV0ksSUFKbEI7QUFBQTtBQUkwQixhQUFLSCxLQUFMLENBQVdDO0FBSnJDLE9BREY7QUFRRDs7OztFQWpCZ0JHLE1BQU1DLFMiLCJmaWxlIjoiTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5hbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcG9pbnRzOiAwXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGRcbiAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBwb2ludHM6IHRoaXMuc3RhdGUucG9pbnRzICs9IDFcbiAgICAgICAgfSl9Pnt0aGlzLnByb3BzLm5hbWV9OiB7dGhpcy5zdGF0ZS5wb2ludHN9XG4gICAgICA8L3RkPlxuICAgIClcbiAgfVxufVxuIl19