export let BASE_URL;
export let MEDIA_URL;

const PORT = 6070;

if (window.location.hostname === "localhost") {
  BASE_URL = `https://localhost:${PORT}/api/v1`;
  MEDIA_URL = `https://localhost:${PORT}/`;
} else {
  BASE_URL = `https://dev74.onlinetestingserver.com:${PORT}/api/v1`;
  MEDIA_URL = `https://dev74.onlinetestingserver.com:${PORT}/`;
}
