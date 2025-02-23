import { request } from '@octokit/request';

export const BASE_URL_CMS = 'https://github.cms.gov/api/v3';

function authorization(accessToken: string) {
  return 'token ' + accessToken;
}

export function getApiRequest(accessToken: string, baseUrl: string) {
  return request.defaults({
    baseUrl,
    headers: {
      authorization: authorization(accessToken),
      accept: 'application/vnd.github.v3.text-match+json',
    },
  });
}

export function getFileRequest(accessToken: string, baseUrl: string) {
  return request.defaults({
    baseUrl,
    headers: {
      authorization: authorization(accessToken),
      accept: 'application/vnd.github.v3.raw',
    },
  });
}
