import * as React from 'react';
import ArticleList from '../ArticleList';

import * as renderer from 'react-test-renderer';

describe('ArticleList', () => {
  const testProps = {
    articles: new Map(),
    articleActions: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };

  it('renders correctly', () => {
    const tree = renderer
      .create(<ArticleList {...testProps as any} />)
      .toJSON();

    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
