export default function handler(req, res) {
  res.setHeader("Content-Type", "text/plain");
  const robotsTxt = `
    User-agent: *
    Allow: /
    Disallow: /cgi-bin/
    Disallow: /theme
    Disallow: /plugins
    Disallow: /*api

    User-agent: GPTBot
    Allow: /
    Disallow: /cgi-bin/
    Disallow: /theme
    Disallow: /plugins

    Sitemap: https://www.mobilezmarket.com/sitemap.xml
  `;
  res.send(robotsTxt.trim());
}
