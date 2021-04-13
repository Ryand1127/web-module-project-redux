import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../actions/index'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {addFeature: feat => dispatch(addFeature(feat))}
}

export default connect(null, mapDispatchToProps)(AdditionalFeature);
