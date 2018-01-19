import React from 'react'
import { shallow } from 'enzyme'

import Interface from '../'

const setup = propOverrides => {
	const props = Object.assign({
		dealerScore: 0,
		playerScore: 0,
		deal: jest.fn(),
		hit: jest.fn(),
		stick: jest.fn(),
		status: ''
	}, propOverrides)

	const wrapper = shallow(<Interface {...props} />)

	return {
		props,
		wrapper,
		deal: wrapper.find('.deal'),
		hit: wrapper.find('.hit'),
		stick: wrapper.find('.stick')
	}
}

it('Interface Component', () => {
	test('renders without crashing', () => {
		const { wrapper } = setup()
		expect(wrapper.exists()).toBe(true)
	})
})