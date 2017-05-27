

import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import 'core-js/'

//if (process.env.ENV === 'production') {
//    // Production
//} else {
//    // Development and test
//    Error['stackTraceLimit'] = Infinity;
//    require('zone.js/dist/long-stack-trace-zone');
//}

Error['stackTraceLimit'] = Infinity;
import 'zone.js/dist/long-stack-trace-zone';