import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-sketchapp';

import { ThemeConsumer } from './ThemeProvider'

const styles = StyleSheet.create({
  Card: {
    padding: 94,
    height: 800,
    width: 800,
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  CardContent: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  MiniLogo: {
    height: 48,
    width: 48
  },
  Avatar: {
    height: 256,
    width: 256,
    objectFit: 'contain',
    marginBottom: 48
  },
  Title: {
    marginBottom: 18
  },
  InfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default function Card(props) {
  return (
    <ThemeConsumer>
      {theme => (
        <View style={[styles.Card, { backgroundColor: theme.colors.Darker }]}>
          <View>
            <Image style={styles.MiniLogo} source={props.image} />
          </View>
          <View style={styles.CardContent}>
            <Image style={styles.Avatar} source={props.image} />
            <Text style={[styles.Title, theme.fonts.Title, { color: theme.colors.Yellow }]}>{props.title}</Text>
            <Text style={[theme.fonts.Subtitles, { color: theme.colors.Lighter }]}>{props.name}</Text>
          </View>
          <View style={styles.InfoRow}>
            <Text style={[theme.fonts.Text, { color: theme.colors.Light }]}>XX Enero</Text>
            <Text style={[theme.fonts.Text, { color: theme.colors.Light }]}>18:30 Hrs</Text>
            <Text style={[theme.fonts.Text, { color: theme.colors.Light }]}>UrbanHub</Text>
          </View>
        </View>
      )}
    </ThemeConsumer>
  );
}
