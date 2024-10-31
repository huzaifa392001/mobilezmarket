import RootLayer from "@/app-ui/RootLayer/RootLayer";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "swiper/css";
import "@/styles/index.scss";
import "swiper/css/pagination";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {Inter, Poppins, Dancing_Script} from "next/font/google";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({subsets: ["latin"]});
const poppins = Poppins({subsets: ["latin"], weight: ["100", '200', '300', "400", "500", "600", "700", "800", "900"]});

export const metadata = {
    metadataBase: new URL("https://www.mobilezmarket.com"),
    title: "Mobilez Market - Best Mobile Phone Marketplace in Pakistan",
    description: "Meet Mobilez Market, the most trusted mobile phone marketplace in Pakistan to buy and sell the latest smartphones, tablets, and much more. Find the best one here for you!",
    alternates: {
        canonical: "https://www.mobilezmarket.com",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Mobilez Market",
        description: "Pakistan's 1st Digitized Mobilez Market website Buy & Sell Mobile, Tablet, Smart watches in Pakistan Post Ad for free and your desired price.",
        images: [
            {
                url: "https://api.mobilezmarket.com/public/assets2/img/logo.jpeg",
                width: 240,
                height: 240,
                alt: "Mobilez Market",
            },
        ],
        site_name: "Mobilez Market",
    },
    other: {
        'google-site-verification': 't361brMhfxBvqE7YjFtYzJM5Rdq_UxzYcMPddyoYcR8',
        'p:domain_verify': "1ae8699e41eff8f0bb14e651de58307e"
    }
};

export default function RootLayout({children}) {
    const {title, description, robots, openGraph, alternates, other} = metadata;

    return (
        <html lang="en">
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="robots"
                  content={`${robots.index ? 'index' : 'noindex'}, ${robots.follow ? 'follow' : 'nofollow'}`}/>
            <link rel="canonical" href={alternates.canonical}/>
            <meta property="og:title" content={openGraph.title}/>
            <meta property="og:description" content={openGraph.description}/>
            <meta property="og:image" content={openGraph.images[0].url}/>
            <meta property="og:image:width" content={openGraph.images[0].width}/>
            <meta property="og:image:height" content={openGraph.images[0].height}/>
            <meta property="og:image:alt" content={openGraph.images[0].alt}/>
            <meta property="og:site_name" content={openGraph.site_name}/>
            <meta name="google-site-verification" content={other['google-site-verification']}/>
            <meta name="p:domain_verify" content={other['p:domain_verify']}/>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{display: "none", visibility: "hidden"}}
                    src="https://www.facebook.com/tr?id=451893620980029&ev=PageView&noscript=1"
                />
            </noscript>
        </Head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5761736087769969" crossOrigin="anonymous"/>
        <Script strategy="afterInteractive">
            {`
                    !function (f, b, e, v, n, t, s) {
                        if (f.fbq) return;
                        n = f.fbq = function () {
                            n.callMethod ?
                                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                        };
                        if (!f._fbq) f._fbq = n;
                        n.push = n;
                        n.loaded = !0;
                        n.version = '2.0';
                        n.queue = [];
                        t = b.createElement(e);
                        t.async = !0;
                        t.src = v;
                        s = b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t, s)
                    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '451893620980029');
                    fbq('track', 'PageView');
                `}
        </Script>

        <Script strategy="afterInteractive">
            {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-P6V4HKBS');
                `}
        </Script>

        <body className={poppins.className}>
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-P6V4HKBS"
                height="0"
                width="0"
                style={{display: "none", visibility: "hidden"}}
            />
        </noscript>

        <GoogleOAuthProvider clientId="85457123059-rcs2j4u7b73qndp2fjs8gn56j3m66vu4.apps.googleusercontent.com">
            <RootLayer>
                <div id="_layout">{children}</div>
            </RootLayer>
        </GoogleOAuthProvider>
        </body>
        </html>
    );
}
