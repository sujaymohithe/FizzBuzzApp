import React from "react";
import FizzElement from "../components/FizzBuzz/FizzBuzzElements/FizzElement";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

it("should render Fizz", () => {
    const FizzComponent = shallow(
        <FizzElement />
    );
    const result = <li>Fizz</li>;
    expect(FizzComponent.contains(result)).toEqual(true);
});
