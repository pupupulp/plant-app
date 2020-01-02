import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Block from './Block';
import { theme } from '../constants';
import { BadgeProps } from '../interfaces/BadgeProps';

export default class Badge extends Component<BadgeProps> {
  render() {
    const { children, style, size, color, ...props } = this.props;
    const badgeStyles = StyleSheet.flatten([
      styles.badge,
      size && {
        height: size,
        width: size,
        borderRadius: size,
      },
      style,
    ]);
    
    return (
      <Block flex={false} middle center color={color} style={badgeStyles} {...props}>
        {children}
      </Block>
    )
  }
}
const styles = StyleSheet.create({
  badge: {
    height: theme.sizes.base,
    width: theme.sizes.base,
    borderRadius: theme.sizes.radius,
  }
})