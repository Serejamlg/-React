import React, { Component } from 'react'

export default class SelectCompanent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            input: '',
            submit: ''
      };
    
      this.hendleChange = this.hendleChange.bind(this)
      this.hendleSubmit = this.hendleSubmit.bind(this)
    }
    
    hendleChange(event) {
         this.setState({
            input: event.target.value
         })
    }

    hendleSubmit(event) {
        event.preventDefault()
        this.setState({
            submit: this.state.input
        })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.hendleSubmit}>
        <input value={this.state.input} onChange={this.hendleChange}></input>
        <button type='submit'>submit</button>
        </form>
        
        <h5>Контролируемый Инпут</h5>
        <h3>{this.state.submit}</h3>
      </div>
            );
        }
    }
