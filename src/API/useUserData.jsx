import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { SecurityContext } from "../Provider/SecurityProvider";



const useUserData = () => {
  const {user,loading} = useContext(SecurityContext)
  const axiosPublic = useAxiosPublic();

  const {refetch,data:userData={}, isPending: isUserTypeLoading}= useQuery({
    queryKey : [user?.email,"userData"],
    enabled: !loading,
    queryFn: async()=>{
      const res = await axiosPublic.get(`/user/dashboard?email=${user.email}`);
      return res.data.data
    }
  })
  // if(isUserTypeLoading) return "Loading"
  return [refetch,userData,isUserTypeLoading]
};


export default useUserData;

