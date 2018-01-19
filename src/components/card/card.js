import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './card.css'

const props = {
	suit: PropTypes.string.isRequired
}
const defaultProps = {
	suit: 'h1'
}

const Card = ({ suit, value }) => (
	<div
		className={cx({
			'bj-card': true,
			[`bj-card-suit-${suit}`]: true
		})}
	/>
)

Card.propTypes = props
Card.defaultProps = defaultProps

export default Card
