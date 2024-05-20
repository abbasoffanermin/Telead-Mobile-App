import React, {Fragment, useCallback, useMemo} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

import {colors} from '../constants/colors';
import {Typography} from '../constants/typography';

interface HighlightedText {
  text: string;
  callback: () => void;
}

interface TextLinkProps {
  content: string;
  highlighted: HighlightedText[];
  center?: boolean;
  fontColor?: string;
  style?: StyleProp<TextStyle>;
}

export const TextLink: React.FC<TextLinkProps> = ({
  content,
  highlighted,
  fontColor = colors.primary.main,
  center,
  style,
}: TextLinkProps) => {
  const createHighlightedText = useCallback(
    (text: string, callback?: () => void, index?: number) => {
      const key = callback ? `${text}-${index}-highlighted` : 'remaining';
      const color = callback ? fontColor : colors.black.main;

      return (
        <Text
          key={key}
          onPress={callback}
          disabled={!callback}
          style={[Typography.smallMulishBold, {color}]}>
          {text}
        </Text>
      );
    },
    [fontColor],
  );

  const renderElements = useMemo(() => {
    let lastIndex = 0;
    const elements = highlighted.map(({text, callback}, index) => {
      const startIndex = content.indexOf(text);
      const endIndex = startIndex + text.length;
      const normalText = content.slice(lastIndex, startIndex);
      lastIndex = endIndex;

      return (
        <Fragment key={`${text}-${index}`}>
          {createHighlightedText(normalText)}
          {createHighlightedText(text, callback, index)}
        </Fragment>
      );
    });

    elements.push(createHighlightedText(content.slice(lastIndex)));
    return elements;
  }, [content, createHighlightedText, highlighted]);

  return (
    <Text style={[center && Typography.textAlignCenter, style]}>
      {renderElements}
    </Text>
  );
};
