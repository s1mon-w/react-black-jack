import React from 'react'
import { shallow } from 'enzyme'

import Outcome from '../'

const setup = propOverrides => {
	const props = Object.assign({
		status: ''
	}, propOverrides)

	const wrapper = shallow(<Outcome {...props} />)

	return {
		props,
		wrapper
	}
}

it('Outcome Component', () => {
	test('renders without crashing', () => {
		const { wrapper } = setup()
		expect(wrapper.exists()).toBe(true)
	})
})