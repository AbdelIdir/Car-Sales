import React from "react";
// import {connect} from "react-redux";
// import {addFeature} from "../actionCreator_actionTypes_ReducersStates/actionCreators";
const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => props.addFeature(props.features.id)}
      >
        Add
      </button>
      {props.features.name} (+{props.features.price})
    </li>
  );
};
export default AdditionalFeature;
// function mapStateToProps(state) {
//   return {
//     features: state.features
//   }
// };

// export default connect(
//   mapStateToProps,
//   {addFeature},
// )(AdditionalFeature);
