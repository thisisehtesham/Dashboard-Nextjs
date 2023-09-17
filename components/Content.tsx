import React from "react";

function Content() {
    return (
        <div className="w-[1476px] h-[1091px] relative">
            
            {/* Title */}
            <div className="w-[1476px] h-[206px] left-[50px] top-[30px] absolute">
                <div className="w-[1476px] h-[206px] left-0 top-0 absolute bg-[#15132B] rounded-[14px] shadow" />
                <svg className="left-[30px] top-[31px]  absolute" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path d="M4.08496 19C4.08496 25.9411 9.07398 32.1336 15.8676 33.5856C19.2622 34.311 22.8718 33.8223 25.9433 32.2039C28.8993 30.6463 31.2884 28.0927 32.6423 25.0375C34.051 21.8595 34.2965 18.2112 33.3358 14.871C32.4094 11.6486 30.376 8.79133 27.6465 6.84611C21.94 2.77897 13.9247 3.32275 8.81102 8.10771C5.81434 10.9117 4.08496 14.8953 4.08496 19ZM11.8544 18.1944L16.0196 14.0296C17.0593 12.99 18.6716 14.6023 17.6316 15.642L15.5393 17.7339L25.2133 17.7339C25.9034 17.7339 26.4795 18.3103 26.4795 19.0004C26.4795 19.6905 25.9034 20.267 25.2133 20.267L15.491 20.267L17.5423 22.368C18.5679 23.4175 16.9407 25.0151 15.9109 23.9606L11.8449 19.7965C11.4087 19.3504 11.4129 18.636 11.8544 18.1944Z" fill="#A5A5A5"/>
                </svg>
                <div className="left-[86px] top-[30px] absolute text-white text-[28px] font-bold">
                    School November Tasks
                </div>
                <div className="left-[86px] top-[90px] absolute text-neutral-400 text-sm font-normal font-['Open Sans']">
                    Created by Instructor Day on November 31, 2022
                </div>
                <div className="w-[253px] h-[68px] left-[1142px] top-[30px] absolute">
                    <div className="w-[167px] h-[53px] left-0 top-[8px] absolute">
                        <div className="left-[20px] absolute text-white text-[14px] font-semibold">
                            Centered Martial Arts
                        </div>
                        <div className="w-[91px] left-[76px] top-[34px] absolute text-neutral-400 text-sm font-normal font-['Open Sans']">
                            Sunnyvale,Ca
                        </div>
                    </div>
                    <div className="w-[68px] h-[68px] left-[185px] top-0 absolute">
                        <div className="w-[68px] h-[68px] left-0 top-0 absolute bg-white rounded-[14px] shadow" />
                        <div className="w-11 h-11 left-[12px] top-[12px] absolute">
                            <div className="w-[42.15px] h-[42.16px] left-[0.92px] top-[0.91px] absolute"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                <g clip-path="url(#clip0_1_425)">
                                    <path d="M36.905 36.9049C34.9345 38.8736 32.5933 40.4324 30.0168 41.491C27.4404 42.5497 24.6797 43.0873 21.8942 43.0728C19.1088 43.0583 16.3538 42.492 13.7885 41.4066C11.2231 40.3212 8.89834 38.7382 6.94836 36.7491C7.88998 37.6306 9.13365 38.1177 10.4235 38.1102C11.7133 38.1026 12.9512 37.601 13.8824 36.7085C14.8137 35.816 15.3674 34.6006 15.4297 33.3122C15.4921 32.0239 15.0583 30.7607 14.2175 29.7824C15.2395 30.8079 16.4538 31.6216 17.7909 32.1768C19.1279 32.732 20.5614 33.0178 22.0092 33.0178C23.457 33.0178 24.8905 32.732 26.2275 32.1768C27.5646 31.6216 28.7789 30.8079 29.8009 29.7824C28.8564 30.7269 28.3257 32.008 28.3257 33.3437C28.3257 34.6794 28.8564 35.9604 29.8009 36.9049C30.7454 37.8494 32.0264 38.3801 33.3621 38.3801C34.6978 38.3801 35.9789 37.8494 36.9234 36.9049H36.905Z" fill="#FFCC66"/>
                                    <path d="M37.1709 14.7492C36.1922 15.6581 34.8933 16.1423 33.5585 16.0959C32.2237 16.0495 30.9616 15.4763 30.0484 14.5017C28.0427 12.383 25.2775 11.1478 22.361 11.0678C19.4446 10.9879 16.6159 12.0698 14.4971 14.0755C12.3784 16.0812 11.1432 18.8464 11.0632 21.7628C10.9833 24.6792 12.0652 27.508 14.0709 29.6267C13.1451 28.7099 11.8998 28.1879 10.597 28.1705C9.29415 28.1532 8.03537 28.6417 7.08543 29.5335C6.13548 30.4252 5.56843 31.6507 5.50354 32.952C5.43866 34.2533 5.88101 35.5291 6.73754 36.5109C-5.97663 23.1734 3.52004 0.916716 22 0.916716C24.9335 0.911823 27.8354 1.52099 30.5193 2.70504C33.2031 3.88909 35.6094 5.6218 37.5834 7.79172C38.428 8.77951 38.857 10.0562 38.78 11.3536C38.7031 12.6511 38.1263 13.8681 37.1709 14.7492Z" fill="#6FABE6"/>
                                    <path d="M13.9609 36.7674C13.2384 37.463 12.3245 37.9268 11.3365 38.0994C10.3485 38.272 9.33151 38.1454 8.41597 37.7359C7.50044 37.3265 6.72813 36.6528 6.19814 35.8013C5.66816 34.9498 5.40468 33.9594 5.44151 32.9572C5.47833 31.9549 5.81379 30.9865 6.40484 30.1762C6.99588 29.366 7.81555 28.7508 8.75867 28.4096C9.7018 28.0684 10.7253 28.0168 11.698 28.2614C12.6706 28.506 13.548 29.0357 14.2176 29.7824C15.0858 30.7542 15.544 32.0244 15.4962 33.3266C15.4483 34.6289 14.8981 35.862 13.9609 36.7674Z" fill="#9DCC6B"/>
                                    <path d="M36.9051 36.9049C36.4374 37.3726 35.8822 37.7435 35.2711 37.9966C34.6601 38.2497 34.0052 38.38 33.3438 38.38C32.6824 38.38 32.0275 38.2497 31.4165 37.9966C30.8054 37.7435 30.2502 37.3726 29.7826 36.9049C29.3149 36.4372 28.9439 35.882 28.6908 35.271C28.4377 34.6599 28.3074 34.005 28.3074 33.3436C28.3074 32.6823 28.4377 32.0273 28.6908 31.4163C28.9439 30.8053 29.3149 30.2501 29.7826 29.7824C31.7829 27.7841 32.9369 25.0924 33.0052 22.2658C33.0735 19.4392 32.0507 16.6949 30.1492 14.6024C31.05 15.5167 32.2655 16.053 33.5481 16.102C34.8306 16.151 36.0836 15.7091 37.0515 14.8662C38.0194 14.0234 38.6295 12.8431 38.7573 11.566C38.885 10.2889 38.521 9.01115 37.7392 7.99323C41.3127 12.0101 43.2166 17.2405 43.0616 22.6147C42.9065 27.9888 40.7042 33.1007 36.9051 36.9049Z" fill="#DB5669"/>
                                    <path d="M43.0009 20.1665C42.675 23.9107 41.3541 27.4997 39.1751 30.562C36.9961 33.6242 34.0382 36.0482 30.6075 37.5832C29.9761 37.1757 29.444 36.632 29.0502 35.992C28.6564 35.352 28.4109 34.6319 28.3318 33.8846C28.2527 33.1374 28.3419 32.3818 28.593 31.6735C28.844 30.9653 29.2505 30.3222 29.7825 29.7915C31.7829 27.7933 32.9369 25.1015 33.0052 22.2749C33.0735 19.4483 32.0507 16.704 30.1492 14.6115C31.05 15.5258 32.2655 16.0621 33.5481 16.1111C34.8306 16.1601 36.0835 15.7182 37.0515 14.8753C38.0194 14.0325 38.6294 12.8522 38.7572 11.5751C38.885 10.298 38.5209 9.02028 37.7392 8.00235C40.7669 11.3785 42.6137 15.6482 43.0009 20.1665Z" fill="#F26674"/>
                                    <path d="M37.1709 14.7491C36.1922 15.658 34.8933 16.1422 33.5585 16.0958C32.2237 16.0494 30.9616 15.4762 30.0484 14.5016C28.0427 12.3829 25.2775 11.1477 22.361 11.0677C19.4446 10.9878 16.6159 12.0697 14.4971 14.0754C12.3784 16.0811 11.1432 18.8463 11.0632 21.7627C10.9833 24.6791 12.0652 27.5079 14.0709 29.6266C13.4613 29.0034 12.7006 28.5489 11.8629 28.3074C11.0253 28.066 10.1393 28.0458 9.29158 28.249C8.44383 28.4522 7.66324 28.8717 7.02602 29.4666C6.3888 30.0615 5.91672 30.8115 5.65587 31.6433C2.98125 28.3752 1.35792 24.3744 0.999207 20.1666C1.35465 16.0852 2.89151 12.1958 5.42189 8.97383C7.95228 5.75185 11.3666 3.33689 15.2474 2.02416C19.1282 0.711425 23.3074 0.557801 27.2742 1.58207C31.2409 2.60633 34.8233 4.7641 37.5834 7.79161C38.428 8.77941 38.857 10.0561 38.78 11.3535C38.7031 12.6509 38.1263 13.868 37.1709 14.7491Z" fill="#82BCF4"/>
                                    <path d="M13.09 37.4366C10.2054 36.0931 7.66346 34.1122 5.65588 31.6432C5.89883 30.8673 6.32615 30.1618 6.90129 29.5871C7.47642 29.0124 8.18224 28.5856 8.95834 28.3432C9.73444 28.1009 10.5577 28.0502 11.3577 28.1954C12.1577 28.3407 12.9105 28.6777 13.5519 29.1774C14.1932 29.6772 14.7039 30.3249 15.0402 31.0652C15.3765 31.8054 15.5285 32.6161 15.4831 33.4279C15.4377 34.2397 15.1963 35.0284 14.7796 35.7265C14.3628 36.4247 13.7831 37.0114 13.09 37.4366Z" fill="#B5E08C"/>
                                    <path d="M30.6075 37.5832C27.85 38.8232 24.8572 39.4529 21.8338 39.4291C18.8104 39.4054 15.8278 38.7288 13.09 37.4457C13.7204 37.0612 14.2583 36.5427 14.6658 35.927C15.0733 35.3112 15.3404 34.6134 15.448 33.8829C15.5556 33.1525 15.5011 32.4073 15.2885 31.7002C15.0758 30.9931 14.7102 30.3415 14.2175 29.7916C15.2395 30.8171 16.4538 31.6307 17.7909 32.1859C19.1279 32.7411 20.5614 33.0269 22.0092 33.0269C23.457 33.0269 24.8905 32.7411 26.2275 32.1859C27.5646 31.6307 28.7789 30.8171 29.8009 29.7916C29.2679 30.321 28.8602 30.963 28.6077 31.6705C28.3552 32.378 28.2643 33.133 28.3417 33.8802C28.4191 34.6274 28.6627 35.3478 29.0548 35.9886C29.4469 36.6294 29.9774 37.1742 30.6075 37.5832Z" fill="#FFDE76"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_425">
                                    <rect width="44" height="44" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-6 h-6 left-[1422px] top-[52px] absolute flex-col justify-start items-start inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12.5" cy="3.5" r="2.5" fill="#A5A5A5"/>
                    <circle cx="12.5" cy="11.5" r="2.5" fill="#A5A5A5"/>
                    <circle cx="12.5" cy="19.5" r="2.5" fill="#A5A5A5"/>
                </svg>
                </div>     
                <div className="w-[38px] h-[38px] left-[30px] top-[79px] absolute origin-top-left -rotate-90" />
                <div className="w-[168px] h-10 left-[87px] top-[136px] absolute">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-stone-300 rounded-full border-2 border-slate-900" />
                    <div className="w-10 h-10 left-[32px] top-0 absolute bg-stone-300 rounded-full border-2 border-slate-900" />
                    <div className="w-10 h-10 left-[64px] top-0 absolute bg-stone-300 rounded-full border-2 border-slate-900" />
                    <div className="w-10 h-10 left-[96px] top-0 absolute bg-stone-300 rounded-full border-2 border-slate-900" />
                    <div className="w-10 h-10 left-[128px] top-0 absolute bg-[#E328AF] rounded-full border-2 border-slate-900" />
                    <div className="left-[137px] top-[6px] absolute text-white text-lg font-bold">
                        5+
                    </div>
                </div>

                <div className="w-[163px] h-[42px] left-[275px] top-[136px] absolute">
                    <div className="w-[163px] h-[42px] left-0 top-0 absolute bg-[#6418C3] rounded-[14px]" />
                    <div className="w-6 h-6 left-[14px] top-[9px] absolute" />
                    <svg className="w-6 h-6 left-[14px] top-[7px] absolute" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.1572 13.328H7.81715C6.27151 13.3298 4.7897 13.9447 3.69677 15.0376C2.60383 16.1305 1.989 17.6123 1.98715 19.158V20.938C1.98715 21.0706 2.03983 21.1978 2.1336 21.2915C2.22737 21.3853 2.35454 21.438 2.48715 21.438H18.4872C18.6198 21.438 18.7469 21.3853 18.8407 21.2915C18.9345 21.1978 18.9872 21.0706 18.9872 20.938V19.158C18.9856 17.6122 18.3708 16.1303 17.2778 15.0373C16.1848 13.9443 14.7029 13.3296 13.1572 13.328Z" fill="white"/>
                        <path d="M10.487 11.438C12.9723 11.438 14.987 9.42333 14.987 6.93805C14.987 4.45277 12.9723 2.43805 10.487 2.43805C8.00172 2.43805 5.987 4.45277 5.987 6.93805C5.987 9.42333 8.00172 11.438 10.487 11.438Z" fill="white"/>
                        <path d="M21 10H19.5V8.5C19.5 8.23478 19.3946 7.98043 19.2071 7.79289C19.0196 7.60536 18.7652 7.5 18.5 7.5C18.2348 7.5 17.9804 7.60536 17.7929 7.79289C17.6054 7.98043 17.5 8.23478 17.5 8.5V10H16C15.7348 10 15.4804 10.1054 15.2929 10.2929C15.1054 10.4804 15 10.7348 15 11C15 11.2652 15.1054 11.5196 15.2929 11.7071C15.4804 11.8946 15.7348 12 16 12H17.5V13.5C17.5 13.7652 17.6054 14.0196 17.7929 14.2071C17.9804 14.3946 18.2348 14.5 18.5 14.5C18.7652 14.5 19.0196 14.3946 19.2071 14.2071C19.3946 14.0196 19.5 13.7652 19.5 13.5V12H21C21.2652 12 21.5196 11.8946 21.7071 11.7071C21.8946 11.5196 22 11.2652 22 11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10Z" fill="white"/>
                    </svg>
                    <div className="left-[46px] top-[8px] absolute text-white text-base font-semibold">
                        Invite People
                    </div>
                </div>

                <div className="w-[89px] h-[42px] left-[458px] top-[136px] absolute">
                    <div className="w-[89px] h-[42px] left-0 top-0 absolute rounded-[14px] border border-indigo-400" />
                    <div className="left-[17px] top-[9px] absolute text-white text-base font-semibold">
                        Private
                    </div>
                </div>

                <div className="w-[78px] h-[42px] left-[559px] top-[136px] absolute">
                    <div className="w-[78px] h-[42px] left-0 top-0 absolute bg-indigo-400 rounded-[14px]" />
                    <div className="left-[22px] top-[9px] absolute text-white text-base font-semibold">
                        Edit
                    </div>
                </div>

                <div className="w-[167px] h-[42px] left-[657px] top-[136px] absolute">
                    <div className="w-[167px] h-[42px] left-0 top-0 absolute rounded-[14px] border border-indigo-400" />
                    <div className="w-6 h-6 left-[16px] top-[9px] absolute" />
                    <svg className="w-6 h-6 left-[14px] top-[9px] absolute" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 0.999939H5.99995C4.67436 1.00153 3.40351 1.52882 2.46617 2.46616C1.52884 3.4035 1.00154 4.67434 0.999954 5.99994V13.9999C1.00141 15.1521 1.40004 16.2686 2.12867 17.1612C2.8573 18.0538 3.87137 18.6678 4.99995 18.8999V21.9999C4.99993 22.181 5.04905 22.3586 5.14208 22.5139C5.23511 22.6693 5.36856 22.7964 5.52819 22.8818C5.68782 22.9672 5.86764 23.0077 6.04847 22.9989C6.2293 22.9901 6.40435 22.9324 6.55495 22.8319L12.3 18.9999H18C19.3256 18.9984 20.5964 18.4711 21.5337 17.5337C22.4711 16.5964 22.9984 15.3255 23 13.9999V5.99994C22.9984 4.67434 22.4711 3.4035 21.5337 2.46616C20.5964 1.52882 19.3256 1.00153 18 0.999939ZM16 12.9999H7.99995C7.73474 12.9999 7.48038 12.8946 7.29285 12.707C7.10531 12.5195 6.99995 12.2652 6.99995 11.9999C6.99995 11.7347 7.10531 11.4804 7.29285 11.2928C7.48038 11.1053 7.73474 10.9999 7.99995 10.9999H16C16.2652 10.9999 16.5195 11.1053 16.7071 11.2928C16.8946 11.4804 17 11.7347 17 11.9999C17 12.2652 16.8946 12.5195 16.7071 12.707C16.5195 12.8946 16.2652 12.9999 16 12.9999ZM18 8.99994H5.99995C5.73474 8.99994 5.48038 8.89458 5.29285 8.70705C5.10531 8.51951 4.99995 8.26516 4.99995 7.99994C4.99995 7.73472 5.10531 7.48037 5.29285 7.29283C5.48038 7.1053 5.73474 6.99994 5.99995 6.99994H18C18.2652 6.99994 18.5195 7.1053 18.7071 7.29283C18.8946 7.48037 19 7.73472 19 7.99994C19 8.26516 18.8946 8.51951 18.7071 8.70705C18.5195 8.89458 18.2652 8.99994 18 8.99994Z" fill="white"/>
                    </svg>
                    <div className="left-[45px] top-[9px] absolute text-white text-base">
                        45 Comments
                    </div>
                </div>
                
                <div className="w-[433px] h-[22px] left-[1013px] top-[146px] absolute">
                    <div className="w-[258px] h-3.5 left-[175px] top-[4px] absolute bg-slate-800 rounded-2xl" />
                    <div className="w-[116px] h-3.5 left-[175px] top-[4px] absolute bg-[#6418C3] rounded-2xl" />
                    <div className="left-0 top-0 absolute text-white text-base font-semibold font-['Open Sans']">
                        Total Progress 60%
                    </div>
                </div>
            </div>


            {/* TO-Do List */}

            <div className="w-[339px] h-[856px] left-[50px] top-[265px] absolute">
                <div className="w-[339px] h-[856px] left-0 top-0 absolute bg-[#0D0B21] rounded-[20px]" />
                <div className="w-[339px] h-[81px] left-0 top-0 absolute">
                    <div className="w-[339px] h-[81px] left-0 top-0 absolute bg-[#0D0B21] rounded-tl-[14px] rounded-tr-[14px]" />
                    <div className="w-[49px] h-[49px] left-[277px] top-[16px] absolute">
                        <svg className="w-[65px] h-[65px] left-0 top-0 absolut" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                            <g filter="url(#filter0_d_1_413)">
                                <rect x="8" y="4" width="49" height="49" rx="14" fill="#6418C3"/>
                            </g>
                            <path d="M30.426 20V26.596H24V30.744H30.426V37.34H34.914V30.744H41.34V26.596H34.914V20H30.426Z" fill="white"/>
                            <defs>
                                <filter id="filter0_d_1_413" x="0" y="0" width="65" height="65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="4"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_413"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_413" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className="w-[300]left-[30px] top-[22px] absolute text-white text-xl font-bold">
                        To-Do List (24)
                    </div>
                </div>
                <div className="w-[339px] h-[727px] left-0 top-[95px] absolute">

                    {/* Important */}
                    <div className="w-[339px] h-[229px] left-0 top-0 absolute">
                        <div className="w-[339px] h-[229px] left-0 top-0 absolute bg-[#211A75] rounded-[14px] shadow" />
                        <div className="w-[91px] h-[19px] left-[30px] top-[30px] absolute">
                            <div className="left-[21px] top-0 absolute text-amber-400 text-sm font-semibold font-['Open Sans']">
                                Important
                            </div>
                            <div className="w-2.5 h-2.5 left-0 top-[5px] absolute bg-amber-400 rounded-full" />
                        </div>
                        <div className="w-6 h-6 left-[285px] top-[54px] absolute origin-top-left -rotate-90 flex-col justify-start items-start inline-flex">
                            <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5"/>
                                <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5"/>
                                <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5"/>
                            </svg>
                        </div>
                        <div className="w-[279px] left-[30px] top-[55px] absolute text-white text-lg font-semibold leading-[30px]">
                            Create sign up sheet for holiday student/parent
                            conferences.
                        </div>
                        <div className="w-[279px] h-[7px] left-[30px] top-[138px] absolute">
                            <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-slate-800 rounded-2xl" />
                            <div className="w-[67px] h-[7px] left-0 top-0 absolute bg-amber-400 rounded-2xl" />
                        </div>
                        <div className="w-[107px] h-8 left-[30px] top-[169px] absolute">
                            <div className="w-8 h-8 left-[75px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                            <div className="w-8 h-8 left-[50px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                            <div className="w-8 h-8 left-[25px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                            <div className="w-8 h-8 left-0 top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        </div>
                        <div className="w-[115px] h-[19px] left-[194px] top-[175px] absolute">
                            <div className="left-[24px] top-0 absolute text-right text-neutral-400 text-sm font-semibold font-['Open Sans']">
                                Due in 4 days
                            </div>
                            <div className="w-4 h-4 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex" />
                        </div>  
                    </div>
                    {/* Important-End */}

                    {/* Instructor Meeting */}
                    <div className="w-[339px] h-[229px] left-0 top-[249px] absolute">
                        <div className="w-[339px] h-[229px] left-0 top-0 absolute bg-[#211A75] rounded-[14px] shadow" />
                        <div className="w-[148px] h-[19px] left-[30px] top-[30px] absolute">
                            <div className="left-[21px] top-0 absolute text-pink-500 text-sm font-semibold font-['Open Sans']">
                                Instructor Meeting
                            </div>
                            <div className="w-2.5 h-2.5 left-0 top-[5px] absolute bg-[#E328AF] rounded-full" />
                        </div>
                        <div className="w-6 h-6 left-[285px] top-[54px] absolute origin-top-left -rotate-90 flex-col justify-start items-start inline-flex">
                            <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5"/>
                                <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5"/>
                                <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5"/>
                            </svg>
                        </div>
                        <div className="w-[279px] left-[30px] top-[55px] absolute text-white text-lg font-semibold leading-[30px]">
                            Plan holiday demonstration program. Create outline.
                        </div>
                        <div className="w-[279px] h-[7px] left-[30px] top-[138px] absolute">
                            <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-slate-800 rounded-2xl" />
                            <div className="w-[107px] h-[7px] left-0 top-0 absolute bg-[#E328AF] rounded-2xl" />
                        </div>
                        <div className="w-[82px] h-8 left-[30px] top-[169px] absolute">
                            <div className="w-8 h-8 left-[50px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                            <div className="w-8 h-8 left-[25px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                            <div className="w-8 h-8 left-0 top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        </div>
                        <div className="w-[115px] h-[19px] left-[194px] top-[175px] absolute">
                            <div className="left-[24px] top-0 absolute text-right text-neutral-400 text-sm font-semibold font-['Open Sans']">
                                Due in 4 days
                            </div>
                            <div className="w-4 h-4 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                    {/* Instructor Meeting-End */}

                    {/* Database */}
                    <div className="w-[339px] h-[229px] left-0 top-[498px] absolute">
                        <div className="w-[339px] h-[229px] left-0 top-0 absolute bg-[#211A75] rounded-[14px] shadow" />
                        <div className="w-[77px] h-[19px] left-[30px] top-[30px] absolute">
                            <div className="left-[21px] top-0 absolute text-green-500 text-sm font-semibold font-['Open Sans']">
                                Database
                            </div>
                            <div className="w-2.5 h-2.5 left-0 top-[5px] absolute bg-green-500 rounded-full" />
                        </div>
                        <div className="w-6 h-6 left-[285px] top-[54px] absolute origin-top-left -rotate-90 flex-col justify-start items-start inline-flex">
                            <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5"/>
                                <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5"/>
                                <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5"/>
                            </svg>
                        </div>
                        <div className="w-[279px] left-[30px] top-[55px] absolute text-white text-lg font-semibold leading-[30px]">
                            Determine how many boards need to be ordered for
                            testing and demo.
                        </div>
                        <div className="w-[279px] h-[7px] left-[30px] top-[138px] absolute">
                            <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-slate-800 rounded-2xl" />
                            <div className="w-14 h-[7px] left-0 top-0 absolute bg-green-500 rounded-2xl" />
                        </div>
                        <div className="w-[57px] h-8 left-[30px] top-[169px] absolute">
                            <div className="w-8 h-8 left-[25px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                            <div className="w-8 h-8 left-0 top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        </div>
                        <div className="w-[115px] h-[19px] left-[194px] top-[175px] absolute">
                            <div className="left-[24px] top-0 absolute text-right text-neutral-400 text-sm font-semibold font-['Open Sans']">
                                Due in 4 days
                            </div>
                            <div className="w-4 h-4 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex" />
                        </div>  
                    </div>
                </div>    
            </div>


            {/* In Progress */}
            <div className="w-[383.39px] h-[613.43px] left-[419px] top-[265px] absolute">
                <div className="w-[339px] h-[505px] left-0 top-0 absolute bg-[#0D0B21] rounded-[20px]" />
                <div className="w-[339px] h-[81px] left-0 top-0 absolute">
                    <div className="w-[339px] h-[81px] left-0 top-0 absolute bg-[#0D0B21] rounded-tl-[14px] rounded-tr-[14px]" />
                    <div className="left-[30px] top-[22px] absolute text-white text-xl font-bold">
                        In Progress (2)
                    </div>
                    <div className="w-[49px] h-[49px] left-[260px] top-[18px] absolute">
                        <svg className="w-[49px] h-[49px] left-0 top-0 absolute" xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                            <rect width="49" height="49" rx="14" fill="#211A75"/>
                            <path d="M22.426 16V22.596H16V26.744H22.426V33.34H26.914V26.744H33.34V22.596H26.914V16H22.426Z" fill="#6418C3"/>
                        </svg>
                    </div>
                </div>
                
                {/* Video */}
                <div className="w-[339px] h-[229px] left-0 top-[93px] absolute">
                    <div className="w-[339px] h-[229px] left-0 top-0 absolute bg-[#211A75] rounded-[14px] shadow" />
                    <div className="w-[59px] h-[19px] left-[30px] top-[30px] absolute">
                        <div className="left-[21px] top-0 absolute text-cyan-300 text-sm font-semibold font-['Open Sans']">
                            Video
                        </div>
                        <div className="w-2.5 h-2.5 left-0 top-[5px] absolute bg-cyan-300 rounded-full" />
                    </div>
                    <div className="w-6 h-6 left-[285px] top-[54px] absolute origin-top-left -rotate-90 flex-col justify-start items-start inline-flex">
                        <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5"/>
                            <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5"/>
                            <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5"/>
                        </svg>
                    </div>
                    <div className="w-[279px] left-[30px] top-[55px] absolute text-white text-lg font-semibold leading-[30px]">
                        Create sparring tutorial video for the weekly class.
                    </div>
                    <div className="w-[279px] h-[7px] left-[30px] top-[138px] absolute">
                        <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-slate-800 rounded-2xl" />
                        <div className="w-[230px] h-[7px] left-0 top-0 absolute bg-cyan-300 rounded-2xl" />
                    </div>
                    <div className="w-[82px] h-8 left-[30px] top-[169px] absolute">
                        <div className="w-8 h-8 left-[50px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[25px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-0 top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                    </div>
                    <div className="w-[115px] h-[19px] left-[194px] top-[175px] absolute">
                        <div className="left-[24px] top-0 absolute text-right text-neutral-400 text-sm font-semibold font-['Open Sans']">
                            Due in 4 days
                        </div>
                        <div className="w-4 h-4 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex" />
                    </div>
                </div>
                {/* Video-End */}

                {/* BUGS FIXING */}
                <div className="w-[339px] h-[229px] left-0 top-[342px] absolute bg-slate-950 rounded-[14px]" />
                <div className="w-[339px] h-[229px] left-0 top-[340px] absolute">
                    <div className="w-[339px] h-[229px] left-0 top-0 absolute bg-[#211A75] rounded-[14px] shadow" />
                    <div className=" w-[600px] h-[19px] left-[25px] top-[30px] absolute">
                        <div className="left-[20.92px] top-[1.84px] absolute text-rose-500 text-sm font-semibold font-['Open Sans']">
                            BUGS FIXING
                        </div>
                        <div className="w-2.5 h-2.5 left-[-0.44px] top-[4.98px] absolute bg-rose-500 rounded-full" />
                    </div>
                    <div className="w-6 h-6 left-[279.16px] top-[30px] absolute origin-top-left flex-col justify-start items-start inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5"/>
                            <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5"/>
                            <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5"/>
                        </svg>
                    </div>
                    <div className="w-[279px] left-[25.06px] top-[57.42px] absolute text-white text-lg font-semibold leading-[30px]">
                        Payment gateway needs reauthorization.
                    </div>
                    <div className=" w-[279px] h-[7px] left-[25px] top-[140.10px] absolute">
                        <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-slate-800 rounded-2xl" />
                        <div className="w-[269px] h-[7px] left-0 top-0 absolute bg-rose-500 rounded-2xl" />
                    </div>
                    <div className=" w-[107px] h-8 left-[24px] top-[170.98px] absolute">
                        <div className="w-8 h-8 left-[74.71px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[49.81px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[24.90px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-0 top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                    </div>
                    <div className=" w-[115px] h-[19px] left-[190px] top-[173px] absolute">
                        <div className="left-[23.91px] top-0 absolute  text-right text-neutral-400 text-sm font-semibold font-['Open Sans']">
                            Due in 4 days
                        </div>
                        <div className="w-4 h-4 left-[-0.18px] top-[1.99px] absolute  flex-col justify-start items-start inline-flex" />
                    </div>
                </div>   
            </div>
            {/* BUGS FIXING-End */}

            {/* Done */}

            <div className="w-[339px] h-[786px] left-[788px] top-[265px] absolute">
                <div className="w-[339px] h-[740px] left-0 top-0 absolute bg-[#0D0B21] rounded-[20px]" />
                <div className="w-[339px] h-[81px] left-0 top-0 absolute">
                    <div className="w-[339px] h-[81px] left-0 top-0 absolute bg-[#0D0B21] rounded-tl-[14px] rounded-tr-[14px]" />
                    <div className="left-[30px] top-[22px] absolute text-white text-xl font-bold">
                        Done (3)
                    </div>
                    <div className="w-[49px] h-[49px] left-[260px] top-[16px] absolute">
                        <svg className="w-[49px] h-[49px] left-0 top-0 absolute" xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                            <rect width="49" height="49" rx="14" fill="#211A75"/>
                            <path d="M22.426 16V22.596H16V26.744H22.426V33.34H26.914V26.744H33.34V22.596H26.914V16H22.426Z" fill="#6418C3"/>
                        </svg>
                    </div>
                </div>

                {/* BUGS FIXING */}
                <div className="w-[339px] h-[229px] left-0 top-[89px] absolute">
                    <div className="w-[339px] h-[229px] left-0 top-0 absolute bg-[#211A75] rounded-[14px] shadow" />
                    <div className="w-[600px] h-[19px] left-[30px] top-[30px] absolute">
                        <div className="left-[21px] top-0 absolute text-rose-500 text-sm font-semibold font-['Open Sans']">
                            BUGS FIXING
                        </div>
                        <div className="w-2.5 h-2.5 left-0 top-[5px] absolute bg-rose-500 rounded-full" />
                    </div>
                    <div className="w-6 h-6 left-[285px] top-[54px] absolute origin-top-left -rotate-90 flex-col justify-start items-start inline-flex">
                        <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5"/>
                            <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5"/>
                            <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5"/>
                        </svg>
                    </div>
                    <div className="w-[279px] left-[30px] top-[55px] absolute text-white text-lg font-semibold leading-[30px]">
                        Action Button needed for Google Maps visits.
                    </div>
                    <div className="w-[279px] h-[7px] left-[30px] top-[138px] absolute">
                        <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-neutral-100 rounded-2xl" />
                        <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-rose-500 rounded-2xl" />
                    </div>
                    <div className="w-[107px] h-8 left-[30px] top-[169px] absolute">
                        <div className="w-8 h-8 left-[75px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[50px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[25px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-0 top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                    </div>
                    <div className="w-[115px] h-[19px] left-[194px] top-[175px] absolute">
                        <div className="left-[24px] top-0 absolute text-right text-neutral-400 text-sm font-semibold font-['Open Sans']">
                            Due in 4 days
                        </div>
                        <div className="w-4 h-4 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex" />
                    </div>
                </div>
                {/* BUGS FIXING-End */}

                {/* Database */}
                <div className="w-[339px] h-[199px] left-0 top-[338px] absolute">
                    <div className="w-[339px] h-[199px] left-0 top-0 absolute bg-[#211A75] rounded-[14px] shadow" />
                    <div className="w-[85px] h-[19px] left-[30px] top-[30px] absolute">
                        <div className="left-[21px] top-0 absolute text-green-500 text-sm font-semibold font-['Open Sans']">
                            Database
                        </div>
                        <div className="w-2.5 h-2.5 left-0 top-[5px] absolute bg-green-500 rounded-full" />
                    </div>
                    <div className="w-6 h-6 left-[285px] top-[54px] absolute origin-top-left -rotate-90 flex-col justify-start items-start inline-flex">
                        <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5"/>
                            <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5"/>
                            <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5"/>
                        </svg>
                    </div>
                    <div className="w-[279px] left-[30px] top-[55px] absolute text-white text-lg font-semibold leading-[30px]">
                        Update new instructor photos.
                    </div>
                    <div className="w-[279px] h-[7px] left-[30px] top-[108px] absolute">
                        <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-neutral-100 rounded-2xl" />
                        <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-green-500 rounded-2xl" />
                    </div>
                    <div className="w-[107px] h-8 left-[30px] top-[139px] absolute">
                        <div className="w-8 h-8 left-[75px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[50px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[25px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-0 top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                    </div>
                    <div className="w-[115px] h-[19px] left-[194px] top-[145px] absolute">
                        <div className="left-[24px] top-0 absolute text-right text-neutral-400 text-sm font-semibold font-['Open Sans']">
                            Due in 4 days
                        </div>
                        <div className="w-4 h-4 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex" />
                    </div>  
                </div>
                {/* Database-End */}

                {/* Instructor Meeting */}
                <div className="w-[339px] h-[229px] left-0 top-[557px] absolute">
                    <div className="w-[339px] h-[229px] left-0 top-0 absolute bg-[#211A75] rounded-[14px] shadow" />
                    <div className="w-[148px] h-[19px] left-[30px] top-[30px] absolute">
                        <div className="left-[21px] top-0 absolute text-pink-500 text-sm font-semibold font-['Open Sans']">
                            Instructor Meeting
                        </div>
                        <div className="w-2.5 h-2.5 left-0 top-[5px] absolute bg-[#E328AF] rounded-full" />
                    </div>
                    <div className="w-6 h-6 left-[285px] top-[54px] absolute origin-top-left -rotate-90 flex-col justify-start items-start inline-flex">
                        <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5"/>
                            <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5"/>
                            <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5"/>
                        </svg>
                    </div>
                    <div className="w-[279px] left-[30px] top-[55px] absolute text-white text-lg font-semibold leading-[30px]">
                        Review/correct yellow belt techniques.
                    </div>
                    <div className="w-[279px] h-[7px] left-[30px] top-[138px] absolute">
                        <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-neutral-100 rounded-2xl" />
                        <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-[#E328AF] rounded-2xl" />
                    </div>
                    <div className="w-[107px] h-8 left-[30px] top-[169px] absolute">
                        <div className="w-8 h-8 left-[75px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[50px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[25px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-0 top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                    </div>
                    <div className="w-[115px] h-[19px] left-[194px] top-[175px] absolute">
                        <div className="left-[24px] top-0 absolute text-right text-neutral-400 text-sm font-semibold font-['Open Sans']">
                            Due in 4 days
                        </div>
                        <div className="w-4 h-4 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex" />
                    </div>
                </div> 
            </div>
            {/* Instructor Meeting-End */}

            {/* Revised */}
            <div className="w-[339px] h-56 left-[1157px] top-[265px] absolute">
                <div className="w-[339px] h-56 left-0 top-0 absolute bg-[#0D0B21] rounded-[20px]" />
                <div className="w-[339px] h-[81px] left-0 top-0 absolute">
                    <div className="w-[339px] h-[81px] left-0 top-0 absolute bg-[#0D0B21] rounded-tl-[14px] rounded-tr-[14px]" />
                    <div className="left-[30px] top-[22px] absolute text-white text-xl font-bold">
                        Revised (0)
                    </div>
                    <div className="w-[49px] h-[49px] left-[260px] top-[14px] absolute">
                        <svg className="w-[49px] h-[49px] left-0 top-0 absolute" xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                            <rect width="49" height="49" rx="14" fill="#211A75"/>
                            <path d="M22.4261 16V22.596H16.0001V26.744H22.4261V33.34H26.9141V26.744H33.3401V22.596H26.9141V16H22.4261Z" fill="#6418C3"/>
                        </svg>
                    </div>
                </div>

                <div className="w-[339px] h-[107px] left-0 top-[101px] absolute">
                    <div className="w-[339px] h-[107px] left-0 top-0 absolute bg-[#211A75] rounded-[14px]" />
                    <div className="w-[299px] h-[67px] left-[20px] top-[20px] absolute bg-[#15132B] rounded-[14px] border-2 border-indigo-400" />
                    <div className="left-[109px] top-[41px] absolute text-center text-indigo-400 text-base font-semibold font-['Open Sans']">
                        Move card here
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
