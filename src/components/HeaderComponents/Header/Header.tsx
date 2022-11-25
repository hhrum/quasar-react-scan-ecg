import classnames from 'classnames'

import './Header.scss'
import HeaderProps from './Header.types'

function Header({
  className,

  leftSideSlot,
  centerSideSlot,
  rightSideSlot,
  bottomSideSlot,
}: HeaderProps) {
  const classNameHeader = classnames('header', className)

  return (
    <header className={classNameHeader}>
      <div className="header__left-side">{leftSideSlot}</div>

      <div className="header__center-side">{centerSideSlot}</div>

      <div className="header__right-side">{rightSideSlot}</div>

      <div className="header__bottom-side">{bottomSideSlot}</div>
    </header>
  )
}

Header.defaultProps = {
  className: '',

  leftSideSlot: null,
  centerSideSlot: null,
  rightSideSlot: null,
  bottomSideSlot: null,
}

export default Header
