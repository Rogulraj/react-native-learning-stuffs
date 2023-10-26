import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatorCards from './components/ElevatorCards';
import FancyCard from './components/FancyCard';
import PasswordGen from './components/PasswordGen';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <FlatCards />
        <ElevatorCards />
        <FancyCard /> */}
        <PasswordGen />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
