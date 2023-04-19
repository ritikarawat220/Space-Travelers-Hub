import React from 'react';
import { useSelector } from 'react-redux';
import { selectMissions } from '../redux/mission/missionSlice';
import MissionLabel from './missionLabel';
import './missionTable.css';

function MissionTable() {
  const missions = useSelector(selectMissions);

  const renderRows = () => missions.map((mission) => (
    <tr className="main" key={mission.mission_id}>
      <td className="name">{mission.mission_name}</td>
      <td>
        <p className="description">{mission.description}</p>
      </td>
      <td className="mission-btn">
        <MissionLabel isReserved={!!mission.reserved} />
      </td>
      <td className="mission-btn">
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
