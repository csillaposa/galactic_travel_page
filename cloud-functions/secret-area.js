//it is a CLOUD FUNCTION, because it is executed somewhere in the cloud

exports.handler = function(event, context, callback) {
    //here we can perform server side actions
    const secretContent = `
    <h3>Welcome to the secret area</h3>
    `
    //we have body in POSTMAN
    let body;
    if (event.body) {
        body = JSON.parse(event.body)
    } else {
        body = {}
    }

    if (body.password == "javascript") {
        callback(null, {
            statusCode: 200,
            body: secretContent
        })
    } else {
        callback(null, {
            statusCode: 401
        })
    }
}