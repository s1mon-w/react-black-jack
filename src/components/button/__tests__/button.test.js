import React from 'react'
import { shallow } from 'enzyme'

import Button from '../'

const setup = propOverrides => {
	const props = Object.assign({
		color: 'primary'
	}, propOverrides)

	const wrapper = shallow(<Button {...props} />)

	return {
		props,
		wrapper
	}
}

it('Button Component', () => {
	test('renders without crashing', () => {
		const { wrapper } = setup()
		expect(wrapper.exists()).toBe(true)
	})
})