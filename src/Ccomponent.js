import React, { Component } from 'react'

export default class Ccomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         visibiliti: false
      };

          this.handleClick = this.handleClick.bind(this);
  }
    handleClick() {
      this.setState(state => ({
        visibiliti: !state.visibiliti
      }));
    }
    
    render() {
      if (this.state.visibiliti) {
        return (
            <div>
              <h1>То что нужно показать</h1>
              <button onclick={this.handleClick}>Click</button>
            </div>
          );
    } else {
      return (
      <div>
        <button onClick={this.handleClick}>Click</button>
      </div>
      )
    }
  }
}
