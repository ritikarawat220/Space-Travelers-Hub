import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function MissionLabel({ isReserved }) {
  return (
    <div>
      <div
        style={{ backgroundColor: isReserved ? '#18a2b8' : '#6d757d' }}
      >
        {isReserved ? 'Active Member' : 'NOT A MEMBER'}
      </div>
      <button
        type="button"
        className={classNames(
          isReserved ? 'leaveMission' : 'joinMission',
        )}
      >
        {isReserved ? 'Leave Mission' : 'Join Mission'}
      </button>
    </div>
  );
}

MissionLabel.propTypes = {
  isReserved: PropTypes.bool.isRequired,
};

export default MissionLabel;
