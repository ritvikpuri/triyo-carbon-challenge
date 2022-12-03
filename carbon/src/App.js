import './App.css';
import './app.scss';
import GlobalHeader from './Components/GlobalHeader/GlobalHeader';
import NavHeader from './Components/NavHeader/NavHeader';
import {Content, Theme, FlexGrid, Column, Row} from '@carbon/react'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Theme theme="g100"><GlobalHeader/></Theme>
      <Theme theme="g10">
        <Content style={{paddingBottom:0}}>
          <FlexGrid style={{padding:0}}>
            <Row>
          <Column md={{span:8}} sm={4} lg={16} xlg={16} max={16}>
          <h1 className="landing-page__heading" style={{"paddingTop":50, "marginBottom":50}}>
            Design &amp; build with Carbon
          </h1>
          </Column>
          </Row>
          <Row className="NavHeader">
          <NavHeader/>
          </Row>
          <Footer/>
          </FlexGrid>
        </Content> 
      </Theme>
    </>
  );
}

export default App;
