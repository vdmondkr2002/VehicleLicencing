import React from 'react';
import {useSelector} from 'react-redux'
// import { connect } from 'react-redux';

const Alerts = () => {
 const alerts = useSelector(state=>state.alert)
 console.log(alerts)
  return (
    alerts.length > 0 &&
    alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' />
        {alert.msg}
      </div>
    ))
  );
};

export default Alerts