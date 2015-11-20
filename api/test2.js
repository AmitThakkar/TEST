((module, apiServer) => {
    module.exports = function (request, response) {
        console.log("Hello From Handler 34");
        apiServer.getSchema("test", "employee", function (Employee) {
            Employee.find({}, (error, employees) => {
                response.status(200).json({employees: employees, msg: 'Hello From Route test2'});
            });
        });
    };
})(module, apiServer);