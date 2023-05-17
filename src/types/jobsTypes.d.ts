export type JobsTypes = {
  employer_name: string;
  employer_logo: string;
  employer_website: null | string;
  employer_company_type: null | string;
  job_publisher: string;
  job_id: string;
  job_employment_type: string;
  job_title: string;
  job_apply_link: string;
  job_apply_is_direct: boolean;
  job_apply_quality_score: number;
  job_description: string;
  job_is_remote: boolean;
  job_posted_at_timestamp: number;
  job_posted_at_datetime_utc: string;

  job_highlights: {
    Qualifications: string[];
    Responsibilities: string[];
    Benefits: string[];
  };
  job_job_title: string;
  job_posting_language: string;
};
