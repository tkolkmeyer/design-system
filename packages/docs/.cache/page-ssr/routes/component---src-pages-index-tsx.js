exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 2779:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 7554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/Users/patrickwolfert/Projects/design-system/node_modules/react/index.js"
var index_js_ = __webpack_require__(2185);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ../../node_modules/prop-types/index.js
var prop_types = __webpack_require__(3980);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../../node_modules/classnames/index.js
var classnames = __webpack_require__(2779);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__(4930);
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);
;// CONCATENATED MODULE: ../design-system/dist/esnext/locale/en.json
const en_namespaceObject = JSON.parse('{"alert":{"defaultLabel":"Notice","error":"Alert","success":"Success","warn":"Warning"},"badge":{"alert":"Alert","info":"Notice","success":"Success","warn":"Warning"},"usaBanner":{"bannerLabel":"Official government website","bannerText":"An official website of the United States government","bannerActionText":"Here’s how you know","domainHeaderText":"Official websites use .gov","domainAText":"A","domainText":"website belongs to an official government organization in the United States.","flagIconTitle":"U.S. Flag","govText":".gov","httpsHeaderText":"Secure .gov websites use HTTPS","httpsOrText":"or","httpsText":"https://","httpsAText":"A","httpsLockText":"lock","httpsDetailText":"means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites. "}}');
;// CONCATENATED MODULE: ../design-system/dist/esnext/locale/es.json
const es_namespaceObject = JSON.parse('{"alert":{"defaultLabel":"Aviso","error":"Alerta","success":"Completado","warn":"Advertencia"},"badge":{"alert":"Alerta","info":"Aviso","success":"Completado","warn":"Advertencia"},"usaBanner":{"bannerLabel":"Sitio web oficial del gobierno","bannerText":"Un sitio oficial del Gobierno de Estados Unidos","bannerActionText":"Así es como usted puede verificarlo","domainHeaderText":"Los sitios web oficiales usan .gov","domainAText":"Un sitio web","domainText":"pertenece a una organización oficial del Gobierno de Estados Unidos.","flagIconTitle":"U.S. Bandera","govText":".gov","httpsHeaderText":"Los sitios web seguros .gov usan HTTPS","httpsOrText":"o","httpsText":"https://","httpsAText":"Un","httpsLockText":"candado","httpsDetailText":"significa que usted se conectó de forma segura a un sitio web .gov. Comparta información sensible sólo en sitios web oficiales y seguros."}}');
// EXTERNAL MODULE: ../../node_modules/lodash/get.js
var get = __webpack_require__(2579);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
;// CONCATENATED MODULE: ../design-system/dist/esnext/i18n.js
var _detectDocumentLangua;function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function detectDocumentLanguage(){var _document$querySelect,_document$querySelect2;if(typeof document==='undefined'){return undefined;}var detectedLang=(_document$querySelect=(_document$querySelect2=document.querySelector('html'))===null||_document$querySelect2===void 0?void 0:_document$querySelect2.lang)!==null&&_document$querySelect!==void 0?_document$querySelect:'';if(['en','es'].some(function(lang){return languageMatches(lang,detectedLang);})){return detectedLang;}else{return undefined;}}var language=(_detectDocumentLangua=detectDocumentLanguage())!==null&&_detectDocumentLangua!==void 0?_detectDocumentLangua:'en';function getLanguage(){return language;}function setLanguage(lang){language=lang;}function getTranslations(){var lang=arguments.length>0&&arguments[0]!==undefined?arguments[0]:getLanguage();return languageMatches('en',lang)?en_namespaceObject:es_namespaceObject;}function addTranslations(lang,translations){_extends(getTranslations(lang),translations);}/**
 * Because language strings can contain region subtags, we need a way to compare
 * just the language portion of two language strings. This function compares two
 * locale strings that may or may not contain subtags according to IETF BCP 47.
 * The second string defaults to our globally set language.
 */function languageMatches(localeStringA){var localeStringB=arguments.length>1&&arguments[1]!==undefined?arguments[1]:getLanguage();var langA=localeStringA.split('-')[0];var langB=localeStringB.split('-')[0];return langA===langB;}/**
 * Falls back to a more generic locale if the more specific one isn't
 * available in this browser. Testing platforms tend to have only a
 * few locales.
 */function fallbackLocale(language,subtag){try{var locale="".concat(language,"-").concat(subtag);// If the locale string is invalid, the following line will fail and jump to
// our catch block; otherwise, it is valid and safe to return it.
new Date().toLocaleString(locale);return locale;}catch(error){return language;}}/**
 * Returns the translation for a given key for a given language. For most
 * use cases, the `t` function will be more appropriate, where the language
 * is not a required parameter. Use this when you need a translation from
 * a specific language.
 */function translate(){var lang=arguments.length>0&&arguments[0]!==undefined?arguments[0]:getLanguage();var key=arguments.length>1?arguments[1]:undefined;var data=arguments.length>2?arguments[2]:undefined;var rawTranslation=get_default()(getTranslations(lang),key);if(typeof rawTranslation!=='string'){throw new Error("Translation key '".concat(key,"' does not resolve to a string."));}if(data){// Replace template strings with provided data
var interpolatedTranslation=Object.keys(data).reduce(function(interpolatedString,dataKey){return interpolatedString.replace("{{".concat(dataKey,"}}"),data[dataKey]);},rawTranslation);return interpolatedTranslation;}else{return rawTranslation;}}/**
 * Returns the translation for a given key in the currently set language.
 */function t(key,data){return translate(getLanguage(),key,data);}/**
 * Returns a translation function bound to a specific language.
 *
 * Note that we don't want to use this to create the default `t` function
 * because it will bind with whatever the default language is AT THAT TIME,
 * so if the global language changes after we call this function,
 * translations coming out if it wouldn't pick up on the change.
 */function tWithLanguage(lang){return function t(key,data){return translate(lang,key,data);};}
;// CONCATENATED MODULE: ../design-system/dist/esnext/Icons/SvgIcon.js
function SvgIcon_extends(){SvgIcon_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return SvgIcon_extends.apply(this,arguments);}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function SvgIcon(_ref){var ariaHidden=_ref.ariaHidden,className=_ref.className,children=_ref.children,description=_ref.description,id=_ref.id,inversed=_ref.inversed,title=_ref.title,viewBox=_ref.viewBox;var svgClasses=classnames_default()('ds-c-icon',{'ds-c-icon--inverse':inversed},className);var _useState=(0,index_js_.useState)(id||uniqueId_default()('icon-')),_useState2=_slicedToArray(_useState,1),iconId=_useState2[0];var titleId="".concat(iconId,"__title");var descriptionId="".concat(iconId,"__desc");var ariaLabelledBy=description?"".concat(titleId," ").concat(descriptionId):titleId;var isSrVisible=!ariaHidden;var additionalProps={};if(isSrVisible){additionalProps['aria-labelledby']=ariaLabelledBy;additionalProps['role']='img';}return/*#__PURE__*/index_js_default().createElement("svg",SvgIcon_extends({"aria-hidden":ariaHidden,className:svgClasses,focusable:false,id:iconId,viewBox:viewBox,xmlns:"http://www.w3.org/2000/svg"},additionalProps),isSrVisible&&/*#__PURE__*/index_js_default().createElement("title",{id:titleId},title),isSrVisible&&description&&/*#__PURE__*/index_js_default().createElement("desc",{id:descriptionId},description),children);}SvgIcon.propTypes={/**
     * Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.
     * If the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.
     */ariaHidden:(prop_types_default()).bool,/**
     * Additional CSS classes to be added to the svg element
     */className:(prop_types_default()).string,/**
     * The elements that make up the SVG
     */children:(prop_types_default()).node.isRequired,/**
     * Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.
     */description:(prop_types_default()).string,/**
     * A custom `id` attribute for the SVG
     */id:(prop_types_default()).string,/**
     * If `true` sets inverse fill color.
     */inversed:(prop_types_default()).bool,/**
     * The descriptive name for the SVG icon
     */title:(prop_types_default()).string.isRequired,/**
     * A string describing the viewbox of the SVG.
     *
     * It is recommended that the icon is centered and fill up the default viewport size.
     * See [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.
     */viewBox:(prop_types_default()).string};SvgIcon.defaultProps={ariaHidden:true,inversed:false};/* harmony default export */ const Icons_SvgIcon = (SvgIcon);
;// CONCATENATED MODULE: ../design-system/dist/esnext/Icons/UsaFlagIcon.js
function UsaFlagIcon_extends(){UsaFlagIcon_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return UsaFlagIcon_extends.apply(this,arguments);}var defaultProps={className:'',title:'U.S. flag',viewBox:'0 0 16 11'};function UsaFlagIcon(props){var iconCssClasses="ds-c-icon--usa-flag ".concat(props.className||'');return/*#__PURE__*/index_js_default().createElement(Icons_SvgIcon,UsaFlagIcon_extends({},defaultProps,props,{className:iconCssClasses}),/*#__PURE__*/index_js_default().createElement("g",{fill:"none",fillRule:"evenodd"},/*#__PURE__*/index_js_default().createElement("path",{fill:"#FFF",d:"M0 0h16v11H0z"}),/*#__PURE__*/index_js_default().createElement("path",{fill:"#DB3E1F",d:"M8 0h8v1H8z"}),/*#__PURE__*/index_js_default().createElement("path",{fill:"#1E33B1",d:"M0 0h8v7H0z"}),/*#__PURE__*/index_js_default().createElement("path",{fill:"#DB3E1F",d:"M8 2h8v1H8zM8 4h8v1H8zM8 6h8v1H8zM0 8h16v1H0zM0 10h16v1H0z"}),/*#__PURE__*/index_js_default().createElement("path",{fill:"#FFF",d:"M1 1h1v1H1zM2 3h1v1H2zM1 5h1v1H1zM3 1h1v1H3zM4 3h1v1H4zM3 5h1v1H3zM5 1h1v1H5zM6 3h1v1H6zM5 5h1v1H5z"})));}/* harmony default export */ const Icons_UsaFlagIcon = (UsaFlagIcon);
;// CONCATENATED MODULE: ../design-system/dist/esnext/Icons/ArrowIcon.js
function ArrowIcon_extends(){ArrowIcon_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return ArrowIcon_extends.apply(this,arguments);}var ArrowIcon_defaultProps={className:'',direction:'right',viewBox:'0 0 320 512'};function ArrowIcon(props){var direction=props.direction||ArrowIcon_defaultProps.direction;var iconCssClasses=classnames_default()('ds-c-icon--arrow',"ds-c-icon--arrow-".concat(direction),props.className);return/*#__PURE__*/index_js_default().createElement(Icons_SvgIcon,ArrowIcon_extends({title:"".concat(direction," arrow")},ArrowIcon_defaultProps,props,{className:iconCssClasses}),/*#__PURE__*/index_js_default().createElement("path",{fill:"currentColor",d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}));}ArrowIcon.propTypes={direction:prop_types_default().oneOf(['up','down','left','right'])};/* harmony default export */ const Icons_ArrowIcon = (ArrowIcon);
;// CONCATENATED MODULE: ../design-system/dist/esnext/Icons/CloseIconThin.js
function CloseIconThin_extends(){CloseIconThin_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return CloseIconThin_extends.apply(this,arguments);}var CloseIconThin_defaultProps={className:'',title:'Close',viewBox:'-2 -2 18 18'};function CloseIconThin(props){var iconCssClasses="ds-c-icon--close ds-c-icon--close-thin ".concat(props.className||'');return/*#__PURE__*/index_js_default().createElement(Icons_SvgIcon,CloseIconThin_extends({},CloseIconThin_defaultProps,props,{className:iconCssClasses}),/*#__PURE__*/index_js_default().createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",d:"M0 13.0332964L13.0332964 0M13.0332964 13.0332964L0 0"}));}/* harmony default export */ const Icons_CloseIconThin = (CloseIconThin);
;// CONCATENATED MODULE: ../design-system/dist/esnext/Icons/BuildingCircleIcon.js
function BuildingCircleIcon_extends(){BuildingCircleIcon_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return BuildingCircleIcon_extends.apply(this,arguments);}var BuildingCircleIcon_defaultProps={className:'',title:'Building in circle',viewBox:'0 0 54 54'};function BuildingCircleIcon(props){var iconCssClasses="ds-c-icon--building-circle ".concat(props.className||'');return/*#__PURE__*/index_js_default().createElement(Icons_SvgIcon,BuildingCircleIcon_extends({},BuildingCircleIcon_defaultProps,props,{className:iconCssClasses}),/*#__PURE__*/index_js_default().createElement("g",null,/*#__PURE__*/index_js_default().createElement("path",{className:"ds-c-icon--building-circle__building",fill:"currentColor",d:"M36.5,20.91v1.36H35.15a0.71,0.71,0,0,1-.73.68H18.23a0.71,0.71,0,0,1-.73-0.68H16.14V20.91l10.18-4.07Zm0,13.57v1.36H16.14V34.48a0.71,0.71,0,0,1,.73-0.68h18.9A0.71,0.71,0,0,1,36.5,34.48ZM21.57,23.62v8.14h1.36V23.62h2.71v8.14H27V23.62h2.71v8.14h1.36V23.62h2.71v8.14h0.63a0.71,0.71,0,0,1,.73.68v0.68H17.5V32.45a0.71,0.71,0,0,1,.73-0.68h0.63V23.62h2.71Z"}),/*#__PURE__*/index_js_default().createElement("circle",{className:"ds-c-icon--building-circle__circle",fill:"none",cx:"50%",cy:"50%",r:"47%",stroke:"currentColor",strokeWidth:"1"})));}/* harmony default export */ const Icons_BuildingCircleIcon = (BuildingCircleIcon);
;// CONCATENATED MODULE: ../design-system/dist/esnext/Icons/LockCircleIcon.js
function LockCircleIcon_extends(){LockCircleIcon_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return LockCircleIcon_extends.apply(this,arguments);}var LockCircleIcon_defaultProps={className:'',title:'Lock in circle',viewBox:'0 0 54 54'};function LockCircleIcon(props){var iconCssClasses="ds-c-icon--lock-circle ".concat(props.className||'');return/*#__PURE__*/index_js_default().createElement(Icons_SvgIcon,LockCircleIcon_extends({},LockCircleIcon_defaultProps,props,{className:iconCssClasses}),/*#__PURE__*/index_js_default().createElement("path",{fill:"currentColor",d:"M34.72,34.84a1.29,1.29,0,0,1-1.29,1.29H20.57a1.29,1.29,0,0,1-1.29-1.29V27.12a1.29,1.29,0,0,1,1.29-1.29H21V23.26a6,6,0,0,1,12,0v2.57h0.43a1.29,1.29,0,0,1,1.29,1.29v7.72Zm-4.29-9V23.26a3.43,3.43,0,0,0-6.86,0v2.57h6.86Z"}),/*#__PURE__*/index_js_default().createElement("circle",{fill:"none",stroke:"currentColor",strokeWidth:"1",cx:"50%",cy:"50%",r:"47%"}));}/* harmony default export */ const Icons_LockCircleIcon = (LockCircleIcon);
;// CONCATENATED MODULE: ../design-system/dist/esnext/Icons/LockIcon.js
function LockIcon_extends(){LockIcon_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return LockIcon_extends.apply(this,arguments);}var LockIcon_defaultProps={className:'',title:'Lock',viewBox:'0 0 52 64'};function LockIcon(props){var iconCssClasses="ds-c-icon--lock ".concat(props.className||'');return/*#__PURE__*/index_js_default().createElement(Icons_SvgIcon,LockIcon_extends({},LockIcon_defaultProps,props,{className:iconCssClasses}),/*#__PURE__*/index_js_default().createElement("path",{fillRule:"evenodd",d:"M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"}));}/* harmony default export */ const Icons_LockIcon = (LockIcon);
;// CONCATENATED MODULE: ../design-system/dist/esnext/UsaBanner/UsaBanner.js
function UsaBanner_slicedToArray(arr,i){return UsaBanner_arrayWithHoles(arr)||UsaBanner_iterableToArrayLimit(arr,i)||UsaBanner_unsupportedIterableToArray(arr,i)||UsaBanner_nonIterableRest();}function UsaBanner_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function UsaBanner_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return UsaBanner_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return UsaBanner_arrayLikeToArray(o,minLen);}function UsaBanner_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function UsaBanner_iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function UsaBanner_arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var UsaBanner=function UsaBanner(props){var _useState=(0,index_js_.useState)(false),_useState2=UsaBanner_slicedToArray(_useState,2),isBannerOpen=_useState2[0],setBannerOpen=_useState2[1];var _useState3=(0,index_js_.useState)(false),_useState4=UsaBanner_slicedToArray(_useState3,2),shouldRenderMobileView=_useState4[0],setShouldRenderMobileView=_useState4[1];var classes=classnames_default()('ds-c-usa-banner',props.className);var id=props.id||uniqueId_default()('gov-banner_');var t=tWithLanguage(props.locale);if(props.locale){console.warn("[Deprecated]: Please remove the 'locale' prop in <UsaBanner> in favor of global language setting. This prop is deprecated and will be removed in a future release.");}(0,index_js_.useEffect)(function(){var media;var onMediaChange=function onMediaChange(evt){setShouldRenderMobileView(evt.matches);};if(window){media=window.matchMedia('(max-width: 543px)');media.addEventListener('change',onMediaChange);setShouldRenderMobileView(media.matches);}return function(){if(window){media.removeEventListener('change',onMediaChange);}};},[]);var toggleBanner=function toggleBanner(){setBannerOpen(!isBannerOpen);};var flagIcon=/*#__PURE__*/index_js_default().createElement(Icons_UsaFlagIcon,{className:"ds-c-usa-banner__header-flag",title:t('usaBanner.flagIconTitle'),ariaHidden:false});// on mobile, the entire header needs to be a clickable element
var renderMobileHeaderContent=function renderMobileHeaderContent(){return/*#__PURE__*/index_js_default().createElement("button",{onClick:toggleBanner,className:"ds-c-usa-banner__button","aria-expanded":isBannerOpen,"aria-controls":id},flagIcon,/*#__PURE__*/index_js_default().createElement("p",{className:"ds-c-usa-banner__header-text"},/*#__PURE__*/index_js_default().createElement("span",null,t('usaBanner.bannerText')),!isBannerOpen&&/*#__PURE__*/index_js_default().createElement("span",{className:"ds-c-usa-banner__cta-wrapper"},/*#__PURE__*/index_js_default().createElement("span",{className:"ds-c-usa-banner__button-text"},t('usaBanner.bannerActionText')),/*#__PURE__*/index_js_default().createElement(Icons_ArrowIcon,{direction:"down",className:"ds-c-usa-banner__action-icon"}))),isBannerOpen&&/*#__PURE__*/index_js_default().createElement("div",{className:"ds-c-usa-banner__collapse-banner-container"},/*#__PURE__*/index_js_default().createElement(Icons_CloseIconThin,null)));};// on larger screens, only cta needs to be clickable
var renderHeaderContent=function renderHeaderContent(){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,flagIcon,/*#__PURE__*/index_js_default().createElement("p",{className:"ds-c-usa-banner__header-text"},/*#__PURE__*/index_js_default().createElement("span",null,t('usaBanner.bannerText')),/*#__PURE__*/index_js_default().createElement("button",{onClick:toggleBanner,className:"ds-c-usa-banner__button","aria-expanded":isBannerOpen,"aria-controls":id},/*#__PURE__*/index_js_default().createElement("span",{className:"ds-c-usa-banner__button-text"},t('usaBanner.bannerActionText')),/*#__PURE__*/index_js_default().createElement(Icons_ArrowIcon,{direction:isBannerOpen?'up':'down',className:"ds-c-usa-banner__action-icon"}))));};return/*#__PURE__*/index_js_default().createElement("section",{className:classes,"aria-label":t('usaBanner.bannerLabel')},/*#__PURE__*/index_js_default().createElement("header",{className:classnames_default()('ds-c-usa-banner__header',{'ds-c-usa-banner__header--expanded':isBannerOpen,'ds-c-usa-banner__header--mobile':shouldRenderMobileView})},shouldRenderMobileView?renderMobileHeaderContent():renderHeaderContent()),/*#__PURE__*/index_js_default().createElement("div",{className:"ds-c-usa-banner__content",id:id,hidden:!isBannerOpen},/*#__PURE__*/index_js_default().createElement("div",{className:"ds-c-usa-banner__guidance-container"},/*#__PURE__*/index_js_default().createElement("div",{className:"ds-c-usa-banner__guidance"},/*#__PURE__*/index_js_default().createElement(Icons_BuildingCircleIcon,{className:"ds-c-usa-banner__icon ds-c-icon-color--primary"}),/*#__PURE__*/index_js_default().createElement("p",{className:"ds-c-usa-banner__media-body"},/*#__PURE__*/index_js_default().createElement("strong",null,t('usaBanner.domainHeaderText')),/*#__PURE__*/index_js_default().createElement("br",null),t('usaBanner.domainAText'),/*#__PURE__*/index_js_default().createElement("strong",null," ",t('usaBanner.govText')," "),t('usaBanner.domainText'))),/*#__PURE__*/index_js_default().createElement("div",{className:"ds-c-usa-banner__guidance"},/*#__PURE__*/index_js_default().createElement(Icons_LockCircleIcon,{className:"ds-c-usa-banner__icon"}),/*#__PURE__*/index_js_default().createElement("p",{className:"ds-c-usa-banner__media-body"},/*#__PURE__*/index_js_default().createElement("strong",null,t('usaBanner.httpsHeaderText')),/*#__PURE__*/index_js_default().createElement("br",null),t('usaBanner.httpsAText'),/*#__PURE__*/index_js_default().createElement("strong",null," ",t('usaBanner.httpsLockText')," ")," (",' ',/*#__PURE__*/index_js_default().createElement(Icons_LockIcon,{className:"ds-c-usa-banner__lock-image",title:t('usaBanner.httpsLockText'),ariaHidden:false}),' ',") ",t('usaBanner.httpsOrText'),/*#__PURE__*/index_js_default().createElement("strong",null," ",t('usaBanner.httpsText')," "),t('usaBanner.httpsDetailText'))))));};UsaBanner.propTypes={/**
     * Additional classes to be added to the root `section` element
     */className:(prop_types_default()).string,/**
     * A unique ID to be applied to the banner content. A unique ID will be generated if one isn't provided.
     */id:(prop_types_default()).string};/* harmony default export */ const UsaBanner_UsaBanner = (UsaBanner);
;// CONCATENATED MODULE: ../design-system/dist/esnext/Button/Button.js
var _excluded=["children","className","component","disabled","href","inputRef","inversed","inverse","onClick","size","variation","type"];function Button_extends(){Button_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return Button_extends.apply(this,arguments);}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var Button=function Button(_ref){var children=_ref.children,className=_ref.className,component=_ref.component,disabled=_ref.disabled,href=_ref.href,inputRef=_ref.inputRef,inversed=_ref.inversed,inverse=_ref.inverse,onClick=_ref.onClick,size=_ref.size,variation=_ref.variation,_ref$type=_ref.type,type=_ref$type===void 0?'button':_ref$type,otherProps=_objectWithoutProperties(_ref,_excluded);if(false){}function handleClick(e){if(!disabled&&onClick){onClick(e);}}function handleKeyPress(e){// Trigger onClick on space key event for `<a>` elements
if(e.key===' '){handleClick(e);}}var ComponentType=component!==null&&component!==void 0?component:href?'a':'button';var variationClass=variation&&"ds-c-button--".concat(variation);var disabledClass=disabled&&ComponentType!=='button'&&'ds-c-button--disabled';var sizeClass=size&&"ds-c-button--".concat(size);var inverseClass=(inversed||inverse)&&'ds-c-button--inverse';var allClassNames=classnames_default()('ds-c-button',disabledClass,variationClass,inverseClass,sizeClass,className);var attrs=_objectSpread({className:allClassNames,disabled:disabled,href:href,type:type},otherProps);if(onClick){attrs.onClick=handleClick;}if(ComponentType!=='button'){// Assume `component` is not a custom component rendering a <button>
// and remove <button> specific attributes
delete attrs.disabled;delete attrs.type;}return/*#__PURE__*/index_js_default().createElement(ComponentType,Button_extends({ref:inputRef,onKeyPress:ComponentType==='a'?handleKeyPress:undefined},attrs),children);};Button.propTypes={/**
     * Label text or HTML
     */children:prop_types_default().oneOfType([(prop_types_default()).string,(prop_types_default()).node]).isRequired,/**
     * Additional classes to be added to the root button element.
     * Useful for adding utility classes.
     */className:(prop_types_default()).string,/**
     * @hide-prop [Deprecated] Support for rendering custom components will be removed
     * in the next major version. If you need to use React components like react-router
     * `Link`, try wrapping this component instead.
     */component:prop_types_default().oneOfType([(prop_types_default()).node,(prop_types_default()).elementType]),disabled:(prop_types_default()).bool,/**
     * When provided the root component will render as an `<a>` element
     * rather than `button`.
     */href:(prop_types_default()).string,/**
     * @hide-prop [Deprecated] Use inversed instead
     */inverse:(prop_types_default()).bool,/** Applies the inverse theme styling */inversed:(prop_types_default()).bool,/**
     * Returns the [`SyntheticEvent`](https://facebook.github.io/react/docs/events.html).
     * Not called when the button is disabled.
     */onClick:(prop_types_default()).func,size:prop_types_default().oneOf(['small','big']),/**
     * A string corresponding to the button-component variation classes.
     * The `'danger'` variation is deprecated and will be removed in a future release.
     */variation:prop_types_default().oneOf(['primary','danger','success','transparent'])};/* harmony default export */ const Button_Button = ((/* unused pure expression or super */ null && (Button)));
;// CONCATENATED MODULE: ./src/components/DocSiteHeader.tsx
const DocSiteHeader=()=>{return/*#__PURE__*/index_js_default().createElement("div",{className:"c-header"},/*#__PURE__*/index_js_default().createElement(UsaBanner_UsaBanner,null),/*#__PURE__*/index_js_default().createElement("header",{className:"c-header__wrapper ds-u-padding--3 ds-u-md-display--flex ds-u-justify-content--between ds-u-align-items--center"},/*#__PURE__*/index_js_default().createElement("h1",{className:"c-header__title ds-h3 ds-u-margin-bottom--0"},/*#__PURE__*/index_js_default().createElement("a",{href:"/",className:"c-header__link"},"CMS Design System")),/*#__PURE__*/index_js_default().createElement("div",{className:"ds-u-display--none ds-u-sm-display--block ds-u-md-display--flex ds-u-justify-content--end ds-u-sm-margin-top--1 ds-u-md-margin-top--0"},/*#__PURE__*/index_js_default().createElement(Button,{href:`https://github.com/CMSgov/design-system/releases/latest/download/cmsgov-design-system-${"3.2.2"}.tgz`,className:"ds-c-button ds-c-button--primary ds-c-button--inverse ds-u-font-weight--normal"},' ',"Download Code",' '),/*#__PURE__*/index_js_default().createElement(Button,{href:"https://github.com/CMSgov/design-system",className:"ds-c-button ds-c-button--inverse ds-u-font-weight--normal ds-u-margin-left--2"},"View on GitHub"))));};/* harmony default export */ const components_DocSiteHeader = (DocSiteHeader);
;// CONCATENATED MODULE: ./src/components/DocSiteFooter.tsx
const DocSiteFooter=()=>{return/*#__PURE__*/index_js_default().createElement("footer",{className:"c-footer"},"Placeholder footer content here");};/* harmony default export */ const components_DocSiteFooter = (DocSiteFooter);
;// CONCATENATED MODULE: ../design-system/dist/esnext/VerticalNav/VerticalNavItemLabel.js
function VerticalNavItemLabel_extends(){VerticalNavItemLabel_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return VerticalNavItemLabel_extends.apply(this,arguments);}var DEFAULT_COMPONENT_TYPE='div';var VerticalNavItemLabel=function VerticalNavItemLabel(props){/**
   * The type of element rendered ultimately depends on whether
   * this is meant to be a subnav toggle, link, or generic label
   * @return {String} The type of HTML tag
   */var componentType=function componentType(){if(props.hasSubnav){return'button';}else if(props.component){return props.component;}else if(props.url){return'a';}return DEFAULT_COMPONENT_TYPE;};var LabelComponent=componentType();var handleClick=function handleClick(evt){return props.onClick(evt);};var anchorProps=function anchorProps(){return{href:props.url};};var buttonProps=function buttonProps(){return{'aria-controls':props.subnavId,'aria-expanded':!props.collapsed,title:props.collapsed?props.ariaCollapsedStateButtonLabel:props.ariaExpandedStateButtonLabel};};var otherProps={className:classnames_default()('ds-c-vertical-nav__label',{'ds-c-vertical-nav__label--current':props.selected,'ds-c-vertical-nav__label--parent':props.hasSubnav}),onClick:props.onClick?handleClick:undefined};if(LabelComponent==='button'){otherProps=VerticalNavItemLabel_extends(otherProps,buttonProps());}else if(LabelComponent!==DEFAULT_COMPONENT_TYPE){// Apply href if <a> or custom component type
otherProps=VerticalNavItemLabel_extends(otherProps,anchorProps());}return/*#__PURE__*/index_js_default().createElement(LabelComponent,otherProps,props.label,props.hasSubnav&&/*#__PURE__*/index_js_default().createElement(Icons_ArrowIcon,{direction:props.collapsed?'down':'up'}));};VerticalNavItemLabel.propTypes={ariaCollapsedStateButtonLabel:(prop_types_default()).string,ariaExpandedStateButtonLabel:(prop_types_default()).string,collapsed:(prop_types_default()).bool,component:(prop_types_default()).any,hasSubnav:(prop_types_default()).bool,label:(prop_types_default()).node.isRequired,onClick:(prop_types_default()).func,selected:(prop_types_default()).bool,subnavId:(prop_types_default()).string.isRequired,url:(prop_types_default()).string};VerticalNavItemLabel.defaultProps={ariaCollapsedStateButtonLabel:'Expand sub-navigation',ariaExpandedStateButtonLabel:'Collapse sub-navigation'};/* harmony default export */ const VerticalNav_VerticalNavItemLabel = (VerticalNavItemLabel);
;// CONCATENATED MODULE: ../design-system/dist/esnext/VerticalNav/VerticalNavItem.js
function VerticalNavItem_extends(){VerticalNavItem_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return VerticalNavItem_extends.apply(this,arguments);}function VerticalNavItem_slicedToArray(arr,i){return VerticalNavItem_arrayWithHoles(arr)||VerticalNavItem_iterableToArrayLimit(arr,i)||VerticalNavItem_unsupportedIterableToArray(arr,i)||VerticalNavItem_nonIterableRest();}function VerticalNavItem_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function VerticalNavItem_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return VerticalNavItem_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return VerticalNavItem_arrayLikeToArray(o,minLen);}function VerticalNavItem_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function VerticalNavItem_iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function VerticalNavItem_arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var VerticalNavItem=function VerticalNavItem(props){var id=props.id||uniqueId_default()('VerticalNavItem_');var subnavId="".concat(id,"__subnav");var _useState=(0,index_js_.useState)(props.defaultCollapsed),_useState2=VerticalNavItem_slicedToArray(_useState,2),collapsed=_useState2[0],setCollapsed=_useState2[1];/**
   * Note: This event handler will only get called when the VerticalNavItemLabel
   * is a link or plain text
   */var handleClick=function handleClick(evt){if(props.onClick){props.onClick(evt,id,props.url);}};var handleToggleClick=function handleToggleClick(){setCollapsed(!collapsed);if(props.onSubnavToggle){props.onSubnavToggle(props.id,collapsed);}};var hasSubnav=function hasSubnav(){return Boolean(props.items&&props.items.length>0);};/**
   * Called when VerticalNavItemLabel is clicked. Since the "label" could be
   * a link, subnav toggle button, or plain text, we use this method to
   * determine what action to take and which event to actually fire.
   * @param {Object} SyntheticEvent
   */var handleLabelClick=function handleLabelClick(evt){if(hasSubnav()){return handleToggleClick();}return handleClick(evt);};/**
   * Checks if a descendant is selected
   * @param {Array} children - The nested items
   * @return {Boolean}
   */var childIsSelected=function childIsSelected(children){if(children&&children.length){return children.some(function(child){return child.id===props._selectedId||childIsSelected(child.items);});}return false;};/**
   * Check if this item is selected or if it is a parent of a selected item
   * @return {Boolean}
   */var isSelected=function isSelected(){if(props.selected)return props.selected;if(props._selectedId&&hasSubnav()){return childIsSelected(props.items);}return false;};var subnavItems=function subnavItems(){if(props.url){// Since the VerticalNavItemLabel will just toggle the subnav, we
// add a link to the top of the subnav for this item. Otherwise there
// wouldn't be a way to actually visit its URL
var item=VerticalNavItem_extends({},props);delete item.items;return[item].concat(props.items);}return props.items;};var classes=classnames_default()('ds-c-vertical-nav__item',props.className);return/*#__PURE__*/index_js_default().createElement("li",{className:classes},/*#__PURE__*/index_js_default().createElement(VerticalNav_VerticalNavItemLabel,{ariaCollapsedStateButtonLabel:props.ariaCollapsedStateButtonLabel,ariaExpandedStateButtonLabel:props.ariaExpandedStateButtonLabel,collapsed:collapsed,component:props.component,label:props.label,hasSubnav:hasSubnav(),onClick:handleLabelClick,selected:isSelected(),subnavId:subnavId,url:props.url}),hasSubnav()&&/*#__PURE__*/index_js_default().createElement(VerticalNav_VerticalNav,{selectedId:props._selectedId,collapsed:collapsed,id:subnavId,items:subnavItems(),component:props.component,nested:true}));};VerticalNavItem.propTypes={/**
     * @hide-prop This gets passed through from the parent VerticalNav to a nested VerticalNav
     */_selectedId:(prop_types_default()).string,/**
     * Aria label for the toggle button when the sub-navigation is collapsed
     */ariaCollapsedStateButtonLabel:(prop_types_default()).string,/**
     * Aria label for the toggle button when the sub-navigation is expanded
     */ariaExpandedStateButtonLabel:(prop_types_default()).string,/**
     * Additional classes to be added to the root element
     */className:(prop_types_default()).string,/**
     * When provided, this will render the passed in component. This is useful when
     * integrating with React Router's `<Link>` or using your own custom component.
     */component:(prop_types_default()).any,/**
     * Whether or not the item's sub-navigation is in a collapsed state by default
     */defaultCollapsed:(prop_types_default()).bool,/**
     * Called when the link is clicked, with the following arguments:
     * [`SyntheticEvent`](https://facebook.github.io/react/docs/events.html),
     * `id`, `url`.
     * This takes precedence over the `VerticalNav` `onLinkClick` prop
     */onClick:(prop_types_default()).func,/**
     * Called when this item's subnav is collapsed or expanded, with the
     * following arguments: `id`, `collapsed`
     */onSubnavToggle:(prop_types_default()).func,/**
     * Optional identifier. This can be handy if you're passing in an
     * `onClick` handler. A unique ID will be generated if one isn't provided.
     */id:(prop_types_default()).string,/**
     * An array of nested `VerticalNavItem` data objects to be rendered in a
     * sub-navigation list.
     */items:prop_types_default().arrayOf((prop_types_default()).any),/**
     * Text to render for this nav item
     */label:(prop_types_default()).node.isRequired,/**
     * A URL to navigate to if this item is a link
     */url:(prop_types_default()).string,/**
     * If this item is currently selected
     */selected:(prop_types_default()).bool};VerticalNavItem.defaultProps={// Unfortunately, we're defining these default ARIA props here and in
// VerticalNavItemLabel. We define them here so they show in the docs.
// TODO(sawyer): Update react-docgen so we don't have to do this
ariaCollapsedStateButtonLabel:'Expand sub-navigation',ariaExpandedStateButtonLabel:'Collapse sub-navigation',defaultCollapsed:false};/* harmony default export */ const VerticalNav_VerticalNavItem = (VerticalNavItem);
;// CONCATENATED MODULE: ../design-system/dist/esnext/VerticalNav/VerticalNav.js
function VerticalNav_extends(){VerticalNav_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return VerticalNav_extends.apply(this,arguments);}var VerticalNav=function VerticalNav(props){var classes=classnames_default()({'ds-c-vertical-nav':!props.nested,'ds-c-vertical-nav__subnav':props.nested,'ds-c-vertical-nav--collapsed':props.collapsed},props.className);var navProps=props.ariaNavLabel?{'aria-label':props.ariaNavLabel}:{};return/*#__PURE__*/index_js_default().createElement("nav",navProps,/*#__PURE__*/index_js_default().createElement("ul",{className:classes,id:props.id},props.items.map(function(item){var onClick=item.onClick||props.onLinkClick;if(!onClick){onClick=undefined;}var selected=item.selected||props.selectedId&&props.selectedId===item.id;return/*#__PURE__*/index_js_default().createElement(VerticalNav_VerticalNavItem,VerticalNav_extends({},item,{component:props.component||item.component,_selectedId:props.selectedId,key:item.id+item.url+item.label,onClick:onClick,selected:selected}));})));};VerticalNav.propTypes={/**
     * An optional arial label for the `<nav>` element in this component.
     * This prop is necessary when there is more than one nav element on a page.
     */ariaNavLabel:(prop_types_default()).string,/**
     * Additional classes to be added to the root element
     */className:(prop_types_default()).string,/**
     * Whether or not the menu is in a collapsed state
     */collapsed:(prop_types_default()).bool,/**
     * When provided, this will render the passed in component for all `VerticalNavItem`s. This is useful when
     * integrating with React Router's `<Link>` or using your own custom component.
     * If more specific control is needed, each `VerticalNavItem` object also accepts a `component` prop.
     */component:(prop_types_default()).any,/**
     * The `id` of the selected `VerticalNavItem`. This will also set the
     * `selected` prop on the item's parents.
     */selectedId:(prop_types_default()).string,id:(prop_types_default()).string,/**
     * An array of [`VerticalNavItem`]({{root}}/components/vertical-nav/#components.vertical-nav.VerticalNavItem) data objects
     */items:(prop_types_default()).array.isRequired,/**
     * Indicates this list is nested within another nav item.
     */nested:(prop_types_default()).bool,/**
     * Called when one of the nav links is clicked, with the following arguments:
     * [`SyntheticEvent`](https://facebook.github.io/react/docs/events.html),
     * `id`, `url`
     */onLinkClick:(prop_types_default()).func};VerticalNav.defaultProps={collapsed:false};/* harmony default export */ const VerticalNav_VerticalNav = (VerticalNav);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(2886);
;// CONCATENATED MODULE: ./src/components/DocSiteNav.tsx
/**
 * DocSiteNav
 * queries all MDX files and generates the proper format to create a vertical nav
 * @returns {React Element}
 * @todo figure out which item is currently selected and mark & expand appropriately
 * @todo Determine URL string for each item once content is integrated
 */const DocSiteNav=()=>{var _data$allFile;const data=(0,gatsby_browser_entry.useStaticQuery)("3313456964");/**
   * Updating a name to remove kebab case & get rid of numeric ordering
   */const formatNavItemLabel=name=>{let newName=name.replace(/-/g,' ');newName=newName.replace(/\d+_/g,'');return newName;};const formatNavItemData=({name,id})=>({label:formatNavItemLabel(name),url:'',id});const formatNavData=dataList=>{const retVal=[];dataList.forEach(dataItem=>{// for each level 1 item that has sub nav items
if(dataItem.fieldValue.length){// format all the level 2 items
const subNavItems=dataItem.edges.map(subNavItem=>formatNavItemData(subNavItem.node));// add level 1 item & sub items
retVal.push({label:formatNavItemLabel(dataItem.fieldValue),items:subNavItems,defaultCollapsed:true});}else{// for each level 1 item without sub nav items,
// add each top level item
dataItem.edges.forEach(navItemLvl1=>{retVal.push(formatNavItemData(navItemLvl1.node));});}});return retVal;};const navItems=formatNavData(data===null||data===void 0?void 0:(_data$allFile=data.allFile)===null||_data$allFile===void 0?void 0:_data$allFile.group);return/*#__PURE__*/index_js_default().createElement("div",{className:"ds-l-md-col--3 ds-u-padding--2 ds-u-fill--white c-sidebar"},/*#__PURE__*/index_js_default().createElement(VerticalNav_VerticalNav,{className:"c-nav",items:navItems}));};/* harmony default export */ const components_DocSiteNav = (DocSiteNav);
;// CONCATENATED MODULE: ../design-system/dist/esnext/SkipNav/SkipNav.js
var SkipNav=function SkipNav(_ref){var children=_ref.children,href=_ref.href,onClick=_ref.onClick;return/*#__PURE__*/index_js_default().createElement("a",{className:"ds-c-skip-nav",href:href,onClick:onClick},children);};SkipNav.propTypes={/**
     * Skip nav label
     */children:(prop_types_default()).node,/**
     * The anchor or target for the link (where the link will jump the user to)
     */href:(prop_types_default()).string.isRequired,/**
     * An onClick handler used for manually setting focus on the content.
     * Sometimes it's necessary to manually set focus, like when an app uses hash
     * routing and element-id links will be mistaken for routes.
     */onClick:(prop_types_default()).func};SkipNav.defaultProps={children:'Skip to main content'};/* harmony default export */ const SkipNav_SkipNav = (SkipNav);
;// CONCATENATED MODULE: ./src/pages/index.tsx
// Main landing page for site
const IndexPage=()=>{return/*#__PURE__*/index_js_.createElement("div",{className:"ds-base"},/*#__PURE__*/index_js_.createElement(SkipNav_SkipNav,{href:"#main"}),/*#__PURE__*/index_js_.createElement(components_DocSiteHeader,null),/*#__PURE__*/index_js_.createElement("div",{className:"ds-l-row ds-u-margin--0"},/*#__PURE__*/index_js_.createElement(components_DocSiteNav,null),/*#__PURE__*/index_js_.createElement("main",{id:"main",className:"ds-u-text-transform--uppercase"},"Placeholder for main content")),/*#__PURE__*/index_js_.createElement(components_DocSiteFooter,null));};/* harmony default export */ const pages = (IndexPage);

/***/ }),

/***/ 9612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(2118),
    hashDelete = __webpack_require__(6909),
    hashGet = __webpack_require__(8138),
    hashHas = __webpack_require__(4174),
    hashSet = __webpack_require__(7942);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 235:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(3945),
    listCacheDelete = __webpack_require__(1846),
    listCacheGet = __webpack_require__(8028),
    listCacheHas = __webpack_require__(2344),
    listCacheSet = __webpack_require__(4769);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 326:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(8761),
    root = __webpack_require__(7772);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 6738:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(2411),
    mapCacheDelete = __webpack_require__(6417),
    mapCacheGet = __webpack_require__(6928),
    mapCacheHas = __webpack_require__(9493),
    mapCacheSet = __webpack_require__(4150);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 857:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(7772);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 343:
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 2218:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(1225);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 3324:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(7297),
    toKey = __webpack_require__(3812);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ 3366:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(857),
    getRawTag = __webpack_require__(2107),
    objectToString = __webpack_require__(7157);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 6840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(1049),
    isMasked = __webpack_require__(7394),
    isObject = __webpack_require__(9259),
    toSource = __webpack_require__(7035);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 1054:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(857),
    arrayMap = __webpack_require__(343),
    isArray = __webpack_require__(6152),
    isSymbol = __webpack_require__(4795);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 7297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(6152),
    isKey = __webpack_require__(1401),
    stringToPath = __webpack_require__(4452),
    toString = __webpack_require__(6188);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ 4019:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(7772);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 1242:
/***/ ((module) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ 7937:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(8304);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 8761:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(6840),
    getValue = __webpack_require__(8109);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ 2107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(857);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 8109:
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 2118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(9191);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 6909:
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 8138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(9191);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ 4174:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(9191);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 7942:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(9191);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 1401:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(6152),
    isSymbol = __webpack_require__(4795);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ 8304:
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 7394:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(4019);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 3945:
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 1846:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(2218);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ 8028:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(2218);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 2344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(2218);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 4769:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(2218);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ 2411:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(9612),
    ListCache = __webpack_require__(235),
    Map = __webpack_require__(326);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 6417:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(7937);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 6928:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(7937);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 9493:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(7937);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 4150:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(7937);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 7777:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(733);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ 9191:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(8761);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 7157:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 7772:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(1242);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 4452:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(7777);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ 3812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(4795);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ 7035:
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 1225:
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 2579:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(3324);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ 6152:
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 1049:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(3366),
    isObject = __webpack_require__(9259);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 9259:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 5125:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 4795:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(3366),
    isObjectLike = __webpack_require__(5125);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 733:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(6738);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ 6188:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(1054);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 4930:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toString = __webpack_require__(6188);

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map