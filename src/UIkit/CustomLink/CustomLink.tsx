import classnames from 'classnames'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import CustomLinkProps from './CustomLink.types'

function CustomLink({
  className,
  children,

  onClick,

  to,
  delay,

  goBack,
}: CustomLinkProps) {
  const navigate = useNavigate()
  const [redirect, setRedirect] = useState(false)

  const clickHandler = () => {
    // setTimeout(() => onClick(), delay)
    console.log(onClick)
    setTimeout(() => setRedirect(true), delay)
  }

  if (redirect && to) {
    return <Navigate to={to} />
  }

  if (redirect && goBack) {
    navigate(-1)
  }

  const CustomLinkClassName = classnames('', className)

  return (
    <div
      className={CustomLinkClassName}
      onClick={clickHandler}
    >
      {children}
    </div>
  )
}

CustomLink.defaultProps = {
  className: '',
  children: null,

  onClick: null,

  to: null,
  delay: 500,

  goBack: false,
}

export default CustomLink
