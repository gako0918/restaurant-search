import React from 'react';
import './App.css';
import Search from './Search';
import List from './List';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search:'',
      search_result:[]
    }
  }

    handleSearchChange = (event) => {
    const searchValue = event.target.value;
    this.setState({search:searchValue})
  }

    handleSearchClick = async () => {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const url = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${API_KEY}&name=${this.state.search}`
      const res = await axios.get(url);
      const result = res.data.rest.map((item) => {
       return {
         image_url: item.image_url,
         name:item.name,
         access:item.access,
         budget:item.budget,
         pr:item.pr
       }
      });
      this.setState({search_result:result});
    }


  render(){
    return (
      <div className="App">
       <Search
         search={this.state.search}
         handleSearchChange={this.handleSearchChange}
         handleSearchClick={this.handleSearchClick}
       />
       <List 
         list={this.state.search_result}
       />
      </div>
    );
  }
}

export default App;
