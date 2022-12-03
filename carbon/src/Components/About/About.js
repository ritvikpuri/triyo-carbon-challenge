import React from 'react'
import { Button, Column, Grid } from '@carbon/react'

export default function About() {
  return (
    <Column lg={16} md={8} sm={4} className="about">
  <Grid>
    <Column md={8} lg={8} sm={8}>
      <p style={{marginTop: 50, "fontWeight":600}}>What is Carbon?</p>
      <br/>
      <p>Carbon is IBM’s open-source design system for digital products and experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors</p>
      <br/>
      <Button>Learn More</Button>
    </Column>
    <Column md={8} lg={8} sm={8}>
      <img src='https://react-step-3--carbon-tutorial.netlify.app/tab-illo.png' alt='Carbon Design'></img>
    </Column>
  </Grid>
</Column>
  )
}
