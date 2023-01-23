import React from 'react'

const defaultProps = {
  gutter: 10,
  column: 5,
  rtl: false,
  className: 'react-brick',
}

type Props = {
  gutter?: number
  column?: number
  // breakPoint?: {
  //   [key: number]: number // commented for now
  // }
  rtl?: boolean
  className?: string
  children: React.ReactNode
}

const BrickLayout = ({
  gutter = defaultProps.gutter,
  column = defaultProps.column,
  rtl = defaultProps.rtl,
  className,
  children,
}: Props) => {
  React.useEffect(() => {
    console.log({ gutter, column, rtl })
  }, [gutter, column, rtl])
  return <div className={className}>{children}</div>
}

export default BrickLayout
