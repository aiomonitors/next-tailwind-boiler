import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Counter} from '../Counter';

Enzyme.configure({adapter: new Adapter()});

describe('Counter', () => {
	test('It matches the snapshot', () => {
		const counter = shallow(<Counter />);
		expect(counter).toMatchSnapshot();
	});

	test('It should have a default value of 0', () => {
		const counter = shallow(<Counter />);
		expect(counter.find('span').text()).toEqual('Current count is: 0');
	});

	test('It should set default value to initialValue passed in', () => {
		const counter = shallow(<Counter initialValue={5} />);
		expect(counter.find('span').text()).toEqual('Current count is: 5');
	});
    
	test('It should increment the value when Increment is pressed', () => {
		const counter = mount(<Counter initialValue={5} />);
		counter.find('button').at(0).simulate('click');
		expect(counter.find('span').text()).toEqual('Current count is: 6');
	});

	test('It should reset the value when Reset is pressed', () => {
		const counter = mount(<Counter initialValue={5} />);
		counter.find('button').at(0).simulate('click');
		expect(counter.find('span').text()).toEqual('Current count is: 6');
		counter.find('button').at(1).simulate('click');
		expect(counter.find('span').text()).toEqual('Current count is: 5');
	});
});