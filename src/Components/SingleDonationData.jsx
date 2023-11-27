import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../API/useAxiosPublic";
import { NotificationContext } from "../hooks/Notification";


const SingleDonationData = ({number, data }) => {
  const { handleSuccessToast, handleErrorToast } =
  useContext(NotificationContext);
  const axiosPublic = useAxiosPublic();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleDeleteDonationData = (donationId) => {
    console.log(donationId);
    axiosPublic.delete(`/deletedonationrequestsdata?donationId=${donationId}`)
    .then((res) => {
      if (res.data.data.acknowledged) {
        handleSuccessToast("Donation request deleted successfully!");
        setShowDeleteModal(false);
      } else {
        handleErrorToast(
          "An error occured during deletion donation request!"
        );
      }
    });
  };
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
        <div>
          {/* My Custom Modal */}
          <button
            className="px-2 py-1 bg-red-500 text-white rounded-md"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete
          </button>
          {showDeleteModal && (
            <div>
              <div className="fixed inset-0 bg-[rgba(22,22,22,0.8)] z-10">
                <div className="fixed top-[35%] left-[40%] p-10 space-y-10 bg-white rounded-xl ">
                  <h3 className="font-bold text-2xl text-left">
                    Delete donation data?
                  </h3>
                  <div className="flex justify-center gap-10">
                    <button
                      onClick={() => handleDeleteDonationData(data._id)}
                      className="px-4 py-2 bg-orange-300 rounded-md outline-none text-white font-semibold  text-xl duration-700 hover:bg-green-300"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => setShowDeleteModal(false)}
                      className="px-4 py-2 bg-red-500 rounded-md outline-none text-white font-semibold  text-xl duration-700 hover:bg-green-300"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
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
