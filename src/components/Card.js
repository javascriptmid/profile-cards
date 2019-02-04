import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-sketchapp';

import { ThemeConsumer } from './ThemeProvider';

const styles = StyleSheet.create({
  Card: {
    padding: 64,
    height: 800,
    width: 800
  },
  CardContent: {
    flex: 1,
    padding: 64,
    alignItems: 'center'
  },
  MiniLogo: {
    height: 48,
    width: 48
  },
  Avatar: {
    marginBottom: 64,
    height: 256,
    width: 256,
    objectFit: 'contain'
  },
  TextCenter: {
    textAlign: 'center'
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
            <Image
              style={styles.MiniLogo}
              source={require('../images/logo.png')}
            />
          </View>
          <View style={styles.CardContent}>
            <Image
              style={styles.Avatar}
              source={require('../images/logo.png')}
            />
            <Text
              style={[
                styles.TextCenter,
                theme.fonts.Title,
                { color: theme.colors.Yellow }
              ]}
            >
              {props.title}
            </Text>
            <Text
              style={[
                theme.fonts.Subtitles,
                styles.TextCenter,
                { color: theme.colors.Lighter }
              ]}
            >
              {props.name}
            </Text>
          </View>
          <View style={styles.InfoRow}>
            <Text style={[theme.fonts.Text, { color: theme.colors.Light }]}>
              {props.date}
            </Text>
            <Text style={[theme.fonts.Text, { color: theme.colors.Light }]}>
              {props.time}
              Hrs
            </Text>
            <Text style={[theme.fonts.Text, { color: theme.colors.Light }]}>
              {props.place}
            </Text>
          </View>
        </View>
      )}
    </ThemeConsumer>
  );
}
