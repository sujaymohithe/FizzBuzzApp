import React from "react";
import FizzBuzzItemHoc from "../components/HOC/FizzBuzzItemHoc";
import FizzBuzzItem from "../components/FizzBuzz/FizzBuzzItem";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe('<FizzBuzzItemHoc/> component', () => {
    it("should render Fizz", () => {
        const initialProps = {
            value: 3,
        };
        const FizzBuzzItemComponent = FizzBuzzItemHoc(FizzBuzzItem);
        const fizzBuzzItemComponent = mount(
            <FizzBuzzItemComponent {...initialProps} />
        );
        let result = <li>Fizz</li>;
        expect(fizzBuzzItemComponent.contains(result)).toEqual(true);
    });

    it("should render FizzBuzz", () => {
        const initialProps = {
            value: 15,
        };
        const FizzBuzzItemComponent = FizzBuzzItemHoc(FizzBuzzItem);
        const fizzBuzzItemComponent = mount(
            <FizzBuzzItemComponent {...initialProps} />
        );
        let result = <li>FizzBuzz</li>;
        expect(fizzBuzzItemComponent.contains(result)).toEqual(true);
    });

    it("should render Buzz", () => {
        const initialProps = {
            value: 5,
        };
        const FizzBuzzItemComponent = FizzBuzzItemHoc(FizzBuzzItem);
        const fizzBuzzItemComponent = mount(
            <FizzBuzzItemComponent {...initialProps} />
        );
        let result = <li>Buzz</li>;
        expect(fizzBuzzItemComponent.contains(result)).toEqual(true);
    }); 
   
});
