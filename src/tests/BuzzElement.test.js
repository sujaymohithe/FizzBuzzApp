import React from "react";
import FizzElement from "../components/FizzBuzz/FizzBuzzElements/BuzzElement";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

it("should render Buzz", () => {
    const BuzzComponent = shallow(
        <FizzElement />
    );
    const result = <li>Buzz</li>;
    expect(BuzzComponent.contains(result)).toEqual(true);
});
