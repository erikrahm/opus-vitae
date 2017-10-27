import React from 'react'
import axios from 'axios'
import styled from 'styled-components';

// const Section = styled.article`
//   color: white;
//   padding: ${padding};
//   background: ${props => props.background};
// `;

class Root extends React.Component {
  constructor (props) { 
    super(props)
    this.state = {
      reviews: {}
    }

    this.getReviews = this.getReviews.bind(this)
  }

  componentDidMount () {
  }

  getReviews () {
    var that = this
    axios({
      method: 'GET',
      baseURL: 'https://gu0rkom2gb.execute-api.us-west-2.amazonaws.com',
      url: '/api/configs',
    })
    .then(function (response, error) {
      console.log("All Respones: " + JSON.stringify(response.data.configs))
      that.setState({
        configs: response.data.configs,
        loaded: true
      })
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render () {
    return (
      <article id='root-page' className='container-fluid'>
        <h1>HEYO</h1>
      </article>
    )
  }
}

export default Root
