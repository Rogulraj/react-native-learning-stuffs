import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {elevatorCardList} from '../constants/ui/elevatorCardList';

export default function ElevatorCards() {
  return (
    <View style={S.main}>
      <Text style={S.headingText}>Elevator Cards</Text>
      <ScrollView horizontal={true} style={S.container}>
        {elevatorCardList.map((item, index) => (
          <View key={index} style={S.listItem}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const S = StyleSheet.create({
  main: {
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  headingText: {
    color: '#000000',
    marginBottom: 10,
    fontWeight: '600',
  },
  listItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
    backgroundColor: '#CAD5EC',
    elevation: 5,
  },
});
