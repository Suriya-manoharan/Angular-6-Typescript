module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('customer', {
	  submit: {
			type: Sequelize.STRING
	  }
	});
	
	return Customer;
}

