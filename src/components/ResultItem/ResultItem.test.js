import ResultItem from './ResultItem';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<ResultItem />', () => {
  let wrapper = ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultItem />);
  });

  it('should render a <ResultItem />', () => {
    // eslint-disable-next-line jest/valid-expect
    expect(wrapper.find(ResultItem));
  });
});
