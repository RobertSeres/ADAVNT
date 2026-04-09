/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://advant.hu',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // if applicable
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://advant.hu/sitemap.xml',
    ],
  },
}
