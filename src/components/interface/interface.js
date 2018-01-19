import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button'
import Outcome from '../outcome'

import './interface.css';

const props = {
	dealerScore: PropTypes.number.isRequired,
	playerScore: PropTypes.number.isRequired,
	deal: PropTypes.func.isRequired,
	hit: PropTypes.func.isRequired,
	stick: PropTypes.func.isRequired,
	status: PropTypes.string
}

const Interface = props => {
	const { dealerScore, playerScore, deal, hit, stick, status } = props

	return (
		<div>
			<Outcome status={status}/>
			<div className="bj-interface__scores">
				<span>Dealer Score: {dealerScore}</span>
				<span>Player Score: {playerScore}</span>
			</div>
			<div className="bj-interface__action-buttons">
				<Button className="deal" color="info" disabled={status === 'playing'} onClick={deal}>Deal</Button>
				<div>
					<Button className="hit" color="success" disabled={status !== 'playing'} onClick={hit}>Hit</Button>
					<Button className="stick" color="alert" disabled={status !== 'playing'} onClick={stick}>Stick</Button>
				</div>
			</div>
		</div>
	)
}

Interface.propTypes = props

export default Interface