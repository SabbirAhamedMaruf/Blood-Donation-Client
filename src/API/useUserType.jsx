import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { SecurityContext } from "../Provider/SecurityProvider";



const useUserType = () => {
  const {user,loading} = useContext(SecurityContext)
  const axiosPublic = useAxiosPublic();

  const {data:userType, isPending: isUserTypeLoading}= useQuery({
    queryKey : [user?.email,"userType"],
    enabled: !loading,
    queryFn: async()=>{
      const res = await axiosPublic.get(`/user/dashboard?email=${user.email}`);
      console.log(res);
      return res.data?.data.userType
    }
  })
  // if(isUserTypeLoading) return "Loading"
  return [userType,isUserTypeLoading];
};


export default useUserType;

