"use strict";
exports.__esModule = true;
exports.App = void 0;
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = require("./components/Layout");
var Projects_1 = require("./components/Projects");
var Home_1 = require("./components/Home");
var NotFound_1 = require("./components/NotFound");
function App() {
    return React.createElement(react_router_dom_1.HashRouter, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(Layout_1.Layout, null) },
                React.createElement(react_router_dom_1.Route, { index: true, element: React.createElement(Home_1.Home, null) }),
                React.createElement(react_router_dom_1.Route, { path: 'projects', element: React.createElement(Projects_1.Projects, null) }),
                React.createElement(react_router_dom_1.Route, { path: '*', element: React.createElement(NotFound_1.NotFound, null) }))));
}
exports.App = App;
