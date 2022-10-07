import React from 'react';


const Card = props => {
    return(
        <div className='cardtitle'>
            <h3 className='title'>{props.title}</h3>
            <ul className='list'>
                <li>{props.list}</li>
                <li>{props.list1}</li>
                <li>{props.list2}</li>
                <li>{props.list3}</li>
            </ul>
            <h4 className='price'>{props.price}</h4>
            <button className='button'>30 DAYS FREE TRIAL</button>
            <br></br>
            <br></br>
            <button className='btn1'>SIGN UP</button>
        </div>
    ); 
};
export default Card;