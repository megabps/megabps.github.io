document.getElementById("nabvarjs").innerHTML +=
`<div class="topnav global-nav parbase">
<div class="navmenu-backdrop"></div>
<div class="navmenu navmenu-default navmenu-fixed-left offcanvas">
    <ul class="nav navmenu-nav navmenu-search-button border-bottom-dark border-top-dark">
        <li>
            <!-- <a href="/en/search.html" class="clearfix">
                <svg class="icon-xs hide-on-fallback" role="img" title="icon-search-nav">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/content/dam/aia/icons/icons.svg#search-nav"></use>
                    <image class="icon icon-xs " src="/content/dam/aia/icons/navigation/search-nav.png"
                        xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                </svg>
                <span class="h5 w">Search</span>
            </a> -->
            <a data-savepage-href="/en/search.html" href="https://www.aia.com.sg/en/search.html" class="clearfix">
                <svg class="icon-xs hide-on-fallback" role="img" title="icon-search-nav">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" data-savepage-href="/content/dam/aia/icons/icons.svg#search-nav" href="#search-nav"></use><!--savepage-symbol-insert--><symbol id="search-nav" viewBox="0 0 64 64">
            <path fill="#fff" d="M28.907 47.12c-10.053 0-18.24-8.16-18.24-18.213s8.187-18.24 18.24-18.24 18.24 8.187 18.24 18.24S38.96 47.12 28.907 47.12zm0-31.067c-7.093 0-12.853 5.76-12.853 12.853s5.76 12.853 12.853 12.853 12.853-5.76 12.853-12.853-5.787-12.853-12.853-12.853zM43.587 38.075l9.749 9.749L48 53.16l-9.749-9.749 5.336-5.336z"></path>
        </symbol>
                  <image class="icon icon-xs " src="/content/dam/aia/icons/navigation/search-nav.png" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                </svg>
                <span class="h5 w">Search</span>
              </a>
        </li>
    </ul>
    <ul class="nav navmenu-nav" data-user-menu="individual">
        <li>
            <a class="clearfix" href="/en/index.html">
                <svg class="icon icon-xs hide-on-fallback " role="img">
                    <g>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                            xlink:href="/content/dam/aia/icons/icons.svg#home-menu"></use>
                        <image class="icon icon-xs " src="/content/dam/aia/icons/menu/home-menu.png" alt="undefined"
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                    </g>
                </svg>
                <span class="h5 w">AIA Singapore</span>
            </a>
        </li>

        <li class="dropdown">
            <div class="mobile-firstlevel">
                <a class="" href="/en/our-products.html">
                    <svg class="icon icon-xs hide-on-fallback " role="img">
                        <g> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#life-menu"></use>
                            <image class="icon icon-xs " src="/content/dam/aia/icons/menu/life-menu.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                    <span>Our Products</span>
                </a>
                <a class="dropdown-toggle pull-right" data-toggle="dropdown">
                    <svg class="icon icon-xs hide-on-fallback pull-right closed-show" role="img">
                        <g> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#open-2ndg"></use>
                            <image class="icon icon-xs pull-right closed-show" src="/content/dam/aia/icons/secondary/open-2ndg.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                    <svg class="icon icon-xs hide-on-fallback pull-right closed-hide" role="img">
                        <g> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#close-2ndg"></use>
                            <image class="icon icon-xs pull-right closed-hide" src="/content/dam/aia/icons/secondary/close-2ndg.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                </a>
            </div>
            <ul class="dropdown-menu navmenu-nav navmenu-dropdown-menu" role="menu">
                <li><a class="h6 b5" href="/en/our-products/life-protection.html">Life Insurance</a></li>
                <li><a class="h6 b5" href="/en/our-products/medical-protection.html">Medical Insurance</a></li>
                <li><a class="h6 b5" href="/en/our-products/critical-illness-protection.html">Critical Illness Insurance</a></li>
                <li><a class="h6 b5" href="/en/our-products/disability-income-protection.html">Disability Income Protection</a></li>
                <li><a class="h6 b5" href="/en/our-products/accident-protection.html">Accident Protection</a></li>
                <li><a class="h6 b5" href="/en/our-products/savings.html">Savings</a></li>
                <li><a class="h6 b5" href="/en/our-products/investments.html">Investments</a></li>
                <li><a class="h6 b5" href="/en/our-products/platinum.html">Platinum</a></li>
                <li><a class="h6 b5" href="/en/our-products/travel-lifestyle.html">Travel &amp; Lifestyle</a></li>
                <li><a class="h6 b5" href="/en/our-products/aia-vitality.html">AIA Vitality</a></li>
                <li><a class="h6 b5" href="/en/our-products/employee-benefits.html">Employee Benefits</a></li>
                <li><a class="h6 b5" href="/en/our-products/corporate-international-medical.html">Corporate International Medical</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <div class="mobile-firstlevel">
                <a class="" href="/en/life-matters.html">
                    <svg class="icon icon-xs hide-on-fallback " role="img">
                        <g> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#careers-menu"></use>
                            <image class="icon icon-xs " src="/content/dam/aia/icons/menu/careers-menu.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                    <span>Life Matters</span>
                </a>
                <a class="dropdown-toggle pull-right" data-toggle="dropdown">
                    <svg class="icon icon-xs hide-on-fallback pull-right closed-show" role="img">
                        <g>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#open-2ndg"></use>
                            <image class="icon icon-xs pull-right closed-show" src="/content/dam/aia/icons/secondary/open-2ndg.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                    <svg class="icon icon-xs hide-on-fallback pull-right closed-hide" role="img">
                        <g>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#close-2ndg"></use>
                            <image class="icon icon-xs pull-right closed-hide" src="/content/dam/aia/icons/secondary/close-2ndg.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                </a>
            </div>
            <ul class="dropdown-menu navmenu-nav navmenu-dropdown-menu" role="menu">
                <li><a class="h6 b5" href="/en/life-matters/health.html">Health Matters</a></li>
                <li><a class="h6 b5" href="/en/life-matters/wellness.html">Wellness Matters</a></li>
                <li><a class="h6 b5" href="/en/life-matters/money.html">Money Matters</a></li>
                <li><a class="h6 b5" href="/en/life-matters/wealth-management.html">Wealth Matters</a></li>
                <li><a class="h6 b5" href="/en/life-matters/financial-tools.html">Your Financial Needs Matter</a>
                </li>
            </ul>
        </li>
        <li class="dropdown">
            <div class="mobile-firstlevel">
                <a class="" href="/en/about-aia.html">
                    <svg class="icon icon-xs hide-on-fallback " role="img">
                        <g>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#aia-menu"></use>
                            <image class="icon icon-xs " src="/content/dam/aia/icons/menu/aia-menu.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                    <span>About AIA</span>
                </a>
                <a class="dropdown-toggle pull-right" data-toggle="dropdown">
                    <svg class="icon icon-xs hide-on-fallback pull-right closed-show" role="img">
                        <g>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#open-2ndg"></use>
                            <image class="icon icon-xs pull-right closed-show" src="/content/dam/aia/icons/secondary/open-2ndg.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                    <svg class="icon icon-xs hide-on-fallback pull-right closed-hide" role="img">
                        <g>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#close-2ndg"></use>
                            <image class="icon icon-xs pull-right closed-hide" src="/content/dam/aia/icons/secondary/close-2ndg.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                </a>
            </div>
            <ul class="dropdown-menu navmenu-nav navmenu-dropdown-menu" role="menu">
                <li><a class="h6 b5" href="/en/about-aia/our-leadership-team.html">Our Leadership Team</a></li>
                <li><a class="h6 b5" href="/en/about-aia/esg.html">Environmental, Social and Governance</a></li>
                <li><a class="h6 b5" href="/en/about-aia/careers.html">Careers</a></li>
                <li><a class="h6 b5" href="/en/about-aia/media-centre.html">Media Centre</a></li>
                <li><a class="h6 b5" href="/en/about-aia/our-awards.html">Awards</a></li>
                <li><a class="h6 b5" href="/en/about-aia/our-top-awardees.html">Our Top Awardees</a></li>
                <li><a class="h6 b5" href="/en/about-aia/mdrt-members.html">MDRT Members</a></li>
                <li><a class="h6 b5" href="/en/about-aia/aiafa.html">AIA Financial Advisers</a></li>
                <li><a class="h6 b5" href="/en/about-aia/aia-brunei.html">AIA Brunei</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <div class="mobile-firstlevel">
                <a class="" href="/en/aia-vitality.html">
                    <svg class="icon icon-xs hide-on-fallback " role="img">
                        <g>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#vitality-menu"></use>
                            <image class="icon icon-xs " src="/content/dam/aia/icons/menu/vitality-menu.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                    <span>AIA Vitality</span>
                </a>
                <a class="dropdown-toggle pull-right" data-toggle="dropdown">
                    <svg class="icon icon-xs hide-on-fallback pull-right closed-show" role="img">
                        <g>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#open-2ndg"></use>
                            <image class="icon icon-xs pull-right closed-show" src="/content/dam/aia/icons/secondary/open-2ndg.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                    <svg class="icon icon-xs hide-on-fallback pull-right closed-hide" role="img">
                        <g>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#close-2ndg"></use>
                            <image class="icon icon-xs pull-right closed-hide" src="/content/dam/aia/icons/secondary/close-2ndg.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                </a>
            </div>
            <ul class="dropdown-menu navmenu-nav navmenu-dropdown-menu" role="menu">
                <li><a class="h6 b5" href="/en/aia-vitality/about-aia-vitality.html">About AIA Vitality</a></li>
                <li><a class="h6 b5" href="/en/aia-vitality/how-it-works.html">How It Works</a></li>
                <li><a class="h6 b5" href="/en/aia-vitality/rewards-and-partner-benefits.html">Rewards &amp; Partner Benefits</a></li>
                <li><a class="h6 b5" href="/en/aia-vitality/join-aia-vitality.html">Join AIA Vitality</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <div class="mobile-firstlevel">
                <a class="" href="/en/help-support.html">
                    <svg class="icon icon-xs hide-on-fallback " role="img">
                        <g>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#agents-nav"></use>
                            <image class="icon icon-xs " src="/content/dam/aia/icons/navigation/agents-nav.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                    <span>Help &amp; Support</span>
                </a>
                <a class="dropdown-toggle pull-right" data-toggle="dropdown">
                    <svg class="icon icon-xs hide-on-fallback pull-right closed-show" role="img">
                        <g>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#open-2ndg"></use>
                            <image class="icon icon-xs pull-right closed-show" src="/content/dam/aia/icons/secondary/open-2ndg.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                    <svg class="icon icon-xs hide-on-fallback pull-right closed-hide" role="img">
                        <g>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#close-2ndg"></use>
                            <image class="icon icon-xs pull-right closed-hide" src="/content/dam/aia/icons/secondary/close-2ndg.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                </a>
            </div>
            <ul class="dropdown-menu navmenu-nav navmenu-dropdown-menu" role="menu">
                <li><a class="h6 b5" href="/en/help-support/contact-us.html">Contact Us</a></li>
                <li><a class="h6 b5" href="/en/help-support/payez.html">ONLINE PAYMENT WITH AIA PAY EZ</a></li>
                <li><a class="h6 b5" href="/en/help-support/healthshieldsupport.html">AIA HealthShield Support</a></li>
                <li><a class="h6 b5" href="/en/help-support/market-conduct-complaints.html">Lodge a Complaint</a></li>
                <li><a class="h6 b5" href="/en/help-support/faq.html">FAQs</a></li>
                <li><a class="h6 b5" href="/en/help-support/form-library.html">Form Library</a></li>
                <li><a class="h6 b5" href="/en/help-support/making-a-claim.html">Submit a Claim</a></li>
                <li><a class="h6 b5" href="/en/help-support/notice-to-aia-policyholders.html">Notices To AIA Policyholders</a></li>
                <li><a class="h6 b5" href="/en/help-support/funds-information.html">AIA Funds Information</a></li>
                <li><a class="h6 b5" href="/en/help-support/aia-funds-reports.html">AIA Annual Fund Reports</a></li>
                <li><a class="h6 b5" href="/en/help-support/aia-par-fund-commentary.html">AIA&#39;s Participating Fund Commentaries</a></li>
                <li><a class="h6 b5" href="/en/help-support/guides.html">Consumer Guides</a></li>
            </ul>
        </li>
        <li class="dropdown myaia-mobile-section">
            <div class="mobile-firstlevel">
                <a class="" href="/en/my-aia.html">
                    <svg class="icon icon-xs hide-on-fallback " role="img">
                        <g>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#myinsurance-menu"></use>
                            <image class="icon icon-xs " src="/content/dam/aia/icons/menu/myinsurance-menu.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                    <span>My AIA</span>
                </a>
                <a class="dropdown-toggle pull-right" data-toggle="dropdown">
                    <svg class="icon icon-xs hide-on-fallback pull-right closed-show" role="img">
                        <g>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#open-2ndg"></use>
                            <image class="icon icon-xs pull-right closed-show" src="/content/dam/aia/icons/secondary/open-2ndg.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                    <svg class="icon icon-xs hide-on-fallback pull-right closed-hide" role="img">
                        <g>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#close-2ndg"></use>
                            <image class="icon icon-xs pull-right closed-hide" src="/content/dam/aia/icons/secondary/close-2ndg.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                        </g>
                    </svg>
                </a>
            </div>
            <ul class="dropdown-menu navmenu-nav navmenu-dropdown-menu" role="menu">
                <li> <a class="h6 b5" href="https://myaia.aia.com.sg" target="_blank">My AIA SG</a></li>
                <li> <a class="h6 b5" href="https://myaia.aia.com.sg/en/my-aia/login.html" target="_self">My Rewards</a></li>
                <li><a class="h6 b5" href="/en/aia-altitude.html" target="_self">AIA Altitude</a></li>
                <li><a class="h6 b5" href="https://myaia.aia.com.sg/en/myaia-payez/login.html" target="_blank">Make Payment Online</a></li>
                <li><a class="h6 b5" href="https://claimez.aia.com.sg/clmcorp" target="_self">Submit a Claim</a></li>
                <li><a class="h6 b5" href="https://claimez.aia.com.sg/corp/" target="_self">Request HealthShield Pre-Authorisation</a></li>
                <li><a class="h6 b5" href="https://www2.aia.com.sg/common/AgtLogin/FormsLogin.asp" target="_blank">FSC Access</a></li>
                <li><a class="h6 b5" href="https://www2.aia.com.sg/common/BankLogin/BankLogin.asp" target="_blank">Bank Partner Access</a></li>
                <li><a class="h6 b5" href="https://www2.aia.com.sg/common/FALogin/FALogin.asp" target="_blank">FA Broker Partner Access</a></li>
                <li><a class="h6 b5" href="https://eben.aia.com.sg/en/my-aia/login.html" target="_blank">eBenefits</a></li>
            </ul>
        </li>
    </ul>
    <ul class="nav promomenu-nav">
        <li>
            <a href="https://myaia.aia.com.sg/en/vitality/home.html">
                <div class="h5 w">AIA Vitality</div>
                <div class="b5 bt5">Visit the AIA Vitality website</div>
            </a>
        </li>
        <li>
            <a href="/en/aia-financial-resource-hub.html">
                <div class="h5 w">YOUR FINANCIAL NEEDS MATTER</div>
                <div class="b5 bt5">Explore our financial calculators and resources for your long term and short
                    term goals at different life stages.</div>
            </a>
        </li>
        <li>
            <a href="/en/our-products/recent-promotions.html">
                <div class="h5 w">Recent Promotions</div>
                <div class="b5 bt5">Find out more about our latest campaigns and promotions</div>
            </a>
        </li>
    </ul>
</div>
<div class="navbar navbar-default navbar-fixed" id="navTop">
    <div class="navbar-slim">
        <div class="navbar-title-slim" id="slimNavaia">AIA</div>
    </div>
    <div class="navbar-one">
        <button type="button" class="navbar-btn hide-sd-up" data-toggle="offcanvas" data-target=".navmenu"
            data-canvas="body">
            <svg class="icon icon-xs hide-on-fallback " role="img">
                <g>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" data-savepage-href="/content/dam/aia/icons/icons.svg#menu-nav" href="#menu-nav"></use>
                    <!--savepage-symbol-insert-->
                    <symbol id="menu-nav" viewBox="0 0 64 64">
                        <path fill="#fff" d="M10.667 15.333h42.667v5.333H10.667v-5.333zM10.667 28.667h42.667V34H10.667v-5.333zM10.667 42h26.667v5.333H10.667V42z">
                        </path>
                    </symbol>
                    <image class="icon icon-xs " src="/content/dam/aia/icons/navigation/menu-nav.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                </g>
            </svg>
        </button>
        <a class="navbar-brand" data-savepage-href="/en/index.html" href="https://www.aia.com.sg/en/index.html" tabindex="99">
            <svg title="AIA Logo" class="icon icon-s hide-on-fallback visible-xs-inline-block" role="img"
                alt="AIA Logo">
                <g>
                    <title>AIA Logo</title>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" data-savepage-href="/content/dam/aia/icons/icons.svg#aiawhite-logo" href="#aiawhite-logo">
                    </use>
                    <!--savepage-symbol-insert-->
                    <symbol id="aiawhite-logo" viewBox="0 0 64 64">
                        <path fill="#fff" d="M41.85 37.24c-.7-1.35-3.17-.3-4.43-1.44-.34-.3-1.08-.96-1.45-2.08-.36-1.06-.9-1.91-1.8-2.61-1.61-1.24-5.42-3.13-5.16-5.67.12-1.13 1.51-1.37 2.07-2.2.34-.48.39-1.13.8-1.58.46-.52-.18-.52-.63-.55-.96-.04-1.67 1-2.47 1.42-1.3.67-2.48 1.64-3.95 1.95-.43.09-2.63.76-1.2 1.12.98.25 2.08.18 2.89.87 1.04.89 1.89 2.02 2.94 2.91.53.45 1.05.87 1.48 1.42.5.64.44 1.37.8 2.02.36.64 1.06.07 1.5.43 1.43 1.17-.56 1.74-1.08 2.29-.67.73-.8 1.19-2.04 1.68-.54.22-4.08.64-4.51.96-.44.32-.21.42-.09.55s.72.32.99.34c1.48.14 6.05.99 6.98-.16.64-.8 1.59-.89 2.64-.6.74.19 2.21.05 3.48-.46.78-.29 2.81-.31 2.24-.61zm-.84 5.62c-.01.02-.07.05-.16.09l-.14.07c-1.42.78-2.15 1.99-2.01 3.96.2 2.73 2.23 16.51 2.23 16.51l3.89-1.22-.8-4.97c1.32-.39 2.65-.94 3.97-1.65 1.3-.71 2.48-1.55 3.51-2.45 2.12 1.83 3.86 3.34 3.86 3.34l3.11-2.61s-10.76-9.02-13-10.62c-1.61-1.17-3.03-1.21-4.46-.45zm5.22 9.67c-1.01.55-1.91.87-2.8 1.07-.49-3.04-.92-5.79-.98-6.11-.12-.81-.06-1.14.23-1.31.29-.16.6-.03 1.23.5.27.23 2.39 2.06 4.74 4.08-.65.63-1.41 1.22-2.42 1.77zM29.86 64h4.02V44.38h-4.02V64zm-6.97-20.96s-.07-.05-.16-.09c-.08-.04-.14-.07-.15-.09 0 .02.01.02.01.02-1.43-.78-2.84-.74-4.46.43-2.24 1.6-13.02 10.58-13.02 10.58l3.11 2.61s1.73-1.49 3.85-3.3c1.04.9 2.21 1.72 3.52 2.45 1.31.71 2.64 1.26 3.96 1.63-.45 2.75-.82 4.99-.82 4.99l3.89 1.22s2.06-13.78 2.25-16.5c.15-1.97-.56-3.17-1.98-3.95zm-1.75 4.45c-.05.32-.5 3.07-.99 6.11-.9-.2-1.8-.53-2.81-1.09-1-.55-1.76-1.11-2.41-1.77 2.35-2.02 4.48-3.85 4.74-4.06.63-.53.94-.66 1.24-.5.3.15.36.49.23 1.31zm-12.32-.04a27.421 27.421 0 0 1-4.72-9.98c.26.05.57.14 1.08.3 1.69.53 4.87 1.56 7.15.53 1.46-.67 3.99-1.23 4.97-1.6.92-.38 2.87.46.57-1.03h-.01a.334.334 0 0 0-.12-.05c-.08-.03-.15-.05-.24-.07-.22-.05-2.07.3-2.47.25-.13-.03-.25-.07-.37-.14-1-.53 3.26-3.81 3.4-4.63-1.22.13-2.23.89-3.33 1.37-1.29.55-2.7.57-4.08.59-1.58 0-2.8 1.21-4.19 1.76-.73.3-1.91.57-2.72 1.08-.06-.34-.11-.67-.16-1.01.02-.59.09-1.3.24-2.11.32-1.78 1.05-3.16 2.67-5.29 0 0 1.59-1.88 2.51-2.48.36-.25.75-.59 1.13-.36.4.25-.11 1.79.97 2.06.65.14.08 1.21.3 1.83.24.66-2.69 3.19-1.92 3.5.43.18 2.37-.8 3.4-1.12.91-.28 1.88-.3 2.87-1.22 1.03-.94 2.04-1.47 2.04-1.47.83-.69 1.64-1.4 2.47-2.09.8-.69 1.57-1.4 2.35-2.11.49-.46 2.69-1.67 2.88-2.08 1.03-2.18 3.7-3.46 5.69-4.85.36-.25.76-.78.99-1.08s.46-.76.59-.91c.25-.28.32-.5.6-.64.11-.06.56-.06.76.16.65.67 1.53 1.26 1.56 1.97.05 1.1 3.18 2.06 3.89 2.91.29.35.46.69.59 1.03a7.04 7.04 0 0 1-1.56-.82c-.32-.23-1.05-.18-1.43-.23-1.08-.2-.83.3-.23.9.61.64 1.32 1.17 1.88 1.86.65.78.59 1.42.76 2.36.19.99.8 1.86 1.29 2.75.5.89.47 1.83.75 2.79.3.96 1.13 1.76 1.81 2.47.58.6 1.91 2.08 2.64 1.76.77-.32 1.73.6 2.02.34.29-.25-.77-1.48-.36-1.85.41-.38 2.18.21 2.55 1.33.41 1.31.37 1.42.31 2.36-.04.62-.29 1.12-.71 1.56-.53.52-1.75 1.38-1.51 2.26 1.12-.59 2.34-.64 3.59-.6 1.21.04 2.1-.46 2.91-1.31.36-.37 1.39-1.56 1.97-.96.36.35-.68 1.81.46 1.51.76-.2 1.44-.78 2.13-1.16.18-.11.35-.21.5-.32-.9 3.73-2.56 7.16-4.82 10.14l.83.67c4.02-5.08 6.42-11.45 6.42-18.39 0-16.52-13.59-29.9-30.34-29.9S1.68 13.38 1.68 29.89c0 6.87 2.36 13.19 6.32 18.25l.82-.69zM32 3.3c15.04 0 27.36 11.24 28.55 25.53-.46.6-1.12.93-1.85 1.09-2.55.53-3.34-1.65-5.46-3.04-2.13-1.38-4.08-1.91-6.05-3.85-.79-.78-.99-2.11-1.78-2.93-1.05-1.1-1.69-1.4-3.11-1.95-2.5-.96-4.64-1.67-6.71-3.36-.35-.28-1.18-.66-1.95-.8-.33-.07-.48-.02-.59.11-.31.39-.59.87-.87 1.31-.08.12-.33.48-.54.67-.4.36-.9.82-1.29 1.03-2.09 1.26-4.84 2.33-6.03 4.44-.22.39-2.5 1.44-3.03 1.84-.83.67-1.64 1.33-2.49 1.95-.8.59-1.9 1.49-2.73 2.1-.44-.16-.89-.3-1.3-.37-.98-.2-1.8-.94-2.64-1.44-1.08-.67-1-.74-1.34-.94-.3-.16-.45-.27-.56-.32-.8-.46-.85 0-1.99.69-.95.57-2.04 1.53-2.86 2.29-.65.6-1.31 1.24-1.99 1.9C4.38 14.75 16.81 3.3 32 3.3z">
                        </path>
                    </symbol>
                    <image class="icon icon-s visible-xs-inline-block" src="img/aiawhite-logo.png" alt="AIA Logo" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                </g>
            </svg>
            <img class="navbar-brand-img hidden-xs" src="img/aiawhite-logo.png" data-savepage-src="img/aiawhite-logo.png" alt="AIA Logo">
        </a>
<!-- NAVBAR MENU-->
        <ul class="nav navbar-nav" data-user-menu="individual">
            <!-- NAVBAR OUR PRODUCT -->
            <li class="dropdown">
                <a href="/en/our-products.html" class="dropdown-toggle h6" data-hover="dropdown" data-delay="100"
                    data-hover-delay="300" style="width:100px" tabindex="100">
                    Our Products
                </a>
                <div class="dropdown-menu">
                    <div class="container-fluid margin-bottom-xxl">
                        <div class="row">
                            <div class="col-sm-3 margin-top-3xl">
                                <div class="margin-bottom-m">
                                    <h4 class="p1 margin-bottom-m">Our Products</h4>
                                    <p class="bt3 p3 margin-bottom-xxl">Find our products and services according to your protection needs.</p>
                                    <a class="lk1" href="/en/our-products.html">See more</a>
                                    <div class="link-arrow"></div>
                                </div>
                                <div class="margin-bottom-m"
                                    style="background-color: #F9E1B8; border-radius: 10px; padding: 10px;">
                                    <h6 class="p3 margin-bottom-m">YOUR FINANCIAL NEEDS MATTER</h6>
                                    <p class="bt3 p3 margin-bottom-m">Explore our financial calculators and resources for your long term and short term goals at different life stages.</p>
                                    <a class="lk1" href="/en/aia-financial-resource-hub.html">EXPLORE NOW</a>
                                    <div class="link-arrow"></div>
                                </div>
                                <div>
                                    <h4 class="p1 margin-bottom-m">Recent Promotions</h4>
                                    <p class="bt3 p3 margin-bottom-xxl">Find out more about our latest campaigns and promotions</p>
                                    <a class="lk1" href="/en/our-products/recent-promotions.html">See more</a>
                                    <div class="link-arrow"></div>
                                </div>
                            </div>
                            <div class="col-sm-9 border-left margin-top-4xl">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <p class="p2 bt9 margin-bottom-m">For Individuals</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <p class="p2 bt9 margin-bottom-m">For Business</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-4">
                                        <ul class="list-unstyled">
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/our-products/life-protection.html" tabindex="110">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#lifepro-prime1">
                                                                </use>
                                                                <image class="icon icon-s " src="/content/dam/aia/icons/primary/normal/lifepro-prime1.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Life Insurance</h6>
                                                        <p class="p3 bt5">Protect your loved ones’ future from life’s uncertainties</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/our-products/medical-protection.html" tabindex="111">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#medicalpro-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/medicalpro-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>

                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Medical Insurance</h6>
                                                        <p class="p3 bt5">Adequate coverage for medical bills so you
                                                            can focus on getting better</p>
                                                    </div>


                                                </a>
                                            </li>

                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/our-products/critical-illness-protection.html"
                                                    tabindex="112">

                                                    <div class="thumbnail">

                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#criticalillnesspro-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/criticalillnesspro-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>

                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Critical Illness Insurance</h6>
                                                        <p class="p3 bt5">Protect against the financial burdens of
                                                            critical illness</p>
                                                    </div>


                                                </a>
                                            </li>

                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/our-products/disability-income-protection.html"
                                                    tabindex="113">

                                                    <div class="thumbnail">

                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#disability-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/disability-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>

                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Disability Income Protection</h6>
                                                        <p class="p3 bt5">Protect your ability to earn an income.
                                                        </p>
                                                    </div>


                                                </a>
                                            </li>

                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/our-products/accident-protection.html" tabindex="114">

                                                    <div class="thumbnail">

                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#accidentpro-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/accidentpro-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>

                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Accident Protection</h6>
                                                        <p class="p3 bt5">Be financially prepared for the unexpected
                                                        </p>
                                                    </div>


                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4">
                                        <ul class="list-unstyled">
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/our-products/savings.html" tabindex="140">

                                                    <div class="thumbnail">

                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#savings-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/savings-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>

                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Savings</h6>
                                                        <p class="p3 bt5">Start planning early and fulfil your
                                                            saving goals. </p>
                                                    </div>


                                                </a>
                                            </li>

                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/our-products/investments.html" tabindex="141">

                                                    <div class="thumbnail">

                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#investment-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/investment-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>

                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Investments</h6>
                                                        <p class="p3 bt5">Make your money work harder for you – your
                                                            dreams matter</p>
                                                    </div>


                                                </a>
                                            </li>

                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/our-products/platinum.html" tabindex="142">

                                                    <div class="thumbnail">

                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#lifetime-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/lifetime-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>

                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Platinum</h6>
                                                        <p class="p3 bt5">Plan your enduring legacy, and share it
                                                            with the generations to come.</p>
                                                    </div>


                                                </a>
                                            </li>

                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/our-products/travel-lifestyle.html" tabindex="143">

                                                    <div class="thumbnail">

                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#travel_insurance-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/travel_insurance-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>

                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Travel &amp; Lifestyle</h6>
                                                        <p class="p3 bt5">Cover your personal belongings from loss
                                                            or damage</p>
                                                    </div>


                                                </a>
                                            </li>

                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/our-products/aia-vitality.html" tabindex="144">

                                                    <div class="thumbnail">

                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#vitality-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/vitality-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>

                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">AIA Vitality</h6>
                                                        <p class="p3 bt5">AIA Vitality is one of the most
                                                            comprehensive wellness programmes with a wide spectrum
                                                            of tools and benefits that target different aspects of
                                                            your health.</p>
                                                    </div>


                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4">
                                        <ul class="list-unstyled">
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/our-products/employee-benefits.html" tabindex="170">

                                                    <div class="thumbnail">

                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#agent-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/agent-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>

                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Employee Benefits</h6>
                                                        <p class="p3 bt5">Secure your company’s most important asset
                                                            through our market-leading domestic solutions</p>
                                                    </div>


                                                </a>
                                            </li>

                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/our-products/corporate-international-medical.html"
                                                    tabindex="171">

                                                    <div class="thumbnail">

                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#worldwide_protection-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/worldwide_protection-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>

                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Corporate International Medical</h6>
                                                        <p class="p3 bt5">Give your local and international
                                                            employees world-class healthcare with our corporate
                                                            international medical solutions.
                                                        </p>
                                                    </div>


                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-glyph close-nav-dropdown-btn" data-dismiss="navbar-dropdown" tabindex="199">
                        <svg title='Dismiss' class="icon icon-xs hide-on-fallback " role="img">
                            <g>
                                <title>Dismiss</title>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xlink:href="/content/dam/aia/icons/icons.svg#closedark-glyph"></use>
                                <image class="icon icon-xs " src="/content/dam/aia/icons/glyph/closedark-glyph.png"
                                    alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="">
                                </image>
                            </g>
                        </svg>
                    </button>
                </div>
            </li>
            <!-- NAVBAR LIFE MATTERS -->
            <li class="dropdown">
                <a href="/en/life-matters.html" class="dropdown-toggle h6" data-hover="dropdown" data-delay="100" data-hover-delay="300" style="width:100px" tabindex="200">
                    Life Matters
                </a>
                <div class="dropdown-menu">
                    <div class="container-fluid margin-bottom-xxl">
                        <div class="row">
                            <div class="col-sm-3 margin-top-3xl">
                                <h4 class="p1 margin-bottom-m">Life Matters</h4>
                                <p class="bt3 p3 margin-bottom-xxl">We take care of the matters of your life because your life matters</p>
                                <a class="lk1" href="/en/life-matters.html" tabindex="201">VIEW ALL IN LIFE MATTERS</a>
                                <div class="link-arrow"></div>
                            </div>
                            <div class="col-sm-9 border-left margin-top-4xl">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <ul class="list-unstyled">
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/life-matters/health.html" tabindex="210">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#health-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/health-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Health Matters</h6>
                                                        <p class="p3 bt5">Kick-start your journey to better health
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/life-matters/wellness.html" tabindex="211">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#embrace_family-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/embrace_family-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Wellness Matters</h6>
                                                        <p class="p3 bt5">Live life to the fullest</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4">
                                        <ul class="list-unstyled">
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/life-matters/money.html" tabindex="240">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#income_protection_v2-prime3">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/product-detail/income_protection_v2-prime3.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Money Matters</h6>
                                                        <p class="p3 bt5">Prepare for your lives ahead</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/life-matters/wealth-management.html" tabindex="241">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#tree_gold-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/tree_gold-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Wealth Matters</h6>
                                                        <p class="p3 bt5">Start protecting your wealth and enabling
                                                            succession and legacy for your generations</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4">
                                        <ul class="list-unstyled">
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/life-matters/financial-tools.html" tabindex="270">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#protect_financial-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/protect_financial-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Your Financial Needs Matter</h6>
                                                        <p class="p3 bt5">Explore our financial calculators and
                                                            resources for your long term and short term goals at
                                                            different life stages.</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-glyph close-nav-dropdown-btn" data-dismiss="navbar-dropdown" tabindex="299">
                        <svg title='Dismiss' class="icon icon-xs hide-on-fallback " role="img">
                            <g>
                                <title>Dismiss</title>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xlink:href="/content/dam/aia/icons/icons.svg#closedark-glyph"></use>
                                <image class="icon icon-xs " src="/content/dam/aia/icons/glyph/closedark-glyph.png"
                                    alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="">
                                </image>
                            </g>
                        </svg>
                    </button>
                </div>
            </li>
            <!-- NAVBAR ABOUT AIA -->
            <li class="dropdown">
                <a href="https://www.aia.com.sg/en/about-aia.html" class="dropdown-toggle h6" data-hover="dropdown" data-delay="100" data-hover-delay="300" style="width:100px" tabindex="300">
                    About AIA
                </a>
                <div class="dropdown-menu">
                    <div class="container-fluid margin-bottom-xxl">
                        <div class="row">
                            <div class="col-sm-3 margin-top-3xl">
                                <h4 class="p1 margin-bottom-m">About AIA</h4>
                                <p class="bt3 p3 margin-bottom-xxl">For almost a century, AIA has served the ever-changing needs of millions of people all across the Asia-Pacific region.
                                </p>
                                <a class="lk1" href="https://www.aia.com.sg/en/about-aia.html" tabindex="301">Healthier, Longer, Better Lives</a>
                                <div class="link-arrow"></div>
                            </div>
                            <div class="col-sm-9 border-left margin-top-4xl">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <p class="p2 bt9 margin-bottom-m"></p>
                                    </div>
                                    <div class="col-sm-4">
                                        <p class="p2 bt9 margin-bottom-m"></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-4">
                                        <ul class="list-unstyled">
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/about-aia/our-leadership-team.html" tabindex="310">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#aboutus_leadership-prime1">
                                                                </use>
                                                                <image class="icon icon-s " src="/content/dam/aia/icons/primary/normal/aboutus_leadership-prime1.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Our Leadership Team</h6>
                                                        <p class="p3 bt5">The Executive Committee and Board &amp; Board Committees of AIA Singapore</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/about-aia/esg.html" tabindex="311">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#customer_protection-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/customer_protection-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Environmental, Social and Governance</h6>
                                                        <p class="p3 bt5">Our ESG commitment aims to deliver value
                                                            to all our stakeholders</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/about-aia/careers.html" tabindex="312">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#aboutus_careers-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/aboutus_careers-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Careers</h6>
                                                        <p class="p3 bt5">Explore opportunities to work at AIA</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/about-aia/media-centre.html" tabindex="313">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#aboutus_mediacenter-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/aboutus_mediacenter-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Media Centre</h6>
                                                        <p class="p3 bt5">News and information about AIA</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4">
                                        <ul class="list-unstyled">
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/about-aia/our-awards.html" tabindex="340">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#trophy_contest-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/trophy_contest-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Awards</h6>
                                                        <p class="p3 bt5">Check out our awards and achievements over
                                                            the years.</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/about-aia/our-top-awardees.html" tabindex="341">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#birth_certificate-prime1">
                                                                </use>
                                                                <image class="icon icon-s " src="/content/dam/aia/icons/primary/normal/birth_certificate-prime1.png"
                                                                    alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Our Top Awardees</h6>
                                                        <p class="p3 bt5">Presenting our top performers of FY2020
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/about-aia/mdrt-members.html" tabindex="342">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#birth_certificate-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/birth_certificate-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">MDRT Members</h6>
                                                        <p class="p3 bt5">Presenting our top performers of FY2020
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4">
                                        <ul class="list-unstyled">
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/about-aia/aiafa.html" tabindex="370">
                                                    <h6 class="p3">AIA Financial Advisers</h6>
                                                    <p class="p3 bt5">Who we are, what we do. Let&#39;s forge a partnership that lasts beyond a lifetime.</p>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/about-aia/aia-brunei.html" tabindex="371">
                                                    <h6 class="p3">AIA Brunei</h6>
                                                    <p class="p3 bt5">Find out more about our branch office</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-glyph close-nav-dropdown-btn" data-dismiss="navbar-dropdown" tabindex="399">
                        <svg title='Dismiss' class="icon icon-xs hide-on-fallback " role="img">
                            <g>
                                <title>Dismiss</title>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xlink:href="/content/dam/aia/icons/icons.svg#closedark-glyph"></use>
                                <image class="icon icon-xs " src="/content/dam/aia/icons/glyph/closedark-glyph.png"
                                    alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="">
                                </image>
                            </g>
                        </svg>
                    </button>
                </div>
            </li>
            <!-- NAVBAR AIA VITALITY -->
            <li class="dropdown">
                <a href="/en/aia-vitality.html" class="dropdown-toggle h6" data-hover="dropdown" data-delay="100" data-hover-delay="300" style="width:100px" tabindex="400">
                    AIA Vitality
                </a>
                <div class="dropdown-menu">
                    <div class="container-fluid margin-bottom-xxl">
                        <div class="row">
                            <div class="col-sm-3 margin-top-3xl">
                                <div class="margin-bottom-5xl">
                                    <h4 class="p1 margin-bottom-m">AIA Vitality</h4>
                                    <p class="bt3 p3 margin-bottom-xxl">AIA Vitality supports and motivates you every step of the way towards achieving your health goals. What’s more, get
                                        rewarded for healthy choices and earn points when you get active, eat well and complete Health Checks!</p>
                                    <a class="lk1" href="https://myaia.aia.com.sg/en/vitality/home.html">Find Out More</a>
                                    <div class="link-arrow"></div>
                                </div>
                            </div>
                            <div class="col-sm-9 border-left margin-top-4xl">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <ul class="list-unstyled">
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/aia-vitality/about-aia-vitality.html" tabindex="410">
                                                    <h6 class="p3">About AIA Vitality</h6>
                                                    <p class="p3 bt5">AIA Vitality is a comprehensive programme that motivates you to keep fit and helps you to manage your health.</p>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/aia-vitality/how-it-works.html" tabindex="411">
                                                    <h6 class="p3">How It Works</h6>
                                                    <p class="p3 bt5">​Discover how you can live a healthy lifestyle
                                                        by staying active, eating well and maintaining good health
                                                        with AIA Vitality.</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4">
                                        <ul class="list-unstyled">
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/aia-vitality/rewards-and-partner-benefits.html"
                                                    tabindex="440">
                                                    <h6 class="p3">Rewards &amp; Partner Benefits</h6>
                                                    <p class="p3 bt5">Discover the rewards and benefits you have
                                                        unlocked with your AIA Vitality points.</p>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/aia-vitality/join-aia-vitality.html" tabindex="441">
                                                    <h6 class="p3">Join AIA Vitality</h6>
                                                    <p class="p3 bt5">Join us today, and get motivated to live a
                                                        healthier, longer and better life!​</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-glyph close-nav-dropdown-btn" data-dismiss="navbar-dropdown" tabindex="499">
                        <svg title='Dismiss' class="icon icon-xs hide-on-fallback " role="img">
                            <g>
                                <title>Dismiss</title>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#closedark-glyph"></use>
                                <image class="icon icon-xs " src="/content/dam/aia/icons/glyph/closedark-glyph.png" alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="">
                                </image>
                            </g>
                        </svg>

                    </button>
                </div>
            </li>
            <!-- NAVBAR HELP & SUPPORT-->
            <li class="dropdown">
                <a href="/en/help-support.html" class="dropdown-toggle h6" data-hover="dropdown" data-delay="100"
                    data-hover-delay="300" style="width:100px" tabindex="500">
                    Help &amp; Support
                </a>
                <div class="dropdown-menu">
                    <div class="container-fluid margin-bottom-xxl">
                        <div class="row">
                            <div class="col-sm-3 margin-top-3xl">
                                <div class="margin-bottom-m">
                                    <h4 class="p1 margin-bottom-m">HELP & SUPPORT</h4>
                                    <p class="bt3 p3 margin-bottom-xxl">We strive to assist you for all your
                                        inquiries with high touch customer service.</p>
                                    <a class="lk1" href="/en/help-support.html">CONTACT AIA</a>
                                    <div class="link-arrow"></div>
                                </div>
                                <div class="margin-top-xxl">
                                    <div>
                                        <h6 class="p3 margin-bottom-m">AIA COVID-19 Support Programme</h6>
                                        <p class="p3 bt5 margin-bottom-xl">Support Programme to extend the grace
                                            period for payment of premiums due up to 180 calendar days for customers
                                            who are financially affected by COVID-19</p>
                                        <a class="lk1" href="/en/help-support/coronavirus-disease-2019.html">Proceed
                                            to Page</a>
                                        <div class="link-arrow"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-9 border-left margin-top-4xl">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <p class="p2 bt9 margin-bottom-m">For Customer Support</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <p class="p2 bt9 margin-bottom-m"></p>
                                    </div>
                                    <div class="col-sm-4">
                                        <p class="p2 bt9 margin-bottom-m">For Resource/Useful Links</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-4">
                                        <ul class="list-unstyled">
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/help-support/contact-us.html" tabindex="510">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#schedulecall-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/schedulecall-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Contact Us</h6>
                                                        <p class="p3 bt5">Cannot find the answer in our FAQ section? Contact us now</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/help-support/payez.html" tabindex="511">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#navigation_site-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/navigation_site-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">ONLINE PAYMENT WITH AIA PAY EZ</h6>
                                                        <p class="p3 bt5"> Manage all your AIA payments from one
                                                            convenient location</p>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/help-support/healthshieldsupport.html" tabindex="512">

                                                    <div class="thumbnail">

                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#nursing-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/nursing-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>

                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">AIA HealthShield Support</h6>
                                                        <p class="p3 bt5">Quality Healthcare Specialist Partners
                                                            exclusively for AIA HealthShield Gold Max customers</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/help-support/market-conduct-complaints.html"
                                                    tabindex="513">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#ask_opinion-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/ask_opinion-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Lodge a Complaint</h6>
                                                        <p class="p3 bt5">On the sale of insurance products under
                                                            the Financial Advisers Act (FAA)</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4">
                                        <ul class="list-unstyled">
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/help-support/faq.html" tabindex="540">

                                                    <div class="thumbnail">

                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#chatblue-2ndg">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/secondary/chatblue-2ndg.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>

                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">FAQs</h6>
                                                        <p class="p3 bt5">Have a question? You may find the answer
                                                            here</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/help-support/form-library.html" tabindex="541">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#formsearchaltb-2ndg">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/secondary/formsearchaltb-2ndg.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Form Library</h6>
                                                        <p class="p3 bt5">A selection of forms you can download,
                                                            fill in and send back to us</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/help-support/making-a-claim.html" tabindex="542">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#makeapayment-2ndg">
                                                                </use>
                                                                <image class="icon icon-s " src="/content/dam/aia/icons/secondary/makeapayment-2ndg.png"
                                                                    alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Submit a Claim</h6>
                                                        <p class="p3 bt5">Need to make a claim? Learn more about the
                                                            claim process.</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/help-support/notice-to-aia-policyholders.html"
                                                    tabindex="543">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#factsheet-2ndg">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/secondary/factsheet-2ndg.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Notices To AIA Policyholders</h6>
                                                        <p class="p3 bt5">Useful information for policyholders</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4">
                                        <ul class="list-unstyled">
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/help-support/funds-information.html" tabindex="570">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#monthlyperformance-2ndg">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/secondary/monthlyperformance-2ndg.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">AIA Funds Information</h6>
                                                        <p class="p3 bt5"></p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/help-support/aia-funds-reports.html" tabindex="571">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/content/dam/aia/icons/icons.svg#factsheet-2ndg">
                                                                </use>
                                                                <image class="icon icon-s " src="/content/dam/aia/icons/secondary/factsheet-2ndg.png"
                                                                    alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">AIA Annual Fund Reports</h6>
                                                        <p class="p3 bt5"></p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/help-support/aia-par-fund-commentary.html"
                                                    tabindex="572">

                                                    <div class="thumbnail">

                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#formsearchaltb-2ndg">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/secondary/formsearchaltb-2ndg.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>

                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">AIA&#39;s Participating Fund Commentaries
                                                        </h6>
                                                        <p class="p3 bt5"></p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="list-ele" style="height:84px">
                                                <a href="/en/help-support/guides.html" tabindex="573">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#articlesearchaltg-2ndg">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/secondary/articlesearchaltg-2ndg.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">Consumer Guides</h6>
                                                        <p class="p3 bt5"></p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-glyph close-nav-dropdown-btn" data-dismiss="navbar-dropdown" tabindex="599">

                        <svg title='Dismiss' class="icon icon-xs hide-on-fallback " role="img">
                            <g>
                                <title>Dismiss</title>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xlink:href="/content/dam/aia/icons/icons.svg#closedark-glyph"></use>
                                <image class="icon icon-xs " src="/content/dam/aia/icons/glyph/closedark-glyph.png"
                                    alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="">
                                </image>
                            </g>
                        </svg>

                    </button>
                </div>
            </li>
            <!-- NAVBAR MY AIA -->
            <li class="dropdown">
                <a href="/en/my-aia.html" tabindex="9600" class="dropdown-toggle h6" data-hover="dropdown"
                    data-delay="100" data-hover-delay="300" style="width:100px">
                    My AIA
                </a>
                <div class="dropdown-menu">
                    <div class="container-fluid margin-bottom-xxl">
                        <div class="row loggedout">
                            <script>
                                $(function () {
                                    "use strict";
                                    var bpLoginStatus = JSON.parse(localStorage.getItem('user_info'));
                                    if (bpLoginStatus) {
                                        bpLoginStatus.session_id;
                                        bpLoginStatus.user_name;
                                        bpLoginStatus.identity_no;
                                        if (bpLoginStatus.session_id && bpLoginStatus.user_name) {
                                            $(".pre-login").hide();
                                            $(".post-login").show();
                                            document.getElementById("userName").innerHTML = "Hello " + bpLoginStatus.user_name + "!";
                                        }
                                        $('a[href="#bp-logout"]').click(function () {

                                            var userData_local = JSON.parse(localStorage.getItem("user_info"))
                                            var userData = {
                                                "language": "en",
                                                "country": "sg",
                                                "list": {
                                                    "user_name": userData_local['user_name'],
                                                    "identity_no": userData_local['identity_no'],
                                                    "session_id": userData_local['session_id']
                                                }
                                            }

                                            $.ajax({
                                                method: 'POST',
                                                url: 'https://mypageapp.aia.com.sg/customerservice/birthdayperk/logout',
                                                data: JSON.stringify(userData),
                                                cache: false,
                                                dataType: 'json'
                                            }).done(function (data, textStatus, jqXHR) {

                                                localStorage.removeItem('user_info');
                                                location.href = location.href;

                                            }).fail(function (jqXHR, textStatus, errorThrown) {

                                                console.log(jqXHR)
                                                console.log(textStatus)
                                                console.log(errorThrown)
                                            })


                                        });
                                    } else {
                                        localStorage.removeItem('user_info');
                                        localStorage.removeItem("currentUserName");
                                        localStorage.removeItem('currentSessionId');
                                        $(".pre-login").show();
                                        $(".post-login").hide();
                                    }
                                });
                            </script>

                            <style>
                                .myaia-list-margin {
                                    margin-bottom: 5px;
                                }
                                .navbar-default .navbar-nav .open .dropdown-menu .list-ele.normal-height {
                                    height: initial;
                                }
                                .link-arrow.brown {
                                    border-left: 8px solid #554344;
                                }
                                .navbar-default .navbar-nav .open .dropdown-menu .list-ele a:hover h6:hover .link-arrow.brown {
                                    border-left: 8px solid #D31145;
                                }
                            </style>

                            <div class="pre-login">
                                <div class="col-sm-3 margin-top-3xl">
                                    <h4 class="p1 margin-bottom-m">My AIA SG</h4>
                                    <p class="bt3 p3 margin-bottom-xxl">Exclusive for AIA policyholders and Vitality
                                        members to conveniently access
                                        policy information, Vitality membership and rewards</p>
                                    <div class="link-arrow-brown"></div>
                                    <h6 class="p3 margin-bottom-l">Register For My AIA SG</h6>
                                    <p class="p3 bt4 margin-bottom-xxl">
                                        If you are an AIA customer, and do not have a login, you can
                                        <a href="https://myaia.aia.com.sg/en/my-aia/registration.html"
                                            target="_blank" class="lk2">register for My
                                            AIA SG account here.</a>
                                    </p>
                                    <div class="link-arrow-brown"></div>

                                </div>

                                <div class="col-sm-6 border-left margin-top-4xl">
                                    <div class="col-sm-6">

                                        <ul class="list-unstyled">
                                            <h6 class="p3 myaia-list-margin">Customer</h6>
                                            <li class="list-ele normal-height padding-left-s">
                                                <a href="https://myaia.aia.com.sg" target="_blank">
                                                    <p class="p3 myaia-list-margin">My AIA SG
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                </a>
                                                <a href="https://myaia.aia.com.sg/en/my-aia/login.html"
                                                    target="_blank">
                                                    <p class="p3 myaia-list-margin">My Rewards
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                    <p class="p3 bt5"></p>
                                                </a>
                                                <a href="/en/wealthbeing.html#aia-altitude" target="_blank">
                                                    <p class="p3 myaia-list-margin">AIA Altitude
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                    <p class="p3 bt5"></p>
                                                </a>
                                            </li>
                                        </ul>

                                        <ul class="list-unstyled margin-top-m">
                                            <h6 class="p3 myaia-list-margin">Submit a New Request</h6>
                                            <li class="list-ele normal-height padding-left-s">

                                                <a href="https://myaia.aia.com.sg/en/myaia-payez/login.html"
                                                    target="_blank">
                                                    <p class="p3 myaia-list-margin">Make Payment Online
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                </a>
                                                <a href="https://claimez.aia.com.sg/clmcorp">
                                                    <p class="p3 myaia-list-margin">Submit a Claim
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                </a>
                                                <a href="https://claimez.aia.com.sg/corp/">
                                                    <p class="p3 myaia-list-margin">Request
                                                        HealthShield<br>Pre-Authorisation
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-6">
                                        <ul class="list-unstyled">
                                            <h6 class="p3 myaia-list-margin">Distribution</h6>
                                            <li class="list-ele normal-height padding-left-s">
                                                <a href="https://www2.aia.com.sg/common/AgtLogin/FormsLogin.asp"
                                                    target="_blank">
                                                    <p class="p3 myaia-list-margin">FSC Access
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                    <p class="p3 bt5"></p>
                                                </a>
                                                <a href="https://www2.aia.com.sg/common/BankLogin/BankLogin.asp"
                                                    target="_blank">
                                                    <p class="p3 myaia-list-margin">Bank Partner Access
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                    <p class="p3 bt5"></p>
                                                </a>
                                                <a href="https://www2.aia.com.sg/common/FALogin/FALogin.asp"
                                                    target="_blank">
                                                    <p class="p3 myaia-list-margin">FA/Broker Partner Access
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                    <p class="p3 bt5"></p>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul class="list-unstyled margin-top-m">
                                            <h6 class="p3 myaia-list-margin">Employee Benefits</h6>
                                            <li class="list-ele normal-height padding-left-s">
                                                <a href="https://eben.aia.com.sg/en/my-aia/login.html"
                                                    target="_blank">
                                                    <p class="p3 myaia-list-margin">eBenefits
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                    <p class="p3 bt1"></p>
                                                </a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <!-- divider -->
                            <div class="post-login">
                                <div class="col-sm-3 margin-top-3xl">
                                    <h4 class="p1 margin-bottom-m">My AIA SG</h4>
                                    <p class="bt3 p3 margin-bottom-xxl">Exclusive for AIA policyholders and Vitality
                                        members to conveniently access
                                        policy information, Vitality membership and rewards</p>
                                    <div class="link-arrow-brown"></div>

                                    <h6 class="p3 margin-bottom-l">Register For My AIA SG</h6>
                                    <p class="p3 bt4 margin-bottom-xxl">
                                        If you are an AIA customer, and do not have a login, you can
                                        <a href="https://myaia.aia.com.sg/en/my-aia/registration.html"
                                            target="_blank" class="lk2">register for My
                                            AIA SG account here.</a>
                                    </p>
                                    <div class="link-arrow-brown"></div>
                                </div>
                                <div class="col-sm-6 border-left border-right margin-top-4xl">
                                    <div class="col-sm-6">
                                        <ul class="list-unstyled">
                                            <h6 class="p3 myaia-list-margin">Customer</h6>
                                            <li class="list-ele normal-height padding-left-s">
                                                <a href="https://myaia.aia.com.sg" target="_blank">
                                                    <p class="p3 myaia-list-margin">My AIA SG
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                </a>
                                                <a href="/en/myaiaperks.html" target="_blank">
                                                    <p class="p3 myaia-list-margin">My Rewards
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                    <p class="p3 bt5"></p>
                                                </a>
                                                <a href="/en/wealthbeing.html#aia-altitude" target="_blank">
                                                    <p class="p3 myaia-list-margin">AIA Altitude
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                    <p class="p3 bt5"></p>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul class="list-unstyled margin-top-m">
                                            <h6 class="p3 myaia-list-margin">Submit a New Request</h6>
                                            <li class="list-ele normal-height padding-left-s">

                                                <a href="https://myaia.aia.com.sg/en/myaia-payez/login.html"
                                                    target="_blank">
                                                    <p class="p3 myaia-list-margin">Make Payment Online
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                </a>
                                                <a href="https://claimez.aia.com.sg/clmcorp">
                                                    <p class="p3 myaia-list-margin">Submit a Claim
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                </a>
                                                <a href="https://claimez.aia.com.sg/corp/">
                                                    <p class="p3 myaia-list-margin">Request
                                                        HealthShield<br>Pre-Authorisation
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-6">
                                        <ul class="list-unstyled">
                                            <h6 class="p3 myaia-list-margin">Distribution</h6>
                                            <li class="list-ele normal-height padding-left-s">
                                                <a href="https://www2.aia.com.sg/common/AgtLogin/FormsLogin.asp"
                                                    target="_blank">
                                                    <p class="p3 myaia-list-margin">FSC Access
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                    <p class="p3 bt5"></p>
                                                </a>
                                                <a href="https://www2.aia.com.sg/common/BankLogin/BankLogin.asp"
                                                    target="_blank">
                                                    <p class="p3 myaia-list-margin">Bank Partner Access
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                    <p class="p3 bt5"></p>
                                                </a>
                                                <a href="https://www2.aia.com.sg/common/FALogin/FALogin.asp"
                                                    target="_blank">
                                                    <p class="p3 myaia-list-margin">FA/Broker Partner Access
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                    <p class="p3 bt5"></p>
                                                </a>
                                            </li>
                                        </ul>

                                        <ul class="list-unstyled margin-top-m">
                                            <h6 class="p3 myaia-list-margin">Employee Benefits</h6>
                                            <li class="list-ele normal-height padding-left-s">
                                                <a href="https://eben.aia.com.sg/en/my-aia/login.html"
                                                    target="_blank">
                                                    <p class="p3 myaia-list-margin">eBenefits
                                                        <span class="link-arrow brown"></span>
                                                    </p>
                                                    <p class="p3 bt1"></p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                                <div class="col-sm-3 margin-top-4xl">
                                    <h6 class="p3 margin-bottom-l" id="userName"></h6>
                                    <p class="p3 myaia-list-margin">
                                        <a href="/en/myaiaperks/reward-category.html"
                                            style="color: #554344">Home</a>
                                        <span class="link-arrow brown"></span>
                                    </p>
                                    <p class="p3 myaia-list-margin">
                                        <a href="/en/myaiaperks/reward-category.html" style="color: #554344">My AIA
                                            Perks</a>
                                        <span class="link-arrow brown"></span>
                                    </p>
                                    <p class="p3 myaia-list-margin">
                                        <a href="#bp-logout" class="logout" style="color: #554344">Logout</a>
                                        <span class="link-arrow brown"></span>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="row hide loggedin">

                        </div>
                    </div>
                    <button class="btn-glyph close-nav-dropdown-btn" data-dismiss="navbar-dropdown" tabindex="9699">

                        <svg title='Dismiss' class="icon icon-xs hide-on-fallback " role="img">
                            <g>
                                <title>Dismiss</title>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xlink:href="/content/dam/aia/icons/icons.svg#closedark-glyph"></use>
                                <image class="icon icon-xs " src="/content/dam/aia/icons/glyph/closedark-glyph.png"
                                    alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="">
                                </image>
                            </g>
                        </svg>

                    </button>
                </div>
            </li>
            <!-- TASK 2 -->
            <li class="dropdown">
                <a href="" class="dropdown-toggle h6" data-hover="dropdown" data-delay="100" data-hover-delay="300" style="width:100px" tabindex="200">
                    TO DO
                </a>
                <div class="dropdown-menu">
                    <div class="container-fluid margin-bottom-xxl">
                        <div class="row">
                            <div class="col-sm-3 margin-top-3xl">
                                <h4 class="p1 margin-bottom-m">To Do</h4>
                                <p class="bt3 p3 margin-bottom-xxl">A list of things to do.</p>
                                <!-- <a class="lk1" href="/en/life-matters.html" tabindex="201">VIEW ALL IN LIFE MATTERS</a> -->
                                <!-- <div class="link-arrow"></div> -->
                            </div>
                            <div class="col-sm-9 border-left margin-top-4xl">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <ul class="list-unstyled">
                                            <li class="list-ele" style="height:84px">
                                                <a href="to-do.html" tabindex="210">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#health-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/health-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">To Do List</h6>
                                                        <p class="p3 bt5">build your own to do list
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <!-- <li class="list-ele" style="height:84px">
                                                <a href="/en/life-matters/wellness.html" tabindex="211">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#embrace_family-prime1">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/primary/normal/embrace_family-prime1.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">List of To Do</h6>
                                                        <p class="p3 bt5">List of your to do list</p>
                                                    </div>
                                                </a>
                                            </li> -->
                                        </ul>
                                    </div>
                                    <div class="col-sm-4">
                                        <ul class="list-unstyled">
                                            <li class="list-ele" style="height:84px">
                                                <a href="list-to-do.html" tabindex="240">
                                                    <div class="thumbnail">
                                                        <svg class="icon icon-s hide-on-fallback " role="img">
                                                            <g>
                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href="/content/dam/aia/icons/icons.svg#income_protection_v2-prime3">
                                                                </use>
                                                                <image class="icon icon-s "
                                                                    src="/content/dam/aia/icons/product-detail/income_protection_v2-prime3.png"
                                                                    alt="undefined"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xlink:href=""></image>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="p3">List of To Do</h6>
                                                        <p class="p3 bt5">List of your to do list</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-glyph close-nav-dropdown-btn" data-dismiss="navbar-dropdown" tabindex="299">
                        <svg title='Dismiss' class="icon icon-xs hide-on-fallback " role="img">
                            <g>
                                <title>Dismiss</title>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xlink:href="/content/dam/aia/icons/icons.svg#closedark-glyph"></use>
                                <image class="icon icon-xs " src="/content/dam/aia/icons/glyph/closedark-glyph.png"
                                    alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="">
                                </image>
                            </g>
                        </svg>
                    </button>
                </div>
            </li>
        </ul>
        <ul class="nav navbar-tools pull-right">
            <li class="dropdown navbar-search-btn hidden-below-sd" tabindex="9800">
                <div class="dropdown-toggle" data-toggle="dropdown">
                    <div class="navbar-tool-label">
                        <svg title="Search" class="icon icon-xs hide-on-fallback " role="img" alt="Search">
                            <g>
                                <title>Search</title>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" data-savepage-href="/content/dam/aia/icons/icons.svg#search-nav" href="#search-nav"></use>
                                <!--savepage-symbol-insert-->
                                <symbol id="search-nav" viewBox="0 0 64 64">
                                    <path fill="#fff" d="M28.907 47.12c-10.053 0-18.24-8.16-18.24-18.213s8.187-18.24 18.24-18.24 18.24 8.187 18.24 18.24S38.96 47.12 28.907 47.12zm0-31.067c-7.093 0-12.853 5.76-12.853 12.853s5.76 12.853 12.853 12.853 12.853-5.76 12.853-12.853-5.787-12.853-12.853-12.853zM43.587 38.075l9.749 9.749L48 53.16l-9.749-9.749 5.336-5.336z">
                                    </path>
                                </symbol>
                                <image class="icon icon-xs " src="/content/dam/aia/icons/navigation/search-nav.png" alt="Search" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                            </g>
                        </svg>            
                    </div>
                </div>
                <ul class="dropdown-menu search-dropdown-menu">
                    <li class="search-bar">
                        <form class="search-form" id="search-form1">
                            <input type="hidden" name="searchExecutor" value="/en/search" id="searchExecutor">
                            <input type="hidden" name="type" value="123" id="search_type">
                            <!--*/ end, by Ocean Lan */-->
                            <div class="search-col-left">
                                <input name="keyword" data-id="search-input" class="search-input" type="search"
                                    placeholder="Type Keywords" tabindex="9801"
                                    data-search-options="{&quot;hideAllFilter&quot;:false,&quot;hideProductsFilter&quot;:false,&quot;hideArticlesFilter&quot;:false,&quot;hideFormsFilter&quot;:false}"
                                    autocomplete="off" value="">
                            </div>
                            <div class="search-col-right">
                                <button class="btn btn-primary go-btn" tabindex="9802">Go</button>
                                <button class="btn dismiss-search-btn" tabindex="9803">
                                    <svg title="Dismiss" class="icon icon-xs hide-on-fallback " role="img">
                                        <g>
                                            <title>Dismiss</title>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                data-savepage-href="/content/dam/aia/icons/icons.svg#closewhite-glyph"
                                                href="#closewhite-glyph"></use>
                                            <!--savepage-symbol-insert-->
                                            <symbol id="closewhite-glyph" viewBox="0 0 64 64">
                                                <path fill="#fff"
                                                    d="M32 36.72l16.56 16.613 4.773-4.72L32 27.28 10.667 48.613l4.773 4.72z">
                                                </path>
                                                <path fill="#fff"
                                                    d="M32 27.28L15.44 10.667l-4.773 4.72L32 36.72l21.333-21.333-4.773-4.72z">
                                                </path>
                                            </symbol>
                                            <image class="icon icon-xs " src="/content/dam/aia/icons/glyph/closewhite-glyph.png"
                                                alt="undefined" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="">
                                            </image>
                                        </g>
                                    </svg>            
                                </button>
                            </div>
                        </form>
                    </li>
                </ul>
            </li>            
            <li class="dropdown" tabindex="9900" data-contact="">
                <div class="dropdown-toggle" data-toggle="dropdown">
                    <div class="navbar-tool-label">
                        <svg title="Contact Us" class="icon icon-xs hide-on-fallback " role="img" alt="Contact Us">
                            <g>
                                <title>Contact Us</title>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                    data-savepage-href="/content/dam/aia/icons/icons.svg#contact-nav" href="#contact-nav"></use>
                                <!--savepage-symbol-insert-->
                                <symbol id="contact-nav" viewBox="0 0 64 64">
                                    <path fill="#fff" d="M42.693 34.16l-7.707 7.707-13.573-13.573 7.707-7.707L18.373 9.84l-3.493 3.493c-5.44 5.44-5.44 14.293 0 19.733l16.587 16.427c5.467 4.32 13.44 3.973 18.507-1.093l3.493-3.493L42.694 34.16z">
                                    </path>
                                </symbol>
                                <image class="icon icon-xs " src="/content/dam/aia/icons/navigation/contact-nav.png" alt="Contact Us" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></image>
                            </g>
                        </svg>
                    </div>
                </div>
                <ul class="dropdown-menu contact-dropdown-menu">
                    <li>
                        <a href="https://outlook.office365.com/owa/calendar/AIACustomerServiceCentre@aiacom.onmicrosoft.com/bookings/" target="_blank" tabindex="9901">
                            <h6 class="p3">Book an Appointment</h6>
                            <p class="p3 bt5"></p>
                        </a>
                    </li>
                    <li role="separator" class="divider"></li>
                    <li>
                        <a data-savepage-href="/en/help-support.html" href="https://www.aia.com.sg/en/help-support.html"
                            target="_self" tabindex="9902">
                            <h6 class="p3">Contact us</h6>
                            <p class="p3 bt5"></p>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="search-suggest-box" data-id="search-suggest-box1">
    </div>
</div>
<div class="navbar-fixed-spacer"></div>

<script type="text/javascript">
    var search = {};
    search.productString = "Product with:";
    search.articleString = "Article with:";
    search.formString = "Form with:";
    search.emptyMsg = "Please type your question.";
</script>
<a href="#" class="back-to-top">Back to Top</a>
<div id="notification-template" class="hide nito">
    <li>
        <div class="contextual-alert error contextual-alert-inline">
            <div class="alert-wrapper">

                <div class="text-wrapper">
                    <p class="small warning-text" data-notificationid="{{id}}">{{title}}</p>
                    <a class="single-notification lk1" data-notificationid="{{id}}" data-polnum="{{polNum}}"
                        data-type="{{type}}" {{path}}>{{label}}</a>
                </div>
            </div>

        </div>
    </li>
</div>
</div>`;
