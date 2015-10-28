((module) => {
    'use strict';
    module.exports = function (request, response) {
        console.log("Hello From Handler 1");
        let common = require('./common');
        common.test();
        common.test2();
        getSchema("test", "employee", function (Employee) {
            Employee.find({}, (error, employees) => {
                response.status(200).json({employees: employees});
            });
        });
    };
})(module);