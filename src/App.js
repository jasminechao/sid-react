import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './TabBar';
import TabBar from './TabBar';
import axios from 'axios';
import { nowShowingUrl, topRatedUrl } from './api/apiConfig.js'
import List from './List'

class App extends Component {

  constructor(props) {

    super(props)
    // Bind events
    this.onTabSelected = this.onTabSelected.bind(this)
    this.state = { selectedType: "now_showing" }
 }

 componentDidMount() {
  this.onTabSelected(this.state.selectedType)
}

onTabSelected(selectedType) {
  // AJAX call to get the API response
  switch (selectedType) {
    case "now_showing":
      axios.get(nowShowingUrl).then(response => {
        this.setState({
          nowShowing: response.data.results,
          selectedType,
        })
      })
      break
    case "top_rated":
      axios.get(topRatedUrl).then(response => {
        this.setState({
          topRated: response.data.results,
          selectedType,
        })
      })
      break
  }
}

render() {
  const { selectedType } = this.state
  const { nowShowing, topRated } = this.state

  return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    </header>
    <p className="App-intro">Click on the Following Tabs</p>
    <div>
    <TabBar onTabSelected={this.onTabSelected} />
    {selectedType === "now_showing" && nowShowing && <List data={nowShowing} />}
    {selectedType === "top_rated" && topRated && <List data={topRated} />}
    </div>
    </div>
    );
}
}

export default App;
