import GithubPage from './GithubPage';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<GithubPage />', () => {
  let wrapper = ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<GithubPage />);
  });

  it('should render a <GithubPage />', () => {
    // eslint-disable-next-line jest/valid-expect
    expect(wrapper.find(GithubPage));
  });
});
