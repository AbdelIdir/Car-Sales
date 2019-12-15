import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actionCreator_actionTypes_ReducersStates/actionCreators";

import AddedFeature from "./AddedFeature";

export const AddedFeatures = ({ carFeatures, removeFeature }) => {
  const takeOut = item => {
    removeFeature(item);
  };

  return (
    <div className="content">
      <h6>Added features:</h6>
      {carFeatures.features.length ? (
        <ol type="1">
          {carFeatures.features.map(item => (
            <AddedFeature
              key={item.id}
              feature={item}
              removeFeature={takeOut}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    carFeatures: state.carR
  };
}
export default connect(mapStateToProps, { removeFeature })(AddedFeatures);
