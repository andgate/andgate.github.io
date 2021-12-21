"use strict";
exports.__esModule = true;
var react_dom_1 = require("react-dom");
var App_1 = require("./App");
var csstips_1 = require("csstips");
(0, csstips_1.setupPage)('#root');
(0, csstips_1.normalize)();
var app = document.getElementById('root');
react_dom_1["default"].render(React.createElement(App_1.App, null), app);
