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
      tournaments: [],
      players: []
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
        var playerArray = [];
        tourneyArray.push(tourneys);
        for (var i = 0; i < tourneyArray[0].data.length; i++) {
          playerArray.push(tourneyArray[0].data[i].players);
        }
        console.log('tourneyArray', tourneyArray);
        context.setState({
          showAllTourneys: true,
          showNewTourney: false,
          tournaments: tourneyArray[0].data,
          players: playerArray
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
            React.createElement(AllTourneys, { tournaments: this.state.tournaments, players: this.state.players })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJzaG93QWxsVG91cm5leXMiLCJzaG93TmV3VG91cm5leSIsInRvdXJuYW1lbnRzIiwicGxheWVycyIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwidG91cm5leXMiLCJ0b3VybmV5QXJyYXkiLCJwbGF5ZXJBcnJheSIsInB1c2giLCJpIiwiZGF0YSIsImxlbmd0aCIsInNldFN0YXRlIiwiY2F0Y2giLCJlcnIiLCJyZXRyaWV2ZUFsbFRvdXJuYW1lbnRzIiwidG91cm5hbWVudE5hbWUiLCJ1c2VybmFtZSIsInBvaW50cyIsInBvc3QiLCJyZXMiLCJzd2l0Y2hUb1Nob3dBbGxUb3VybmV5VmlldyIsInN3aXRjaFRvTmV3VG91cm5leVZpZXciLCJwb3N0VG91cm5leVRvRGF0YWJhc2UiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsdUJBQWlCLEtBRE47QUFFWEMsc0JBQWdCLElBRkw7QUFHWEMsbUJBQWEsRUFIRjtBQUlYQyxlQUFTO0FBSkUsS0FBYjtBQUZpQjtBQVFsQjs7QUFFRDs7Ozs7NkNBQ3lCO0FBQ3ZCLFVBQUlDLFVBQVUsSUFBZDtBQUNBQyxjQUFRQyxHQUFSLENBQVksd0JBQVo7QUFDQUMsWUFBTUMsR0FBTixDQUFVLFdBQVYsRUFBdUJDLElBQXZCLENBQTRCLFVBQVNDLFFBQVQsRUFBbUI7QUFDN0MsWUFBSUMsZUFBZSxFQUFuQjtBQUNBLFlBQUlDLGNBQWMsRUFBbEI7QUFDQUQscUJBQWFFLElBQWIsQ0FBa0JILFFBQWxCO0FBQ0EsYUFBSyxJQUFJSSxJQUFLLENBQWQsRUFBaUJBLElBQUlILGFBQWEsQ0FBYixFQUFnQkksSUFBaEIsQ0FBcUJDLE1BQTFDLEVBQWtERixHQUFsRCxFQUF1RDtBQUNyREYsc0JBQVlDLElBQVosQ0FBaUJGLGFBQWEsQ0FBYixFQUFnQkksSUFBaEIsQ0FBcUJELENBQXJCLEVBQXdCWCxPQUF6QztBQUNEO0FBQ0RFLGdCQUFRQyxHQUFSLENBQVksY0FBWixFQUE0QkssWUFBNUI7QUFDQVAsZ0JBQVFhLFFBQVIsQ0FBaUI7QUFDZmpCLDJCQUFpQixJQURGO0FBRWZDLDBCQUFnQixLQUZEO0FBR2ZDLHVCQUFhUyxhQUFhLENBQWIsRUFBZ0JJLElBSGQ7QUFJZlosbUJBQVNTO0FBSk0sU0FBakI7QUFNRCxPQWRELEVBY0dNLEtBZEgsQ0FjUyxVQUFTQyxHQUFULEVBQWM7QUFDckJkLGdCQUFRQyxHQUFSLENBQVksS0FBWixFQUFtQmEsR0FBbkI7QUFDRCxPQWhCRDtBQWlCRDs7QUFFRDs7Ozs2Q0FDeUI7QUFDdkIsV0FBS0YsUUFBTCxDQUFjO0FBQ1pqQix5QkFBaUIsS0FETDtBQUVaQyx3QkFBZ0I7QUFGSixPQUFkO0FBSUQ7OztpREFFNEI7QUFDM0IsV0FBS21CLHNCQUFMO0FBQ0Q7O0FBRUQ7Ozs7MENBQ3NCQyxjLEVBQWdCQyxRLEVBQVVDLE0sRUFBUTtBQUN0RCxVQUFJbkIsVUFBVSxJQUFkO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FDLFlBQU1pQixJQUFOLENBQVcsR0FBWCxFQUFnQjtBQUNkSCxzQ0FEYztBQUVkQywwQkFGYztBQUdkQztBQUhjLE9BQWhCLEVBSUdkLElBSkgsQ0FJUSxVQUFTZ0IsR0FBVCxFQUFjO0FBQ3BCckIsZ0JBQVFzQiwwQkFBUjtBQUNELE9BTkQsRUFNR1IsS0FOSCxDQU1TLFVBQVNDLEdBQVQsRUFBYztBQUNyQmQsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CYSxHQUFuQjtBQUNELE9BUkQ7QUFTRDs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBSSxLQUFLcEIsS0FBTCxDQUFXQyxlQUFmLEVBQWdDO0FBQzlCLGVBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQVEsU0FBUztBQUFBLHVCQUFNLE9BQUswQiwwQkFBTCxFQUFOO0FBQUEsZUFBakI7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBUSxTQUFTO0FBQUEsdUJBQU0sT0FBS0Msc0JBQUwsRUFBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQSxXQUZGO0FBR0U7QUFBQTtBQUFBO0FBQ0UsZ0NBQUMsV0FBRCxJQUFhLGFBQWEsS0FBSzVCLEtBQUwsQ0FBV0csV0FBckMsRUFBa0QsU0FBUyxLQUFLSCxLQUFMLENBQVdJLE9BQXRFO0FBREY7QUFIRixTQURGO0FBU0QsT0FWRCxNQVVPLElBQUksS0FBS0osS0FBTCxDQUFXRSxjQUFmLEVBQStCO0FBQ3BDLGVBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQVEsU0FBUztBQUFBLHVCQUFNLE9BQUt5QiwwQkFBTCxFQUFOO0FBQUEsZUFBakI7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBUSxTQUFTO0FBQUEsdUJBQU0sT0FBS0Msc0JBQUwsRUFBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQSxXQUZGO0FBR0U7QUFBQTtBQUFBO0FBQ0UsZ0NBQUMsVUFBRCxJQUFZLGFBQWEsS0FBS0MscUJBQUwsQ0FBMkJDLElBQTNCLENBQWdDLElBQWhDLENBQXpCO0FBREY7QUFIRixTQURGO0FBU0Q7QUFDRjs7OztFQW5GZUMsTUFBTUMsUzs7QUFzRnhCQyxPQUFPbkMsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93QWxsVG91cm5leXM6IGZhbHNlLFxuICAgICAgc2hvd05ld1RvdXJuZXk6IHRydWUsXG4gICAgICB0b3VybmFtZW50czogW10sXG4gICAgICBwbGF5ZXJzOiBbXVxuICAgIH1cbiAgfVxuXG4gIC8vUkVUUklFVkUgQUxMIFRIRSBUT1VSTkFNRU5UUyBGUk9NIERBVEFCQVNFXG4gIHJldHJpZXZlQWxsVG91cm5hbWVudHMoKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKCdyZXRyaWV2ZUFsbFRvdXJuYW1lbnRzJylcbiAgICBheGlvcy5nZXQoJy90b3VybmV5cycpLnRoZW4oZnVuY3Rpb24odG91cm5leXMpIHtcbiAgICAgIHZhciB0b3VybmV5QXJyYXkgPSBbXTtcbiAgICAgIHZhciBwbGF5ZXJBcnJheSA9IFtdO1xuICAgICAgdG91cm5leUFycmF5LnB1c2godG91cm5leXMpO1xuICAgICAgZm9yICh2YXIgaSAgPSAwOyBpIDwgdG91cm5leUFycmF5WzBdLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGxheWVyQXJyYXkucHVzaCh0b3VybmV5QXJyYXlbMF0uZGF0YVtpXS5wbGF5ZXJzKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCd0b3VybmV5QXJyYXknLCB0b3VybmV5QXJyYXkpXG4gICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgc2hvd0FsbFRvdXJuZXlzOiB0cnVlLFxuICAgICAgICBzaG93TmV3VG91cm5leTogZmFsc2UsXG4gICAgICAgIHRvdXJuYW1lbnRzOiB0b3VybmV5QXJyYXlbMF0uZGF0YSxcbiAgICAgICAgcGxheWVyczogcGxheWVyQXJyYXlcbiAgICAgIH0pXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyJywgZXJyKTtcbiAgICB9KVxuICB9XG5cbiAgLy9TV0lUQ0ggVklFV1MgQkVUV0VFTiBDUkVBVEUgQSBORVcgVE9VUk5FWSBBTkQgU0hPVyBBTEwgVE9VUk5FWVNcbiAgc3dpdGNoVG9OZXdUb3VybmV5VmlldygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dBbGxUb3VybmV5czogZmFsc2UsXG4gICAgICBzaG93TmV3VG91cm5leTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgc3dpdGNoVG9TaG93QWxsVG91cm5leVZpZXcoKSB7XG4gICAgdGhpcy5yZXRyaWV2ZUFsbFRvdXJuYW1lbnRzKCk7XG4gIH1cblxuICAvL1BPU1QgQSBORVcgVE9VUk5BTUVOVCBUTyBUSEUgREFUQUJBU0VcbiAgcG9zdFRvdXJuZXlUb0RhdGFiYXNlKHRvdXJuYW1lbnROYW1lLCB1c2VybmFtZSwgcG9pbnRzKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKCdheGlvc1BPU1QnKVxuICAgIGF4aW9zLnBvc3QoJy8nLCB7XG4gICAgICB0b3VybmFtZW50TmFtZSxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgcG9pbnRzXG4gICAgfSkudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgIGNvbnRleHQuc3dpdGNoVG9TaG93QWxsVG91cm5leVZpZXcoKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnInLCBlcnIpO1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd0FsbFRvdXJuZXlzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zd2l0Y2hUb1Nob3dBbGxUb3VybmV5VmlldygpfT5TaG93IEFsbCBUb3VybmV5czwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zd2l0Y2hUb05ld1RvdXJuZXlWaWV3KCl9PlN0YXJ0IEEgTmV3IFRvdXJuZXk8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEFsbFRvdXJuZXlzIHRvdXJuYW1lbnRzPXt0aGlzLnN0YXRlLnRvdXJuYW1lbnRzfSBwbGF5ZXJzPXt0aGlzLnN0YXRlLnBsYXllcnN9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNob3dOZXdUb3VybmV5KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zd2l0Y2hUb1Nob3dBbGxUb3VybmV5VmlldygpfT5TaG93IEFsbCBUb3VybmV5czwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zd2l0Y2hUb05ld1RvdXJuZXlWaWV3KCl9PlN0YXJ0IEEgTmV3IFRvdXJuZXk8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5ld1RvdXJuZXkgcG9zdFRvdXJuZXk9e3RoaXMucG9zdFRvdXJuZXlUb0RhdGFiYXNlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=