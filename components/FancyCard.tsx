import {
  Image,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={S.fancyCardMain}>
      <Text style={S.headingText}>Fancy Card</Text>
      <View style={S.imageAndDescriptionCard}>
        <Image
          style={S.imageStyle}
          source={{
            uri: 'https://picsum.photos/300/350',
          }}
        />
        <Text style={S.imageHeading}>Hey there</Text>
        <Text style={S.imageDescription}>
          This is wonderful place to live. who are the snow lover, they would
          like this place Definitely.
        </Text>
        <View style={S.readAndFollowButton}>
          <TouchableOpacity
            style={S.touchableButton}
            onPress={() => Linking.openURL('http://localhost:3000/')}>
            <Text style={S.touchableButtonText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={S.touchableButton}
            onPress={() => Linking.openURL('http://localhost:3000/')}>
            <Text style={S.touchableButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const S = StyleSheet.create({
  fancyCardMain: {
    padding: 10,
  },
  headingText: {
    color: '#000000',
    fontSize: 15,
    marginBottom: 10,
    fontWeight: '600',
  },
  imageAndDescriptionCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
    elevation: 4,
  },
  imageStyle: {
    height: 350,
    width: 390,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imageHeading: {
    color: '#000',
    fontSize: 25,
    fontWeight: '500',
    padding: 10,
  },
  imageDescription: {
    color: '#000',
    fontSize: 15,
    fontWeight: '400',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  readAndFollowButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  touchableButton: {
    backgroundColor: '#26A69A',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    maxWidth: 115,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableButtonText: {
    color: '#E0E0E0',
  },
});
