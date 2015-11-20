((module, apiServer) => {
    module.exports = function (request, response) {
        console.log("Hello From Handler 4");
        apiServer.getSchema("test", "employee", function (Employee) {
            Employee.find({}, (error, employees) => {
                response.status(200).json({employees: employees, message: 'Hello From test5'});
            });
        });
    };
})(module, apiServer);