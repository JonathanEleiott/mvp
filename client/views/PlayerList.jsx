var PlayerList = ({player}) => {
  console.log('player', player);

  return (
    <tr>
      {player.map((name) => (
          <Name name={name}/>
        )
      )}
    </tr>
  )
}
