"use strict";
exports.id = 883;
exports.ids = [883];
exports.modules = {

/***/ 1977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/components/header.js
const Header=({siteTitle})=>{const{0:menuBtn,1:setMenu}=(0,react.useState)(false);const HandleMenu=()=>{setMenu(!menuBtn);};return/*#__PURE__*/react.createElement("header",{class:"sticky top-0 z-50 bg-white"},/*#__PURE__*/react.createElement("nav",null,/*#__PURE__*/react.createElement("div",{class:"globalWrapper flex py-4 md:py-8 bg-white justify-between w-full px-7"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{href:"/",class:"inline-flex items-center text-gray-700 text-2xl md:text-3xl font-bold gap-2.5","aria-label":"logo"},/*#__PURE__*/react.createElement("svg",{class:"w-11 h-auto",width:"100",height:"104",viewBox:"0 0 100 104",fill:"none",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/react.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M80.5397 1.40072C73.1324 -1.81081 64.5241 1.59054 61.3126 8.99786L53.7069 26.5403L30.6009 12.7852C20.9833 7.05985 8.54535 10.2151 2.81996 19.8327C-6.52753 35.5347 8.04529 54.6143 25.6536 49.7277L46.1158 44.0491L32.5383 75.3652C28.086 85.6343 32.8015 97.5684 43.0706 102.021C59.8364 109.29 76.902 92.403 69.8101 75.5615L59.6011 51.3181C58.3658 48.3846 58.098 45.3425 58.6156 42.498C65.5626 44.077 70.9868 50.3714 70.7714 58.1603L70.6668 61.9443C70.2503 77.0057 90.1336 82.7728 97.8408 69.8261C101.971 62.8888 99.6947 53.9171 92.7574 49.7873L64.421 32.9185C66.6332 31.1982 69.3549 30.045 72.4208 29.7367L76.1873 29.358C91.1788 27.8506 94.3635 7.39417 80.5397 1.40072Z",fill:"url(#paint0_linear_654_8)"}),/*#__PURE__*/react.createElement("defs",null,/*#__PURE__*/react.createElement("linearGradient",{id:"paint0_linear_654_8",x1:"69.2513",y1:"27.6659",x2:"31.0637",y2:"100.576",gradientUnits:"userSpaceOnUse"},/*#__PURE__*/react.createElement("stop",{"stop-color":"#A0AAFF"}),/*#__PURE__*/react.createElement("stop",{offset:"1","stop-color":"#424FBF"})))),"Benotive"),/*#__PURE__*/react.createElement("ul",{class:menuBtn?"absolute left-0 flex items-center justify-center w-full flex-col bg-white transition-all duration-500 z-[-1] lg:static lg:flex-row lg:opacity-100 lg:w-auto lg:z-[50]":"absolute left-0 flex items-center justify-center w-full flex-col bg-white transition-all duration-500 z-[-1] lg:static lg:flex-row lg:opacity-100 lg:w-auto lg:z-[50] opacity-0 -translate-y-[400%] lg:translate-y-0"},/*#__PURE__*/react.createElement("li",{class:"m-6 lg:m-0"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{href:"/",class:" text-indigo-500 text-base lg:text-lg font-semibold p-2"},"Home")),/*#__PURE__*/react.createElement("li",{class:"m-6 lg:m-0"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{href:"#price",class:" text-gray-800 hover:text-indigo-500 active:text-indigo-700 text-base lg:text-lg font-semibold transition duration-100 priceSection p-2"},"Cennik")),/*#__PURE__*/react.createElement("li",{class:"m-6 lg:m-0"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{href:"./src/html/showMore.html",class:" text-gray-800 hover:text-indigo-500 active:text-indigo-700 text-base lg:text-lg font-semibold transition duration-100  p-2"},"Pomoc")),/*#__PURE__*/react.createElement("li",{class:"m-6 lg:m-0"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{href:"./src/html/gallery.html",class:" text-gray-800 hover:text-indigo-500 active:text-indigo-700 text-base lg:text-lg font-semibold transition duration-100  p-2"},"Galeria")),/*#__PURE__*/react.createElement("li",{class:"m-6 lg:m-0"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{href:"./src/html/contact.html",class:" text-gray-800 hover:text-indigo-500 active:text-indigo-700 text-base lg:text-lg font-semibold transition duration-100  p-2"},"Kontakt")),/*#__PURE__*/react.createElement("li",{class:"mb-12 mt-6"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{href:"./src/html/contact.html",class:"bg-indigo-400 hover:bg-indigo-600 focus-visible:ring lg:hidden ring-indigo-300 text-white shadow-md active:text-gray-700 text-sm font-semibold text-center rounded-lg outline-none transition duration-200 px-8 py-3 hover:text-white hover:shadow-inner"},"Darmowa Wycena"))),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{href:"./src/html/contact.html",class:"opacity-0 lg:opacity-100 lg:inline-block my-auto bg-indigo-400 hover:bg-indigo-600 md:text-base focus-visible:ring ring-indigo-300 text-white shadow-md active:text-gray-700 text-sm font-semibold text-center rounded-lg outline-none transition duration-200 px-8 py-4 hover:text-white hover:shadow-inner"},"Darmowa Wycena"," "),/*#__PURE__*/react.createElement("button",{onClick:HandleMenu,type:"button",class:"inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-4 py-2"},/*#__PURE__*/react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:menuBtn?'hidden ionicon h-6 w-6':'ionicon h-6 w-6',viewBox:"0 0 20 20",fill:"currentColor"},/*#__PURE__*/react.createElement("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})),/*#__PURE__*/react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:menuBtn?'ionicon h-6 w-6':'hidden ionicon h-6 w-6',viewBox:"0 0 512 512"},/*#__PURE__*/react.createElement("title",null,"Close"),/*#__PURE__*/react.createElement("path",{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}))))));};/* harmony default export */ const header = (Header);
;// CONCATENATED MODULE: ./src/components/footer.js
const Footer=()=>/*#__PURE__*/react.createElement("footer",{className:"mt-12 p-4 bg-indigo-400"},"\xA9 2023 \xB7 Built with",` `,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/"},"Boople"));/* harmony default export */ const footer = (Footer);
;// CONCATENATED MODULE: ./src/components/layout.js
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */const Layout=({children})=>{var _data$site$siteMetada;const data=(0,gatsby_browser_entry.useStaticQuery)("3649515864");return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(header,{siteTitle:((_data$site$siteMetada=data.site.siteMetadata)===null||_data$site$siteMetada===void 0?void 0:_data$site$siteMetada.title)||`Title`}),/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("main",null,children),/*#__PURE__*/react.createElement(footer,null)));};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 9357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */function Seo({description,title,children}){var _site$siteMetadata,_site$siteMetadata2;const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("63159454");const metaDescription=description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,defaultTitle?`${title} | ${defaultTitle}`:title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:type",content:"website"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:card",content:"summary"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:creator",content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.author)||``}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:description",content:metaDescription}),children);}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1977);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9357);
const NotFoundPage=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"404: Not Found"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"You just hit a route that doesn't exist... the sadness."));const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{title:"404: Not Found"});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map