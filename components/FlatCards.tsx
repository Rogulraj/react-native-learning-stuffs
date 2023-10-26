import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {flatCardList} from '../constants/ui/flatCardList';

export default function FlatCards() {
  return (
    <View style={S.main}>
      <Text style={S.headingText}>Flat Cards</Text>
      <View style={S.container}>
        {flatCardList.map((item, index) => (
          <View key={index} style={[S.card, S[`card${item}`]]}>
            <Text>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const S = StyleSheet.create({
  main: {padding: 10},
  headingText: {
    color: '#000000',
    marginBottom: 10,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardRed: {
    backgroundColor: 'red',
  },
  cardGreen: {
    backgroundColor: 'green',
  },
  cardBlue: {
    backgroundColor: 'blue',
  },
});
