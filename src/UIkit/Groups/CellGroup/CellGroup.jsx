import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Group from '@Components/Groups/Group'

import childrenToArray from '@Utils/childrenToArray'
import isFragment from '@Utils/isFragment'

import './CellGroup.scss'

function CellGroup({
  className,
  separatorClassName,
  style,
  header,
  children,

  noPaddingSeparator,

  useSeparator,
  useBorderSeparator,
}) {
  const CellGroupClassName = classnames('cell-group', className)
  const SeparatorClassName = classnames(
    'cell-group__separator',
    {
      'cell-group__separator': noPaddingSeparator,
    },
    separatorClassName,
  )

  const separator = <div className={SeparatorClassName} />

  let content = children

  if (useSeparator && children && (Array.isArray(children) || isFragment(children))) {
    content = childrenToArray(children).map((item, index) => [
      index !== 0 && (
        // eslint-disable-next-line react/no-array-index-key
        <div
          key={`separator${index}`}
          className={SeparatorClassName}
        />
      ),
      item,
    ])
  }

  return (
    <Group
      className={CellGroupClassName}
      style={style}
      header={header}
      noContentPadding
      noContentGap
    >
      {useBorderSeparator && separator}
      {content}
      {useBorderSeparator && separator}
    </Group>
  )
}

CellGroup.defaultProps = {
  className: '',
  separatorClassName: '',
  style: null,
  header: null,
  children: null,

  noPaddingSeparator: false,

  useSeparator: false,
  useBorderSeparator: false,
}

CellGroup.propTypes = {
  className: PropTypes.string,
  separatorClassName: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  header: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.any]),

  noPaddingSeparator: PropTypes.bool,

  useSeparator: PropTypes.bool,
  useBorderSeparator: PropTypes.bool,
}

export default CellGroup
