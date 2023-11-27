import useDonorDonationData from "../../../API/useDonorDonationData";
import useUserData from "../../../API/useUserData";
import SingleDonationData from "../../../Components/SingleDonationData";

const DonorHome = () => {
  const [,userData] = useUserData();
  const [donorDonationData] = useDonorDonationData();

  return (
    <div>
      <div className="w-[90%] h-[100vh] lg:h-[80vh] lg:w-[90vw] m-auto shadow-lg  md:p-5 lg:p-10 rounded-lg lg:rounded-2xl my-5">
        <div>
          <h1 className="h-1/4 text-center text-xl md:text-2xl lg:text-4xl font-semibold my-10">
            Welcome {userData.name}
          </h1>
          {donorDonationData.length === 0 ? (
            <h1 className="text-xl md:text-2xl lg:text-3xl text-red-500 font-semibold text-center mt-60">Not donation request found</h1>
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
                <button className="ml-[38%] md:ml-[42%] lg:ml-[1%] mt-[2%] px-4 text-center text-xl text-white font-bold rounded-full  py-1 lg:py-2 bg-blue-500">
                  View all
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonorHome;


// TODO data refetching not working after deleting donation data. tried refetch, and props and state



// > Must Check
/***
//?       donation delete page after clicking view donation request button from home of donor
 //?       The form will have following input fields
○ //?      donor name(read only - logged in user name)
○ //?       donor email(read only - logged in user email)

//?        donor creating donation reqest on home page

//?       Below of the welcome section donor will see his maximum 3 recent donation
//?       request those was requested by the donor who is currently logged in.

//?       jodi donor request create kore and view delete page a gia login user info nei keno?


 */ 