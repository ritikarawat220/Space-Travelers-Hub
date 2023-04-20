import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from '../styles/missionLabel.module.css';

function MissionLabel({ isReserved, onClick }) {
  const buttonClassName = cn({
    joinMission: !isReserved,
    leaveMission: isReserved,
  });

  const labelBackgroundColor = isReserved ? '#18a2b8' : '#6d757d';
  const labelText = isReserved ? 'Active Member' : 'NOT A MEMBER';
  const buttonText = isReserved ? 'Leave Mission' : 'Join Mission';

  return (
    <div className={styles.label} style={{ backgroundColor: labelBackgroundColor }}>
      {labelText}
      <button type="button" className={buttonClassName} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

MissionLabel.propTypes = {
  isReserved: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MissionLabel;
