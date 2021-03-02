import React from 'react'
import { connect } from 'react-redux'

import ComingSoon from '../../components/coming-soon/ComingSoon'

class Event extends React.Component {


  render() {
    return (
      <>
        <ComingSoon />
      </>
    )
  }
}


const mapStateToProps = state => state

export default connect(mapStateToProps/*, { fetchExamples }*/)(Event)
