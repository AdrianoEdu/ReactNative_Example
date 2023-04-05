//Style
import React from 'react';
import { StyleSheet, View, Button, SectionList, Text, Image } from 'react-native';
import { PokemonState } from '../state/pokemonstate';

const pokemonState = new PokemonState();

export default props => {

  const [cars, setCars] = React.useState([])

  React.useEffect(() => {
    async function getPokemons() {
      const response = await pokemonState.getPokemons(20, 0);
      const listPokemon = await response["results"];
      var listPokemonName = []

      await listPokemon.forEach(element => {
        listPokemonName.push(element.name);
      })

      setCars(listPokemonName);
    }

    getPokemons();
  }, [])

  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { title: 'Pokemons', data: cars },
        ]}
        renderItem={({ item }) =>
          <View style={styles.fff}>
            <Text style={styles.item}>{item}</Text>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_phone.png',
              }}
              style={styles.imageStyle}
            />
          </View>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
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
    width: '85%'
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

