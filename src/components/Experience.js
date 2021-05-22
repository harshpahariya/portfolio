import React, { Component } from 'react';
import Test from './Test';

class Experience extends Component {
    state = {
        mobile: '',
        //secretKey: 'qwertyuiopamit'
    }

    submitData = () => {
        console.log(this.state.mobile);
        //axios.post('').then(res => this.setState({secretKey : res.data}));
        sessionStorage.setItem("key", "qwertyiotiuot");
    }

    render() {
        //console.log(this.state.mobile);
        return (
            <div>
                Mobile no. <input type='text' value={this.state.mobile} onChange={(e) => this.setState({mobile: e.target.value})} />
                <button onClick={this.submitData}> Get OTP</button>
                <Test secret={this.state.secretKey} />
            </div>
        )
    }
}

export default Experience
