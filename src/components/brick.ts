import React from 'react'

type Props = {
  gutter?: number
  column?: number
  breakPoint?: {
    [key: number]: number
  }
  rtl?: boolean
  className?: string
  animateOnResize?: boolean
  style?: React.CSSProperties
}

const defaultProps = {
  gutter: 10,
  column: 5,
  breakPoint: {},
  rtl: false,
  className: 'react-brick-layout',
  animateOnResize: false,
  style: {},
}

export class Brick implements Props {
  constructor({
    gutter = defaultProps.gutter,
    column = defaultProps.column,
    breakPoint = defaultProps.breakPoint,
    rtl = defaultProps.rtl,
    className = defaultProps.className,
    animateOnResize = defaultProps.animateOnResize,
    style = defaultProps.style,
  }) {
    console.log({ gutter, column, breakPoint, rtl, className, animateOnResize, style })
  }
}
