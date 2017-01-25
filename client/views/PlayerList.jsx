var PlayerList = ({player}) => {
  console.log('player', player);
  return (
    <tbody>
      <tr>
        {player.map((name) => {
          return (
            <Name name={name}/>
          )}
        )}
      </tr>
    </tbody>
  )
}
