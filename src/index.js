import React from 'react'
import ReactDOM from 'react-dom'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import App from './components/app'
import './styles.css'

ReactDOM.render(<App />, document.getElementById('root'))
