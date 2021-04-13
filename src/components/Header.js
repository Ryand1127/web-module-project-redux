import React from 'react';
//STEP 8: Importing connect to access state props
import {connect} from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

//STEP 10: creating the mapStateToProps returning the state
const mapStateToProps = (state) => {
  return {
    car: state.car,
  }
}

//STEP 9: using connect to import mapStateToProps
export default connect(mapStateToProps)(Header);
