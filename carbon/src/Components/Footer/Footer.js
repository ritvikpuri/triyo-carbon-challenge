import { Column, Grid } from '@carbon/react'
import React from 'react'

export default function Footer() {
  return (
    <Column lg={16} md={8} sm={4} className="footer">
  <Grid>
    <Column md={4} lg={4} sm={4}>
      <text style={{"fontWeight":600}}>The Principles</text>
    </Column>
    <Column md={4} lg={4} sm={4}>
    <text>Carbon is Open</text>
    </Column>
    <Column md={4} lg={4} sm={4}>
    <text>Carbon is Modular</text>
    </Column>
    <Column md={4} lg={4} sm={4}>
    <text>Carbon is Consistent</text>
    </Column>
  </Grid>
</Column>
  )
}
