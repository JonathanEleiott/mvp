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

  //RETRIEVE ALL THE TOURNAMENTS FROM DATABASE


  _createClass(App, [{
    key: 'retrieveAllTournaments',
    value: function retrieveAllTournaments(allTournaments) {
      console.log('allTournaments', allTournaments);
      var tourneyArray = [];
      tourneyArray.push(allTournaments);
      this.setState({
        tournaments: tourneyArray
      });
    }

    //SWITCH VIEWS BETWEEN CREATE A NEW TOURNEY AND SHOW ALL TOURNEYS

  }, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJzaG93QWxsVG91cm5leXMiLCJzaG93TmV3VG91cm5leSIsInRvdXJuYW1lbnRzIiwidG91cm5hbWVudE5hbWUiLCJhbGxUb3VybmFtZW50cyIsImNvbnNvbGUiLCJsb2ciLCJ0b3VybmV5QXJyYXkiLCJwdXNoIiwic2V0U3RhdGUiLCJ1c2VybmFtZSIsInBvaW50cyIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVyciIsInN3aXRjaFRvU2hvd0FsbFRvdXJuZXlWaWV3Iiwic3dpdGNoVG9OZXdUb3VybmV5VmlldyIsInBvc3RUb3VybmV5VG9EYXRhYmFzZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyx1QkFBaUIsS0FETjtBQUVYQyxzQkFBZ0IsSUFGTDtBQUdYQyxtQkFBYSxDQUFDLEVBQUNDLGdCQUFlLFdBQWhCLEVBQUQsRUFBK0IsRUFBQ0EsZ0JBQWUsUUFBaEIsRUFBL0I7QUFIRixLQUFiO0FBRmlCO0FBT2xCOztBQUVEOzs7OzsyQ0FDdUJDLGMsRUFBZ0I7QUFDckNDLGNBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkYsY0FBOUI7QUFDQSxVQUFJRyxlQUFlLEVBQW5CO0FBQ0FBLG1CQUFhQyxJQUFiLENBQWtCSixjQUFsQjtBQUNBLFdBQUtLLFFBQUwsQ0FBYztBQUNaUCxxQkFBYUs7QUFERCxPQUFkO0FBR0Q7O0FBRUQ7Ozs7NkNBQ3lCO0FBQ3ZCLFdBQUtFLFFBQUwsQ0FBYztBQUNaVCx5QkFBaUIsS0FETDtBQUVaQyx3QkFBZ0I7QUFGSixPQUFkO0FBSUQ7OztpREFFNEI7QUFDM0IsV0FBS1EsUUFBTCxDQUFjO0FBQ1pULHlCQUFpQixJQURMO0FBRVpDLHdCQUFnQjtBQUZKLE9BQWQ7QUFJRDs7QUFFRDs7OzswQ0FDc0JFLGMsRUFBZ0JPLFEsRUFBVUMsTSxFQUFRO0FBQ3REQyxZQUFNQyxJQUFOLENBQVcsR0FBWCxFQUFnQjtBQUNkVix3QkFBZ0JBLGNBREY7QUFFZE8sa0JBQVVBLFFBRkk7QUFHZEMsZ0JBQVFBO0FBSE0sT0FBaEIsRUFJR0csSUFKSCxDQUlRLFVBQVNDLEdBQVQsRUFBYztBQUNwQlYsZ0JBQVFDLEdBQVIsQ0FBWSxtQkFBWjtBQUNELE9BTkQsRUFNR1UsS0FOSCxDQU1TLFVBQVNDLEdBQVQsRUFBYztBQUNyQlosZ0JBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CVyxHQUFuQjtBQUNELE9BUkQ7QUFTRDs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBSSxLQUFLbEIsS0FBTCxDQUFXQyxlQUFmLEVBQWdDO0FBQzlCLGVBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQVEsU0FBUztBQUFBLHVCQUFNLE9BQUtrQiwwQkFBTCxFQUFOO0FBQUEsZUFBakI7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBUSxTQUFTO0FBQUEsdUJBQU0sT0FBS0Msc0JBQUwsRUFBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQSxXQUZGO0FBR0U7QUFBQTtBQUFBO0FBQ0UsZ0NBQUMsV0FBRCxJQUFhLGFBQWEsS0FBS3BCLEtBQUwsQ0FBV0csV0FBckM7QUFERjtBQUhGLFNBREY7QUFTRCxPQVZELE1BVU8sSUFBSSxLQUFLSCxLQUFMLENBQVdFLGNBQWYsRUFBK0I7QUFDcEMsZUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBUSxTQUFTO0FBQUEsdUJBQU0sT0FBS2lCLDBCQUFMLEVBQU47QUFBQSxlQUFqQjtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFRLFNBQVM7QUFBQSx1QkFBTSxPQUFLQyxzQkFBTCxFQUFOO0FBQUEsZUFBakI7QUFBQTtBQUFBLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFDRSxnQ0FBQyxVQUFELElBQVksYUFBYSxLQUFLQyxxQkFBTCxDQUEyQkMsSUFBM0IsQ0FBZ0MsSUFBaEMsQ0FBekI7QUFERjtBQUhGLFNBREY7QUFTRDtBQUNGOzs7O0VBdEVlQyxNQUFNQyxTOztBQXlFeEJDLE9BQU8zQixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dBbGxUb3VybmV5czogZmFsc2UsXG4gICAgICBzaG93TmV3VG91cm5leTogdHJ1ZSxcbiAgICAgIHRvdXJuYW1lbnRzOiBbe3RvdXJuYW1lbnROYW1lOidNb25pY2tlcnMnfSwge3RvdXJuYW1lbnROYW1lOidBdmFsb24nfV1cbiAgICB9XG4gIH1cblxuICAvL1JFVFJJRVZFIEFMTCBUSEUgVE9VUk5BTUVOVFMgRlJPTSBEQVRBQkFTRVxuICByZXRyaWV2ZUFsbFRvdXJuYW1lbnRzKGFsbFRvdXJuYW1lbnRzKSB7XG4gICAgY29uc29sZS5sb2coJ2FsbFRvdXJuYW1lbnRzJywgYWxsVG91cm5hbWVudHMpO1xuICAgIHZhciB0b3VybmV5QXJyYXkgPSBbXTtcbiAgICB0b3VybmV5QXJyYXkucHVzaChhbGxUb3VybmFtZW50cyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b3VybmFtZW50czogdG91cm5leUFycmF5XG4gICAgfSlcbiAgfVxuXG4gIC8vU1dJVENIIFZJRVdTIEJFVFdFRU4gQ1JFQVRFIEEgTkVXIFRPVVJORVkgQU5EIFNIT1cgQUxMIFRPVVJORVlTXG4gIHN3aXRjaFRvTmV3VG91cm5leVZpZXcoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93QWxsVG91cm5leXM6IGZhbHNlLFxuICAgICAgc2hvd05ld1RvdXJuZXk6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgc3dpdGNoVG9TaG93QWxsVG91cm5leVZpZXcoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93QWxsVG91cm5leXM6IHRydWUsXG4gICAgICBzaG93TmV3VG91cm5leTogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgLy9QT1NUIEEgTkVXIFRPVVJOQU1FTlQgVE8gVEhFIERBVEFCQVNFXG4gIHBvc3RUb3VybmV5VG9EYXRhYmFzZSh0b3VybmFtZW50TmFtZSwgdXNlcm5hbWUsIHBvaW50cykge1xuICAgIGF4aW9zLnBvc3QoJy8nLCB7XG4gICAgICB0b3VybmFtZW50TmFtZTogdG91cm5hbWVudE5hbWUsXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBwb2ludHM6IHBvaW50c1xuICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICBjb25zb2xlLmxvZygndG91cm5hbWVudCBwb3N0ZWQnKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnInLCBlcnIpO1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd0FsbFRvdXJuZXlzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zd2l0Y2hUb1Nob3dBbGxUb3VybmV5VmlldygpfT5TaG93IEFsbCBUb3VybmV5czwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zd2l0Y2hUb05ld1RvdXJuZXlWaWV3KCl9PlN0YXJ0IEEgTmV3IFRvdXJuZXk8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEFsbFRvdXJuZXlzIHRvdXJuYW1lbnRzPXt0aGlzLnN0YXRlLnRvdXJuYW1lbnRzfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zaG93TmV3VG91cm5leSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc3dpdGNoVG9TaG93QWxsVG91cm5leVZpZXcoKX0+U2hvdyBBbGwgVG91cm5leXM8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc3dpdGNoVG9OZXdUb3VybmV5VmlldygpfT5TdGFydCBBIE5ldyBUb3VybmV5PC9idXR0b24+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOZXdUb3VybmV5IHBvc3RUb3VybmV5PXt0aGlzLnBvc3RUb3VybmV5VG9EYXRhYmFzZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwO1xuIl19