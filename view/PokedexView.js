//Style
import React from 'react';
import { StyleSheet, View, Button, SectionList, Text, Image } from 'react-native';
import { PokemonState } from '../state/pokemonstate';

const pokemonState = new PokemonState();

export default props => {

  const [pokemons, setPokemons] = React.useState([])

  React.useEffect( () => {
    async function getPokemons() {
      const response = (await pokemonState.getPokemons(25, 0)).results;
      const listPokemons = response.map(({name}) => name)

      setPokemons(listPokemons);
    }

    getPokemons();
  }, [])

  return (
    <View style={styles.container}>
      <Button title='click-me' onPress={ () => { setPokemons([...pokemons, ...pokemons]) } }></Button>
      {
        pokemons.map( pokemon =>
        <View>
          <Text>{pokemon}</Text>
        </View> )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
  },
  tittle: {
    color: "#ff0000"
  },
  item: {
    backgroundColor: '#fffafa',
    padding: 20,
    marginVertical: 8,
    width: '100%'
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  imageStyle: {
    padding: 10,
    marginTop: 9,
    marginLeft:10,
    height: 55,
    width: 50,
    backgroundColor: '#fffafa',
  },
  fff: {
    flexDirection: 'row'
  }
});

