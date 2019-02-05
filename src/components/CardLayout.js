import React from 'react';
import { Image, View, StyleSheet } from 'react-sketchapp';

import { ThemeConsumer } from './ThemeProvider';
import Text from './Text';

const styles = StyleSheet.create({
  Card: {
    padding: 64,
    height: 800,
    width: 800
  },
  MiniLogo: {
    height: 48,
    width: 48
  },
  InfoRow: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

function CardText(props) {
  return (
    <ThemeConsumer>
      {theme => (
        <Text as="Text" style={{ color: theme.colors.Light }}>
          {props.children}
        </Text>
      )}
    </ThemeConsumer>
  );
}

export default function CardLayout(props) {
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
          <View style={{ flex: 1 }}>{props.children}</View>
          <View style={styles.InfoRow}>
            <CardText>{props.date}</CardText>
            <CardText>{`${props.time} Hrs`}</CardText>
            <CardText>{props.place}</CardText>
          </View>
        </View>
      )}
    </ThemeConsumer>
  );
}
