import React, { createContext, Component } from 'react';

const ThemeContext = createContext();

export const colors = {
  Yellow: '#FFE2A9',
  Darker: '#232830',
  Dark: '#65737E',
  Light: '#D4D4D4',
  Lighter: '#FFFFFF',
  Red: '#E15A60',
  Blue: '#6699CC'
};

const fontSizes = {
  Title: 36,
  Subtitle: 36,
  Text: 18
};

const fontWeights = {
  Title: 'bold',
  Subtitle: 'regular',
  Text: 'regular'
};

const fontFamilies = {
  Display: 'SF Pro Display',
  Text: 'SF Pro Text'
};

export const fonts = {
  Title: {
    fontSize: fontSizes.Title,
    fontFamily: fontFamilies.Display,
    fontWeight: fontWeights.Title
  },
  Subtitles: {
    fontSize: fontSizes.Subtitle,
    fontFamily: fontFamilies.Display,
    fontWeight: fontWeights.Subtitle
  },
  Text: {
    fontSize: fontSizes.Text,
    fontFamily: fontFamilies.Text,
    fontWeight: fontWeights.Text
  }
};

class ThemeProvider extends Component {
  constructor() {
    super();

    this.state = {
      theme: {
        colors,
        fonts
      }
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

const ThemeConsumer = ThemeContext.Consumer;

export default ThemeProvider;
export { ThemeConsumer };
