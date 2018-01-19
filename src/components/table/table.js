import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Button from '../button'
import Hand from '../hand'
import Interface from '../interface'

import './table.css'

const props = {
	shuffledDeck: PropTypes.array.isRequired
}

class Table extends React.Component {
	constructor(props) {
		super(props)

		const shuffled = _.shuffle(this.props.shuffledDeck)
		this.state = {
			hasGameBegun: false,
			deck: shuffled
		}
	}

	startGame = () => {
		/* this variables are restrained to this closure and modifying state variables without the setState is prohibited */
		let deck = this.state.deck
		let playerhand = []
		let dealerhand = []

		//check deck size to see if we need to shuffle a new deck
		if (deck.length < 5) {
			deck = _.shuffle(this.props.shuffledDeck)
		}

		//player hand, deal 2 cards
		playerhand.push(deck.pop())
		playerhand.push(deck.pop())

		//lets just burn a card
		deck.pop()

		//dealer card
		//since we are using client side state the dealer secret card is only popped out of the deal at the time the user clicks Stick.
		dealerhand.push(deck.pop())

		//set the updates
		this.setState({
			hasGameBegun: true,
			player: playerhand,
			dealer: dealerhand,
			deck: deck,
			showDeck: true,
			status: 'playing'
		})
	}

	_renderGameBeginning = () => (
		<Button onClick={this.startGame}>Start the game</Button>
	)

	handScore = hand => {
		let score = _.sumBy(hand, 'value')

		if (score > 21) {
			// check for aces
			var aces = _.countBy(hand, { value: 11 }).true
			while (score > 21 && aces > 0) {
				score -= 10
				aces -= 1
			}
		}

		return score
	}

	handleHit = () => {
		let newStatus = this.state.status
		let playerHand = this.state.player

		// check deck size to see if we need to shuffle a new deck
		if (this.state.deck.length < 5) {
			this.setState({
				deck: _.shuffle(this.props.deck)
			})
		}

		// we shuffle every time so you don't cheat by checking component state :D
		var shuffled = _.shuffle(this.state.deck)

		// deal the card
		playerHand.push(shuffled.pop())

		var newPlayerscore = this.handScore(playerHand)

		// five card charlie
		if (newPlayerscore < 21 && playerHand.length === 5) newStatus = 'win'
		if (newPlayerscore > 21) newStatus = 'lose'

		// set the updates
		this.setState({
			player: playerHand,
			playerscore: newPlayerscore,
			deck: shuffled,
			status: newStatus
		})
	}

	handleStick = () => {
		// check deck size to see if we need to shuffle a new deck
		let dealerHand = this.state.dealer
		let deck = this.state.deck
		if (deck.length < 5) {
			deck = _.shuffle(this.props.deck)
		}

		// we shuffle every time so you don't cheat by checking component state :D
		let shuffled = _.shuffle(deck)

		// update scores for the interface component
		let dealerScore = this.handScore(dealerHand)
		let playerScore = this.handScore(this.state.player)
		let dealerHasCharlie = false

		// compute game status while dealing cards to the dealer
		while (dealerScore < playerScore || dealerScore <= 17) {
			// deal a card
			dealerHand.push(shuffled.pop())
			dealerScore = this.handScore(dealerHand)

			if (dealerScore < 21 && dealerHand.length === 5) {
				// five card charlie
				dealerHasCharlie = true
				break
			}
		}

		// update the state variables accordingly
		this.setState({
			dealer: dealerHand,
			deck: shuffled,
			showDeck: false,
			// compute game status
			status: dealerScore < 21 || dealerHasCharlie ? 'lose' : 'win'
		})
	}

	render() {
		return (
			<div className="bj-table">
				{this.state.hasGameBegun ? (
					<div className="bj-interface">
						<Hand showDeck={this.state.showDeck} hand={this.state.dealer} />
						<Interface
							dealerScore={this.handScore(this.state.dealer)}
							playerScore={this.handScore(this.state.player)}
							deal={this.startGame}
							hit={this.handleHit}
							stick={this.handleStick}
							status={this.state.status}
						/>
						<Hand hand={this.state.player} />
					</div>
				) : (
					this._renderGameBeginning()
				)}
			</div>
		)
	}
}

Table.propTypes = props

export default Table
