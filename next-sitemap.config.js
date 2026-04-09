/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://advant.hu',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/legal/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/legal/'],
      },
    ],
  },
}
