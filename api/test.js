((module, apiServer) => {
    'use strict';
    module.exports = function (request, response) {
        logger.debug("Hello From Handler 2");
        apiServer.modules.test.test();
        apiServer.modules.test.test2();
        logger.info('Third Party Module Test', apiServer.modules.lodash.chunk([1, 2, 3, 4], 2));
        apiServer.getSchema("test", "employee", function (Employee) {
            Employee.find({}, (error, employees) => {
                response.status(200).json({employees: employees});
            });
        });
    };
})(module, apiServer);