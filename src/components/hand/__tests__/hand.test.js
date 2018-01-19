import React from 'react'
import { shallow } from 'enzyme'

import Hand from '../'

const setup = propOverrides => {
	const props = Object.assign({
		showDeck: false,
		hand: []
	}, propOverrides)

	const wrapper = shallow(<Hand {...props} />)

	return {
		props,
		wrapper
	}
}

it('Hand Component', () => {
	test('renders without crashing', () => {
		const { wrapper } = setup()
		expect(wrapper.exists()).toBe(true)
	})
})