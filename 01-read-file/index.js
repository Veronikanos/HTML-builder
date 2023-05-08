const fs = require('fs');
const path = require('path');

const doc = path.join(__dirname, "text.txt")

const stream = new fs.ReadStream(doc)

stream.on('error', function(err){
	if(err.code == 'ENOENT'){
			console.log("File doesn't exist");
	}else{
			console.error(err);
	}
});

stream.on("data", (chunk) => {
	console.log(chunk.toString());
});