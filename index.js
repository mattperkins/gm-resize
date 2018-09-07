const gm = require('gm').subClass({imageMagick: true})
const fs = require('fs')

gm('cub.jpg')
	.resize('25%')
	.toBuffer((err, buffer) => {
	if(err) {
		console.log(err)
	} else {
		fs.writeFile('./cub-sm.jpg', buffer, () => {
			console.log('Resize complete')
		})
	}
})
