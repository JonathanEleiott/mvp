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
    value: function postTourneyToDatabase(tournamentName, players) {
      var context = this;
      console.log('axiosPOST');
      axios.post('/', {
        tournamentName: tournamentName,
        players: players
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJzaG93QWxsVG91cm5leXMiLCJzaG93TmV3VG91cm5leSIsInRvdXJuYW1lbnRzIiwicGxheWVycyIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwidG91cm5leXMiLCJ0b3VybmV5QXJyYXkiLCJwbGF5ZXJBcnJheSIsInB1c2giLCJpIiwiZGF0YSIsImxlbmd0aCIsInNldFN0YXRlIiwiY2F0Y2giLCJlcnIiLCJyZXRyaWV2ZUFsbFRvdXJuYW1lbnRzIiwidG91cm5hbWVudE5hbWUiLCJwb3N0IiwicmVzIiwic3dpdGNoVG9TaG93QWxsVG91cm5leVZpZXciLCJzd2l0Y2hUb05ld1RvdXJuZXlWaWV3IiwicG9zdFRvdXJuZXlUb0RhdGFiYXNlIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHVCQUFpQixLQUROO0FBRVhDLHNCQUFnQixJQUZMO0FBR1hDLG1CQUFhLEVBSEY7QUFJWEMsZUFBUztBQUpFLEtBQWI7QUFGaUI7QUFRbEI7O0FBRUQ7Ozs7OzZDQUN5QjtBQUN2QixVQUFJQyxVQUFVLElBQWQ7QUFDQUMsY0FBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0FDLFlBQU1DLEdBQU4sQ0FBVSxXQUFWLEVBQXVCQyxJQUF2QixDQUE0QixVQUFTQyxRQUFULEVBQW1CO0FBQzdDLFlBQUlDLGVBQWUsRUFBbkI7QUFDQSxZQUFJQyxjQUFjLEVBQWxCO0FBQ0FELHFCQUFhRSxJQUFiLENBQWtCSCxRQUFsQjtBQUNBLGFBQUssSUFBSUksSUFBSyxDQUFkLEVBQWlCQSxJQUFJSCxhQUFhLENBQWIsRUFBZ0JJLElBQWhCLENBQXFCQyxNQUExQyxFQUFrREYsR0FBbEQsRUFBdUQ7QUFDckRGLHNCQUFZQyxJQUFaLENBQWlCRixhQUFhLENBQWIsRUFBZ0JJLElBQWhCLENBQXFCRCxDQUFyQixFQUF3QlgsT0FBekM7QUFDRDtBQUNERSxnQkFBUUMsR0FBUixDQUFZLGNBQVosRUFBNEJLLFlBQTVCO0FBQ0FQLGdCQUFRYSxRQUFSLENBQWlCO0FBQ2ZqQiwyQkFBaUIsSUFERjtBQUVmQywwQkFBZ0IsS0FGRDtBQUdmQyx1QkFBYVMsYUFBYSxDQUFiLEVBQWdCSSxJQUhkO0FBSWZaLG1CQUFTUztBQUpNLFNBQWpCO0FBTUQsT0FkRCxFQWNHTSxLQWRILENBY1MsVUFBU0MsR0FBVCxFQUFjO0FBQ3JCZCxnQkFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJhLEdBQW5CO0FBQ0QsT0FoQkQ7QUFpQkQ7O0FBRUQ7Ozs7NkNBQ3lCO0FBQ3ZCLFdBQUtGLFFBQUwsQ0FBYztBQUNaakIseUJBQWlCLEtBREw7QUFFWkMsd0JBQWdCO0FBRkosT0FBZDtBQUlEOzs7aURBRTRCO0FBQzNCLFdBQUttQixzQkFBTDtBQUNEOztBQUVEOzs7OzBDQUNzQkMsYyxFQUFnQmxCLE8sRUFBUztBQUM3QyxVQUFJQyxVQUFVLElBQWQ7QUFDQUMsY0FBUUMsR0FBUixDQUFZLFdBQVo7QUFDQUMsWUFBTWUsSUFBTixDQUFXLEdBQVgsRUFBZ0I7QUFDZEQsc0NBRGM7QUFFZGxCO0FBRmMsT0FBaEIsRUFHR00sSUFISCxDQUdRLFVBQVNjLEdBQVQsRUFBYztBQUNwQm5CLGdCQUFRb0IsMEJBQVI7QUFDRCxPQUxELEVBS0dOLEtBTEgsQ0FLUyxVQUFTQyxHQUFULEVBQWM7QUFDckJkLGdCQUFRQyxHQUFSLENBQVksS0FBWixFQUFtQmEsR0FBbkI7QUFDRCxPQVBEO0FBUUQ7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQUksS0FBS3BCLEtBQUwsQ0FBV0MsZUFBZixFQUFnQztBQUM5QixlQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFRLFNBQVM7QUFBQSx1QkFBTSxPQUFLd0IsMEJBQUwsRUFBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQVEsU0FBUztBQUFBLHVCQUFNLE9BQUtDLHNCQUFMLEVBQU47QUFBQSxlQUFqQjtBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQTtBQUNFLGdDQUFDLFdBQUQsSUFBYSxhQUFhLEtBQUsxQixLQUFMLENBQVdHLFdBQXJDLEVBQWtELFNBQVMsS0FBS0gsS0FBTCxDQUFXSSxPQUF0RTtBQURGO0FBSEYsU0FERjtBQVNELE9BVkQsTUFVTyxJQUFJLEtBQUtKLEtBQUwsQ0FBV0UsY0FBZixFQUErQjtBQUNwQyxlQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFRLFNBQVM7QUFBQSx1QkFBTSxPQUFLdUIsMEJBQUwsRUFBTjtBQUFBLGVBQWpCO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQVEsU0FBUztBQUFBLHVCQUFNLE9BQUtDLHNCQUFMLEVBQU47QUFBQSxlQUFqQjtBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQTtBQUNFLGdDQUFDLFVBQUQsSUFBWSxhQUFhLEtBQUtDLHFCQUFMLENBQTJCQyxJQUEzQixDQUFnQyxJQUFoQyxDQUF6QjtBQURGO0FBSEYsU0FERjtBQVNEO0FBQ0Y7Ozs7RUFsRmVDLE1BQU1DLFM7O0FBcUZ4QkMsT0FBT2pDLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0FsbFRvdXJuZXlzOiBmYWxzZSxcbiAgICAgIHNob3dOZXdUb3VybmV5OiB0cnVlLFxuICAgICAgdG91cm5hbWVudHM6IFtdLFxuICAgICAgcGxheWVyczogW11cbiAgICB9XG4gIH1cblxuICAvL1JFVFJJRVZFIEFMTCBUSEUgVE9VUk5BTUVOVFMgRlJPTSBEQVRBQkFTRVxuICByZXRyaWV2ZUFsbFRvdXJuYW1lbnRzKCkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICBjb25zb2xlLmxvZygncmV0cmlldmVBbGxUb3VybmFtZW50cycpXG4gICAgYXhpb3MuZ2V0KCcvdG91cm5leXMnKS50aGVuKGZ1bmN0aW9uKHRvdXJuZXlzKSB7XG4gICAgICB2YXIgdG91cm5leUFycmF5ID0gW107XG4gICAgICB2YXIgcGxheWVyQXJyYXkgPSBbXTtcbiAgICAgIHRvdXJuZXlBcnJheS5wdXNoKHRvdXJuZXlzKTtcbiAgICAgIGZvciAodmFyIGkgID0gMDsgaSA8IHRvdXJuZXlBcnJheVswXS5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBsYXllckFycmF5LnB1c2godG91cm5leUFycmF5WzBdLmRhdGFbaV0ucGxheWVycyk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygndG91cm5leUFycmF5JywgdG91cm5leUFycmF5KVxuICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dBbGxUb3VybmV5czogdHJ1ZSxcbiAgICAgICAgc2hvd05ld1RvdXJuZXk6IGZhbHNlLFxuICAgICAgICB0b3VybmFtZW50czogdG91cm5leUFycmF5WzBdLmRhdGEsXG4gICAgICAgIHBsYXllcnM6IHBsYXllckFycmF5XG4gICAgICB9KVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ2VycicsIGVycik7XG4gICAgfSlcbiAgfVxuXG4gIC8vU1dJVENIIFZJRVdTIEJFVFdFRU4gQ1JFQVRFIEEgTkVXIFRPVVJORVkgQU5EIFNIT1cgQUxMIFRPVVJORVlTXG4gIHN3aXRjaFRvTmV3VG91cm5leVZpZXcoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93QWxsVG91cm5leXM6IGZhbHNlLFxuICAgICAgc2hvd05ld1RvdXJuZXk6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHN3aXRjaFRvU2hvd0FsbFRvdXJuZXlWaWV3KCkge1xuICAgIHRoaXMucmV0cmlldmVBbGxUb3VybmFtZW50cygpO1xuICB9XG5cbiAgLy9QT1NUIEEgTkVXIFRPVVJOQU1FTlQgVE8gVEhFIERBVEFCQVNFXG4gIHBvc3RUb3VybmV5VG9EYXRhYmFzZSh0b3VybmFtZW50TmFtZSwgcGxheWVycykge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICBjb25zb2xlLmxvZygnYXhpb3NQT1NUJylcbiAgICBheGlvcy5wb3N0KCcvJywge1xuICAgICAgdG91cm5hbWVudE5hbWUsXG4gICAgICBwbGF5ZXJzXG4gICAgfSkudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgIGNvbnRleHQuc3dpdGNoVG9TaG93QWxsVG91cm5leVZpZXcoKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnInLCBlcnIpO1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd0FsbFRvdXJuZXlzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zd2l0Y2hUb1Nob3dBbGxUb3VybmV5VmlldygpfT5TaG93IEFsbCBUb3VybmV5czwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zd2l0Y2hUb05ld1RvdXJuZXlWaWV3KCl9PlN0YXJ0IEEgTmV3IFRvdXJuZXk8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEFsbFRvdXJuZXlzIHRvdXJuYW1lbnRzPXt0aGlzLnN0YXRlLnRvdXJuYW1lbnRzfSBwbGF5ZXJzPXt0aGlzLnN0YXRlLnBsYXllcnN9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNob3dOZXdUb3VybmV5KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zd2l0Y2hUb1Nob3dBbGxUb3VybmV5VmlldygpfT5TaG93IEFsbCBUb3VybmV5czwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zd2l0Y2hUb05ld1RvdXJuZXlWaWV3KCl9PlN0YXJ0IEEgTmV3IFRvdXJuZXk8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5ld1RvdXJuZXkgcG9zdFRvdXJuZXk9e3RoaXMucG9zdFRvdXJuZXlUb0RhdGFiYXNlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=