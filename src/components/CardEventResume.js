import React from 'react';
import { Image, View, StyleSheet } from 'react-sketchapp';

import { ThemeConsumer } from './ThemeProvider';
import CardLayout from './CardLayout';
import Text from './Text';

const styles = StyleSheet.create({
  TalkList: {
    flex: 1,
    padding: 128,
    justifyContent: 'center',
  },
  TalkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
  },
  Avatar: {
    height: 80,
    width: 80,
    objectFit: 'contain',
    marginRight: 24,
  },
});

function TalkItem(props) {
  return (
    <ThemeConsumer>
      {theme => (
        <View style={styles.TalkItem}>
          <Image style={styles.Avatar} source={require('../images/logo.png')} />
          <View>
            <Text as="Text" style={{ color: theme.colors.Lighter }}>
              {props.title}
            </Text>
            <Text as="Text" style={{ color: theme.colors.Light }}>
              {props.name}
            </Text>
          </View>
        </View>
      )}
    </ThemeConsumer>
  );
}

export default function CardEventResume(props) {
  return (
    <CardLayout date={props.date} time={props.time} place={props.place}>
      <View style={styles.TalkList}>
        {props.talks.map(talk => (
          <TalkItem title={talk.title} name={talk.name} />
        ))}
      </View>
    </CardLayout>
  );
}
