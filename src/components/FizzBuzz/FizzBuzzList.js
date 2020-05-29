import React from 'react';
import FizzBuzzItem from "./FizzBuzzItem";
import FizzBuzzItemHoc from '../HOC/FizzBuzzItemHoc';
import './FizzBuzz.css';

const FizzBuzzList = props => {
    const { limit } = props;
    let itemList = [];
    if (limit) {
        for (let i = 0; i <= limit; i++) {
            let RenderItem = FizzBuzzItemHoc(FizzBuzzItem);
            itemList.push(<RenderItem key={i} value={i} {...props} />);
        }
    }

    return (
        <div>
            <h2><u>Fizz-Buzz Results</u></h2>
            <ul className="list-type">
                {itemList}
            </ul>
        </div>
    );
}

export default FizzBuzzList;