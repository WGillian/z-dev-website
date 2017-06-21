import React from 'react'
import ResponsiveContainer from 'components/core/responsiveContainer'
import Div from 'components/core/div'
import Text from 'components/core/text'
import { Ionicon } from 'components/core/ionicons'
import { H2, H6 } from 'components/core/headerText'
import styled from 'styled-components'

const Container = styled(ResponsiveContainer)`
  background-color: ${props => props.theme.backgroundColor};

  #innerContainer {
    justify-content: center;
    flex-direction: column;
    align-items: stretch;
  }

  padding-top: 30px;
  padding-bottom: 45px;
`
const Header = H2.extend`
  text-align: center;
`

const InnerContainer = Div.extend`
  flex-direction: column;
  align-items: center;
`

const ServicesContainer = Div.extend`
  flex-wrap: wrap;
  justify-content: center;
`
const ServiceContainer = Div.extend`
  flex-direction: column;
  align-items: center;
  width: 350px;
  margin: 30px;
`
const RightHandSide = Div.extend`
  flex-direction: column;
`

const ServiceIonicon = styled(Ionicon)`
  font-size: 60px;
  margin-bottom: -8px;
`

const ServiceTitle = H6.extend`
  text-align: center;
`

const ServiceBody = Text.extend`
  text-align: center;
`

const Service = props => {
  return (
    <ServiceContainer>
      <ServiceIonicon className={props.icon} />
      <RightHandSide>
        <ServiceTitle>{props.title}</ServiceTitle>
        <ServiceBody>{props.body}</ServiceBody>
      </RightHandSide>
    </ServiceContainer>
  )
}

export default () =>
  <Container>
    <InnerContainer>
      <Header>Services</Header>
      <ServicesContainer>
        <Service title="Web Development" body="We build modern websites using cutting edge technology" icon="ion-monitor" />
        <Service title="App Development" body="We build for iOS and Android Apps and ship them to the App Store" icon="ion-iphone" />
        <Service title="UX & UI Design" body="Simplify your product with design sprints, research, and user tests" icon="ion-android-color-palette" />
        <Service title="Backend & API development" body="Experts at storing data and building APIs" icon="ion-ios-lightbulb" />
        <Service title="DevOps & Deployment" body="We have expertise in many cloud services to help you ship your product more often, with less issues" icon="ion-android-cloud" />
        <Service title="Tech Advice & Consulting" body="Advice for startups and corporates alike" icon="ion-ios-lightbulb" />
      </ServicesContainer>
    </InnerContainer>
  </Container>

// <div className="services container-fluid">
//   <h2 className="text-center">Services</h2>
//   <div className="row">
//     <div className="col-xs-12">
//       <div className="col-xs-12 col-sm-6 col-md-4 col-md-offset-2 service-item">
//         <span className="ion-ios-lightbulb service-text-ion" />
//         <div className="service-text">
//           <h6>Strategy</h6>
//           <p>Advice with a tech perspective</p>
//         </div>{' '}
//         {/* /service-text */}
//       </div>
//       <div className="col-xs-12 col-sm-6 col-md-4 service-item">
//         <span className="glyphicon glyphicon-phone service-text-glyph" />
//         <div className="service-text">
//           <h6>Frontends</h6>
//           <p>We <span className="glyphicon glyphicon-heart inline-glyphicon" /> building great websites and apps</p>
//         </div>{' '}
//         {/* /service-text */}
//       </div>
//       <div className="col-xs-12 col-sm-6 col-md-4 col-md-offset-2 service-item">
//         <span className="glyphicon glyphicon-hdd service-text-glyph" />
//         <div className="service-text">
//           <h6>Backends</h6>
//           <p>We build whole products, from front to back</p>
//         </div>{' '}
//         {/* /service-text */}
//       </div>
//       <div className="col-xs-12 col-sm-6 col-md-4 service-item">
//         <span className="glyphicon glyphicon-cloud service-text-glyph" />
//         <div className="service-text">
//           <h6>DevOps</h6>
//           <p>Ship your product more often, with less issues</p>
//         </div>{' '}
//         {/* /service-text */}
//       </div>
//     </div>
//   </div>
// </div>