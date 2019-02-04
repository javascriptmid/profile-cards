import React from 'react';
import { render, Document, Artboard, Page } from 'react-sketchapp';

import ThemeProvider from './components/ThemeProvider';
import Card from './components/Card';

import event from '../event.json';

function CardPage(props) {
  return (
    <Page style={{ flexDirection: 'row' }}>
      {props.talks.map(talk => (
        <Artboard style={{ marginHorizontal: 20 }}>
          <Card
            date={props.eventInfo.date}
            time={props.eventInfo.time}
            place={props.eventInfo.place}
            title={talk.title}
            name={talk.name}
            image={talk.image}
          />
        </Artboard>
      ))}
    </Page>
  );
}

function MDocument(props) {
  return (
    <ThemeProvider>
      <Document>
        <CardPage eventInfo={props.data.info} talks={props.data.speakers} />
      </Document>
    </ThemeProvider>
  );
}

export default () => {
  render(<MDocument data={event} />);
};
