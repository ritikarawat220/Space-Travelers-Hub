import React from 'react';
import { useSelector } from 'react-redux';

export default function MyproFile() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="myprofile_container">
      <div>
        <h3>My Missions</h3>
      </div>
      <div>
        <h3>My Rockets</h3>
        <div>
          <table className="rockettable">
            <tbody className="rocketbody">
              {reservedRockets.map((rockets) => (
                <tr key={rockets.id}>
                  <td>{rockets.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
