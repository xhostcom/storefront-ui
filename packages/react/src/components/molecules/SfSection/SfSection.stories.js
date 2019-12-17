import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, optionsKnob as options } from '@storybook/addon-knobs';
import classnames from 'classnames';
import { SfSection } from './';

const styles = {
  row: {
    display: 'flex',
  },
  col: {
    flex: 1,
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '1rem',
    backgroundColor: 'rgb(94, 206, 123)',
    color: '#FFF',
    fontSize: '2em',
  },
  colFirst: {
    flex: 1,
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '0',
    backgroundColor: 'rgb(94, 206, 123)',
    color: '#FFF',
    fontSize: '3rem',
  },
};

storiesOf('Molecules|Section', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfSection
      classname={classnames(
        options(
          'CSS modifier',
          {
            'sf-section--no-underline': 'sf-section--no-underline',
          },
          'sf-section--no-underline',
          { display: 'multi-select' },
        ),
      )}
      titleHeading={text('(prop) titleHeading', 'Share your look')}
      subtitleHeading={text('(prop) subtitleHeading', '#YOURLOOK')}
      levelHeading={number('(prop) levelHeading', 2)}
    >
      <div style={styles.row}>
        <div style={styles.colFirst}>1</div>
        <div style={styles.col}>2</div>
        <div style={styles.col}>3</div>
      </div>
    </SfSection>
  ));
