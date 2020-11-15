
import axios from 'axios';
import * as Sentry from "@sentry/react";
import { toast } from 'react-toastify';

axios.interceptors.response.use(res => res, error => {
  const expectedError = error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    Sentry.captureException(error);
    toast.error('An unexpected error occured');
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete
};
