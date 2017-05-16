import React, {Component} from 'react';


export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};

    //this = instance of SearchBar
    //overwriting method
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  static onFormSubmit(event){
    event.preventDefault();

    // We need to go and fetch weather data
  }

  render() {
    return (
      <form onSubmit={SearchBar.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
          <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
      </form>
    )
  }
}


