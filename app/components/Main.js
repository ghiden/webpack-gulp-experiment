import React from 'react';
import SchoolSearch from './SchoolSearch';

class Main extends React.Component {
  render() {
    return (
        <form className="pure-form pure-form-stacked">

          <label htmlFor="school-one">School Name</label>
          <SchoolSearch />

          <button type="submit" className="pure-button pure-button-primary">Search</button>
        </form>
    )
  }
};

React.render(<Main />, document.getElementById('app'));
