import React from 'react'
import {Header, HeaderName} from '@carbon/react'

export default function GlobalHeader() {
  return (
    <Header aria-label="IBM Platform Name">
        <HeaderName prefix="IBM">
          Carbon Design
        </HeaderName>
    </Header>
  )
}
