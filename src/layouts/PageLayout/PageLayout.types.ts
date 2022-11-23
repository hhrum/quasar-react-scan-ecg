interface PageLayoutProps {
  className?: string
  headerClassName?: string
  contentClassName?: string
  footerClassName?: string

  header?: JSX.Element | JSX.Element[] | string
  children?: JSX.Element | JSX.Element[] | string
  footer?: JSX.Element | JSX.Element[] | string

  redirect?: string
}

export default PageLayoutProps
