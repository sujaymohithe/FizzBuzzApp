import React from "react";
import NumberElement from "../components/FizzBuzz/FizzBuzzElements/NumberElement";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

it("should render FizzBuzz", () => {
    const value = 2;
    const NumberComponent = shallow(
        <NumberElement value={value} />
    );
    const result = <li>{value}</li>;
    expect(NumberComponent.contains(result)).toEqual(true);
});
