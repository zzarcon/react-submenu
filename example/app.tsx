import * as React from 'react';
import {Component} from 'react';
import {GHCorner} from 'react-gh-corner';
import {Submenu} from '../src';
import {AppWrapper, GlobalStyles} from './styled';

export interface AppState {
  
}

const repoUrl = 'https://github.com/react-submenu';

export default class App extends Component <{}, AppState> {
  state: AppState = {
    
  }

  renderContent = () => {
    return (
      <div>
        Content
      </div>
    )
  }

  render() {
    return (
      <AppWrapper>
        <GlobalStyles />
        <GHCorner openInNewTab href={repoUrl} />
        <Submenu content={this.renderContent()}>
          <div>
            <h1>
              Title
            </h1>
            <p>
              Some content
            </p>
          </div>
        </Submenu>
      </AppWrapper>
    )
  }
}