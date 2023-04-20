import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/missionTable.module.css';
import { missionUpdated, selectMissions } from '../redux/mission/missionSlice';
import MissionLabel from './missionLabel';
import MissionButton from './missionButton';

function MissionTable() {
  const missions = useSelector(selectMissions);
  const dispatch = useDispatch();

  const renderRows = () => missions.map((mission) => (
    <tr key={mission.mission_id} className={styles.main}>
      <td className={styles.name}>{mission.mission_name}</td>
      <td>
        <p className={styles.description}>{mission.description}</p>
      </td>
      <td className={styles.rows}>
        <MissionLabel isReserved={!!mission.reserved} />
      </td>
      <td className={styles.rows}>
        <MissionButton
          isReserved={!!mission.reserved}
          onClick={() => dispatch(missionUpdated(mission.mission_id))}
        />
      </td>
    </tr>
  ));

  return (
    <table className={styles.rows}>
      <colgroup>
        <col className={styles.first} />
        <col className={styles.second} />
        <col className={styles.third} />
        <col className={styles.fourth} />
      </colgroup>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
}

export default MissionTable;
