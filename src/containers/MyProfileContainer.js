import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Grid, Row, Col, Image, PageHeader, Panel, Button } from 'react-bootstrap'
import { AddModal } from '../components/Modal/Modal'

import { getUserProfile } from '../actions/api'

class MyProfileContainer extends Component {
  constructor(props) {
    super(props)

    // State variables to be tracked in the component
    this.state = {
      showModal: false,
      type: '',
      addValue: ''
    }

    // ADD FUNCTION BINDINGS HERE

  }

  componentDidMount() {

    // ADD CHECK FOR USER QUERY PARAMETER HERE

  }

  // ADD FUNCTION TO HANDLE OPENING THE MODAL HERE (with "type" variable)
  handleModalOpen(type) { }

  // ADD FUNCTION TO HANDLE CLOSING THE MODAL HERE
  handleModalClose() { }

  // ADD FUNCTION TO TRACK TEXT CHANGES HERE (with event variable)
  handleTextChange(e) { }

  // ADD FUNCTION TO HANDLE SUBMITTING "ADD" FORM HERE
  handleAddSubmit() { }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid valign-wrapper">
            <Col xs={12} md={8} lg={4}>
              {/* ADD PROFILE IMAGE HERE */}
              <Image src="/assets/images/FirstHeader.jpg" thumbnail />
            </Col>
            <Col xs={12} md={4} lg={8}>
              {/* ADD PAGE HEADER WITH NAME AND ABOUT ME HEADINGS HERE */}
              <PageHeader>
                Pet Hotel
                <br />
                <small> About Our Business </small>
              </PageHeader>
              <p> The Pet Hotel is a great place to leave your pets if ever needed. </p>
              {/* ADD ABOUT ME DESCRIPTION HERE */}

            </Col>
          </Row>
          <Row className="show-grid">

            {/* Include all sections in the following column */}
            <Col xs={12}>

              {/* ADD HEADER FOR SECTION HERE */}
              <PageHeader>
                What Animals?
              </PageHeader>
              <Panel>
                <Panel.Body>
                  <ul>
                    <li>Dogs</li>
                    <li>Cats</li>
                    <li>Fish</li>
                    <li>Frogs</li>
                    <li>Turtles</li>
                    <li>Rodents</li>
                    <li>Birds</li>
                    <li>Pigs</li>
                    <li>Donkeys</li>
                    <li>Horses</li>
                    <li>Moneys</li>
                    <li>Llamas</li>
                    <li>Hippos</li>
                    <li>Cows</li>
                    <li>Chickens</li>
                    <li>Geese</li>
                    <li>...And many more</li>
                  </ul>
                </Panel.Body>
              </Panel>

              {/* ADD PANEL FOR SECTION INFORMATION WITH LIST HERE */}
              <PageHeader>
                Time Periods
              </PageHeader>
              <Panel>
                <Panel.Body>
                  <ul>
                    <li>School</li>
                    <li>Day Trips</li>
                    <li>Vacation</li>
                    <li className='people'>Closed on Jewish Holidays </li>
                  </ul>
                </Panel.Body>
              </Panel>
              {/* ADD BUTTON FOR ADDITIONAL INFORMATION HERE */}
              <PageHeader>
                Cost
              </PageHeader>
              <Panel>
                <Panel.Body>
                  <li>Per Animal, ask about package options</li>

                  <ul>
               

                    <li>Small Animals: $30/per night</li>
                    <li>Medium Animals: $50/per night</li>
                    <li>Large Animals: $75/per night</li>
                  </ul>

                </Panel.Body>
              </Panel>

            </Col>
          </Row>
        </Grid>

        {/* ADD MODAL HERE */}

      </div>
    )
  }
}

// Uses withRouter to grab query paramters in URL (ex: http://localhost:3000?user=1 where user is the query parameter)
export default withRouter(MyProfileContainer)