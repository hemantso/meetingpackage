import React from 'react';
import Moment from 'moment';

const Booking = ({ booking }) => {
  return (
    <>
      {booking.map((booking) => (
        <tr key={booking._id} className="table-primary">
          <th>{booking.email}</th>
          <td>{Moment(booking.dateCreatednew).format('MMMM Do YYYY h:mm a')}</td>
          <td>{booking.venueName}</td>
          <td>{Moment(booking.startDate).format('MMMM Do YYYY h:mm a')}</td>
          <td>{Moment(booking.endDate).format('MMMM Do YYYY h:mm a')}</td>
          <td>{booking.totalPrice}</td>
        </tr>
      ))}
    </>
  );
};

export default Booking;
