const handler = require('express-async-handler')

exports.api_test_get = handler(async (req, res, next) => {
    res.send('hello world! {test passed!}')
})