((module, apiServer) => {
    'use strict';
    module.exports = function (request, response) {
        console.log("Hello From Handler 1");
        apiServer.modules.common.test();
        apiServer.modules.common.test2();
        apiServer.getSchema("test", "employee", function (Employee) {
            Employee.find({}, (error, employees) => {
                response.status(200).json({employees: employees});
            });
        });
    };
})(module, apiServer);