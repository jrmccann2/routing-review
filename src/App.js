import React, {Component} from 'react';
import './App.css';

import {HashRouter} from 'react-router-dom'
import routes from './routes'
import Header from './Components/Header'


class App extends Component {
  constructor(){
    super()

    this.state = {
      list: [],
      listItemName: "",
      listItemDueDate: ""
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = () => {
    const { listItemName, listItemDueDate, list } = this.state
    this.setState({list: [...list, { listItemName, listItemDueDate }]})
  }

  render(){

    return (
        <HashRouter>
          <Header
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            list={this.state.list}
          />
          {routes}
        </HashRouter>
    );

  }
}

export default App;