import * as React from 'react';
import ArticleList from '../ArticleList';
import { shallow } from 'enzyme';

describe('ArticleList', () => {
  const testProps = {
    articles: new Map(),
    articleActions: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };

  it('renders correctly with no articles.', () => {
    // tslint:disable
    const wrapper = shallow(<ArticleList {...testProps as any} />);
    expect(wrapper.find('Article').length).toBe(0);

    expect(wrapper).toMatchSnapshot();
  });
});
