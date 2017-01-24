'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      showAllTourneys: false,
      showNewTourney: true,
      tournaments: [{ tournamentName: 'Jon' }, { tournamentName: 'Bill' }]
    };
    return _this;
  }

  // this.props.retrieveAllTournaments(allTournaments) =>
  // this.setState({
  //   this.state.players.push(allTournaments)
  // })

  _createClass(App, [{
    key: 'switchToNewTourneyView',
    value: function switchToNewTourneyView() {
      this.setState({
        showAllTourneys: false,
        showNewTourney: true
      });
    }
  }, {
    key: 'switchToShowAllTourneyView',
    value: function switchToShowAllTourneyView() {
      this.setState({
        showAllTourneys: true,
        showNewTourney: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.showAllTourneys) {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.switchToShowAllTourneyView();
              } },
            'Show All Tourneys'
          ),
          React.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.switchToNewTourneyView();
              } },
            'Start A New Tourney'
          ),
          React.createElement(
            'div',
            null,
            React.createElement(AllTourneys, { tournaments: this.state.tournaments })
          )
        );
      } else if (this.state.showNewTourney) {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.switchToShowAllTourneyView();
              } },
            'Show All Tourneys'
          ),
          React.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.switchToNewTourneyView();
              } },
            'Start A New Tourney'
          ),
          React.createElement(
            'div',
            null,
            React.createElement(NewTourney, null)
          )
        );
      }
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJzaG93QWxsVG91cm5leXMiLCJzaG93TmV3VG91cm5leSIsInRvdXJuYW1lbnRzIiwidG91cm5hbWVudE5hbWUiLCJzZXRTdGF0ZSIsInN3aXRjaFRvU2hvd0FsbFRvdXJuZXlWaWV3Iiwic3dpdGNoVG9OZXdUb3VybmV5VmlldyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHVCQUFpQixLQUROO0FBRVhDLHNCQUFnQixJQUZMO0FBR1hDLG1CQUFhLENBQUMsRUFBQ0MsZ0JBQWUsS0FBaEIsRUFBRCxFQUF5QixFQUFDQSxnQkFBZSxNQUFoQixFQUF6QjtBQUhGLEtBQWI7QUFGaUI7QUFPbEI7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7NkNBRXlCO0FBQ3ZCLFdBQUtDLFFBQUwsQ0FBYztBQUNaSix5QkFBaUIsS0FETDtBQUVaQyx3QkFBZ0I7QUFGSixPQUFkO0FBSUQ7OztpREFFNEI7QUFDM0IsV0FBS0csUUFBTCxDQUFjO0FBQ1pKLHlCQUFpQixJQURMO0FBRVpDLHdCQUFnQjtBQUZKLE9BQWQ7QUFJRDs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBSSxLQUFLRixLQUFMLENBQVdDLGVBQWYsRUFBZ0M7QUFDOUIsZUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBUSxTQUFTO0FBQUEsdUJBQU0sT0FBS0ssMEJBQUwsRUFBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQVEsU0FBUztBQUFBLHVCQUFNLE9BQUtDLHNCQUFMLEVBQU47QUFBQSxlQUFqQjtBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQTtBQUNFLGdDQUFDLFdBQUQsSUFBYSxhQUFhLEtBQUtQLEtBQUwsQ0FBV0csV0FBckM7QUFERjtBQUhGLFNBREY7QUFTRCxPQVZELE1BVU8sSUFBSSxLQUFLSCxLQUFMLENBQVdFLGNBQWYsRUFBK0I7QUFDcEMsZUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBUSxTQUFTO0FBQUEsdUJBQU0sT0FBS0ksMEJBQUwsRUFBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQVEsU0FBUztBQUFBLHVCQUFNLE9BQUtDLHNCQUFMLEVBQU47QUFBQSxlQUFqQjtBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQTtBQUNFLGdDQUFDLFVBQUQ7QUFERjtBQUhGLFNBREY7QUFTRDtBQUNGOzs7O0VBbkRlQyxNQUFNQyxTOztBQXNEeEJDLE9BQU9aLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0FsbFRvdXJuZXlzOiBmYWxzZSxcbiAgICAgIHNob3dOZXdUb3VybmV5OiB0cnVlLFxuICAgICAgdG91cm5hbWVudHM6IFt7dG91cm5hbWVudE5hbWU6J0pvbid9LCB7dG91cm5hbWVudE5hbWU6J0JpbGwnfV1cbiAgICB9XG4gIH1cblxuICAvLyB0aGlzLnByb3BzLnJldHJpZXZlQWxsVG91cm5hbWVudHMoYWxsVG91cm5hbWVudHMpID0+XG4gIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgIHRoaXMuc3RhdGUucGxheWVycy5wdXNoKGFsbFRvdXJuYW1lbnRzKVxuICAvLyB9KVxuXG4gIHN3aXRjaFRvTmV3VG91cm5leVZpZXcoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93QWxsVG91cm5leXM6IGZhbHNlLFxuICAgICAgc2hvd05ld1RvdXJuZXk6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgc3dpdGNoVG9TaG93QWxsVG91cm5leVZpZXcoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93QWxsVG91cm5leXM6IHRydWUsXG4gICAgICBzaG93TmV3VG91cm5leTogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dBbGxUb3VybmV5cykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc3dpdGNoVG9TaG93QWxsVG91cm5leVZpZXcoKX0+U2hvdyBBbGwgVG91cm5leXM8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc3dpdGNoVG9OZXdUb3VybmV5VmlldygpfT5TdGFydCBBIE5ldyBUb3VybmV5PC9idXR0b24+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxBbGxUb3VybmV5cyB0b3VybmFtZW50cz17dGhpcy5zdGF0ZS50b3VybmFtZW50c30vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2hvd05ld1RvdXJuZXkpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnN3aXRjaFRvU2hvd0FsbFRvdXJuZXlWaWV3KCl9PlNob3cgQWxsIFRvdXJuZXlzPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnN3aXRjaFRvTmV3VG91cm5leVZpZXcoKX0+U3RhcnQgQSBOZXcgVG91cm5leTwvYnV0dG9uPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmV3VG91cm5leSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDtcbiJdfQ==