import React from 'react';
import { Image, View, StyleSheet } from 'react-sketchapp';

import { ThemeConsumer } from './ThemeProvider';
import CardLayout from './CardLayout';
import Text from './Text';

const styles = StyleSheet.create({
  CardContent: {
    flex: 1,
    padding: 64,
    alignItems: 'center',
  },
  Avatar: {
    marginBottom: 64,
    height: 256,
    width: 256,
    objectFit: 'contain',
  },
  TextCenter: {
    textAlign: 'center',
  },
});

function CardText(props) {
  return (
    <Text as={props.as} style={[styles.TextCenter, props.style]}>
      {props.children}
    </Text>
  );
}

export default function Card(props) {
  return (
    <CardLayout date={props.date} time={props.time} place={props.place}>
      <ThemeConsumer>
        {theme => (
          <View style={styles.CardContent}>
            <Image
              style={styles.Avatar}
              source={require('../images/logo.png')}
            />
            <CardText as="Title" style={{ color: theme.colors.Yellow }}>
              {props.title}
            </CardText>
            <CardText as="Subtitles" style={{ color: theme.colors.Lighter }}>
              {props.name}
            </CardText>
          </View>
        )}
      </ThemeConsumer>
    </CardLayout>
  );
}
