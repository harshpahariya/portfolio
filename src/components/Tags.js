import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import './tag.css';

const styles = {
  large: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  small: {
    opacity: 0.7,
    fontSize: 16
  }
};

class Tags extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 3000);
  }

  render() {
    return (
      <div className='app-outer'>
        <div className='app-inner'>
          <h1>react-tag-cloud demo</h1>
         
          <TagCloud 
            className='tag-cloud'
            style={{
              fontFamily: 'sans-serif',
              //fontSize: () => Math.round(Math.random() * 50) + 16,
              fontSize: 30,
              color: () => randomColor({
                hue: 'blue'
              }),
              padding: 5,
            }}>
            <div
              style={{
                fontFamily: 'serif',
                fontSize: 40,
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: randomColor()
              }}>Futurama</div>
           
            <div style={styles.large}>Patents</div>
            
            <div style={styles.large}>BFSI</div>
            
            <div style={{fontFamily: 'courier'}}>Retail</div>
            <div style={{fontSize: 30}}>Analytics Insights</div>
            <div style={{fontStyle: 'italic'}}>Corporate RI</div>
           
            <div style={{color: 'green'}}>TTH</div>
          
            
            <div>Healthcare</div>
            <div>Telecom</div>
            <div>Media</div>
            <div>Blockchain</div>
            <div>AI</div>
            <div>Microsoft</div>
            <div>Unit</div>
            <div>Retail</div>
            <div>BI</div>
            <div>Bobs Burgers</div>
            <div style={styles.small}>Dino Riders</div>
            <div style={styles.small}>Silverhawks</div>
            <div style={styles.small}>Bravestar</div>
            <div style={styles.small}>Starcom</div>
           
          </TagCloud>
        </div>
      </div>
    );
  }
}

export default Tags;
