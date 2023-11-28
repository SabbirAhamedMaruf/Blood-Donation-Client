import { useContext, useState } from "react";
import useDonorDonationData from "../../../API/useDonorDonationData";
import useUserData from "../../../API/useUserData";
import SingleDonationData from "../../../Components/SingleDonationData"; 
import { NotificationContext } from "../../../hooks/Notification";
import { Link } from "react-router-dom";
import { SecurityContext } from "../../../Provider/SecurityProvider";
import useAxiosSecure from "../../../API/useAxiosSecure";
const DonorHome = () => {
  const {user}=useContext(SecurityContext);
  const { handleSuccessToast, handleErrorToast } =
    useContext(NotificationContext);
  const [, userData] = useUserData();
  const [handleRefech,setHandleRefetch]=useState(true);
  const [donorDonationData, refetch] = useDonorDonationData();
  const axiosSecure = useAxiosSecure();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showChangeStatusModal, setShowChangeStatusModal] = useState(false);

  // deleteing donation request
  const handleDeleteDonationData = (donationId) => {
    axiosSecure
      .delete(`/deletedonationrequestsdata?donationId=${donationId}&email=${user.email}`)
      .then((res) => {
        if (res.data.data.acknowledged) {
          handleSuccessToast("Donation request deleted successfully!");
          setShowDeleteModal(false);
          setHandleRefetch(!handleRefech);
          refetch();
        } else {
          handleErrorToast(
            "An error occured during deletion donation request!"
          );
        }
      });
  };

  // update donation status
  const handleUpdateDonationStatus = (donationId, status) => {
    axiosSecure
      .patch(`/confrimdonation?donationId=${donationId}&status=${status}&email=${user.email}`)
      .then((res) => {
        if (res.data.data.acknowledged) {
          handleSuccessToast("Donation request updated successfully!");
          setShowChangeStatusModal(false);
          setHandleRefetch(!handleRefech);
          refetch();
        } else {
          handleErrorToast(
            "An error occured during updating donation request!"
          );
        }
      });
  };

  return (
    <div>
      <div className="w-[90%] h-[100vh] lg:h-[80vh] lg:w-[90vw] m-auto shadow-lg  md:p-5 lg:p-10 rounded-lg lg:rounded-2xl my-5">
        <div>
          <h1 className="h-1/4 text-center text-xl md:text-2xl lg:text-4xl font-semibold my-10">
            Welcome {userData.name}
          </h1>
          {donorDonationData.length === 0 ? (
            <h1 className="text-xl md:text-2xl lg:text-3xl text-red-500 font-semibold text-center mt-60">
              Not donation request found
            </h1>
          ) : (
            <div className="h-3/4 w-full py-5">
              <div className="overflow-x-auto ">
                <table className="table table-lg space-y-5">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Recipient Name</th>
                      <th>Recipient Location</th>
                      <th>Donation Date</th>
                      <th>Donation Time</th>
                      <th>Status</th>
                      <th>Donor Information</th>
                      <th>Edit</th>
                      <th>Delete</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donorDonationData.slice(0, 3).map((i, idx) => (
                      <SingleDonationData
                        key={i._id}
                        number={idx}
                        data={i}
                        refetch={refetch}
                        handleDeleteDonationData={handleDeleteDonationData}
                        setShowDeleteModal={setShowDeleteModal}
                        showDeleteModal={showDeleteModal}
                        showChangeStatusModal={showChangeStatusModal}
                        setShowChangeStatusModal={setShowChangeStatusModal}
                        handleUpdateDonationStatus={handleUpdateDonationStatus}
                      ></SingleDonationData>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>No.</th>
                      <th>Recipient Name</th>
                      <th>Recipient Location</th>
                      <th>Donation Date</th>
                      <th>Donation Time</th>
                      <th>Status</th>
                      <th>Donor Information</th>
                      <th>Edit</th>
                      <th>Delete</th>
                      <th>View</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          )}
          {donorDonationData.length === 0 ? (
            <Link to="/dashboard/my-donation-requests">
              <button className="ml-[38%] md:ml-[42%] lg:ml-[1%] mt-[15%] px-4 text-center text-xl text-white font-bold rounded-full  py-1 lg:py-2 bg-blue-500">
                View my request
              </button>
            </Link>
          ) : (
            <Link to="/dashboard/my-donation-requests">
              <button className="ml-[38%] md:ml-[42%] lg:ml-[1%] mt-[2%] px-4 text-center text-xl text-white font-bold rounded-full  py-1 lg:py-2 bg-blue-500">
                View my request
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonorHome;
