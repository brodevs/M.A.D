
const callbackExpress = require('../../../Utils/callbackExpress')

module.exports = (Organism) => (req, res) => {

	const objUser = { _id: req.params.id };
	const mod = req.body;
	const options = { runValidators: true };

	Organism.updateUser(objUser, mod, options, (err, data) => {
		callbackExpress(err, data, res);
	})

}