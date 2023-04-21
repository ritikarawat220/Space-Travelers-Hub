import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MissionTable from '../components/missionTable';
import { fetchMissions } from '../redux/mission/missionSlice';

function Missions() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <main>
      <MissionTable />
    </main>
  );
}

export default Missions;
