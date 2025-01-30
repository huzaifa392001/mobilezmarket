
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/cgi-bin/", "/theme", "/plugins", "/*api", "/?/"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/cgi-bin/", "/theme", "/plugins", "/?/"],
      },
    ],
    sitemap: "https://www.mobilezmarket.com/sitemap.xml",
  };
}

// User-agent: *
// allow:
// Sitemap: https://www.mobilezmarket.com/sitemap.xml
// Disallow: /cgi-bin/
// Disallow: /theme
// Disallow: /plugins
