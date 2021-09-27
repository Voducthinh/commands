const fs = require("fs");
module.exports.config = {
name: "Fuckyou",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Hôm nay trời đẹp thế nhờ!!",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "fuck.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/173653418_5379507805454568_8015765340847519296_n.mp4/video-1631524639.mp4?_nc_cat=108&ccb=1-5&_nc_sid=060d78&_nc_ohc=aQFw8zaqO1MAX97rYtn&_nc_oc=AQnwdXQVQTJlnKG18SWso_E-qUQa5gT1hgxzqjf_QWDwWso92YsIbJCtPWUce4x5AI8&vabr=164266&_nc_ht=video.xx&oh=123c9ee29b16ac2c0f6b754932d5be43&oe=614042EE&dl=1").pipe(fs.createWriteStream(dirMaterial + "fuck.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("fuckyou")==0 || (event.body.indexOf("fuckyou")==0)){
	  var msg = {
				body: "😏",
				attachment: fs.createReadStream(__dirname + `/noprefix/fuck.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
