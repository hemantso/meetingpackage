import React from 'react';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { BookingsContext } from '../context/BookingsContext';
import Moment from 'moment';

const AllBooking = () => {
  const { user } = useContext(AuthContext);
  const { loading, booking, error, dispatch } = useContext(BookingsContext);

  useEffect(() => {
    if (user) {
      async function bookings() {
        dispatch({ type: 'BOOKING_LOADING' });
        try {
          const res = await axios.get('/booking');
          dispatch({ type: 'BOOKING_SUCCESS', payload: res.data });
        } catch (err) {
          dispatch({ type: 'BOOKING_FAILURE', payload: err.response.data });
        }
      }
      bookings();
    }
  }, [user]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table className="table table-hover table-primary">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Date Created</th>
              <th scope="col">Venue</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {booking.length > 0 ? (
              booking.map((a) => (
                <tr key={a._id} className="table-primary">
                  <th>{a.email}</th>
                  <td>
                    {Moment(a.dateCreatednew).format('MMMM Do YYYY h:mm a')}
                  </td>
                  <td>{a.venueName}</td>
                  <td>{Moment(a.startDate).format('MMMM Do YYYY h:mm a')}</td>
                  <td>{Moment(a.endDate).format('MMMM Do YYYY h:mm a')}</td>
                  <td>{a.totalPrice}</td>
                </tr>
              ))
            ) : (
              <h3>No booking available.....</h3>
            )}
          </tbody>
        </table>
      )}
      {error && <span>{error.message}</span>}
    </div>
  );
};

export default AllBooking;
