import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, number, text} from '@storybook/addon-knobs';
import { SfCollectedProduct } from '../../organisms';
import { SfProperty } from '../../atoms';

const CollectedProductWrapper = (props) => {
  const [value, setValue] = useState(1);

  return (
    <SfCollectedProduct
      qty={value}
      image={props.image}
      imageHeight={props.imageHeight}
      imageWidth={props.imageWidth}
      regularPrice={props.regularPrice}
      specialPrice={props.specialPrice}
      title={props.title}
      configuration={props.configuration}
      actions={props.actions}
      onRemove={props.onRemove}
      onInputChange={(ev) => setValue(ev.target.value)}
    />
  );
};

storiesOf('Organisms|CollectedProduct', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
      <CollectedProductWrapper
        image={object(
            "image",
            {
              mobile: { url: "/assets/storybook/Home/productB.jpg" },
              desktop: { url: "/assets/storybook/Home/productB.jpg" }
            },
            "Props"
          )
        }
        imageWidth={number("imageWidth", 140, {}, "Props")}
        imageHeight={number("imageHeight", 200, {}, "Props")}
        title={text("title", "Cotton Sweater", "Props")}
        regularPrice={text("regularPrice", "$10,99", "Props")}
        specialPrice={text("specialPrice", "$5,09", "Props")}
        configuration={
          <div style={{margin: '20px 0 0 0'}}>
            <SfProperty name="Size" value="XS"/>
            <SfProperty name="Color" value="white"/>
          </div>
        }
        actions={
          <div style={{margin: 'auto 0 0 0', fontSize: '14px'}}>
            <div>MSD23-345-325</div>
            <div>Quantity: 1</div>
          </div>
        }
      />
  ))
  