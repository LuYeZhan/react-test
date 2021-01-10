import Input from './Input';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Input />', () => {
  let wrapper = ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Input />);
  });

  it('should render a <Input />', () => {
    // eslint-disable-next-line jest/valid-expect
    expect(wrapper.find(Input));
  });
});
