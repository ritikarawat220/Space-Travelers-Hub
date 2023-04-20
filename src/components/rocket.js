import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserverockets, cancelrockets } from '../redux/rockets/rocketsSlice';

const Rocket = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  const handleReserve = (rocketId) => {
    dispatch(reserverockets(rocketId));
  };

  const onCancel = (rocketId) => {
    dispatch(cancelrockets(rocketId));
  };

  return (
    <section className="main">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="Rocket_container flex">
          <div className="rocket_img">
            <img src={rocket.flickr_images} alt={`Rocket ${rocket.name}`} />
          </div>
          <div className="rocket_desc_container">
            <h3 className="rocket_head">{rocket.name}</h3>
            <p className="rocket_text">
              <span className={rocket.reserved === true ? 'show' : 'hidden'}>Reserved</span>
              {rocket.description}
            </p>
            {rocket.reserved && (
              <button
                type="button"
                className="cancel-btn"
                onClick={() => onCancel(rocket.id)}
              >
                Cancel Reservation
              </button>
            )}
            {!rocket.reserved && (
              <button
                type="button"
                className="reserve-Btn"
                onClick={() => handleReserve(rocket.id)}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
export default Rocket;
