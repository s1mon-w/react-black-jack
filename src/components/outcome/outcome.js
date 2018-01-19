import React from 'react'
import PropTypes from 'prop-types'

import './outcome.css'

const props = {
	status: PropTypes.string.isRequired
}

const Outcome = props => {
	switch (props.status) {
		case 'playing':
			return (
				<div className="bj-alert bj-alert--info" role="alert">
					Hit or Stand 🤞🏻
				</div>
			)
		case 'win':
			return (
				<div className="bj-alert bj-alert--success" role="alert">
					Win Win Win 🤩
				</div>
			)

		case 'lose':
			return (
				<div className="bj-alert bj-alert--alert" role="alert">
					You Lose 😭
				</div>
			)

		default:
			return (
				<div className="bj-alert bj-alert--info" role="alert">
					Click Deal to Start !{' '}
				</div>
			)
	}
}

Outcome.propTypes = props

export default Outcome
