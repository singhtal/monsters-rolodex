import React, {Component} from 'react';
import Cardlist from './components/card-list/card-list';
import Input from './components/Input/input';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  updateSearch(input) {
    this.setState({searchField: input});
  }
  render() {
    let {monsters,searchField}  = this.state;
    var filterMonsters = monsters.filter(function(elem){
        return (elem.name.toLowerCase()).includes(searchField.toLowerCase());
    })
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
            <Input placeholder="Search Monsters" handleChange={event => this.updateSearch(event.target.value)} />
            <Cardlist monsters={filterMonsters} />
      </div>
    );    
  }
}

export default App;
