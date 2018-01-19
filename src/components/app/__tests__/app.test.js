import React from 'react'
import { shallow } from 'enzyme'

import App from '../'

it('App Component', () => {
	test('renders without crashing', () => {
		const { wrapper } = shallow(<App />)
		expect(wrapper.exists()).toBe(true)
	})
})