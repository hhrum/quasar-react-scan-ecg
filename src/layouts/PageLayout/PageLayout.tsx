import classnames from 'classnames'
import { Navigate } from 'react-router-dom'

import './PageLayout.scss'
import PageLayoutProps from './PageLayout.types'

function PageLayout({
  className,
  headerClassName,
  contentClassName,
  footerClassName,

  header,
  children,
  footer,

  redirect,
}: PageLayoutProps) {
  if (redirect) {
    return <Navigate to={redirect} />
  }

  const PageLayoutClassName = classnames('page-layout', className)
  const HeaderClassName = classnames('page-layout__header', headerClassName)
  const ContentClassName = classnames('page-layout__content', contentClassName)
  const FooterClassName = classnames('page-layout__footer', footerClassName)

  return (
    <div className={PageLayoutClassName}>
      <div className={HeaderClassName}>{header}</div>

      <div className={ContentClassName}>{children}</div>

      <div className={FooterClassName}>{footer}</div>
    </div>
  )
}

PageLayout.defaultProps = {
  className: '',
  headerClassName: '',
  contentClassName: '',
  toolboxClassName: '',
  footerClassName: '',

  header: null,
  children: null,
  footer: null,

  redirect: null,
}

export default PageLayout
