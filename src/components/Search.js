import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash.isempty';

//FIXME - Need Optimization
class Search extends Component {
  state = {
    filter: '',
    searchString: '',
    visible: false
  };
  async componentDidUpdate() {
    const { filter } = this.state;
    const { jobData, type, tabKey } = this.props;
    let lowercasedFilter = '',
      filteredData = '';
    if (!isEmpty(filter)) {
      lowercasedFilter = filter.toLowerCase();
    }
    if (!isEmpty(jobData)) {
      filteredData = jobData.filter(item => {
        if (item != null) {
            return Object.keys(item).some(key => {
              if (
                key == 'area_name'
              ) {
                return (
                  typeof item[key] === 'string' &&
                  item[key].toLowerCase().includes(lowercasedFilter)
                );
              }
            });
        }
      });
    }
    await this.props.setFilteredData(filteredData);
  }
  inputChange = e => {
    this.setState({ searchString: e.target.value });
  };
  Search = () => {
    this.setState({ filter: this.state.searchString });
  };
  clearSearch = () => {
    this.setState({
      filter: '',
      visible: false
    });
  };
  render() {
    const { jobData, type, tabKey, screenWidth } = this.props;
    const { visible } = this.state;
    return (
      <div>
        <div className={`search-btn-grp`}>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.Search();
            }}
          >
            <input type="text" onChange={this.inputChange} />
            <button className="search-btn" type="submit"></button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
