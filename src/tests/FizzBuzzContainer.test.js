import React from "react";
import FizzBuzzContainer from "../components/FizzBuzzContainer";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe('<FizzBuzzContainer/> container', () => {
    const wrapper = shallow(<FizzBuzzContainer />);

    it("should render without parent component", () => {
        expect(wrapper.length).toEqual(1);
    });

    it("should render FizzBuzzList component", () => {
        expect(wrapper.find("FizzBuzzList").length).toEqual(1);;
    });

    it("should render the correct props value", () => {
        const newValue = 1;
        const input = wrapper.find("#limit");
        input.simulate("change", { target: { id: "limit", value: newValue } });
        wrapper.update();
        expect(wrapper.find("#limit").props().value).toEqual(newValue);
    });


});