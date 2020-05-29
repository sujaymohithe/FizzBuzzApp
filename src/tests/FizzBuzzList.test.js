import React from "react";
import FizzBuzzList from "../components/FizzBuzz/FizzBuzzList";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe('<FizzBuzzList/> component', () => {
    it("should render FizzBuzzList correctly", () => {
        const initialProps = {
            limit: 20
        };

        const wrapper = mount(<FizzBuzzList {...initialProps} />);
        expect(wrapper.find("FizzBuzzElement").length).toEqual(2);
        expect(wrapper.find("FizzElement").length).toEqual(5);
        expect(wrapper.find("BuzzElement").length).toEqual(3);
        expect(wrapper.find("NumberElement").length).toEqual(11);
    });
});
