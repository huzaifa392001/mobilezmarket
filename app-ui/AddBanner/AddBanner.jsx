import Image from "next/image";
import Link from "next/link";
import React from "react";

const AddBanner = () => {
    return (
        <div className='addBannerCont'>
            <figure>
                <Image
                    fill
                    alt={'abc'}
                    src={"/addBan.webp"}
                />
            </figure>
            <div className="content">
                <h2>
                    Download Our App Today
                </h2>
                <p>
                    Sell your old phone | Buy top-quality refurbished phones
                </p>
                <div className="btnCont">
                    <Link
                        href={`https://play.google.com/store/apps/details?id=com.wizard.mobilez&pcampaignid=web_share`}
                        target='_blank' className='downloadBtn google'>
                        <Image
                            src={'/google-play.svg'}
                            alt="Google Play Store Button"
                            layout="responsive"
                            width={150}
                            height={50}
                        />
                    </Link>
                    <Link href={`https://apps.apple.com/pk/app/mobilez-market/id6450546695`} target='_blank'
                          className='downloadBtn apple'>
                        <Image
                            src={'/apple-store.svg'}
                            alt="Apple App Store Button"
                            layout="responsive"
                            width={150}
                            height={50}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AddBanner
