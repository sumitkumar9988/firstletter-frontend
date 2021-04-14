import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://firstletterbackend-env.eba-prw6hafg.ap-south-1.elasticbeanstalk.com/api/v1/user',
  transformResponse: [
    function (data) {
      if (data.status !== 'success') {
        throw data;
      }
      return data;
    },
  ],
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      'Content-Type': 'application/json',
    };
    if (localStorage.user) {
      config.headers.Authorization = `Bearer ${localStorage.user.token}`;
    }
    console.log('inside request interceptors-->');
    console.log(config);
    return config;
  },
  function (error) {
    // Do something with request error
    console.log('inside request interceptors error-->');
    console.log(error);
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('inside reponse interceptors-->');
    console.log('response', response);
    return response;
  },
  function (error) {
    console.log('error001', error);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let err = JSON.parse(error);
    console.log('error handling');
    console.log('error handing 52', err);
    // if (error.response.status === 403) {
    //         localStorage.removeItem('token');

    //         if (history) {
    //           history.push('/auth/login');
    //         } else {
    //           window.location = '/auth/login';
    //         }
    //       } else {
    //         return new Promise((resolve, reject) => {
    //           reject(error);
    //         });
    //       }

    return Promise.reject(error);
  },
);

export default axiosInstance;

// import axios from 'axios';

// export default (history = null) => {
//   let baseUrl;
//   if (process.env.ENV === 'production') {
//     baseUrl = process.env.BACKEND_URL_PRODUCTION;
//   } else {
//     baseUrl = process.env.BACKEND_URL_DEVELOPMENT;
//   }

//   let headers = {
//     'Content-Type': 'application/json',
//   };
//   if (localStorage.user) {
//     headers.Authorization = `Bearer ${localStorage.user.token}`;
//   }
//   console.log('headers', headers);
//   console.log(baseUrl);
//   const axiosInstance = axios.create({ baseURL: baseUrl, headers });
//   axiosInstance.interceptors.response.use(
//     (response) =>
//       new Promise((resolve, reject) => {
//         console.log('response', response);
//         resolve(response);
//       }),
//     (error) => {
//       if (!error.response) {
//         return new Promise((resolve, reject) => {
//           console.log('error', error);
//           reject(error);
//         });
//       }

//       if (error.response.status === 403) {
//         localStorage.removeItem('token');

//         if (history) {
//           history.push('/auth/login');
//         } else {
//           window.location = '/auth/login';
//         }
//       } else {
//         return new Promise((resolve, reject) => {
//           reject(error);
//         });
//       }
//     },
//   );

//   return axiosInstance;
// };
