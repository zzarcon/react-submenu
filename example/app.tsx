import * as React from 'react';
import {Component} from 'react';
import {GHCorner} from 'react-gh-corner';
import {Submenu} from '../src';
import {AppWrapper, ContentItem, ContentWrapper, GlobalStyles} from './styled';

export interface AppState {
  
}

const repoUrl = 'https://github.com/react-submenu';

export default class App extends Component <{}, AppState> {
  state: AppState = {
    
  }

  onContentClick = () => {

  }

  renderContent = () => {
    return (
      <ContentWrapper>
        <ContentItem>
          Back
        </ContentItem>
        <ContentItem>
          Forward
        </ContentItem>
        <ContentItem>
          Reload
        </ContentItem>
        <ContentItem onClick={this.onContentClick}>
          Custom item
        </ContentItem>
      </ContentWrapper>
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