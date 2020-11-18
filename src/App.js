import React, { Component } from "react";
import "./App.css";
import { ZoomMtg } from "@zoomus/websdk";

ZoomMtg.setZoomJSLib("https://source.zoom.us/1.8.1/lib", "/av");
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();
const meetConfig = {
	apiKey: "giZyUr5LTfK80Hvgp5-lUQ",
	meetingNumber: "7791696515",
	leaveUrl: "https://yoursite.com/meetingEnd",
	userName: "nourmoee",
	userEmail: "nmg181963@hotmail.com",
	passWord: "i79Q2f", // if required
	role: "0", // 1 for host; 0 for attendee
};

/*
//var signatureEndpoint = "https://maqraa.herokuapp.com/";
var apiKey = "giZyUr5LTfK80Hvgp5-lUQ";
var meetingNumber = "7791696515";
//var role = 0;
var leaveUrl = "http://localhost:9000";
var userName = "noss";
var userEmail = "";
var passWord = "i79Q2f";
var signature =
	"Z2laeVVyNUxUZks4MEh2Z3A1LWxVUS43NzkxNjk2NTE1LjE2MDU2MDg0NzA4MjcuMC5sQ202N2M4N0NIUnd1WUJuUHg4S3FBN0tiVm83clNCaDNBZER1SDRuWDlzPQ==";
ZoomMtg.init({
	leaveUrl: leaveUrl,
	isSupportAV: true,
	success: (success) => {
		console.log(success);
		ZoomMtg.join({
			signature: signature,
			meetingNumber: meetingNumber,
			userName: userName,
			apiKey: apiKey,
			userEmail: userEmail,
			passWord: passWord,
			success: (success) => {
				console.log(success);
			},
			error: (error) => {
				console.log(error);
			},
		});
	},
	error: (error) => {
		console.log(error);
	},
});
*/

class App extends Component {
	componentDidMount() {
		/* 
		fetch("https://maqraa.herokuapp.com/", {
			method: "POST",
			body: JSON.stringify({
				meetingNumber: meetConfig.meetingNumber,
				role: meetConfig.role,
			}),
		})
			.then((result) => result.json())
			.then((response) => {
				console.log(response.signature);
				console.log(meetConfig.meetingNumber);
				ZoomMtg.init({
					leaveUrl: meetConfig.leaveUrl,
					isSupportAV: true,
					success: () => {
						ZoomMtg.join({
							meetingNumber: meetConfig.meetingNumber,
							userName: meetConfig.userName,
							userEmail: meetConfig.userEmail,
							signature: response.signature,
							apiKey: meetConfig.apiKey,
							passWord: String(meetConfig.password),
							success: (success) => {
								console.log(success);
							},
							error: (error) => {
								console.log("Segundo", error);
							},
						});
					},
				});
			});
*/

		ZoomMtg.init({
			leaveUrl: meetConfig.leaveUrl,
			isSupportAV: true,
			success: function () {
				ZoomMtg.join({
					signature:
						"Z2laeVVyNUxUZks4MEh2Z3A1LWxVUS43NzkxNjk2NTE1LjE2MDU2MDg0NzA4MjcuMC5sQ202N2M4N0NIUnd1WUJuUHg4S3FBN0tiVm83clNCaDNBZER1SDRuWDlzPQ==",
					apiKey: meetConfig.apiKey,
					meetingNumber: meetConfig.meetingNumber,
					userName: meetConfig.userName,
					// password optional; set by Host
					passWord: meetConfig.passWord,
					error(res) {
						console.log(res);
					},
				});
			},
		});
	}

	render() {
		return <div className="App">
			
		</div>;
	}
}
export default App;
