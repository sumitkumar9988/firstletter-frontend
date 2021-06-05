// export const baseURL = 'https://www.sumitk.site/api/v1/user';
// export const baseURL = 'http://localhost:4000/api/v1/user';

// http://firstletter-cp-api.ap-south-1.elasticbeanstalk.com/api/spoj/ay2306

let baseURL, homeURL, portfolioURL;
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://www.sumitk.site/api/v1/user';
  homeURL = 'https://www.sumitk.site/api/v1/home';
  portfolioURL = 'https://www.sumitk.site/api/v1/profile';
} else {
  baseURL = 'http://localhost:4000/api/v1/user';
  homeURL = 'http://localhost:4000/api/v1/home';
  portfolioURL = 'http://localhost:4000/api/v1/profile';
}

export { baseURL, homeURL, portfolioURL };
