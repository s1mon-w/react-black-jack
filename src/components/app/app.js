import React from 'react'
import _ from 'lodash'

import deck from '../../lib/utils/deck'
import Table from '../table'

import './app.css'

const shuffleDeck = deck => (
  _.shuffle(_.shuffle(_.shuffle(deck)))
)

const App = () => {
  return (
    <div className="app">
      <Table shuffledDeck={shuffleDeck(deck)} />
    </div>
  )
}

export default App
