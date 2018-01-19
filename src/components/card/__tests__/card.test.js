import React from 'react'
import { shallow } from 'enzyme'

import Card from '../'

const setup = propOverrides => {
	const props = Object.assign({
		suit: 'h1'
	}, propOverrides)

	const wrapper = shallow(<Card {...props} />)

	return {
		props,
		wrapper
	}
}

it('Card Component', () => {
	test('renders without crashing', () => {
		const { wrapper } = setup(<Card />)
		expect(wrapper.exists()).toBe(true)
	})
})