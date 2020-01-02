import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Block from './Block';
import { theme } from '../constants';
import { CardProps } from '../interfaces/CardProps';

export default class Card extends Component<CardProps> {
  render() {
    const { color, style, children, ...props } = this.props;
    const cardStyles = [
      styles.card,
      style,
    ];
    return (
      <Block color={color || theme.colors.white} style={cardStyles} {...props}>
        {children}
      </Block>
    )
  }
}
export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base,
  },
})