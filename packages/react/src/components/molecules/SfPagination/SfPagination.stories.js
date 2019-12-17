import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { SfPagination } from './';

const PaginationWrapper = (props) => {
  const [currentPage, setCurrentPage] = useState(props.current);

  return (
    <>
      <SfPagination
        visible={props.visible}
        total={props.total}
        current={currentPage}
        iconNext={props.iconNext}
        iconPrev={props.iconPrev}
        onClick={(val) => setCurrentPage(val)}
      />
    </>
  );
};

storiesOf('Molecules|Pagination', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <PaginationWrapper total={number('total (prop)', 10)} current={1} visible={number('visible (prop)', 5)} />
  ))
  .add('Prev Icon', () => (
    <PaginationWrapper
      total={number('total (prop)', 10)}
      current={1}
      visible={number('visible (prop)', 5)}
      iconPrev={<div style={{ color: '#000' }}>prev</div>}
    />
  ))
  .add('Next Icon', () => (
    <PaginationWrapper
      total={number('total (prop)', 10)}
      current={1}
      visible={number('visible (prop)', 5)}
      iconNext={<div style={{ color: '#000' }}>next</div>}
    />
  ));
