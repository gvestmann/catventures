// This is Prismics configuration files. I provide my Prismic endpoint, submit functions for the client to use and create the Prismic client's options.
import Prismic from "prismic-javascript";

export const apiEndpoint = "https://catventures.cdn.prismic.io/api/v2";

export const accessToken = "";

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
};