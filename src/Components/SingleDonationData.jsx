import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleDonationData = ({ number, data }) => {
  return (
    <tr>
      <th>{number + 1}</th>
      <td>{data.recipientname}</td>
      <td>
        District: {data.recipientdistrict} and upazila: {data.recipientupazila}
      </td>
      <td>{data.donationdate}</td>
      <td>{data.donationtime}</td>
      <td>
        <span className="px-3 py-1 bg-orange-300 text-white rounded-full">
          {data.status}
        </span>
      </td>
      <td className="text-red-500 font-bold">Donor Information</td>
      <td>
        <Link to={`/dashboard/update-donation-request/${data._id}`}>
          <button className="px-2 py-1 bg-yellow-500 text-white rounded-md">
            Edit
          </button>
        </Link>
      </td>
      <td>
        <button className="px-2 py-1 bg-red-500 text-white rounded-md">
          Delete
        </button>
      </td>
      <td>
        <button className="px-2 py-1 bg-green-500 text-white rounded-md">
          View Details
        </button>
      </td>
    </tr>
  );
};
SingleDonationData.propTypes = {
  number: PropTypes.number,
  data: PropTypes.object,
};

export default SingleDonationData;
