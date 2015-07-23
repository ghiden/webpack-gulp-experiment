import React from 'react';
import Select from 'react-select';
import schools from '../data/schools';

require('../../node_modules/react-select/dist/default.css');

console.log(schools);
class SchoolSearch extends React.Component {
  logChange(val) {
    console.log('selected: ' + val);
  }
  render() {
    return (
        <Select
          name="school-one"
          options={schools}
          searchable={true}
          ignoreCase={true}
          onChange={this.logChange}
        />
    )
  }
};

export default SchoolSearch
