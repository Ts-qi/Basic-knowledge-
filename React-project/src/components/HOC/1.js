import React from 'react'

function HOC (WrappedComponent) {
  return class P extends React.Component {
    render () {
      return (
        <WrappedComponent {...this.props}/>
      )
    }
  }
}

