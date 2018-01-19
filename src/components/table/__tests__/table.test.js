import React from 'react'
import { shallow } from 'enzyme'

import Table from '../'

const setup = propOverrides => {
	const props = Object.assign({
		shuffledDeck: []
	}, propOverrides)

	const wrapper = shallow(<Table {...props} />)

	return {
		props,
		wrapper
	}
}

it('Table Component', () => {
	test('renders without crashing', () => {
		const { wrapper } = setup()
		expect(wrapper.exists()).toBe(true)
	})
})