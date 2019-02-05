import React from 'react';
import { Text } from 'react-sketchapp';

import { ThemeConsumer } from './ThemeProvider';

export default function CText(props) {
  return (
    <ThemeConsumer>
      {theme => (
        <Text style={[theme.fonts[props.as], props.style]}>
          {props.children}
        </Text>
      )}
    </ThemeConsumer>
  );
}
