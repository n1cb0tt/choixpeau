import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { updateSelectedHouse } from '../actionCreators';

import Message from '../components/Message';

const Result = (props) => {
  useEffect(
    () => {
      setInterval(() => updateSelectedHouse(props.dispatch), 1000);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div>
      <h1>Sorting Hat</h1>
      <ul>
        {props.houses.map((house) => (
          <li className={house === props.selectedHouse ? "selectedHouse" : ""} key={house}>{house}</li>
        ))}
      </ul>
      <Message message={props.selectedHouse} dispatch={props.dispatch} />
      <p>Don't forget to run <em><strong>Redux Devtools</strong></em> in your browser's inspector to see the Redux State and the Actions.</p>
    </div>
  );
};

const mapStateToProps = ({ houses, selectedHouse }) => ({ houses, selectedHouse });

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Result);
