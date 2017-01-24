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
    value: function retrieveAllTournaments() {
      axios.get('/tourneys').then(function (tourneys) {
        console.log('tourneys', tourneys);
        var tourneyArray = [];
        tourneyArray.push(tourneys);
        this.setState({
          tournaments: tourneyArray
        });
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
      var context = this;
      console.log('axiosPOST');
      axios.post('/', {
        tournamentName: tournamentName,
        username: username,
        points: points
      }).then(function (res) {
        context.switchToShowAllTourneyView();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJzaG93QWxsVG91cm5leXMiLCJzaG93TmV3VG91cm5leSIsInRvdXJuYW1lbnRzIiwidG91cm5hbWVudE5hbWUiLCJheGlvcyIsImdldCIsInRoZW4iLCJ0b3VybmV5cyIsImNvbnNvbGUiLCJsb2ciLCJ0b3VybmV5QXJyYXkiLCJwdXNoIiwic2V0U3RhdGUiLCJ1c2VybmFtZSIsInBvaW50cyIsImNvbnRleHQiLCJwb3N0IiwicmVzIiwic3dpdGNoVG9TaG93QWxsVG91cm5leVZpZXciLCJjYXRjaCIsImVyciIsInN3aXRjaFRvTmV3VG91cm5leVZpZXciLCJwb3N0VG91cm5leVRvRGF0YWJhc2UiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsdUJBQWlCLEtBRE47QUFFWEMsc0JBQWdCLElBRkw7QUFHWEMsbUJBQWEsQ0FBQyxFQUFDQyxnQkFBZSxXQUFoQixFQUFELEVBQStCLEVBQUNBLGdCQUFlLFFBQWhCLEVBQS9CO0FBSEYsS0FBYjtBQUZpQjtBQU9sQjs7QUFFRDs7Ozs7NkNBQ3lCO0FBQ3ZCQyxZQUFNQyxHQUFOLENBQVUsV0FBVixFQUF1QkMsSUFBdkIsQ0FBNEIsVUFBU0MsUUFBVCxFQUFtQjtBQUM3Q0MsZ0JBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixRQUF4QjtBQUNBLFlBQUlHLGVBQWUsRUFBbkI7QUFDQUEscUJBQWFDLElBQWIsQ0FBa0JKLFFBQWxCO0FBQ0EsYUFBS0ssUUFBTCxDQUFjO0FBQ1pWLHVCQUFhUTtBQURELFNBQWQ7QUFHRCxPQVBEO0FBUUQ7O0FBRUQ7Ozs7NkNBQ3lCO0FBQ3ZCLFdBQUtFLFFBQUwsQ0FBYztBQUNaWix5QkFBaUIsS0FETDtBQUVaQyx3QkFBZ0I7QUFGSixPQUFkO0FBSUQ7OztpREFFNEI7QUFDM0IsV0FBS1csUUFBTCxDQUFjO0FBQ1paLHlCQUFpQixJQURMO0FBRVpDLHdCQUFnQjtBQUZKLE9BQWQ7QUFJRDs7QUFFRDs7OzswQ0FDc0JFLGMsRUFBZ0JVLFEsRUFBVUMsTSxFQUFRO0FBQ3RELFVBQUlDLFVBQVUsSUFBZDtBQUNBUCxjQUFRQyxHQUFSLENBQVksV0FBWjtBQUNBTCxZQUFNWSxJQUFOLENBQVcsR0FBWCxFQUFnQjtBQUNkYix3QkFBZ0JBLGNBREY7QUFFZFUsa0JBQVVBLFFBRkk7QUFHZEMsZ0JBQVFBO0FBSE0sT0FBaEIsRUFJR1IsSUFKSCxDQUlRLFVBQVNXLEdBQVQsRUFBYztBQUNwQkYsZ0JBQVFHLDBCQUFSO0FBQ0QsT0FORCxFQU1HQyxLQU5ILENBTVMsVUFBU0MsR0FBVCxFQUFjO0FBQ3JCWixnQkFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJXLEdBQW5CO0FBQ0QsT0FSRDtBQVNEOzs7NkJBRVE7QUFBQTs7QUFDUCxVQUFJLEtBQUtyQixLQUFMLENBQVdDLGVBQWYsRUFBZ0M7QUFDOUIsZUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBUSxTQUFTO0FBQUEsdUJBQU0sT0FBS2tCLDBCQUFMLEVBQU47QUFBQSxlQUFqQjtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFRLFNBQVM7QUFBQSx1QkFBTSxPQUFLRyxzQkFBTCxFQUFOO0FBQUEsZUFBakI7QUFBQTtBQUFBLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFDRSxnQ0FBQyxXQUFELElBQWEsYUFBYSxLQUFLdEIsS0FBTCxDQUFXRyxXQUFyQztBQURGO0FBSEYsU0FERjtBQVNELE9BVkQsTUFVTyxJQUFJLEtBQUtILEtBQUwsQ0FBV0UsY0FBZixFQUErQjtBQUNwQyxlQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFRLFNBQVM7QUFBQSx1QkFBTSxPQUFLaUIsMEJBQUwsRUFBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQVEsU0FBUztBQUFBLHVCQUFNLE9BQUtHLHNCQUFMLEVBQU47QUFBQSxlQUFqQjtBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQTtBQUNFLGdDQUFDLFVBQUQsSUFBWSxhQUFhLEtBQUtDLHFCQUFMLENBQTJCQyxJQUEzQixDQUFnQyxJQUFoQyxDQUF6QjtBQURGO0FBSEYsU0FERjtBQVNEO0FBQ0Y7Ozs7RUExRWVDLE1BQU1DLFM7O0FBNkV4QkMsT0FBTzdCLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0FsbFRvdXJuZXlzOiBmYWxzZSxcbiAgICAgIHNob3dOZXdUb3VybmV5OiB0cnVlLFxuICAgICAgdG91cm5hbWVudHM6IFt7dG91cm5hbWVudE5hbWU6J01vbmlja2Vycyd9LCB7dG91cm5hbWVudE5hbWU6J0F2YWxvbid9XVxuICAgIH1cbiAgfVxuXG4gIC8vUkVUUklFVkUgQUxMIFRIRSBUT1VSTkFNRU5UUyBGUk9NIERBVEFCQVNFXG4gIHJldHJpZXZlQWxsVG91cm5hbWVudHMoKSB7XG4gICAgYXhpb3MuZ2V0KCcvdG91cm5leXMnKS50aGVuKGZ1bmN0aW9uKHRvdXJuZXlzKSB7XG4gICAgICBjb25zb2xlLmxvZygndG91cm5leXMnLCB0b3VybmV5cyk7XG4gICAgICB2YXIgdG91cm5leUFycmF5ID0gW107XG4gICAgICB0b3VybmV5QXJyYXkucHVzaCh0b3VybmV5cyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdG91cm5hbWVudHM6IHRvdXJuZXlBcnJheVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLy9TV0lUQ0ggVklFV1MgQkVUV0VFTiBDUkVBVEUgQSBORVcgVE9VUk5FWSBBTkQgU0hPVyBBTEwgVE9VUk5FWVNcbiAgc3dpdGNoVG9OZXdUb3VybmV5VmlldygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dBbGxUb3VybmV5czogZmFsc2UsXG4gICAgICBzaG93TmV3VG91cm5leTogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzd2l0Y2hUb1Nob3dBbGxUb3VybmV5VmlldygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dBbGxUb3VybmV5czogdHJ1ZSxcbiAgICAgIHNob3dOZXdUb3VybmV5OiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICAvL1BPU1QgQSBORVcgVE9VUk5BTUVOVCBUTyBUSEUgREFUQUJBU0VcbiAgcG9zdFRvdXJuZXlUb0RhdGFiYXNlKHRvdXJuYW1lbnROYW1lLCB1c2VybmFtZSwgcG9pbnRzKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKCdheGlvc1BPU1QnKVxuICAgIGF4aW9zLnBvc3QoJy8nLCB7XG4gICAgICB0b3VybmFtZW50TmFtZTogdG91cm5hbWVudE5hbWUsXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBwb2ludHM6IHBvaW50c1xuICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICBjb250ZXh0LnN3aXRjaFRvU2hvd0FsbFRvdXJuZXlWaWV3KCk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyJywgZXJyKTtcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dBbGxUb3VybmV5cykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc3dpdGNoVG9TaG93QWxsVG91cm5leVZpZXcoKX0+U2hvdyBBbGwgVG91cm5leXM8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc3dpdGNoVG9OZXdUb3VybmV5VmlldygpfT5TdGFydCBBIE5ldyBUb3VybmV5PC9idXR0b24+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxBbGxUb3VybmV5cyB0b3VybmFtZW50cz17dGhpcy5zdGF0ZS50b3VybmFtZW50c30vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2hvd05ld1RvdXJuZXkpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnN3aXRjaFRvU2hvd0FsbFRvdXJuZXlWaWV3KCl9PlNob3cgQWxsIFRvdXJuZXlzPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnN3aXRjaFRvTmV3VG91cm5leVZpZXcoKX0+U3RhcnQgQSBOZXcgVG91cm5leTwvYnV0dG9uPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmV3VG91cm5leSBwb3N0VG91cm5leT17dGhpcy5wb3N0VG91cm5leVRvRGF0YWJhc2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDtcbiJdfQ==