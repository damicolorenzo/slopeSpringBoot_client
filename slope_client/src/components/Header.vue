<script setup>
</script>

<template>
    <header id="header" class="header fixed-top">

        <div class="branding d-flex align-items-center">
            <div class="container position-relative d-flex align-items-center justify-content-between">
                <a href="" class="logo d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 45 45" fill="none">
                        <path
                            d="M26.2409 33.633L31.3639 35.498C33.0209 36.101 34.8379 35.375 35.6459 33.864L36.5919 34.209C35.6189 36.177 33.3389 37.17 31.2169 36.504L31.0169 36.436L24.2609 33.978L24.2519 33.974L24.2429 33.97L7.99988 28.058L8.34188 27.118L26.2409 33.633Z"
                            fill="#3C3C3C" />
                        <path
                            d="M26.2409 33.633L31.3639 35.498C33.0209 36.101 34.8379 35.375 35.6459 33.864L36.5919 34.209C35.6189 36.177 33.3389 37.17 31.2169 36.504L31.0169 36.436L24.2609 33.978L24.2519 33.974L24.2429 33.97L7.99988 28.058L8.34188 27.118L26.2409 33.633Z"
                            stroke="#3C3C3C" />
                        <path
                            d="M24.8639 32.733L29.2689 26.781C29.6909 26.212 29.6519 25.434 29.2009 24.91L29.1899 24.897L29.1789 24.886L29.0899 24.796L29.0789 24.785L29.0679 24.774L26.3989 22.371C26.2339 22.221 26.1889 21.984 26.2809 21.787L26.3259 21.71L29.0999 17.546L30.2979 18.345V18.356L30.3019 18.388L30.3339 18.634L30.3349 18.647C30.3479 18.726 30.3609 18.801 30.3759 18.867C30.6079 19.873 31.1419 20.663 32.0179 21.196C32.8339 21.691 33.9089 21.941 35.2339 21.99V22.99C32.2709 22.883 30.4319 21.806 29.6609 19.916L29.3049 19.044L28.7819 19.828L27.6299 21.557L27.3899 21.916L27.7109 22.207L29.7369 24.031C30.6519 24.855 30.8249 26.216 30.1689 27.238L30.0689 27.382L25.6179 33.294M20.6019 31.208L23.8249 26.992L24.1149 26.613L23.7499 26.307L20.7489 23.774C20.2659 23.366 19.9949 22.788 19.9649 22.19L21.0829 22.61C21.1299 22.705 21.1889 22.796 21.2599 22.878L21.2729 22.893L21.2869 22.906L21.3659 22.983L21.3799 22.998L21.3939 23.009L25.1239 26.158C25.3089 26.313 25.3529 26.575 25.2389 26.781L25.1899 26.854L21.3149 31.759M17.6749 16.692L18.0579 16.835L18.2739 16.49L19.1509 15.089C19.3119 14.832 19.4899 14.586 19.6849 14.354C21.5839 12.092 24.6969 11.449 27.2719 12.578L28.1049 12.944L27.9679 12.046C27.8489 11.269 27.9909 10.449 28.4269 9.72199C29.4229 8.06499 31.5729 7.52899 33.2299 8.52399C34.8869 9.51999 35.4229 11.669 34.4279 13.326C33.9679 14.09 33.2649 14.615 32.4759 14.863L32.3149 14.914L32.2179 15.052L31.7529 15.709L30.9089 15.147L31.6679 14.013C32.4279 13.939 33.1459 13.517 33.5699 12.811C34.2809 11.628 33.8989 10.093 32.7149 9.38199C31.5319 8.66999 29.9959 9.05299 29.2849 10.237C28.8629 10.938 28.8259 11.763 29.1109 12.466L28.0629 14.21C25.7389 12.381 22.3659 12.717 20.4509 14.998C20.3409 15.129 20.2369 15.264 20.1399 15.404L20.1329 15.414L20.0049 15.61L19.9989 15.619L19.3379 16.677L19.0129 17.194L19.5859 17.41"
                            fill="#3C3C3C" />
                        <path
                            d="M24.8639 32.733L29.2689 26.781C29.6909 26.212 29.6519 25.434 29.2009 24.91L29.1899 24.897L29.1789 24.886L29.0899 24.796L29.0789 24.785L29.0679 24.774L26.3989 22.371C26.2339 22.221 26.1889 21.984 26.2809 21.787L26.3259 21.71L29.0999 17.546L30.2979 18.345V18.356L30.3019 18.388L30.3339 18.634L30.3349 18.647C30.3479 18.726 30.3609 18.801 30.3759 18.867C30.6079 19.873 31.1419 20.663 32.0179 21.196C32.8339 21.691 33.9089 21.941 35.2339 21.99V22.99C32.2709 22.883 30.4319 21.806 29.6609 19.916L29.3049 19.044L28.7819 19.828L27.6299 21.557L27.3899 21.916L27.7109 22.207L29.7369 24.031C30.6519 24.855 30.8249 26.216 30.1689 27.238L30.0689 27.382L25.6179 33.294M20.6019 31.208L23.8249 26.992L24.1149 26.613L23.7499 26.307L20.7489 23.774C20.2659 23.366 19.9949 22.788 19.9649 22.19L21.0829 22.61C21.1299 22.705 21.1889 22.796 21.2599 22.878L21.2729 22.893L21.2869 22.906L21.3659 22.983L21.3799 22.998L21.3939 23.009L25.1239 26.158C25.3089 26.313 25.3529 26.575 25.2389 26.781L25.1899 26.854L21.3149 31.759M17.6749 16.692L18.0579 16.835L18.2739 16.49L19.1509 15.089C19.3119 14.832 19.4899 14.586 19.6849 14.354C21.5839 12.092 24.6969 11.449 27.2719 12.578L28.1049 12.944L27.9679 12.046C27.8489 11.269 27.9909 10.449 28.4269 9.72199C29.4229 8.06499 31.5729 7.52899 33.2299 8.52399C34.8869 9.51999 35.4229 11.669 34.4279 13.326C33.9679 14.09 33.2649 14.615 32.4759 14.863L32.3149 14.914L32.2179 15.052L31.7529 15.709L30.9089 15.147L31.6679 14.013C32.4279 13.939 33.1459 13.517 33.5699 12.811C34.2809 11.628 33.8989 10.093 32.7149 9.38199C31.5319 8.66999 29.9959 9.05299 29.2849 10.237C28.8629 10.938 28.8259 11.763 29.1109 12.466L28.0629 14.21C25.7389 12.381 22.3659 12.717 20.4509 14.998C20.3409 15.129 20.2369 15.264 20.1399 15.404L20.1329 15.414L20.0049 15.61L19.9989 15.619L19.3379 16.677L19.0129 17.194L19.5859 17.41"
                            stroke="#3C3C3C" />
                        <path d="M8.60785 14.061L24.6138 20.065" stroke="#3C3C3C" stroke-width="2" />
                    </svg>
                    <h1 class="sitename">Slope</h1>
                </a>

                <nav id="navmenu" class="navmenu">
                    <ul>
                        <li><a href="#hero" class="active">Home</a></li>
                        <li><a href="#about">Conoscici</a></li>
                        <li><a href="#cards">Dove Sciare</a></li>
                        <li><a href="#services">Servizi</a></li>
                        <li><a href="#pricing">Prezzi</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#contact">Contatti</a></li>
                        <li>
                            <router-link to="/login"><a>LogIn</a></router-link>
                        </li>
                        <li>
                            <router-link to="/registration"><a>Registrati</a></router-link>
                        </li>
                    </ul>
                    <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>
            </div>
        </div>

    </header>
</template>

<style scoped>
.header {
  --background-color: #4682B4;
  --default-color: #ffffff;
  --heading-color: #ffffff;
  --contrast-color: #ffffff;
  color: var(--default-color);
  transition: all 0.5s;
  z-index: 997;
  background-color: var(--background-color);
}

.header-admin {
  --background-color: #FF7F50;
  --default-color: #ffffff;
  --heading-color: #ffffff;
  --contrast-color: #ffffff;
  color: var(--default-color);
  transition: all 0.5s;
  z-index: 997;
  background-color: var(--background-color);
}

.header .topbar {
  background-color: var(--background-color);
  height: 40px;
  padding: 0;
  font-size: 14px;
  transition: all 0.5s;
}

.header .topbar .contact-info i {
  font-style: normal;
  color: var(--accent-color);
}

.header .topbar .contact-info i a,
.header .topbar .contact-info i span {
  padding-left: 5px;
  color: var(--default-color);
}

@media (max-width: 575px) {

  .header .topbar .contact-info i a,
  .header .topbar .contact-info i span {
    font-size: 13px;
  }
}

.header .topbar .contact-info i a {
  line-height: 0;
  transition: 0.3s;
}

.header .topbar .contact-info i a:hover {
  color: var(--contrast-color);
  text-decoration: underline;
}

.header .topbar .social-links a {
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  line-height: 0;
  transition: 0.3s;
  margin-left: 20px;
}

.header .topbar .social-links a:hover {
  color: var(--accent-color);
}

.header .branding {
  background-color: color-mix(in srgb, var(--default-color), transparent 95%);
  min-height: 50px;
}

.header .logo {
  line-height: 1;
}

.header .logo img {
  max-height: 36px;
  margin-right: 8px;
}

.header .logo h1 {
  font-size: 30px;
  margin: 0;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--heading-color);
}
@media (min-width: 1200px) {
  .navmenu {
    padding: 0;
  }

  .navmenu ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  .navmenu li {
    position: relative;
  }

  .navmenu a,
  .navmenu a:focus {
    color: var(--nav-color);
    padding: 20px 15px;
    margin-left: 2px;
    font-size: 16px;
    font-family: var(--nav-font);
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0.3s;
  }

  .navmenu a i,
  .navmenu a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    transition: 0.3s;
  }

  .navmenu li:hover>a,
  .navmenu .active,
  .navmenu .active:focus {
    color: var(--contrast-color);
    background-color: var(--nav-hover-color);
  }

  .navmenu .dropdown ul {
    margin: 0;
    padding: 0;
    background: var(--nav-dropdown-background-color);
    display: block;
    position: absolute;
    visibility: hidden;
    left: 2px;
    top: 130%;
    opacity: 0;
    transition: 0.3s;
    z-index: 99;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
  }

  .navmenu .dropdown ul li {
    min-width: 200px;
  }

  .navmenu .dropdown ul a {
    padding: 10px 20px;
    margin: 0;
    font-size: 15px;
    text-transform: none;
    color: var(--nav-dropdown-color);
  }

  .navmenu .dropdown ul a i {
    font-size: 12px;
  }

  .navmenu .dropdown ul a:hover,
  .navmenu .dropdown ul .active:hover,
  .navmenu .dropdown ul li:hover>a {
    color: var(--contrast-color);
    background-color: var(--nav-hover-color);
  }

  .navmenu .dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .navmenu .dropdown .dropdown ul {
    top: 0;
    left: -90%;
    visibility: hidden;
  }

  .navmenu .dropdown .dropdown:hover>ul {
    opacity: 1;
    top: 0;
    left: -100%;
    visibility: visible;
  }
}

/* Mobile Navigation */
@media (max-width: 1199px) {
  .mobile-nav-toggle {
    color: var(--nav-color);
    font-size: 28px;
    line-height: 0;
    margin-right: 10px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .navmenu {
    padding: 0;
    z-index: 9997;
  }

  .navmenu ul {
    display: none;
    position: absolute;
    inset: 60px 20px 20px 20px;
    padding: 10px 0;
    margin: 0;
    border-radius: 6px;
    background-color: var(--nav-dropdown-background-color);
    overflow-y: auto;
    transition: 0.3s;
    z-index: 9998;
    box-shadow: 0px 0px 30px color-mix(in srgb, var(--default-color), transparent 90%);
  }

  .navmenu a,
  .navmenu a:focus {
    color: var(--nav-dropdown-color);
    padding: 10px 20px;
    font-family: var(--nav-font);
    font-size: 17px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0.3s;
  }

  .navmenu a i,
  .navmenu a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: 0.3s;
    background-color: color-mix(in srgb, var(--accent-color), transparent 90%);
  }

  .navmenu a i:hover,
  .navmenu a:focus i:hover {
    background-color: var(--accent-color);
    color: var(--contrast-color);
  }

  .navmenu a:hover,
  .navmenu .active,
  .navmenu .active:focus {
    color: var(--nav-dropdown-hover-color);
  }

  .navmenu .active i,
  .navmenu .active:focus i {
    background-color: var(--accent-color);
    color: var(--contrast-color);
    transform: rotate(180deg);
  }

  .navmenu .dropdown ul {
    position: static;
    display: none;
    z-index: 99;
    padding: 10px 0;
    margin: 10px 20px;
    background-color: var(--nav-dropdown-background-color);
    transition: all 0.5s ease-in-out;
  }

  .navmenu .dropdown ul ul {
    background-color: rgba(33, 37, 41, 0.1);
  }

  .navmenu .dropdown>.dropdown-active {
    display: block;
    background-color: rgba(33, 37, 41, 0.03);
  }

  .mobile-nav-active {
    overflow: hidden;
  }

  .mobile-nav-active .mobile-nav-toggle {
    color: #fff;
    position: absolute;
    font-size: 32px;
    top: 15px;
    right: 15px;
    margin-right: 0;
    z-index: 9999;
  }

  .mobile-nav-active .navmenu {
    position: fixed;
    overflow: hidden;
    inset: 0;
    background: rgba(33, 37, 41, 0.8);
    transition: 0.3s;
  }

  .mobile-nav-active .navmenu>ul {
    display: block;
  }
}

/* Listing Dropdown - Desktop */
@media (min-width: 1200px) {
  .navmenu .listing-dropdown {
    position: static;
  }

  .navmenu .listing-dropdown ul {
    margin: 0;
    padding: 10px;
    background: var(--nav-dropdown-background-color);
    box-shadow: 0px 0px 20px color-mix(in srgb, var(--default-color), transparent 90%);
    position: absolute;
    top: 130%;
    left: 0;
    right: 0;
    visibility: hidden;
    opacity: 0;
    display: flex;
    transition: 0.3s;
    border-radius: 4px;
    z-index: 99;
  }

  .navmenu .listing-dropdown ul li {
    flex: 1;
  }

  .navmenu .listing-dropdown ul li a,
  .navmenu .listing-dropdown ul li:hover>a {
    padding: 10px 20px;
    font-size: 15px;
    color: var(--nav-dropdown-color);
    background-color: var(--nav-dropdown-background-color);
  }

  .navmenu .listing-dropdown ul li a:hover,
  .navmenu .listing-dropdown ul li .active,
  .navmenu .listing-dropdown ul li .active:hover {
    color: var(--nav-dropdown-hover-color);
    background-color: var(--nav-dropdown-background-color);
  }

  .navmenu .listing-dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }
}

/* Listing Dropdown - Mobile */
@media (max-width: 1199px) {
  .navmenu .listing-dropdown ul {
    position: static;
    display: none;
    z-index: 99;
    padding: 10px 0;
    margin: 10px 20px;
    background-color: var(--nav-dropdown-background-color);
    transition: all 0.5s ease-in-out;
  }

  .navmenu .listing-dropdown ul ul {
    background-color: rgba(33, 37, 41, 0.1);
  }

  .navmenu .listing-dropdown>.dropdown-active {
    display: block;
    background-color: rgba(33, 37, 41, 0.03);
  }
}
</style>