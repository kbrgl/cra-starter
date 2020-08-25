import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement } from '../../store/actions'

import styles from './styles.module.css'

const Home = ({ counter, increment, decrement }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}
  >
    <button type="button" onClick={decrement} className={styles.button}>
      -
    </button>
    <div className={styles.text}>{counter}</div>
    <button type="button" onClick={increment} className={styles.button}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
