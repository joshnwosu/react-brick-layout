import React from 'react'

type Props = {
  gutter?: number
  column?: number
  breakPoint?: {
    [key: string]: any
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
  container: HTMLDivElement | null
  itemNodeList: HTMLCollection | undefined
  gutter: number
  breakPoint?: { [key: string]: any } | undefined
  rtl?: boolean | undefined
  column?: number | undefined
  style?: React.CSSProperties | undefined
  animateOnResize?: boolean | undefined
  props: {}
  d_props: {}

  constructor({
    gutter = defaultProps.gutter,
    column = defaultProps.column,
    breakPoint = defaultProps.breakPoint,
    rtl = defaultProps.rtl,
    className = defaultProps.className,
    animateOnResize = defaultProps.animateOnResize,
    style = defaultProps.style,
  }) {
    this.container = document.querySelector(className)
    this.itemNodeList = this.container?.children
    this.gutter = this.validate(gutter, 10)
    this.column = this.validate(column, 3)
    this.breakPoint = breakPoint

    this.d_props = {
      gutter,
      column,
      breakPoint,
      rtl,
      className,
      animateOnResize,
      style,
    }

    this.props = this.extend(this.d_props, {
      container: this.container,
      items: this.itemNodeList,
      gutter: this.gutter,
      column: this.column,
    })

    console.log('Props: ', this.props)
  }

  extend(a: any, b: any) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key]
      }
    }
    return a
  }

  validate(value: number, defaultValue: number) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value ? value : defaultValue
  }

  responsive() {
    // const width = window.innerWidth;
    for (const key in this.breakPoint) {
      if (this.breakPoint.hasOwnProperty(key)) {
        if (window.innerWidth >= Number(key)) {
          this.column = this.breakPoint[key]
        }
      }
    }
  }
}
