import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';
import classnames from 'classnames';
import { SfBottomNavigation, SfBottomNavigationItem } from '../../organisms';
import { SfIcon, SfCircleIcon } from '../../atoms';

storiesOf('Organisms|BottomNavigation', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <SfBottomNavigation>
      <SfBottomNavigationItem>
        <SfIcon icon="home" size="20px" />
      </SfBottomNavigationItem>
      <SfBottomNavigationItem>
        <SfIcon icon="menu" size="20px" style={{ width: 25 }} />
      </SfBottomNavigationItem>
      <SfBottomNavigationItem
        classname={classnames(
          options(
            'CSS modifier',
            {
              'sf-bottom-navigation__item--active': 'sf-bottom-navigation__item--active',
            },
            'sf-bottom-navigation__item--active',
            { display: 'multi-select' },
          ),
        )}
      >
        <SfIcon icon="heart" size="20px" />
      </SfBottomNavigationItem>
      <SfBottomNavigationItem>
        <SfIcon icon="profile" size="20px" />
      </SfBottomNavigationItem>
      <SfBottomNavigationItem>
        <SfCircleIcon classname="sf-bottom-navigation__floating-icon">
          <SfIcon icon="add_to_cart" size="20px" color="white" style={{ marginLeft: '-2px', marginRight: '2px' }} />
        </SfCircleIcon>
      </SfBottomNavigationItem>
    </SfBottomNavigation>
  ));
