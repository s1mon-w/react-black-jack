import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './button.css'

const props = {
	color: PropTypes.oneOf(['primary', 'success', 'warning', 'alert', 'info']).isRequired,
	children: PropTypes.node
}
const defaultProps = {
	color: 'primary'
}

const Button = ({ color, children, ...props }) => {
	return (
		<button
			{...props}
			role="button"
			className={cx({
				'bj-button': true,
				[`bj-button--${color}`]: true
			})}
		>
			{children}
		</button>
	)
}

Button.propTypes = props
Button.defaultProps = defaultProps

export default Button
