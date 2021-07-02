// export const baseURL = 'https://www.sumitk.site/api/v1/user';
// export const baseURL = 'http://localhost:4000/api/v1/user';

// http://firstletter-cp-api.ap-south-1.elasticbeanstalk.com/api/spoj/ay2306

let baseURL, homeURL, portfolioURL, google_clientID, github_url;
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://www.sumitk.site/api/v1/user';
  homeURL = 'https://www.sumitk.site/api/v1/home';
  portfolioURL = 'https://www.sumitk.site/api/v1/profile';
  google_clientID = '71989194000-n22eg368a7t271cr1msf77gnn32lo78o.apps.googleusercontent.com';
  github_url = 'https://github.com/login/oauth/authorize?client_id=7befdbe2c69ddcb7658f';
} else {
  baseURL = 'http://localhost:4000/api/v1/user';
  homeURL = 'http://localhost:4000/api/v1/home';
  portfolioURL = 'http://localhost:4000/api/v1/profile';
  google_clientID = '71989194000-m7ktsm5s0chvj9uguohasu2qufpn36v2.apps.googleusercontent.com';
  github_url = 'https://github.com/login/oauth/authorize?client_id=66cfc66a4b84d65fe880';
}

export { baseURL, homeURL, portfolioURL, google_clientID, github_url };
// 66cfc66a4b84d65fe880
// b739b1fa0f9cb926d5bd1b69da2c19cf80600405
