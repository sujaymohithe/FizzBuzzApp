import React from "react";
import App from "../App";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe('<App/> component', () => {
    const component = shallow(<App />);

    it("should render without parent component", () => {
        expect(component.length).toEqual(1);
    });


    it("should change the props after change the limit value", () => {
        const newValue = 10;
        const wrapper = mount(<App />);
        const input = wrapper.find("#limit");
        input.simulate("change", { target: { id: "limit", value: newValue } });

        expect(wrapper.find("#limit").props().value).toEqual(newValue);
    });

    it("should render fuzz-buzz list properly with count", () => {
        const limit = 20;
        const wrapper = mount(<App />);

        const input = wrapper.find("#limit");
        input.simulate("change", { target: { id: "limit", value: limit } });
        wrapper.update();
        expect(wrapper.find("FizzBuzzElement").length).toEqual(2);
        expect(wrapper.find("FizzElement").length).toEqual(5);
        expect(wrapper.find("BuzzElement").length).toEqual(3);
        expect(wrapper.find("NumberElement").length).toEqual(11);
    });

    it("should render error message for invalid input", () => {
        const limit = -1;
      
        const wrapper = mount(<App />);
      
        const input1 = wrapper.find("#limit");
        input1.simulate("change", { target: { id: "limit", value: limit } });
        wrapper.update();
        const errorMessage = <p>Please enter a valid number</p>;
        expect(wrapper.contains(errorMessage)).toEqual(true);
      });
});