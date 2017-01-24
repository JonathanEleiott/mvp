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
      tournaments: [{ tournamentName: 'Monickers' }, { tournamentName: 'Avalon' }]
    };
    return _this;
  }

  // this.props.retrieveAllTournaments(allTournaments) =>
  // this.setState({
  //   this.state.players.push(allTournaments)
  // })

  //SWITCH VIEWS BETWEEN CREATE A NEW TOURNEY AND SHOW ALL TOURNEYS


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

    //POST A NEW TOURNAMENT TO THE DATABASE

  }, {
    key: 'postTourneyToDatabase',
    value: function postTourneyToDatabase(tournamentName, username, points) {
      axios.post('/', {
        tournamentName: tournamentName,
        username: username,
        points: points
      }).then(function (res) {
        console.log('tournament posted');
      }).catch(function (err) {
        console.log('err', err);
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
            React.createElement(NewTourney, { postTourney: this.postTourneyToDatabase.bind(this) })
          )
        );
      }
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJzaG93QWxsVG91cm5leXMiLCJzaG93TmV3VG91cm5leSIsInRvdXJuYW1lbnRzIiwidG91cm5hbWVudE5hbWUiLCJzZXRTdGF0ZSIsInVzZXJuYW1lIiwicG9pbnRzIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsInN3aXRjaFRvU2hvd0FsbFRvdXJuZXlWaWV3Iiwic3dpdGNoVG9OZXdUb3VybmV5VmlldyIsInBvc3RUb3VybmV5VG9EYXRhYmFzZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyx1QkFBaUIsS0FETjtBQUVYQyxzQkFBZ0IsSUFGTDtBQUdYQyxtQkFBYSxDQUFDLEVBQUNDLGdCQUFlLFdBQWhCLEVBQUQsRUFBK0IsRUFBQ0EsZ0JBQWUsUUFBaEIsRUFBL0I7QUFIRixLQUFiO0FBRmlCO0FBT2xCOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs2Q0FDeUI7QUFDdkIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pKLHlCQUFpQixLQURMO0FBRVpDLHdCQUFnQjtBQUZKLE9BQWQ7QUFJRDs7O2lEQUU0QjtBQUMzQixXQUFLRyxRQUFMLENBQWM7QUFDWkoseUJBQWlCLElBREw7QUFFWkMsd0JBQWdCO0FBRkosT0FBZDtBQUlEOztBQUVEOzs7OzBDQUNzQkUsYyxFQUFnQkUsUSxFQUFVQyxNLEVBQVE7QUFDdERDLFlBQU1DLElBQU4sQ0FBVyxHQUFYLEVBQWdCO0FBQ2RMLHdCQUFnQkEsY0FERjtBQUVkRSxrQkFBVUEsUUFGSTtBQUdkQyxnQkFBUUE7QUFITSxPQUFoQixFQUlHRyxJQUpILENBSVEsVUFBU0MsR0FBVCxFQUFjO0FBQ3BCQyxnQkFBUUMsR0FBUixDQUFZLG1CQUFaO0FBQ0QsT0FORCxFQU1HQyxLQU5ILENBTVMsVUFBU0MsR0FBVCxFQUFjO0FBQ3JCSCxnQkFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJFLEdBQW5CO0FBQ0QsT0FSRDtBQVNEOzs7NkJBRVE7QUFBQTs7QUFDUCxVQUFJLEtBQUtmLEtBQUwsQ0FBV0MsZUFBZixFQUFnQztBQUM5QixlQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFRLFNBQVM7QUFBQSx1QkFBTSxPQUFLZSwwQkFBTCxFQUFOO0FBQUEsZUFBakI7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBUSxTQUFTO0FBQUEsdUJBQU0sT0FBS0Msc0JBQUwsRUFBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQSxXQUZGO0FBR0U7QUFBQTtBQUFBO0FBQ0UsZ0NBQUMsV0FBRCxJQUFhLGFBQWEsS0FBS2pCLEtBQUwsQ0FBV0csV0FBckM7QUFERjtBQUhGLFNBREY7QUFTRCxPQVZELE1BVU8sSUFBSSxLQUFLSCxLQUFMLENBQVdFLGNBQWYsRUFBK0I7QUFDcEMsZUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBUSxTQUFTO0FBQUEsdUJBQU0sT0FBS2MsMEJBQUwsRUFBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQVEsU0FBUztBQUFBLHVCQUFNLE9BQUtDLHNCQUFMLEVBQU47QUFBQSxlQUFqQjtBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQTtBQUNFLGdDQUFDLFVBQUQsSUFBWSxhQUFhLEtBQUtDLHFCQUFMLENBQTJCQyxJQUEzQixDQUFnQyxJQUFoQyxDQUF6QjtBQURGO0FBSEYsU0FERjtBQVNEO0FBQ0Y7Ozs7RUFqRWVDLE1BQU1DLFM7O0FBb0V4QkMsT0FBT3hCLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0FsbFRvdXJuZXlzOiBmYWxzZSxcbiAgICAgIHNob3dOZXdUb3VybmV5OiB0cnVlLFxuICAgICAgdG91cm5hbWVudHM6IFt7dG91cm5hbWVudE5hbWU6J01vbmlja2Vycyd9LCB7dG91cm5hbWVudE5hbWU6J0F2YWxvbid9XVxuICAgIH1cbiAgfVxuXG4gIC8vIHRoaXMucHJvcHMucmV0cmlldmVBbGxUb3VybmFtZW50cyhhbGxUb3VybmFtZW50cykgPT5cbiAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgdGhpcy5zdGF0ZS5wbGF5ZXJzLnB1c2goYWxsVG91cm5hbWVudHMpXG4gIC8vIH0pXG5cbiAgLy9TV0lUQ0ggVklFV1MgQkVUV0VFTiBDUkVBVEUgQSBORVcgVE9VUk5FWSBBTkQgU0hPVyBBTEwgVE9VUk5FWVNcbiAgc3dpdGNoVG9OZXdUb3VybmV5VmlldygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dBbGxUb3VybmV5czogZmFsc2UsXG4gICAgICBzaG93TmV3VG91cm5leTogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzd2l0Y2hUb1Nob3dBbGxUb3VybmV5VmlldygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dBbGxUb3VybmV5czogdHJ1ZSxcbiAgICAgIHNob3dOZXdUb3VybmV5OiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICAvL1BPU1QgQSBORVcgVE9VUk5BTUVOVCBUTyBUSEUgREFUQUJBU0VcbiAgcG9zdFRvdXJuZXlUb0RhdGFiYXNlKHRvdXJuYW1lbnROYW1lLCB1c2VybmFtZSwgcG9pbnRzKSB7XG4gICAgYXhpb3MucG9zdCgnLycsIHtcbiAgICAgIHRvdXJuYW1lbnROYW1lOiB0b3VybmFtZW50TmFtZSxcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIHBvaW50czogcG9pbnRzXG4gICAgfSkudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0b3VybmFtZW50IHBvc3RlZCcpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ2VycicsIGVycik7XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93QWxsVG91cm5leXMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnN3aXRjaFRvU2hvd0FsbFRvdXJuZXlWaWV3KCl9PlNob3cgQWxsIFRvdXJuZXlzPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnN3aXRjaFRvTmV3VG91cm5leVZpZXcoKX0+U3RhcnQgQSBOZXcgVG91cm5leTwvYnV0dG9uPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QWxsVG91cm5leXMgdG91cm5hbWVudHM9e3RoaXMuc3RhdGUudG91cm5hbWVudHN9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNob3dOZXdUb3VybmV5KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zd2l0Y2hUb1Nob3dBbGxUb3VybmV5VmlldygpfT5TaG93IEFsbCBUb3VybmV5czwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zd2l0Y2hUb05ld1RvdXJuZXlWaWV3KCl9PlN0YXJ0IEEgTmV3IFRvdXJuZXk8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5ld1RvdXJuZXkgcG9zdFRvdXJuZXk9e3RoaXMucG9zdFRvdXJuZXlUb0RhdGFiYXNlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=