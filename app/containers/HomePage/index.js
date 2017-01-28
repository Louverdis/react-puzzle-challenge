/*
 * HomePage
 *
 * Rendered component for the '/' Route.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Puzzle from 'containers/Puzzle';

import Page from './Page';
import H1 from './H1';
import PuzzleContainer from './PuzzleContainer';

import messages from './messages';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Page>
        <PuzzleContainer>
          <Puzzle />
        </PuzzleContainer>
        <H1>
          <FormattedMessage {...messages.title} />
        </H1>
      </Page>
    );
  }
}
