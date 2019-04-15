import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement } from '../../store/actions'

const Home = ({ counter, increment, decrement }) => (
  <div>
    <button type="button" onClick={decrement}>
      -
    </button>
    {counter}
    <button type="button" onClick={increment}>
      +
    </button>
  </div>
)
Home.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  counter: state.counter,
})
const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(increment())
  },
  decrement: () => {
    dispatch(decrement())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
