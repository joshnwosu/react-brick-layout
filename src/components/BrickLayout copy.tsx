import React from 'react'

const defaultProps = {
  gutter: 10,
  column: 5,
  rtl: false,
  className: 'react-brick',
}

// type Props = {
//   gutter?: number
//   column?: number
//   // breakPoint?: {
//   //   [key: number]: number // commented for now
//   // }
//   rtl?: boolean
//   className?: string
//   children?: React.ReactElement
// }

interface Props {
  gutter?: number
  column?: number
  // breakPoint?: {
  //   [key: number]: number // commented for now
  // }
  rtl?: boolean
  className?: string
  children?: React.ReactNode
}

const BrickLayout: React.FC<Props> = (props) => {
  const {
    children,
    gutter = defaultProps.gutter,
    column = defaultProps.column,
    rtl = defaultProps.rtl,
    className = defaultProps.className,
  } = props
  // React.useEffect(() => {
  //   console.log({ gutter, column, rtl })
  // }, [gutter, column, rtl])

  return (
    <div className={className}>
      {children}
      {gutter}
      {rtl}
      {column}
    </div>
  )
}

export default BrickLayout
