const Profile = require('./Mastodon.Profile.json');

const Follow = require('./Mastodon.Follow.json');

// Leave for debugging purposes
// const fetch = require("node-fetch");

// (async () => {
//   const data = await fetch("https://mastodon.cloud/users/transmute#main-key", {
//     method: "get",
//     headers: {
//       Accept: "application/ld+json"
//     }
//   });
//   console.log(JSON.stringify(await data.json(), null, 2));
// })();

const linkedData = {
  '@context': 'https://w3id.org/identity/v1',
  title: 'Hello World!',
};

const rsaKeyPair = {
  private:
    '-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAxiD/F5M/LPKsNeTV1R55dtsQRYqP0835BuxuYyAeTENDwpji\neFZHztrmpPFqnfPgGlW3aDfN84PfC5F+LznB1EmWlfQwWTTTb7VurlMmHOgQx9c+\n2+Yg22cgPGh8qTxUALZFpQ+DHVBU59FXbzpZKeF2go9fqvJvYaxcf5Sq1pu/Y62k\nplCVxmow508agslRvqAzowsHvB/Dp5wETaXiyvXeqCFSEmTDCu3CCnu4HuwwP+H3\nKNSuAPZtcjOlCxrvO50RvzT5RnnRITuTi4oimIJMQoIX6N/RZzgFRofsTBKqbjFs\nZ6hja496yLp/3KJ8egQ2srl4kt3TzHlDfKXPnQIDAQABAoIBAF1mirrjaGHZGMPj\nV8a7MgmM5dPSqVDxBZd09+j06DONdjETf5e5HOrwGNDjGh7SK/BePjL8M7O7k/dR\nJEpBERXxhvK0BeLX22ELB91YR1xTLi33U6O4jf7AU9sGatYhIXygcJ6KfIXiK9SI\nxI4j1IrAxexwiGn/FfDWn1hpjkvSlUQr14YCCuckBXAkAAjqlcrH0xEkcFls4HAo\nwn+vCaxN+tQaP9fmwbBMyILSLgmirFeZPJbtL731h677jED0Gre2PQJc2UzNnWA2\nThKlIqikTbyNAULC9u3+dtSqARD2NWTh8rhnkyiPQ3giYezWnbDX7/gEZx6ZhjmA\nA5Bc0kUCgYEA9P4khD7fBQURD84boR6WsCd6VEpBuDqEzx6HDIUTwkj2VG6ftzz6\nTwCZmhgnRCedutCzKqfH4TCMlXUYoXgg/8lrmwVxWCYt41NWr4cMS3GThXwEBrDN\nHUu+BCEEWmUdaILXlpD7XFz2bOi45cj8jp/UQSZKC9wKIJwT2OLuydMCgYEAzwfV\nzxfxGRf/MfN6nhEGVgJ03YpspIgIkLZQctZOBTPBUXsECYj85cAdPtPwXbHHqx4u\nW63FqHhOBZdf8b8a8zOCTjnxiZAzlTGezeK9jMtQM5+IgEWNf46Zzt+fLnooq4Rc\nGcgsNwp3xuBMKPPiCEXggUlICAEoEAB1e5E8Ks8CgYB6oBZhByMT3SRcF9rme2wL\nQcdOF1jrwIanMO2By75HGcQKINDao6/aCT/YzEwjJf0h+8IiEJbQVT+Ys2Kft4Q0\n43lzv3arG3kOdrFF7D+wJ2oifx94xdf02OuEH46RPFlK7WrBV1IpOfKyMo4Rndck\nAEX6UhLv+rQq/FRG09eXtwKBgQC0MrqsFce5ssRh4u4gNOtR47N6vSiREQJ7iuR9\nAAFKz+B9HljGP+D3zP7nl6uIsdv8Gjn5fEglugkXHsnY7iDz/Cp4EkElHkl3m4gA\n5lFcAf8d38b89w0RMLq5cLTpzFQn7f4IRs4NXmQgy0we/SAJWWDuxy0WIoOPYgbf\n9errywKBgQDC7NPm+2k8Mw05JRKQ+yQRhsEOh3/gDFz28w/DPqmm5Z5YOhVIK5bd\n1mSEklsX8dSt5YObMcVavt6+gWi3lPkznO063BzpnPDCBTbApyaB7B8hlKy/KtbZ\nzwYQC2O+AflQIvjZu3NaAAZ288V9YVz6pys9ycBweOoQuJkovLIsCg==\n-----END RSA PRIVATE KEY-----\n',
  public:
    '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxiD/F5M/LPKsNeTV1R55\ndtsQRYqP0835BuxuYyAeTENDwpjieFZHztrmpPFqnfPgGlW3aDfN84PfC5F+LznB\n1EmWlfQwWTTTb7VurlMmHOgQx9c+2+Yg22cgPGh8qTxUALZFpQ+DHVBU59FXbzpZ\nKeF2go9fqvJvYaxcf5Sq1pu/Y62kplCVxmow508agslRvqAzowsHvB/Dp5wETaXi\nyvXeqCFSEmTDCu3CCnu4HuwwP+H3KNSuAPZtcjOlCxrvO50RvzT5RnnRITuTi4oi\nmIJMQoIX6N/RZzgFRofsTBKqbjFsZ6hja496yLp/3KJ8egQ2srl4kt3TzHlDfKXP\nnQIDAQAB\n-----END PUBLIC KEY-----\n',
};

module.exports = {
  Profile,
  Follow,
  linkedData,
  rsaKeyPair,
};
