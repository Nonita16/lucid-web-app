import * as React from 'react';
import { ResearchQueryHandler } from 'search-research';
import { FormSearch } from 'ui-tool-kit';

class Search extends React.Component<{}, { search: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  public render() {
    return <React.Fragment>
      <FormSearch onSubmit={this.handleSearch} />
      <ResearchQueryHandler search={this.state.search} />
    </React.Fragment>
  }
  private handleSearch(search: string): Promise<boolean> {
    this.setState({ search });
    return Promise.resolve(true);
  }
}

export default Search;