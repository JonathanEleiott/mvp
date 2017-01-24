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
      tournaments: []
    };
    return _this;
  }

  //RETRIEVE ALL THE TOURNAMENTS FROM DATABASE


  _createClass(App, [{
    key: 'retrieveAllTournaments',
    value: function retrieveAllTournaments() {
      var context = this;
      console.log('retrieveAllTournaments');
      axios.get('/tourneys').then(function (tourneys) {
        var tourneyArray = [];
        tourneyArray.push(tourneys);
        console.log('tourneyArray', tourneyArray);
        context.setState({
          showAllTourneys: true,
          showNewTourney: false,
          tournaments: tourneyArray[0].data
        });
      }).catch(function (err) {
        console.log('err', err);
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
      this.retrieveAllTournaments();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJzaG93QWxsVG91cm5leXMiLCJzaG93TmV3VG91cm5leSIsInRvdXJuYW1lbnRzIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImdldCIsInRoZW4iLCJ0b3VybmV5cyIsInRvdXJuZXlBcnJheSIsInB1c2giLCJzZXRTdGF0ZSIsImRhdGEiLCJjYXRjaCIsImVyciIsInJldHJpZXZlQWxsVG91cm5hbWVudHMiLCJ0b3VybmFtZW50TmFtZSIsInVzZXJuYW1lIiwicG9pbnRzIiwicG9zdCIsInJlcyIsInN3aXRjaFRvU2hvd0FsbFRvdXJuZXlWaWV3Iiwic3dpdGNoVG9OZXdUb3VybmV5VmlldyIsInBvc3RUb3VybmV5VG9EYXRhYmFzZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyx1QkFBaUIsS0FETjtBQUVYQyxzQkFBZ0IsSUFGTDtBQUdYQyxtQkFBYTtBQUhGLEtBQWI7QUFGaUI7QUFPbEI7O0FBRUQ7Ozs7OzZDQUN5QjtBQUN2QixVQUFJQyxVQUFVLElBQWQ7QUFDQUMsY0FBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0FDLFlBQU1DLEdBQU4sQ0FBVSxXQUFWLEVBQXVCQyxJQUF2QixDQUE0QixVQUFTQyxRQUFULEVBQW1CO0FBQzdDLFlBQUlDLGVBQWUsRUFBbkI7QUFDQUEscUJBQWFDLElBQWIsQ0FBa0JGLFFBQWxCO0FBQ0FMLGdCQUFRQyxHQUFSLENBQVksY0FBWixFQUE0QkssWUFBNUI7QUFDQVAsZ0JBQVFTLFFBQVIsQ0FBaUI7QUFDZlosMkJBQWlCLElBREY7QUFFZkMsMEJBQWdCLEtBRkQ7QUFHZkMsdUJBQWFRLGFBQWEsQ0FBYixFQUFnQkc7QUFIZCxTQUFqQjtBQUtELE9BVEQsRUFTR0MsS0FUSCxDQVNTLFVBQVNDLEdBQVQsRUFBYztBQUNyQlgsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CVSxHQUFuQjtBQUNELE9BWEQ7QUFZRDs7QUFFRDs7Ozs2Q0FDeUI7QUFDdkIsV0FBS0gsUUFBTCxDQUFjO0FBQ1paLHlCQUFpQixLQURMO0FBRVpDLHdCQUFnQjtBQUZKLE9BQWQ7QUFJRDs7O2lEQUU0QjtBQUMzQixXQUFLZSxzQkFBTDtBQUNEOztBQUVEOzs7OzBDQUNzQkMsYyxFQUFnQkMsUSxFQUFVQyxNLEVBQVE7QUFDdEQsVUFBSWhCLFVBQVUsSUFBZDtBQUNBQyxjQUFRQyxHQUFSLENBQVksV0FBWjtBQUNBQyxZQUFNYyxJQUFOLENBQVcsR0FBWCxFQUFnQjtBQUNkSCx3QkFBZ0JBLGNBREY7QUFFZEMsa0JBQVVBLFFBRkk7QUFHZEMsZ0JBQVFBO0FBSE0sT0FBaEIsRUFJR1gsSUFKSCxDQUlRLFVBQVNhLEdBQVQsRUFBYztBQUNwQmxCLGdCQUFRbUIsMEJBQVI7QUFDRCxPQU5ELEVBTUdSLEtBTkgsQ0FNUyxVQUFTQyxHQUFULEVBQWM7QUFDckJYLGdCQUFRQyxHQUFSLENBQVksS0FBWixFQUFtQlUsR0FBbkI7QUFDRCxPQVJEO0FBU0Q7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQUksS0FBS2hCLEtBQUwsQ0FBV0MsZUFBZixFQUFnQztBQUM5QixlQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFRLFNBQVM7QUFBQSx1QkFBTSxPQUFLc0IsMEJBQUwsRUFBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQVEsU0FBUztBQUFBLHVCQUFNLE9BQUtDLHNCQUFMLEVBQU47QUFBQSxlQUFqQjtBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQTtBQUNFLGdDQUFDLFdBQUQsSUFBYSxhQUFhLEtBQUt4QixLQUFMLENBQVdHLFdBQXJDO0FBREY7QUFIRixTQURGO0FBU0QsT0FWRCxNQVVPLElBQUksS0FBS0gsS0FBTCxDQUFXRSxjQUFmLEVBQStCO0FBQ3BDLGVBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQVEsU0FBUztBQUFBLHVCQUFNLE9BQUtxQiwwQkFBTCxFQUFOO0FBQUEsZUFBakI7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBUSxTQUFTO0FBQUEsdUJBQU0sT0FBS0Msc0JBQUwsRUFBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQSxXQUZGO0FBR0U7QUFBQTtBQUFBO0FBQ0UsZ0NBQUMsVUFBRCxJQUFZLGFBQWEsS0FBS0MscUJBQUwsQ0FBMkJDLElBQTNCLENBQWdDLElBQWhDLENBQXpCO0FBREY7QUFIRixTQURGO0FBU0Q7QUFDRjs7OztFQTdFZUMsTUFBTUMsUzs7QUFnRnhCQyxPQUFPL0IsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93QWxsVG91cm5leXM6IGZhbHNlLFxuICAgICAgc2hvd05ld1RvdXJuZXk6IHRydWUsXG4gICAgICB0b3VybmFtZW50czogW11cbiAgICB9XG4gIH1cblxuICAvL1JFVFJJRVZFIEFMTCBUSEUgVE9VUk5BTUVOVFMgRlJPTSBEQVRBQkFTRVxuICByZXRyaWV2ZUFsbFRvdXJuYW1lbnRzKCkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICBjb25zb2xlLmxvZygncmV0cmlldmVBbGxUb3VybmFtZW50cycpXG4gICAgYXhpb3MuZ2V0KCcvdG91cm5leXMnKS50aGVuKGZ1bmN0aW9uKHRvdXJuZXlzKSB7XG4gICAgICB2YXIgdG91cm5leUFycmF5ID0gW107XG4gICAgICB0b3VybmV5QXJyYXkucHVzaCh0b3VybmV5cyk7XG4gICAgICBjb25zb2xlLmxvZygndG91cm5leUFycmF5JywgdG91cm5leUFycmF5KVxuICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dBbGxUb3VybmV5czogdHJ1ZSxcbiAgICAgICAgc2hvd05ld1RvdXJuZXk6IGZhbHNlLFxuICAgICAgICB0b3VybmFtZW50czogdG91cm5leUFycmF5WzBdLmRhdGFcbiAgICAgIH0pXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyJywgZXJyKTtcbiAgICB9KVxuICB9XG5cbiAgLy9TV0lUQ0ggVklFV1MgQkVUV0VFTiBDUkVBVEUgQSBORVcgVE9VUk5FWSBBTkQgU0hPVyBBTEwgVE9VUk5FWVNcbiAgc3dpdGNoVG9OZXdUb3VybmV5VmlldygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dBbGxUb3VybmV5czogZmFsc2UsXG4gICAgICBzaG93TmV3VG91cm5leTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgc3dpdGNoVG9TaG93QWxsVG91cm5leVZpZXcoKSB7XG4gICAgdGhpcy5yZXRyaWV2ZUFsbFRvdXJuYW1lbnRzKCk7XG4gIH1cblxuICAvL1BPU1QgQSBORVcgVE9VUk5BTUVOVCBUTyBUSEUgREFUQUJBU0VcbiAgcG9zdFRvdXJuZXlUb0RhdGFiYXNlKHRvdXJuYW1lbnROYW1lLCB1c2VybmFtZSwgcG9pbnRzKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKCdheGlvc1BPU1QnKVxuICAgIGF4aW9zLnBvc3QoJy8nLCB7XG4gICAgICB0b3VybmFtZW50TmFtZTogdG91cm5hbWVudE5hbWUsXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBwb2ludHM6IHBvaW50c1xuICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICBjb250ZXh0LnN3aXRjaFRvU2hvd0FsbFRvdXJuZXlWaWV3KCk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyJywgZXJyKTtcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dBbGxUb3VybmV5cykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc3dpdGNoVG9TaG93QWxsVG91cm5leVZpZXcoKX0+U2hvdyBBbGwgVG91cm5leXM8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc3dpdGNoVG9OZXdUb3VybmV5VmlldygpfT5TdGFydCBBIE5ldyBUb3VybmV5PC9idXR0b24+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxBbGxUb3VybmV5cyB0b3VybmFtZW50cz17dGhpcy5zdGF0ZS50b3VybmFtZW50c30vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2hvd05ld1RvdXJuZXkpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnN3aXRjaFRvU2hvd0FsbFRvdXJuZXlWaWV3KCl9PlNob3cgQWxsIFRvdXJuZXlzPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnN3aXRjaFRvTmV3VG91cm5leVZpZXcoKX0+U3RhcnQgQSBOZXcgVG91cm5leTwvYnV0dG9uPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmV3VG91cm5leSBwb3N0VG91cm5leT17dGhpcy5wb3N0VG91cm5leVRvRGF0YWJhc2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDtcbiJdfQ==