import useUserData from "../../../API/useUserData";

const DonorHome = () => {
    const [,userData] = useUserData()
    return (
    <div>
      <div className="w-[90%] lg:h-[80vh] lg:w-[80vw] m-auto shadow-lg  md:p-5 lg:p-10 rounded-lg lg:rounded-2xl my-5">
        <div className="">
            <h1 className="h-1/4 text-center text-4xl font-semibold">Welcome {userData.name}</h1>
            <div className="h-3/4 w-full">

                












            </div>
        </div>
      </div>
    </div>
    );
};

export default DonorHome;