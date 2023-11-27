import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { SecurityContext } from "../Provider/SecurityProvider";

const useMyDonationData = () => {
  const { user, loading } = useContext(SecurityContext);
  const axiosPublic = useAxiosPublic();

  const {
    refetch,
    data: mydonationData = [],
    isPending: isMyDonationDataLoading,
  } = useQuery({
    queryKey: [user?.email, "mydonationData"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/mydonationrequest?email=${user.email}`
      );
      return res.data.data;
    },
  });
  return [mydonationData, refetch, isMyDonationDataLoading];
};

export default useMyDonationData;
