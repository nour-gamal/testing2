import React, { Component } from "react";
import "./App.css";
import { ZoomMtg } from "@zoomus/websdk";

ZoomMtg.setZoomJSLib("https://source.zoom.us/1.8.1/lib", "/av");
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFullTime: false,
		};
	}

	componentDidMount() {
		const meetConfig = {
			apiKey: "giZyUr5LTfK80Hvgp5-lUQ",
			apiSecret: "DPoS8reAtICHuZOYIvfWGLGvObCDW8nhERW2",
			meetingNumber: "7791696515",
			leaveUrl: "https://maqraa.netlify.app/",
			userName: "nourmoee",
			userEmail: "nmg181963@hotmail.com",
			passWord: "i79Q2f", // if required
			role: "0", // 1 for host; 0 for attendee
		};
		console.log("checkSystemRequirements");
		console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));
		ZoomMtg.generateSignature({
			meetingNumber: meetConfig.meetingNumber,
			apiKey: meetConfig.apiKey,
			apiSecret: meetConfig.apiSecret,
			role: meetConfig.role,
			success(res) {
				console.log("signature", res.result);
				ZoomMtg.init({
					leaveUrl: meetConfig.leaveUrl,
					success() {
						ZoomMtg.join({
							meetingNumber: meetConfig.meetingNumber,
							userName: meetConfig.userName,
							signature: res.result,
							apiKey: meetConfig.apiKey,
							passWord: meetConfig.passWord,
							success() {
								console.log("join meeting success");
							},
							error(respo) {
								console.log(respo);
							},
						});
					},
					error(response) {
						console.log(response);
					},
				});
			},
		});
	}
	render() {
		return <div className="App"></div>;
	}
}
export default App;
