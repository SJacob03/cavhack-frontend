import React, { Component } from 'react'
import '../index.css'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

// Hardcoded users for All Profiles page
const users = [
  {
    id: 1,
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    id: 2,
    firstName: 'Joe',
    lastName: 'Somebody',
  },
  {
    id: 3,
    firstName: 'Jack',
    lastName: 'Doe',
  },
  {
    id: 4,
    firstName: 'Sally',
    lastName: 'Doe',
  }
]

class AllProfilesContainer extends Component {
  render() {

    // ADD MAPPING FOR ALL USERS TO DYNAMICALLY CREATE CARDS HERE

    return (
      <Grid>
        <Row>

          {/* ADD ALL PROFILES CREATED ABOVE HERE */}
          <Col xs={6} md={4} lg={3}>
            <Thumbnail src="/assets/images/teacupPIG.jpg" thumbnail />
            <h3> Sydney Jacob</h3>
            <p className='test'> Speicalizes in Lizards, Kittens, and other small creatures!  </p>
            <Button bsStyle="primary" onClick={() => this.props.history.push('/?user=' + 1)}
            >
              Back To Home
              </Button>

          </Col>

          <Col xs={6} md={4} lg={3}>
            <Thumbnail src="/assets/images/Paige.jpg" thumbnail />
            <h3> Paige Fowler</h3>
            <p className='test'> Speicalizes in Turtles, Chickens, and other medium creatures!  </p>
            <Button bsStyle="primary" onClick={() => this.props.history.push('/?user=' + 1)}
            >
              Back To Home
              </Button>

          </Col>

          <Col xs={6} md={4} lg={3}>
            <Thumbnail src="/assets/images/Em.jpg" thumbnail />
            <h3> Emilee Ferrari</h3>
            <p className='test'> Speicalizes in Llamas, Monkeys, and other large creatures!  </p>
            <Button bsStyle="primary" onClick={() => this.props.history.push('/?user=' + 1)}
            >
              Back To Home
              </Button>

          </Col>

        </Row>
      </Grid>
    )
  }
}

export default AllProfilesContainer