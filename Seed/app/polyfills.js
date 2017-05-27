"use strict";
require("core-js/es6");
require("core-js/es7/reflect");
require("zone.js/dist/zone");
require("core-js/");
//if (process.env.ENV === 'production') {
//    // Production
//} else {
//    // Development and test
//    Error['stackTraceLimit'] = Infinity;
//    require('zone.js/dist/long-stack-trace-zone');
//}
Error['stackTraceLimit'] = Infinity;
require("zone.js/dist/long-stack-trace-zone");
//# sourceMappingURL=polyfills.js.map