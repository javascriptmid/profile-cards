import React from 'react';
import { render, Artboard, Text, View } from 'react-sketchapp';

import ThemeProvider from './components/ThemeProvider';
import Card from './components/Card';

const Page = ({ talks }) => (
  <Artboard>
    {talks.map(talk => (
      <Card title={talk.title} name={talk.name} image={talk.image} />
    ))}
  </Artboard>
);

export default () => {
  const TALKS = [
    {
      name: 'Name Persona',
      title: 'Card Title Talk',
      image:
        'https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg'
    }
  ];

  const App = props => (
    <ThemeProvider>
      <Page talks={props.data} />
    </ThemeProvider>
  );

  render(<App data={TALKS} />, context.document.currentPage());
};
