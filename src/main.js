import React from 'react';
import { render, Artboard, Text, View } from 'react-sketchapp';
import Card from './components/Card';

const Page = ({ talks }) => (
  <Artboard>
    {talks.map(talk => (
      <Card title={talk.title} name={talk.name} image={talk.image} />
    ))}
  </Artboard>
);

export default () => {
  const Talks = [
    {
      name: 'Herel Odin',
      title: 'Api rest con JS',
      image:
        'https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg'
    }
  ];

  render(<Page talks={Talks} />, context.document.currentPage());
};
