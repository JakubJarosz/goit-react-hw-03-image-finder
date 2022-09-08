import PropTypes from 'prop-types'
import React, { Component } from 'react'


export class Searchbar extends Component {
    state = {
        inputValue: "",
    }
   
    handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const login = form.elements.login.value;
        console.log(login);
       
   }

    render() {
    return (
        <header className="searchbar">
            <form className="form" onSubmit={this.handleSubmit}>
                <button type="submit" className="button">
                    <span className="button-label">Search</span>
                </button>
                <input
                    className="input"
                    type="text"
                    name="login"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
        
    )
  }
}

export default Searchbar