import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-sketchapp';

const styles = StyleSheet.create({
  card: {
    padding: 20
  }
});

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Image source={props.image} />
      <Text>{props.title}</Text>
    </View>
  );
}
