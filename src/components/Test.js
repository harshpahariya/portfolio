import React, { Component } from 'react'

class Test extends Component {
    render() {
        return (
            <div>
                {this.props.secret}
            </div>
        )
    }
}

export default Test
