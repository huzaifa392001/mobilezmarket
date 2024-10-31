"use client";
import {useEffect, useState} from "react";
import {FaTimes} from "react-icons/fa";
import Link from "next/link";

const AppDownloadModal = ({modalVisible}) => {
    const [isVisible, setIsVisible] = useState(modalVisible);

    const onClose = () => {
        setIsVisible(!isVisible)
    }

    useEffect(() => {
        setIsVisible(modalVisible);
    }, [modalVisible]);

    return (
        <>
            {isVisible && (
                <div className="appDownloadModal">
                    <div className="modalBg" onClick={onClose}/>
                    <div className="modalContent">
                        <button className='closeBtn' onClick={onClose}>
                            <FaTimes/>
                        </button>
                        <div className="modalBody">
                            <h2>Download Our App Today</h2>
                            <p>Sell your old phone | Buy top-quality refurbished phones</p>
                            <div className="btnCont">
                                <Link
                                    href={`https://play.google.com/store/apps/details?id=com.wizard.mobilez&pcampaignid=web_share`}
                                    target='_blank' className='downloadBtn google'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="121" height="39"
                                         viewBox="0 0 121 39">
                                        <defs>
                                            <linearGradient id="linear-gradient" x1=".915" x2="-.383" y1="6.614"
                                                            y2="5.945"
                                                            gradientUnits="objectBoundingBox">
                                                <stop offset="0" stopColor="#00a0ff"/>
                                                <stop offset=".007" stopColor="#00a1ff"/>
                                                <stop offset=".26" stopColor="#00beff"/>
                                                <stop offset=".512" stopColor="#00d2ff"/>
                                                <stop offset=".76" stopColor="#00dfff"/>
                                                <stop offset="1" stopColor="#00e3ff"/>
                                            </linearGradient>
                                            <linearGradient id="linear-gradient-2" x1="1.076" x2="-1.305" y1="17.098"
                                                            y2="17.098"
                                                            gradientUnits="objectBoundingBox">
                                                <stop offset="0" stopColor="#ffe000"/>
                                                <stop offset=".409" stopColor="#ffbd00"/>
                                                <stop offset=".775" stopColor="orange"/>
                                                <stop offset="1" stopColor="#ff9c00"/>
                                            </linearGradient>
                                            <linearGradient id="linear-gradient-3" x1=".862" x2="-.501" y1="10.863"
                                                            y2="9.093"
                                                            gradientUnits="objectBoundingBox">
                                                <stop offset="0" stopColor="#ff3a44"/>
                                                <stop offset="1" stopColor="#c31162"/>
                                            </linearGradient>
                                            <linearGradient id="linear-gradient-4" x1="-.188" x2=".421" y1="13.583"
                                                            y2="12.793"
                                                            gradientUnits="objectBoundingBox">
                                                <stop offset="0" stopColor="#32a071"/>
                                                <stop offset=".068" stopColor="#2da771"/>
                                                <stop offset=".476" stopColor="#15cf74"/>
                                                <stop offset=".801" stopColor="#06e775"/>
                                                <stop offset="1" stopColor="#00f076"/>
                                            </linearGradient>
                                        </defs>
                                        <g id="Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917"
                                           transform="translate(-.059 -.146)">
                                            <g id="Group_7764">
                                                <g id="Group_7762">
                                                    <rect id="Rectangle_15197" width="121" height="39" fill="#121212"
                                                          rx="6"
                                                          transform="translate(.059 .146)"/>
                                                </g>
                                            </g>
                                            <g id="Group_7772" transform="translate(36.664 8.188)">
                                                <path id="Path_24235"
                                                      d="M56.835 19.919a2.448 2.448 0 0 1-.673 1.811 2.629 2.629 0 0 1-1.992.8 2.85 2.85 0 0 1-2-4.851 2.728 2.728 0 0 1 2-.814 2.808 2.808 0 0 1 1.114.227 2.231 2.231 0 0 1 .848.607l-.476.476a1.834 1.834 0 0 0-1.485-.643 2.2 2.2 0 0 0-1.481 3.73 2.161 2.161 0 0 0 3 0 1.71 1.71 0 0 0 .455-1.1H54.17v-.652h2.63a2.311 2.311 0 0 1 .035.409z"
                                                      className="cls-2" transform="translate(-51.352 -16.866)"/>
                                                <path id="Path_24236"
                                                      d="M61.691 17.666h-2.47v1.72h2.227v.651h-2.227v1.72h2.47v.666h-3.166V17h3.166z"
                                                      className="cls-2" transform="translate(-52.041 -16.879)"/>
                                                <path id="Path_24237"
                                                      d="M65.044 22.424h-.7v-4.758h-1.512V17h3.727v.666h-1.515z"
                                                      className="cls-2"
                                                      transform="translate(-52.455 -16.879)"/>
                                                <path id="Path_24238" d="M69.938 22.424V17h.7v5.424z" className="cls-2"
                                                      transform="translate(-53.137 -16.879)"/>
                                                <path id="Path_24239"
                                                      d="M73.893 22.424h-.7v-4.758h-1.512V17h3.727v.666h-1.515z"
                                                      className="cls-2"
                                                      transform="translate(-53.305 -16.879)"/>
                                                <path id="Path_24240"
                                                      d="M83.1 21.71a2.816 2.816 0 0 1-3.976 0 2.931 2.931 0 0 1 0-4.022 2.808 2.808 0 0 1 3.973 0 2.921 2.921 0 0 1 0 4.019zm-3.462-.455a2.086 2.086 0 0 0 2.947 0 2.311 2.311 0 0 0 0-3.113 2.086 2.086 0 0 0-2.947 0 2.313 2.313 0 0 0 0 3.113z"
                                                      className="cls-2" transform="translate(-53.943 -16.866)"/>
                                                <path id="Path_24241"
                                                      d="M85.575 22.424V17h.849l2.636 4.219h.03l-.03-1.045V17h.7v5.424h-.73L86.272 18h-.03l.03 1.046v3.378z"
                                                      className="cls-2" transform="translate(-54.64 -16.879)"/>
                                            </g>
                                            <path id="Path_24235-2" fill="#fff"
                                                  d="M75.533 31.3a3.844 3.844 0 1 0 3.859 3.844 3.789 3.789 0 0 0-3.859-3.844zm0 6.174a2.336 2.336 0 1 1 2.167-2.33 2.224 2.224 0 0 1-2.167 2.33zM67.115 31.3a3.844 3.844 0 1 0 3.859 3.844 3.789 3.789 0 0 0-3.859-3.844zm0 6.174a2.336 2.336 0 1 1 2.169-2.329 2.224 2.224 0 0 1-2.169 2.329zM57.1 32.48v1.63H61a3.4 3.4 0 0 1-.888 2.053 4 4 0 0 1-3.012 1.194 4.34 4.34 0 0 1 0-8.679 4.158 4.158 0 0 1 2.941 1.165l1.151-1.151a5.691 5.691 0 0 0-4.092-1.645 5.972 5.972 0 1 0 0 11.942 5.456 5.456 0 0 0 4.164-1.675 5.389 5.389 0 0 0 1.413-3.814 5.27 5.27 0 0 0-.088-1.019zm40.956 1.266a3.573 3.573 0 0 0-3.292-2.446 3.653 3.653 0 0 0-3.626 3.844 3.762 3.762 0 0 0 3.816 3.844 3.823 3.823 0 0 0 3.2-1.7l-1.311-.874a2.2 2.2 0 0 1-1.893 1.063 1.957 1.957 0 0 1-1.865-1.164l5.141-2.127zm-5.243 1.282a2.109 2.109 0 0 1 2.009-2.243 1.487 1.487 0 0 1 1.427.815zm-4.179 3.728h1.689v-11.3h-1.689zm-2.768-6.6h-.058a2.665 2.665 0 0 0-2.024-.859 3.848 3.848 0 0 0 0 7.689 2.619 2.619 0 0 0 2.024-.874h.058v.554c0 1.471-.786 2.257-2.053 2.257a2.128 2.128 0 0 1-1.937-1.369l-1.471.612a3.663 3.663 0 0 0 3.408 2.272c1.981 0 3.656-1.165 3.656-4v-6.9h-1.6zm-1.936 5.318a2.338 2.338 0 0 1 0-4.66 2.349 2.349 0 0 1 0 4.66zm22.039-10.018h-4.042v11.3h1.686v-4.281h2.356a3.515 3.515 0 1 0 0-7.019zm.043 5.446h-2.4v-3.874h2.4a1.937 1.937 0 1 1 0 3.873zm10.424-1.623a3.168 3.168 0 0 0-3.01 1.729l1.5.626a1.6 1.6 0 0 1 1.541-.829 1.624 1.624 0 0 1 1.774 1.454v.116a3.731 3.731 0 0 0-1.759-.436c-1.614 0-3.257.887-3.257 2.544a2.611 2.611 0 0 0 2.806 2.487 2.38 2.38 0 0 0 2.152-1.105h.058v.872h1.628V34.4c-.002-2-1.499-3.121-3.433-3.121zm-.2 6.193c-.553 0-1.323-.276-1.323-.959 0-.872.959-1.207 1.788-1.207a3.009 3.009 0 0 1 1.541.378 2.045 2.045 0 0 1-2.009 1.788zm9.565-5.946l-1.934 4.9h-.058l-2.007-4.9h-1.817l3.009 6.847-1.716 3.809h1.759l4.638-10.656zm-15.192 7.23h1.687v-11.3h-1.687z"
                                                  transform="translate(-14.658 -9.656)"/>
                                            <g id="Group_7773" transform="translate(8.299 8.436)">
                                                <path id="Path_24243" fill="url(#linear-gradient)"
                                                      d="M20.391 17.531a1.814 1.814 0 0 0-.418 1.27v19.991a1.813 1.813 0 0 0 .418 1.27l.067.065 11.2-11.2v-.264l-11.2-11.2z"
                                                      transform="translate(-19.973 -17.172)"/>
                                                <path id="Path_24244" fill="url(#linear-gradient-2)"
                                                      d="M36.631 33.457L32.9 29.722v-.264l3.734-3.734.084.049 4.423 2.513c1.263.718 1.263 1.892 0 2.61l-4.423 2.513z"
                                                      transform="translate(-21.215 -17.965)"/>
                                                <path id="Path_24245" fill="url(#linear-gradient-3)"
                                                      d="M35.519 33.819L31.7 30 20.435 41.267a1.471 1.471 0 0 0 1.879.055l13.2-7.5"
                                                      transform="translate(-20.017 -18.376)"/>
                                                <path id="Path_24246" fill="url(#linear-gradient-4)"
                                                      d="M35.519 24.947l-13.2-7.5a1.471 1.471 0 0 0-1.879.055L31.7 28.765z"
                                                      transform="translate(-20.017 -17.14)"/>
                                                <g id="Group_7769" transform="translate(0 15.359)">
                                                    <path id="Path_24247"
                                                          d="M35.435 34.132l-13.121 7.455a1.505 1.505 0 0 1-1.811.01l-.068.067.067.066a1.505 1.505 0 0 0 1.811-.01l13.2-7.5z"
                                                          opacity="0.2" transform="translate(-20.017 -34.132)"/>
                                                    <path id="Path_24248"
                                                          d="M20.391 42.183a1.813 1.813 0 0 1-.418-1.27v.133a1.81 1.81 0 0 0 .418 1.269l.068-.067z"
                                                          className="cls-9" transform="translate(-19.973 -34.783)"/>
                                                </g>
                                                <path id="Path_24249"
                                                      d="M41.536 31.174l-4.507 2.561.084.084 4.423-2.513A1.587 1.587 0 0 0 42.483 30a1.682 1.682 0 0 1-.947 1.174z"
                                                      className="cls-9" transform="translate(-21.611 -18.376)"/>
                                                <path id="Path_24250" fill="#fff"
                                                      d="M22.27 17.577L39.9 27.592a1.682 1.682 0 0 1 .947 1.173 1.584 1.584 0 0 0-.947-1.305L22.27 17.445c-1.264-.718-2.3-.121-2.3 1.325v.13c.003-1.444 1.036-2.041 2.3-1.323z"
                                                      opacity="0.25" transform="translate(-19.973 -17.14)"/>
                                            </g>
                                        </g>
                                    </svg>
                                </Link>
                                <Link href={`https://apps.apple.com/pk/app/mobilez-market/id6450546695`} target='_blank'
                                      className='downloadBtn apple'>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="121" height="39"
                                         viewBox="0 0 121 39">
                                        <g id="Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917"
                                           transform="translate(-.063 -.146)">
                                            <g id="Group_7764">
                                                <g id="Group_7762">
                                                    <rect id="Rectangle_15198" width="121" height="39" fill="#121212"
                                                          rx="6"
                                                          transform="translate(.063 .146)"/>
                                                </g>
                                            </g>
                                            <g id="Group_32435" transform="translate(0 -.601)">
                                                <g id="_Group_" transform="translate(8.951 7.144)">
                                                    <g id="_Group_2" transform="translate(0 1)">
                                                        <g id="_Group_3">
                                                            <path id="_Path_"
                                                                  d="M25.376 20.051a5.273 5.273 0 0 1 2.511-4.424 5.4 5.4 0 0 0-4.253-2.3C21.845 13.141 20.11 14.4 19.2 14.4c-.929 0-2.333-1.052-3.845-1.021a5.663 5.663 0 0 0-4.766 2.907c-2.061 3.568-.524 8.811 1.45 11.7.988 1.412 2.142 2.99 3.652 2.934 1.478-.061 2.03-.942 3.814-.942 1.767 0 2.285.942 3.826.907 1.586-.026 2.585-1.418 3.538-2.844a11.68 11.68 0 0 0 1.618-3.3 5.1 5.1 0 0 1-3.11-4.687z"
                                                                  className="cls-2"
                                                                  transform="translate(-9.609 -7.712)"/>
                                                            <path id="_Path_2"
                                                                  d="M22.239 11.566a5.192 5.192 0 0 0 1.188-3.719 5.282 5.282 0 0 0-3.418 1.768A4.94 4.94 0 0 0 18.79 13.2a4.368 4.368 0 0 0 3.449-1.634z"
                                                                  className="cls-2"
                                                                  transform="translate(-9.383 -7.847)"/>
                                                        </g>
                                                    </g>
                                                    <g id="Group_7763" transform="translate(25.429 10.271)">
                                                        <path id="Path_24213"
                                                              d="M42.5 27.363h-4.85L36.481 30.8h-2.054l4.594-12.724h2.134L45.749 30.8h-2.09zm-4.348-1.587h3.844l-1.9-5.581h-.053z"
                                                              className="cls-2" transform="translate(-34.427 -17.866)"/>
                                                        <path id="Path_24214"
                                                              d="M55.369 26.084c0 2.883-1.543 4.735-3.871 4.735a3.145 3.145 0 0 1-2.919-1.619h-.044v4.59h-1.9V21.445h1.843v1.543h.035a3.291 3.291 0 0 1 2.954-1.64c2.35 0 3.902 1.861 3.902 4.736zm-1.957 0c0-1.878-.971-3.113-2.451-3.113-1.455 0-2.433 1.261-2.433 3.113 0 1.869.979 3.121 2.433 3.121 1.481 0 2.451-1.226 2.451-3.121z"
                                                              className="cls-2" transform="translate(-34.126 -17.785)"/>
                                                        <path id="Path_24215"
                                                              d="M65.335 26.084c0 2.883-1.543 4.735-3.872 4.735a3.145 3.145 0 0 1-2.919-1.619H58.5v4.59h-1.9V21.445h1.843v1.543h.035a3.291 3.291 0 0 1 2.954-1.64c2.35 0 3.903 1.861 3.903 4.736zm-1.958 0c0-1.878-.971-3.113-2.451-3.113-1.455 0-2.433 1.261-2.433 3.113 0 1.869.979 3.121 2.433 3.121 1.48-.005 2.451-1.226 2.451-3.121z"
                                                              className="cls-2" transform="translate(-33.881 -17.785)"/>
                                                        <path id="Path_24216"
                                                              d="M71.756 27.262c.141 1.262 1.367 2.09 3.042 2.09 1.6 0 2.76-.828 2.76-1.966 0-.988-.7-1.579-2.345-1.984L73.563 25c-2.336-.564-3.421-1.657-3.421-3.43 0-2.2 1.913-3.7 4.629-3.7 2.69 0 4.533 1.508 4.595 3.7h-1.922c-.115-1.27-1.165-2.036-2.7-2.036s-2.584.775-2.584 1.9c0 .9.67 1.429 2.31 1.834l1.4.344c2.611.617 3.694 1.666 3.694 3.527 0 2.38-1.9 3.871-4.911 3.871-2.822 0-4.727-1.456-4.85-3.757z"
                                                              className="cls-2" transform="translate(-33.556 -17.871)"/>
                                                        <path id="Path_24217"
                                                              d="M83.425 19.3v2.2h1.764V23h-1.764v5.114c0 .794.353 1.165 1.129 1.165a5.949 5.949 0 0 0 .626-.044v1.5a5.229 5.229 0 0 1-1.058.088c-1.878 0-2.611-.705-2.611-2.5V23h-1.348v-1.5h1.349v-2.2z"
                                                              className="cls-2" transform="translate(-33.301 -17.836)"/>
                                                        <path id="Path_24218"
                                                              d="M86.064 26.084c0-2.919 1.719-4.753 4.4-4.753s4.4 1.834 4.4 4.753-1.7 4.753-4.4 4.753-4.4-1.826-4.4-4.753zm6.86 0c0-2-.918-3.184-2.46-3.184S88 24.091 88 26.084c0 2.01.918 3.183 2.46 3.183s2.46-1.173 2.46-3.183z"
                                                              className="cls-2" transform="translate(-33.155 -17.786)"/>
                                                        <path id="Path_24219"
                                                              d="M96.185 21.445H98v1.579h.044a2.213 2.213 0 0 1 2.231-1.676 2.937 2.937 0 0 1 .652.071V23.2a2.662 2.662 0 0 0-.856-.115 1.919 1.919 0 0 0-1.984 2.134v5.5h-1.9z"
                                                              className="cls-2" transform="translate(-32.906 -17.785)"/>
                                                        <path id="Path_24220"
                                                              d="M109.584 28c-.256 1.684-1.9 2.84-3.994 2.84-2.7 0-4.374-1.808-4.374-4.709s1.684-4.8 4.294-4.8c2.567 0 4.181 1.763 4.181 4.576v.652h-6.552v.115a2.416 2.416 0 0 0 2.5 2.628 2.1 2.1 0 0 0 2.142-1.3zm-6.437-2.769h4.638a2.231 2.231 0 0 0-2.275-2.354 2.348 2.348 0 0 0-2.362 2.354z"
                                                              className="cls-2" transform="translate(-32.782 -17.786)"/>
                                                    </g>
                                                </g>
                                                <g id="_Group_4" transform="translate(35.654 7.748)">
                                                    <g id="Group_7765">
                                                        <path id="Path_24221"
                                                              d="M37.879 8.731a2.7 2.7 0 0 1 2.877 3.038c0 1.953-1.056 3.076-2.877 3.076h-2.208V8.731zM36.62 13.98h1.153a1.922 1.922 0 0 0 2.016-2.2 1.927 1.927 0 0 0-2.016-2.18H36.62z"
                                                              className="cls-2" transform="translate(-35.671 -8.43)"/>
                                                        <path id="Path_24222"
                                                              d="M41.681 12.5a2.186 2.186 0 1 1 4.352 0 2.186 2.186 0 1 1-4.352 0zm3.415 0c0-1-.449-1.585-1.238-1.585s-1.237.585-1.237 1.585.445 1.588 1.237 1.588S45.1 13.506 45.1 12.5z"
                                                              className="cls-2" transform="translate(-35.523 -8.396)"/>
                                                        <path id="Path_24223"
                                                              d="M51.7 14.809h-.945l-.954-3.4h-.072l-.95 3.4h-.936l-1.272-4.614h.924l.826 3.521h.068l.949-3.521h.874l.949 3.521h.072l.822-3.521h.911z"
                                                              className="cls-2" transform="translate(-35.403 -8.394)"/>
                                                        <path id="Path_24224"
                                                              d="M53.854 10.2h.877v.733h.069a1.381 1.381 0 0 1 1.377-.822 1.5 1.5 0 0 1 1.6 1.716v2.987h-.911v-2.761c0-.741-.322-1.11-1-1.11a1.058 1.058 0 0 0-1.1 1.169v2.7h-.911z"
                                                              className="cls-2" transform="translate(-35.223 -8.396)"/>
                                                        <path id="Path_24225" d="M59.094 8.437H60v6.415h-.911z"
                                                              className="cls-2"
                                                              transform="translate(-35.094 -8.437)"/>
                                                        <path id="Path_24226"
                                                              d="M61.218 12.5a2.186 2.186 0 1 1 4.352 0 2.186 2.186 0 1 1-4.352 0zm3.415 0c0-1-.449-1.585-1.238-1.585s-1.237.585-1.237 1.585.442 1.59 1.242 1.59 1.238-.584 1.238-1.588z"
                                                              className="cls-2" transform="translate(-35.042 -8.396)"/>
                                                        <path id="Path_24227"
                                                              d="M66.4 13.506c0-.831.618-1.309 1.716-1.377l1.25-.072v-.4c0-.487-.322-.762-.945-.762-.508 0-.861.187-.962.513h-.882c.093-.792.839-1.3 1.885-1.3 1.157 0 1.809.576 1.809 1.55v3.152H69.4v-.648h-.072a1.552 1.552 0 0 1-1.386.724 1.394 1.394 0 0 1-1.542-1.38zm2.966-.394v-.386l-1.126.074c-.635.043-.924.259-.924.665s.36.657.856.657a1.088 1.088 0 0 0 1.195-1.009z"
                                                              className="cls-2" transform="translate(-34.914 -8.396)"/>
                                                        <path id="Path_24228"
                                                              d="M71.348 12.543c0-1.458.749-2.381 1.915-2.381a1.521 1.521 0 0 1 1.415.809h.068V8.437h.911v6.415h-.873v-.729h-.072a1.6 1.6 0 0 1-1.449.8c-1.173.005-1.915-.923-1.915-2.38zm.941 0c0 .979.461 1.567 1.233 1.567s1.242-.6 1.242-1.563-.479-1.567-1.242-1.567-1.233.593-1.233 1.563z"
                                                              className="cls-2" transform="translate(-34.793 -8.437)"/>
                                                        <path id="Path_24229"
                                                              d="M79.23 12.5a2.186 2.186 0 1 1 4.352 0 2.186 2.186 0 1 1-4.352 0zm3.415 0c0-1-.449-1.585-1.238-1.585S80.17 11.5 80.17 12.5s.445 1.588 1.237 1.588 1.238-.582 1.238-1.588z"
                                                              className="cls-2" transform="translate(-34.599 -8.396)"/>
                                                        <path id="Path_24230"
                                                              d="M84.669 10.2h.877v.733h.068a1.381 1.381 0 0 1 1.377-.822 1.5 1.5 0 0 1 1.6 1.716v2.987h-.911v-2.761c0-.741-.322-1.11-1-1.11a1.058 1.058 0 0 0-1.1 1.169v2.7h-.911z"
                                                              className="cls-2" transform="translate(-34.465 -8.396)"/>
                                                        <path id="Path_24231"
                                                              d="M93.555 9.074v1.17h1v.767h-1v2.372c0 .483.2.695.652.695a3.039 3.039 0 0 0 .347-.021v.758a2.987 2.987 0 0 1-.5.047c-1.013 0-1.416-.356-1.416-1.246V11.01h-.732v-.767h.732V9.074z"
                                                              className="cls-2" transform="translate(-34.286 -8.421)"/>
                                                        <path id="Path_24232"
                                                              d="M95.7 8.437h.9v2.543h.072a1.42 1.42 0 0 1 1.407-.826 1.52 1.52 0 0 1 1.589 1.72v2.979h-.911V12.1c0-.737-.343-1.11-.987-1.11a1.078 1.078 0 0 0-1.162 1.17v2.695H95.7z"
                                                              className="cls-2" transform="translate(-34.193 -8.437)"/>
                                                        <path id="Path_24233"
                                                              d="M104.861 13.565a1.873 1.873 0 0 1-2 1.335 2.1 2.1 0 0 1-2.131-2.381 2.128 2.128 0 0 1 2.127-2.41c1.284 0 2.058.877 2.058 2.326v.318h-3.258v.047a1.219 1.219 0 0 0 1.229 1.322 1.106 1.106 0 0 0 1.1-.559zm-3.2-1.487h2.33a1.113 1.113 0 0 0-1.136-1.2 1.18 1.18 0 0 0-1.195 1.2z"
                                                              className="cls-2" transform="translate(-34.07 -8.396)"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AppDownloadModal;
