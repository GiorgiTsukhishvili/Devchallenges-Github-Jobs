import { axios } from "@/services";

export const getAllJobs = (query: string = "Georgia") => {
  return axios.get("/search", { params: { query } });
};

export const getSingleJobs = (job_id: string) => {
  return axios.get("/job-details", {
    params: { job_id, extended_publisher_details: "false" },
  });
};
