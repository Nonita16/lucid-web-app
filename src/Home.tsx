import * as React from 'react';
import { Page } from 'react-page-layout';
import { FormSignIn, IAuthContext, withAuthContext } from 'ui-tool-kit';
import Search from './Search';

class Home extends React.Component<{ authContext: IAuthContext }, {}> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    const { authContext } = this.props;
    return (
      <Page layout="LayoutHCF">
        <div className="container">
          <div className="row justify-content-center" hidden={authContext.isSignedIn}>
            <div className="col-md-4">
              <FormSignIn />
            </div>
          </div>
          <div className="row justify-content-center" hidden={!authContext.isSignedIn}>
            <div className="col-md-6">
              <Search />
            </div>
          </div>
        </div>
      </Page>
    );

  }
}

export default (withAuthContext)(Home);