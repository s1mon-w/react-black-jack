import React from 'react'
import PropTypes from 'prop-types'

import Card from '../card'

import './hand.css'

const props = {
	showDeck: PropTypes.bool,
	hand: PropTypes.array
}

const Hand = props => {
	const { showDeck, hand } = props

	return (
		<div className="bj-hand">
			{/* This will show an upside down card representing the deck on the dealer side of the table */}
			{showDeck ? <Card suit="hidden" /> : ''}

			{/* here we iterate the hand array and serve the Card component with the card info */}
			{hand.map(function(card, i) {
				return <Card suit={card.suit} key={i} />
			})}
		</div>
	)
}

Hand.propTypes = props

export default Hand
