import React from "react";
import FizzBuzzElement from "../components/FizzBuzz/FizzBuzzElements/FizzBuzzElement";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

it("should render FizzBuzz", () => {
    const FizzBuzzComponent = shallow(
        <FizzBuzzElement />
    );
    const result = <li>FizzBuzz</li>;
    expect(FizzBuzzComponent.contains(result)).toEqual(true);
});
