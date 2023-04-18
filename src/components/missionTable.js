import React from 'react';
import { useSelector } from 'react-redux';
import { selectMissions } from '../redux/mission/missionSlice';
import MissionLabel from './missionLabel';

function MissionTable() {
  const missions = useSelector(selectMissions);

  const renderRows = () => missions.map((mission) => (
    <tr key={mission.mission_id}>
      <td>{mission.mission_name}</td>
      <td>
        <p>{mission.description}</p>
      </td>
      <td>
        <MissionLabel isReserved={!!mission.reserved} />
      </td>
      <td>
        <MissionLabel isReserved={!!mission.reserved} />
      </td>
    </tr>
  ));

  return (
    <table className="rows">
      <colgroup>
        <col className="first" />
        <col className="second" />
        <col className="third" />
        <col className="fourth" />
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
