import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { SecurityContext } from "../Provider/SecurityProvider";



const useDonorDonationData = () => {
  const {user,loading} = useContext(SecurityContext)
  const axiosPublic = useAxiosPublic();
  const {refetch,data:donorDonationData=[], isPending: isDonorDonationLoading}= useQuery({
    queryKey : [user?.email,"donorDonationData"],
    enabled: !loading,
    queryFn: async()=>{
      const res = await axiosPublic.get(`/fetchdonordonation?email=${user.email}`);
      return res.data.data
    }
  })
  // if(isUserTypeLoading) return "Loading"
  return [donorDonationData,refetch,isDonorDonationLoading]
};


export default useDonorDonationData;

