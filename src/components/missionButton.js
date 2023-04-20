import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from '../styles/missionLabel.module.css';

function MissionButton({ isReserved, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        styles.button,
        isReserved ? styles.leaveMission : styles.joinMission,
      )}
    >
      {isReserved ? 'Leave Mission' : 'Join Mission'}
    </button>
  );
}

MissionButton.propTypes = {
  isReserved: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MissionButton;
