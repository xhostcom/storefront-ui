import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import { SfGallery } from "./";

const images = [
  {
    small: {
      url:
        "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
      alt: "Macbook PRO Apple"
    },
    normal: {
      url:
        "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
      alt: "Macbook PRO Apple"
    },
    big: {
      url:
        "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/700px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
      alt: "Macbook PRO Apple"
    }
  },
  {
    small: {
      url:
        "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
      alt: "Macbook PRO Apple (keyboard)"
    },
    normal: {
      url:
        "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
      alt: "Macbook PRO Apple (keyboard)"
    },
    big: {
      url:
        "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/700px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
      alt: "Macbook PRO Apple (keyboard)"
    }
  }
]

storiesOf("Molecules|Gallery", module)
  .addDecorator(withKnobs)
  .add(
    "Primary",
      () => <SfGallery
      sliderOptions={{
        autoplay: number("sliderOptions (prop) autoplay"),
        rewind: boolean("sliderOptions (prop) rewind", false)
      }}
      current={number("current (prop)", 1)}
      images={images}
    />
  )
  