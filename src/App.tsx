import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ResearchProvider } from 'search-research';
import { AuthProvider, ProtectedRoute, ThemeProvider } from 'ui-tool-kit';
import './App.css';
import Home from './Home';
import Search from './Search';

class App extends React.Component {
  public render() {
    return (
      <AuthProvider>
        <ThemeProvider>
          <ResearchProvider>
            <Router>
              <Switch>
                <Route path="/" component={Home} />
                <ProtectedRoute path="/search" component={Search} />
              </Switch>
            </Router>
          </ResearchProvider>
        </ThemeProvider>
      </AuthProvider>
    );
  }
}

export default App;
