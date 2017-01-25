'use strict';

var PlayerList = function PlayerList(_ref) {
  var player = _ref.player;

  console.log('player', player);
  return React.createElement(
    'tbody',
    null,
    React.createElement(
      'tr',
      null,
      player.map(function (name) {
        return React.createElement(Name, { name: name });
      })
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC92aWV3cy9QbGF5ZXJMaXN0LmpzeCJdLCJuYW1lcyI6WyJQbGF5ZXJMaXN0IiwicGxheWVyIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsYUFBYSxTQUFiQSxVQUFhLE9BQWM7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBQzdCQyxVQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQkYsTUFBdEI7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNHQSxhQUFPRyxHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFVO0FBQ3BCLGVBQ0Usb0JBQUMsSUFBRCxJQUFNLE1BQU1BLElBQVosR0FERjtBQUVFLE9BSEg7QUFESDtBQURGLEdBREY7QUFXRCxDQWJEIiwiZmlsZSI6IlBsYXllckxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUGxheWVyTGlzdCA9ICh7cGxheWVyfSkgPT4ge1xuICBjb25zb2xlLmxvZygncGxheWVyJywgcGxheWVyKTtcbiAgcmV0dXJuIChcbiAgICA8dGJvZHk+XG4gICAgICA8dHI+XG4gICAgICAgIHtwbGF5ZXIubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxOYW1lIG5hbWU9e25hbWV9Lz5cbiAgICAgICAgICApfVxuICAgICAgICApfVxuICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuICApXG59XG4iXX0=