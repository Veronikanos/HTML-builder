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

let data = '';

stream.on("data", (chunk) => {
	data += chunk.toString();
});

stream.on('end', () =>{
	console.log(data);
})
