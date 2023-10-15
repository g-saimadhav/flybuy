var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
    };
    var mongoose = require('mongoose');
    var Loc = mongoose.model('laptop');
    module.exports.locationsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.locationsListByDistance = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.locationsReadOne = async function (req, res) {
        try {
        const location = await
        Loc.findById(req.params.locationid).exec();
        sendJsonResponse(res, 200, location);
        console.log(location)
        } catch (err) {
        // Handle the error
        sendJsonResponse(res, 500, { error: 'An error occurred' });
        }
        };
    module.exports.locationsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.locationsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };

    module.exports.locationsCreate = function (req, res) {
        console.log(req.body);
        const { name, model,ram,color,processor,size,weight,price} = req.body;
        const newLocation = {
            name,
            model,
            specifications: [
                { ram:ram,color:color,processor:processor,size:size,weight:weight}
            ],
            price
        };
        Loc.create(newLocation)
            .then((location) => {
                console.log('Location created:', location);
                return res.status(201).json(location);
            })
            .catch((err) => {
                console.error(err);
                return res.status(400).json({ error: 'Could not create location' });
            });
    };