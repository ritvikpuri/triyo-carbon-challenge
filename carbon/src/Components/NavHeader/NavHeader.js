import React from 'react'
import {Tab, Tabs, TabList, TabPanel, TabPanels} from '@carbon/react';
import About from '../About/About';
import Design from '../Design/Design';
import Develop from '../Develop/Develop';

export default function NavHeader() {
  return (
    <Tabs style={{"justify-content":"flex-end"}}>
    
          <TabList aria-label="List of tabs" className="tabs-group">
            <Tab style={{width:200}}>About</Tab>
            <Tab style={{width:200}}>Design</Tab>
            <Tab style={{width:200}}>Develop</Tab>
          </TabList>
    <TabPanels>
      <TabPanel>
        <About/>
      </TabPanel>
      <TabPanel>
        <Design/>
      </TabPanel>
      <TabPanel>
        <Develop/>
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
}
