import React from 'react'
import { Growl, useGrowl } from '.'

import { render } from '@testing-library/react'

describe('Growl', () => {
  it('should render growl component', () => {
    const { asFragment } = render(
      <Growl message='Hello' onDismissed={() => {}} />
    )

    expect(asFragment).toMatchSnapshot()
  })
})

describe('useGrowl', () => {
  it('should return hook', () => {
    expect(useGrowl()).toBeTruthy()
  })
})
