/**
 *
 * App.react.js
 *
 * Root app component.
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Helmet
          title="Sliding Puzzle Quiz"
          meta={[
            { name: 'description', content: 'A sliding puzzle made with React.js' },
          ]}
        />
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
