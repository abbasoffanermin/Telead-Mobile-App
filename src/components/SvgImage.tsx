import React from 'react';

import {SvgProps} from 'react-native-svg';

import {normalize} from '../constants/metrics';

export interface SvgImageProps extends SvgProps {
  source: any;
}

export const SvgImage: React.FC<SvgImageProps> = ({
  source,
  children,
  ...props
}) => {
  if (!source?.default) {
    return null;
  }

  if (props.width) {
    props.width = normalize('width', Number(props.width));
  }

  if (props.height) {
    props.height = normalize('width', Number(props.height));
  }

  return React.createElement(source.default, props, children);
};