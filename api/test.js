((module, apiServer) => {
    'use strict';
    module.exports = function (request, response) {
        logger.debug("Hello From Handler 2");
        apiServer.modules.test.test();
        apiServer.modules.test.test2();
        apiServer.getSchema("test", "employee", function (Employee) {
            Employee.find({}, (error, employees) => {
                response.status(200).json({employees: employees});
            });
        });
    };
})(module, apiServer);