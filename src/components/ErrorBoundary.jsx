import React from 'react'

// see: https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      console.log('error:')
    }
    return this.props.children
  }
}

export default ErrorBoundary
