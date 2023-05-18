import { axios } from "@/services";

export const getAllJobs = (query: string = "Web developer jobs") => {
  return axios.get("/search", { params: { query, page: "1", num_pages: "5" } });
};

export const getSingleJobs = (job_id: string) => {
  return axios.get("/job-details", {
    params: { job_id, extended_publisher_details: "false" },
  });
};
