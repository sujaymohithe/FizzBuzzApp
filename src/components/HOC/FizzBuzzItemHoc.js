import React from "react";
import FizzElement from "../FizzBuzz/FizzBuzzElements/FizzElement";
import BuzzElement from "../FizzBuzz/FizzBuzzElements/BuzzElement";
import FizzBuzzElement from "../FizzBuzz/FizzBuzzElements/FizzBuzzElement";
import NumberElement from "../FizzBuzz/FizzBuzzElements/NumberElement";

const FizzBuzzItemHoc = WrappedComponent => {
  const FizzBuzzItemWrapper = props => {
    const renderListItemComponent = (value) => {
      //decides which list component to be rendered
      if (value % 15 === 0)
        return <FizzBuzzElement />;
      else if (value % 3 === 0)
        return <FizzElement />;
      else if (value % 5 === 0)
        return <BuzzElement />;
      else
        return <NumberElement value={value} />;
    }

    return (
      <WrappedComponent {...props}>
        {value => renderListItemComponent(value)}
      </WrappedComponent>
    );

  }

  return FizzBuzzItemWrapper;
};

export default FizzBuzzItemHoc;
