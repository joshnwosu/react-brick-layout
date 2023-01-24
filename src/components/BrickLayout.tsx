import React, { useEffect } from 'react'
import { Brick } from './brick'

interface Props {
  gutter?: number
  column?: number
  breakPoint?: {
    [key: number]: number
  }
  rtl?: boolean
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  animateOnResize?: boolean
}

const defaultProps = {
  gutter: 10,
  column: 5,
  breakPoint: {},
  rtl: false,
  className: 'react-brick',
  style: {},
  animateOnResize: false,
}

const BrickLayout: React.FC<Props> = (props) => {
  const {
    children,
    gutter = defaultProps.gutter,
    column = defaultProps.column,
    rtl = defaultProps.rtl,
    className = defaultProps.className,
    breakPoint = defaultProps.breakPoint,
    style = defaultProps.style,
    animateOnResize = defaultProps.animateOnResize,
  } = props

  useEffect(() => {
    new Brick({ gutter, column, rtl, className, breakPoint, style, animateOnResize })
  }, [])

  return <div className={className}>{children}</div>
}

export default BrickLayout
