import * as React from 'react';
import debounce = require('lodash/debounce');

export interface Props {
  doSearch: (searchTerm: string) => void;
}

export interface State {
  searchTerm: string;
}

class SearchBar extends React.PureComponent<Props, State> {
  state: State = {
    searchTerm: ''
  };

  doSearch = debounce(() => this.props.doSearch(this.state.searchTerm), 300);

  private handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState(
      {
        searchTerm: e.currentTarget.value
      },
      () => this.doSearch()
    );
  };

  public render() {
    return (
      <input
        type="search"
        placeholder="Enter a search term"
        value={this.state.searchTerm}
        onChange={this.handleSearch}
      />
    );
  }
}

export default SearchBar;
