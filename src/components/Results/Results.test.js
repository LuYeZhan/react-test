import Results from './Results';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Results />', () => {
  let wrapper = ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Results />);
  });

  it('should render a <Input />', () => {
    // eslint-disable-next-line jest/valid-expect
    expect(wrapper.find(Results));
  });
});
