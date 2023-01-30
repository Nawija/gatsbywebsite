"use strict";
exports.id = "component---src-pages-index-jshead";
exports.ids = ["component---src-pages-index-jshead"];
exports.modules = {

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


const Footer = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {
  className: "mt-12 p-4 bg-indigo-400"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  className: "globalWrapper"
}, "\xA9 2023 \xB7 Built with", ` `, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/"
}, "Boople")));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");



const Header = ({
  siteTitle
}) => {
  const {
    0: menuBtn,
    1: setMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: menuActive,
    1: active
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const HandleMenu = () => {
    setMenu(!menuBtn);
  };
  const Active = () => {
    active(!menuActive);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    class: "sticky top-0 z-50 bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "globalWrapper flex py-4 md:py-6 bg-white justify-between w-full px-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    href: "/",
    class: "inline-flex items-center text-gray-700 text-2xl md:text-3xl font-bold gap-2.5",
    "aria-label": "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    class: "w-11 h-auto",
    width: "100",
    height: "104",
    viewBox: "0 0 100 104",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M80.5397 1.40072C73.1324 -1.81081 64.5241 1.59054 61.3126 8.99786L53.7069 26.5403L30.6009 12.7852C20.9833 7.05985 8.54535 10.2151 2.81996 19.8327C-6.52753 35.5347 8.04529 54.6143 25.6536 49.7277L46.1158 44.0491L32.5383 75.3652C28.086 85.6343 32.8015 97.5684 43.0706 102.021C59.8364 109.29 76.902 92.403 69.8101 75.5615L59.6011 51.3181C58.3658 48.3846 58.098 45.3425 58.6156 42.498C65.5626 44.077 70.9868 50.3714 70.7714 58.1603L70.6668 61.9443C70.2503 77.0057 90.1336 82.7728 97.8408 69.8261C101.971 62.8888 99.6947 53.9171 92.7574 49.7873L64.421 32.9185C66.6332 31.1982 69.3549 30.045 72.4208 29.7367L76.1873 29.358C91.1788 27.8506 94.3635 7.39417 80.5397 1.40072Z",
    fill: "url(#paint0_linear_654_8)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
    id: "paint0_linear_654_8",
    x1: "69.2513",
    y1: "27.6659",
    x2: "31.0637",
    y2: "100.576",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    "stop-color": "#A0AAFF"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: "1",
    "stop-color": "#424FBF"
  })))), "Benotive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    class: menuBtn ? "absolute left-0 flex items-center justify-center w-full flex-col bg-white transition-all duration-500 z-[-1] lg:static lg:flex-row lg:opacity-100 lg:w-auto lg:z-[50]" : "absolute left-0 flex items-center justify-center w-full flex-col bg-white transition-all duration-500 z-[-1] lg:static lg:flex-row lg:opacity-100 lg:w-auto lg:z-[50] opacity-0 -translate-y-[400%] lg:translate-y-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    class: "m-6 lg:m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    href: "/",
    class: " text-gray-800 hover:text-indigo-500 active:text-indigo-700 text-base lg:text-lg font-semibold transition duration-100 p-2"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    class: "m-6 lg:m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/cennik",
    class: " text-gray-800 hover:text-indigo-500 active:text-indigo-700 text-base lg:text-lg font-semibold transition duration-100 p-2"
  }, "Cennik")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    class: "m-6 lg:m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/pomoc",
    class: " text-gray-800 hover:text-indigo-500 active:text-indigo-700 text-base lg:text-lg font-semibold transition duration-100  p-2"
  }, "Pomoc")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    class: "m-6 lg:m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/galeria",
    class: " text-gray-800 hover:text-indigo-500 active:text-indigo-700 text-base lg:text-lg font-semibold transition duration-100  p-2"
  }, "Galeria")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    class: "m-6 lg:m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/kontakt",
    class: " text-gray-800 hover:text-indigo-500 active:text-indigo-700 text-base lg:text-lg font-semibold transition duration-100  p-2"
  }, "Kontakt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    class: "mb-12 mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/kontakt",
    class: "bg-indigo-400 hover:bg-indigo-600 focus-visible:ring lg:hidden ring-indigo-300 text-white shadow-md active:text-gray-700 text-sm font-semibold text-center rounded-lg outline-none transition duration-200 px-8 py-3 hover:text-white hover:shadow-inner"
  }, "Darmowa Wycena"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/kontakt",
    class: "hidden lg:inline-block my-auto bg-indigo-400 hover:bg-indigo-600 md:text-base focus-visible:ring ring-indigo-300 text-white shadow-md active:text-gray-700 text-sm font-semibold text-center rounded-lg outline-none transition duration-200 px-8 py-4 hover:text-white hover:shadow-inner"
  }, "Darmowa Wycena"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: HandleMenu,
    type: "button",
    class: "inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-4 py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: menuBtn ? 'hidden ionicon h-6 w-6' : 'ionicon h-6 w-6',
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    "fill-rule": "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    "clip-rule": "evenodd"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: menuBtn ? 'ionicon h-6 w-6' : 'hidden ionicon h-6 w-6',
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/hero.js":
/*!********************************!*\
  !*** ./src/components/hero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _assets_heroVideo_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/heroVideo.mp4 */ "./src/assets/heroVideo.mp4");



const Hero = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
  class: "min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48 mb-6"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
  class: "w-full h-full object-cover object-center absolute inset-0",
  src: _assets_heroVideo_mp4__WEBPACK_IMPORTED_MODULE_2__["default"],
  type: "video/mp4",
  autoPlay: true,
  muted: true,
  loop: true
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  class: "bg-indigo-500 mix-blend-multiply absolute inset-0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  class: "sm:max-w-xl flex flex-col items-center relative p-4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8"
}, "Nowoczesny design!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
  class: "text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12"
}, "Stw\xF3rz swoj\u0105 wizyt\xF3wk\u0119 w internecie z nami!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  class: "w-full flex flex-col sm:flex-row sm:justify-center gap-2.5"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "./src/html/showMore.html",
  class: "inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-200  hover:scale-105 px-8 py-3"
}, "Wiecej Informacji"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "./src/html/gallery.html",
  class: "inline-block bg-gray-200 hover:bg-gray-300 hover:text-white focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-200 hover:scale-105 px-8 py-3"
}, "Nasze Strony"))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./src/components/infoSection.js":
/*!***************************************!*\
  !*** ./src/components/infoSection.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_iPhone_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/iPhone.png */ "./src/images/iPhone.png");


const InfoSection = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
  class: "text-gray-800 body-font overflow-hidden globalWrapper"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  class: "flex items-center flex-wrap justify-center px-5 mx-auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  class: "flex flex-col items-center flex-wrap justify-center py-6 px-[4vw] md:w-2/3"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
  class: "text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
}, "Strony Internetowe z Systemami SEO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
  class: "text-center sm:text-3xl text-2xl font-medium title-font mb-4 text-black capitalize"
}, "Tworzenie stron internetowych"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "text-center md:text-start lg:w-2/3 mx-auto leading-relaxed text-base"
}, "Jako agencja stron internetowych, oferujemy szeroki zakres us\u0142ug, od projektowania i tworzenia stron pod k\u0105tem SEO, po ich hosting i utrzymanie. Dbamy o to, aby nasze projekty by\u0142y przyjazne dla u\u017Cytkownika i skutecznie promowa\u0142y biznes naszych klient\xF3w.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  class: "flex items-center justify-center w-full md:w-1/3"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
  class: "ml-[40vw] my-6 md:ml-12 h-auto",
  src: _images_iPhone_png__WEBPACK_IMPORTED_MODULE_1__["default"]
}))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoSection);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3649515864_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3649515864.json */ "./public/page-data/sq/d/3649515864.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */




const Layout = ({
  children
}) => {
  var _data$site$siteMetada;
  const data = _public_page_data_sq_d_3649515864_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    siteTitle: ((_data$site$siteMetada = data.site.siteMetadata) === null || _data$site$siteMetada === void 0 ? void 0 : _data$site$siteMetada.title) || `Title`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("main", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/price.js":
/*!*********************************!*\
  !*** ./src/components/price.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


const Price = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
  class: "text-gray-800 body-font overflow-hidden globalWrapper py-6 px-4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  class: "container px-1 mx-auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  class: "flex flex-col text-center w-full"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
  class: "sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900"
}, "Cennik"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500"
}, "Nie trzeba przep\u0142aca\u0107 za swoj\u0105 stron\u0119 internetow\u0105! Nasze ceny s\u0105 przyst\u0119pne dla ka\u017Cdego i dopasowujemy je do indywidualnych potrzeb ka\u017Cdego klienta. Skontaktuj si\u0119 z nami, aby uzyska\u0107 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/kontakt",
  class: "underline text-indigo-500 font-semibold hover:text-indigo-600 transition-colors duration-500"
}, "darmow\u0105 wycen\u0119"), " i rozpocz\u0105\u0107 wsp\xF3\u0142prac\u0119 ju\u017C dzi\u015B!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  class: "flex flex-wrap"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  class: "py-4 lg:px-10 lg:py-6 xl:w-1/3 md:w-1/2 w-full mx-auto "
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  class: "group h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:scale-105 hover:rotate-2 ease-in-out hover:border-amber-300 hover:shadow-lg transition-all duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
  class: "text-sm tracking-widest title-font mb-1 font-medium"
}, "BASE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "$300"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "text-lg ml-1 font-normal text-gray-500"
}, "/z\u0142")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "flex items-center text-gray-800 mb-2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2.5",
  class: "w-3 h-3",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 6L9 17l-5-5"
}))), "Strona One Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "flex items-center text-gray-800 mb-2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2.5",
  class: "w-3 h-3",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 6L9 17l-5-5"
}))), "Darmowy Roczny Hosting"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "flex items-center text-gray-800 mb-6"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2.5",
  class: "w-3 h-3",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 6L9 17l-5-5"
}))), "2 Darmowe Modyfikacje"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
  class: "flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none rounded group-hover:bg-gray-700 transition-colors duration-500"
}, "Sprawdz", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  class: "w-4 h-4 ml-auto",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M5 12h14M12 5l7 7-7 7"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "text-xs text-gray-500 mt-3"
}, "Termin Realizacji od 4 do 10 dni"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  class: "py-4 lg:px-10 xl:w-1/3 md:w-1/2 w-full mx-auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  class: "group h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden hover:scale-105 hover:rotate-2 ease-in-out hover:border-amber-300 hover:shadow-lg transition-all duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl group-hover:bg-amber-400 transition-colors duration-500"
}, "POPULARNY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
  class: "text-sm tracking-widest title-font mb-1 font-medium"
}, "PRO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
  class: "text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200 group-hover:border-white transition-colors duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "$500"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "text-lg ml-1 font-normal text-gray-500 "
}, "/z\u0142")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "flex items-center text-gray-800 mb-2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2.5",
  class: "w-3 h-3",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 6L9 17l-5-5"
}))), "Strona Multi Page do 5 stron"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "flex items-center text-gray-800 mb-2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2.5",
  class: "w-3 h-3",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 6L9 17l-5-5"
}))), "Pi\u0119kne Unikalne Animacje"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "flex items-center text-gray-600 mb-2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2.5",
  class: "w-3 h-3",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 6L9 17l-5-5"
}))), "Darmowy Roczny ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  class: "ml-1 underline text-indigo-500",
  href: "./src/html/showMore.html#hosting"
}, "Hosting")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "flex items-center text-gray-600 mb-2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2.5",
  class: "w-3 h-3",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 6L9 17l-5-5"
}))), "3 Darmowe Modyfikacje"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "flex items-center text-gray-600 mb-6"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2.5",
  class: "w-3 h-3",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 6L9 17l-5-5"
}))), "Roczna Opieka 24/7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
  class: "flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded group-hover:bg-gray-700 transition-colors duration-500"
}, "Sprawdz", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  class: "w-4 h-4 ml-auto",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M5 12h14M12 5l7 7-7 7"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "text-xs text-gray-500 mt-3"
}, "Termin Realizacji od 4 do 10 dni"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  class: "py-4 lg:px-10 lg:py-6 xl:w-1/3 md:w-1/2 w-full mx-auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  class: "group h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:scale-105 hover:rotate-2 ease-in-out hover:border-amber-300 hover:shadow-lg transition-all duration-500 "
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
  class: "text-sm tracking-widest title-font mb-1 font-medium"
}, "SPECIAL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
  class: "text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "$1200"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "text-lg ml-1 font-normal text-gray-500"
}, "/z\u0142")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "flex items-center text-gray-600 mb-2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2.5",
  class: "w-3 h-3",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 6L9 17l-5-5"
}))), "Strona Bez Limit\xF3w"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "flex items-center text-gray-600 mb-2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2.5",
  class: "w-3 h-3",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 6L9 17l-5-5"
}))), "Unikalne Animacje"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "flex items-center text-gray-600 mb-2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2.5",
  class: "w-3 h-3",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 6L9 17l-5-5"
}))), "Bez Limitu Modyfikacji"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "flex items-center text-gray-600 mb-2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2.5",
  class: "w-3 h-3",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 6L9 17l-5-5"
}))), "Wdr\u0105\u017Cenie ka\u017Cdego pomys\u0142u"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "flex items-center text-gray-600 mb-2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2.5",
  class: "w-3 h-3",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 6L9 17l-5-5"
}))), "Darmowy Projekt Strony"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "flex items-center text-gray-600 mb-2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2.5",
  class: "w-3 h-3",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 6L9 17l-5-5"
}))), "Darmowy 3 Letni ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  class: "ml-1 underline text-indigo-500",
  href: "./src/html/showMore.html#hosting"
}, "Hosting")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "flex items-center text-gray-600 mb-6"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  class: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2.5",
  class: "w-3 h-3",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 6L9 17l-5-5"
}))), "Unikalny Design"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
  class: "flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none rounded group-hover:bg-gray-700 transition-colors duration-500"
}, "Sprawdz", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  class: "w-4 h-4 ml-auto",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M5 12h14M12 5l7 7-7 7"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  class: "text-xs text-gray-500 mt-3"
}, "Termin Realizacji od 4 do 10 dni"))))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/63159454.json */ "./public/page-data/sq/d/63159454.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */


function Seo({
  description,
  title,
  children
}) {
  var _site$siteMetadata, _site$siteMetadata2;
  const {
    site
  } = _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = (_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, defaultTitle ? `${title} | ${defaultTitle}` : title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:creator",
    content: ((_site$siteMetadata2 = site.siteMetadata) === null || _site$siteMetadata2 === void 0 ? void 0 : _site$siteMetadata2.author) || ``
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:description",
    content: metaDescription
  }), children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/pages/index.js?export=head":
/*!****************************************!*\
  !*** ./src/pages/index.js?export=head ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hero */ "./src/components/hero.js");
/* harmony import */ var _components_price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/price */ "./src/components/price.js");
/* harmony import */ var _components_infoSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/infoSection */ "./src/components/infoSection.js");







const IndexPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_hero__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_infoSection__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_price__WEBPACK_IMPORTED_MODULE_5__["default"], null));
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: "Home"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./src/images/iPhone.png":
/*!*******************************!*\
  !*** ./src/images/iPhone.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/iPhone-0823732e89657fa5cc584ef6f0c0e4b4.png");

/***/ }),

/***/ "./src/assets/heroVideo.mp4":
/*!**********************************!*\
  !*** ./src/assets/heroVideo.mp4 ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/heroVideo-a83cf9482e4a7c7080ae4ece40724224.mp4");

/***/ }),

/***/ "./public/page-data/sq/d/3649515864.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3649515864.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter"}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter","description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jshead.js.map