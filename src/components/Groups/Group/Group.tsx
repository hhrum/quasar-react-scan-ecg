import classnames from 'classnames'

import Typography from '@UIkit/Typography'

import colors from '@Assets/styles/colors'

import './Group.scss'
import GroupProps from './Group.types'

function Group({
  className,
  contentClassName,
  style,

  header,
  children,

  align,
  direction,

  noPadding,
  noContentPadding,
  noContentGap,
}: GroupProps) {
  const GroupsClassName = classnames(
    'group',
    {
      'group--no-padding': noPadding,
    },
    className,
  )

  const ContentClassName = classnames(
    'group__content',
    {
      'group__content--no-padding': noPadding || noContentPadding,
      'group__content--no-gap': noContentGap,
    },
    contentClassName,
  )

  const contentStyle = {
    alignItems: align,
    flexDirection: direction,
  }

  const headerContent =
    typeof header === 'string' ? <Typography color={colors.grey700}>{header}</Typography> : header

  return (
    <div
      className={GroupsClassName}
      style={style}
    >
      {header && <div className="group__header">{headerContent}</div>}
      <div
        className={ContentClassName}
        style={contentStyle}
      >
        {children}
      </div>
    </div>
  )
}

Group.defaultProps = {
  className: '',
  contentClassName: '',
  style: null,

  header: null,
  children: null,

  align: null,
  direction: null,

  noPadding: false,
  noContentPadding: false,
  noContentGap: false,
}

export default Group
