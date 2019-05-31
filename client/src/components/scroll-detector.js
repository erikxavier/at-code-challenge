import React, { Component } from 'react'

class ScrollDetector extends Component {
  componentDidMount () {
    this.props.active ? window.addEventListener('scroll', this.handleScroll.bind(this))
      : window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  componentDidUpdate (prevProps) {
    if (prevProps.active !== this.props.active) {
      this.props.active ? window.addEventListener('scroll', this.handleScroll.bind(this))
        : window.removeEventListener('scroll', this.handleScroll.bind(this))
    }
  }
  handleScroll () {
    if (!this.props.active) return
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
    const windowBottom = windowHeight + window.pageYOffset
    if (windowBottom * 1.1 >= docHeight) {
      console.log('Bottom reached')
      if (this.props.active && this.props.onBottom) this.props.onBottom()
    }
  }
  render () {
    return <React.Fragment />
  }
}

export default ScrollDetector
