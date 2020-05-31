import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


//create a state by creating a class
//and extending component
//add contructor with the state properties
class App extends Component {
  constructor() {
    super()
    this.state = {
      //things that can change
      Robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ Robots:users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { Robots, searchfield } = this.state;
    const filteredRobots = Robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    //it === 0 which is false exclamation to make it true
     return !Robots.length ?
      <h1>Loading</h1> : 
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList Robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }

export default App;