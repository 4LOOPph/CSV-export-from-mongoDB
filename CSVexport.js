var mongoose 	= require('mongoose'),
	User		= require('./lib/models/user'),
	config 		= require('./config'),
	fs			= require('fs')
	csvWriter 	= require('csv-write-stream'),
	mongoose.connect(config.database.uri);

	var query = User.find({}).select('name email');

	query.exec(function(err, result){
		if(err) return err;

		var writer = csvWriter({ headers: ["Name", "Email"]})
		writer.pipe(fs.createWriteStream('user.csv'))
		
		for (var i = 0 ; i < result.length; i++) {
			writer.write([result[i].name,result[i].email])
		};
		
		writer.end();
		console.log('user.csv successfully created.')
	});

	

	