import * as React from "react";
import '@storefront-ui/shared/styles/components/SfIcon.scss';
import { icons } from "@storefront-ui/shared/icons/icons";
import classnames from 'classnames';

export class SfIcon extends React.PureComponent {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  HEX_REGEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  RGB_REGEX = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
  SF_SIZES = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl", "xl3", "xl4"];
  SF_ICONS = Object.keys(icons);

  componentDidMount() {
    this.updateProps()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.icon !== this.props.icon
      || prevProps.size !== this.props.size
      || prevProps.color !== this.props.color
      || prevProps.viewBox !== this.props.viewBox) {
        this.updateProps()
      }
  }

  updateProps = () => {
    if (this.isDecimalOrHexColor() && this.ref) {
      this.ref.current.style.setProperty("--icon-color", this.props.color);
    }

    if (!this.isSFSizes() && this.ref) {
      this.ref.current.style.setProperty("--icon-size", this.props.size);
    }
  }

  isDecimalOrHexColor = () => {
    const color = this.props.color.trim();
    return this.RGB_REGEX.test(color) || this.HEX_REGEX.test(color);
  }
  isSFSizes = () => {
    const size = this.props.size.trim();
    return this.SF_SIZES.includes(size);
  }
  iconColor = () => {
    return !this.isDecimalOrHexColor()
      ? `sf-icon--color-${this.props.color.trim()}`
      : this.props.color;
  }
  iconSize = () => {
    return this.isSFSizes() ? `sf-icon--size-${this.props.size.trim()}` : "";
  }
  isSFIcons = () => {
    return this.SF_ICONS.includes(this.props.icon.trim());
  }
  iconViewBox = () => {
    return this.isSFIcons()
      ? icons[this.props.icon].viewBox || this.props.viewBox
      : this.props.viewBox;
  }
  iconPaths = () => {
    if (this.isSFIcons()) {
      return icons[this.props.icon].paths;
    } else {
      return Array.isArray(this.props.icon) ? this.props.icon : [this.props.icon];
    }
  }
 
  render() {
    return (
      <div className={classnames('sf-icon', this.iconColor(), this.iconSize())} ref={this.ref}>
        {!this.props.children && <svg className="sf-icon-path" viewBox={this.props.viewBox} preserveAspectRatio="none">
            <path d={this.iconPaths()} style={{height: '100%'}}/>
        </svg>}
        {this.props.children}
      </div>
    )
  }
};

SfIcon.defaultProps = {
  icon: "",
  color: "",
  size: "",
  viewBox: "0 0 24 24"
}
