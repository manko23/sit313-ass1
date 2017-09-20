/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    }, // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    }, // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
};
app.initialize();
//*****************************************************************
// MANKO'S code here
//*****************************************************************
//*****************************************************************
// varlables
//*****************************************************************
var topics = [
 
];
var topicContent = [
    {
        user: "manko111"
        , content: 14
    }
    , {
        user: "manko222"
        , content: 5
    }
];
//*****************************************************************
// Functions To show login page and create login listener
//*****************************************************************
function showloginPage() {
    console.log("running showloginpage()");
    if (localStorage.getItem("logedUsername") == null || localStorage.getItem("logedUsername") == "") {
        //  create the page
        var page = $("<div></div>");
        page.append("<h1>Login page</h1>");
        // Add the username field
        var username = $("<input type='text' id='loginUsername'></input>");
        var usernameLine = $("<p>Username: </p>");
        usernameLine.append(username);
        page.append(usernameLine);
        var password = $("<input type='text' id='loginPassword'></input>");
        var passwordLine = $("<p>Password: </p>");
        passwordLine.append(password);
        page.append(passwordLine);
        // Add the loginbutton
        var loginbutton = $("<button>Login</button>");
        page.append(loginbutton);
        loginbutton.on("click", function () {
            inputUsername = $("#loginUsername").val();
            inputPassword = $("#loginPassword").val();
            loginWithUserNameAndPassword(inputUsername, inputPassword);
            console.log("logging in");
        });
        $("#maincontent").html(page);
    }
    else {
        showProfilePage();
    }
}
//Login method-User login in the app and keep the login status
function loginWithUserNameAndPassword(username, password) {
   
   
   cryptoStoredPassword = localStorage.getItem(username);
   if(   cryptoStoredPassword == null){
		  alert("login failed,user name not registed");
   }else{
	   if (   cryptoStoredPassword.toString() == CryptoJS.SHA256(password).toString()) {
        localStorage.setItem("logedUsername", username);
        showForumTopics();
        alert("login success");
    }
    else {
        alert("login failed,username password not match");
    }
   }
   
    
}

//This method is to protect some methods that are required to login
function loginCheck() {
    if (localStorage.getItem("logedUsername") == "-1" ||localStorage.getItem("logedUsername")==null) {
        showloginPage();
		alert("login required to do this operation");
		return false;
    }else{
		return true;
	}
	
}
//**************************************************************************
//Jump to Register Page
// ******************************************************************************/
function showRegistrationPage() {
    console.log("running showRegistrationPage()");
    var page = $("<div></div>");
    page.append("<h1>Registration page</h1>");
    var YourUsername = $("<input type='text' id='username'></input>");
    var usernameLine = $("<p> Enter Username: </p>");
    usernameLine.append(YourUsername);
    page.append(usernameLine);
    var password = $("<input type='password' id='password'></input>");
    var passwordLine = $("<p>Enter Password: </p>");
    passwordLine.append(password);
    page.append(passwordLine);
    var password = $("<input type='password' id='confirmPassword'></input>");
    var passwordLine = $("<p>Confirm Password: </p>");
    passwordLine.append(password);
    page.append(passwordLine);
    var Registrationbutton = $("<button>Register</button>");
    page.append(Registrationbutton);
    Registrationbutton.on("click", function () {
        console.log("logging in");
        var inputUsername = $("#username").val();
        var inputPassword = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();
        registorAction(inputUsername, inputPassword, confirmPassword);
    });
    $("#maincontent").html(page);
}
//Registor method
function registorAction(username, password, confirmPassword) {
    console.log("registorAction");
    if (username == null || username == "") {
        alert("regist failed,username can not be null");
        return;
    }
    if (localStorage.getItem(username) != null) {
        alert("regist failed,user name existed");
        return;
    }
    if (password == null || password != confirmPassword) {
        alert("regist failed,password not match confirmPassword");
        return;
    }
	cryptoPassword = CryptoJS.SHA256(password);

    localStorage.setItem(username,cryptoPassword);
    alert("regist success");
}

function showProfilePage(){
	var page = $("<div></div>");
        page.append("<h1>Profiles:</h1>");
		logedUsername = localStorage.getItem("logedUsername");
        var usernameLine = $("<p>CurrentUsername: " + logedUsername  + "</p>");
        page.append(usernameLine);
		
		var mailAddressLabel = $("<p>MailAddress: </p>");
					page.append(mailAddressLabel);
		
		if(localStorage.getItem(logedUsername +"_MailAddress") != null){		
					var mailAddressLine = $("<input type='text' value=" +localStorage.getItem(logedUsername +"_MailAddress")  +" id='mailAddress'> </input>");
					page.append(mailAddressLine );
					var mailAddressButton = $("<button>Save MailAddress</button>");
					mailAddressButton.on("click",function(){
						if(mailAddress != null && mailAddress !=""){
							localStorage.setItem(logedUsername +"_MailAddress",mailAddressLine.val());
							alert("save success");
						}else{
							alert("save false,mailAddress can not be empty")
						}
					});
					page.append(mailAddressButton);


		}else{
					var mailAddressLine = $("<input type='text'  id='mailAddress'> </input>");
					page.append(mailAddressLine );
					var mailAddressButton = $("<button>Save MailAddress</button>");
					mailAddressButton.on("click",function(){
						if(mailAddress != null && mailAddress !=""){
							localStorage.setItem(logedUsername +"_MailAddress",mailAddressLine.val());
							alert("save success");
						}else{
							alert("save false,mailAddress can not be empty")
						}
					});
					page.append(mailAddressButton);	
					
		}
		
		
		var footerLabel = $("<p>Footer: </p>");
					page.append(footerLabel );
		
		if(localStorage.getItem(logedUsername +"_Footer") != null){		
					var footerLine = $("<input type='text' value=" +localStorage.getItem(logedUsername +"_Footer")  +" id='footer'> </input>");
					page.append(footerLine);
					var footerButton = $("<button>Save Footer</button>");
					footerButton.on("click",function(){
						if(footerLine.val()!= null &&footerLine.val() !=""){
							localStorage.setItem(logedUsername +"_Footer",footerLine.val());
							alert("save success");
						}else{
							alert("save false,footer can not be empty")
						}
					});
					page.append(footerButton);


		}else{
					var footerLine = $("<input type='text'  id='footer'> </input>");
					page.append(footerLine);
					var footerButton = $("<button>Save Footer</button>");
					footerButton.on("click",function(){
						if(footerLine.val()!= null &&footerLine.val() !=""){
							localStorage.setItem(logedUsername +"_Footer",footerLine.val());
							alert("save success");
						}else{
							alert("save false,footer can not be empty")
						}
					});
					page.append(footerButton);
					
		}
		
		
		page.append("<Br/>")
        var logoutbutton = $("<button class='btn-class'>Logout</button>");
        page.append(logoutbutton);
        logoutbutton.on("click", function () {
            localStorage.removeItem("logedUsername");
            showloginPage();
            console.log("logging in");
        });
        $("#maincontent").html(page);
}

function createTopicOnclick(node, topic) {
    node.on("click", function () {
        showSingleTopic(topic);
    });
}

function createTopicContentOnclick(node, topic) {
    console.log("createTopicContentOnclick");
    node.on("click", function () {
        goToHomePage();
    });
}

function showTopocTable() {
    console.log("running showRegistrationPage()");
    var page = $("<div></div>");
    page.append("<h1>Registration page</h1>");
    var YourUsername = $("<input type='text'></input>");
    var usernameLine = $("<p> Enter Username: </p>");
    usernameLine.append(YourUsername);
    page.append(usernameLine);
    var password = $("<input type='text'></input>");
    var passwordLine = $("<p>Enter Password: </p>");
    passwordLine.append(password);
    page.append(passwordLine);
    var password = $("<input type='text'></input>");
    var passwordLine = $("<p>Confirm Password: </p>");
    passwordLine.append(password);
    page.append(passwordLine);
    var Registrationbutton = $("<button>Register</button>");
    page.append(Registrationbutton);
    Registrationbutton.on("click", function () {
        console.log("logging in");
        showForumTopics();
    });
    $("#maincontent").html(page);
}


function showForumTopics() {
    var page = $("<div></div>");
    page.append("<h1 class='topictitle'>Add Content Here:</h1>");
    var submitbutton = $("<button class='btn-class'>Submit</button>");
    var topicTable = $("<table class='steelBlueCols'><tr><th>Title</th><th>posts</th></tr></table>");
    var count = 0;
    topics = JSON.parse(localStorage.getItem("topics"));
    for (index in topics) {
        console.log(topics[index].title);
        var row = $("<tr id='row" + count + "><'/tr>");
        row.append("<td>" + topics[index].title + "</td>");
        row.append("<td>" + topics[index].posts + "</td>");
        createTopicOnclick(row, topics[index]);
        count++;
        topicTable.append(row);
    }
    page.append(topicTable);
    page.append("<label>Topic Title:</></br>")
    page.append("<input id='inputTitle'/></br>");
    page.append(submitbutton);
    submitbutton.on("click", function () {
		if(loginCheck()){
		 addTopic();
		}
		
    });
    $("#maincontent").html(page);
}

function showUserContent(topicDetails) {
    var page = $("<div></div>");
    page.append("<h1>ContentTopic:" + topicDetails.title + "</h1>");
    var submitReplybutton = $("<button id='submitReplybutton' class='btn-class'>Submit Replys</button>");
    var gobackButton = $("<button id='gobackButton' class='btn-class'>Go To Topic Page</button>");
    var topicTable = $("<table class='Topicstable'><tr><th>User</th><th>RepliesContent</th></tr></table>");
    var count = 0;
	var objectids = getListObejctIdFromIntrotoApp('topic'+topicDetails.id+'reply-');
    for (index in objectids) {
        console.log(loadDataByObejctId(objectids[index]));
		var dataObject = JSON.parse(loadDataByObejctId(objectids[index]));
		if(dataObject != null){
			var row = $("<tr id='content" + count + "><'/tr>");
        row.append("<td>" + dataObject.userName + "</td>");
        row.append("<td>" + dataObject.content + "</td>")
        count++;
        topicTable.append(row);
		}
        
        $("#maincontent").html(page);
    }
    page.append(topicTable);
    page.append("<label>Reply Content:</></br>")
    page.append("<input id='inputReplyContent'/></br>");
    page.append(submitReplybutton);
    page.append(gobackButton);
    $("#maincontent").html(page);
    $("#gobackButton").on("click", showForumTopics);
	$("#submitReplybutton").on("click",function(){
		if(loginCheck()){
		var topicContent = new Object();
		topicContent.userName = localStorage.getItem("logedUsername");
		topicContent.content = $("#inputReplyContent").val();
		var timestam= dateToString(new Date());
		console.log(timestam);
		saveDataToIntrotoApp('topic'+topicDetails.id+'reply-'+topicContent.userName+timestam,JSON.stringify(topicContent),topicDetails);
		}
		
	});
}
//*******************************************************************************************
//*******************************************************************************************
function showSingleTopic(topicDetails) {
    showUserContent(topicDetails);
}

function addTopic() {
    var title = $("#inputTitle").val();
    var posts = 0;
	var id;
	

    if (topics == null) {
		topics = [];
        id = 1;
    }else{
		lastId = topics[topics.length-1].id;
		id = lastId + 1;
	}
        topics.push({
            title: title
            , posts: posts
            , id: id
        });
    localStorage.setItem("topics", JSON.stringify(topics));
    showForumTopics();
}

function dateToString(now){  
    var year = now.getFullYear();  
    var month =(now.getMonth() + 1).toString();  
    var day = (now.getDate()).toString();  
    var hour = (now.getHours()).toString();  
    var minute = (now.getMinutes()).toString();  
    var second = (now.getSeconds()).toString();  
    if (month.length == 1) {  
        month = "0" + month;  
    }  
    if (day.length == 1) {  
        day = "0" + day;  
    }  
    if (hour.length == 1) {  
        hour = "0" + hour;  
    }  
    if (minute.length == 1) {  
        minute = "0" + minute;  
    }  
    if (second.length == 1) {  
        second = "0" + second;  
    }  
     var dateTime = year +  month +  day + hour +minute+second;  
     return dateTime;  
  }  


function  saveDataToIntrotoApp(objectid,data,topicDetails){
	var url = "http://introtoapps.com/datastore.php";
	var param = {objectid:objectid,data:data,appid:'214077752',action:'save'};
	jQuery.ajax({
                                        type: "GET",
                                        url: url,
                                        data:param,
                                        error: function () {
                                            alert("network false");
                                        },
                                        success: function (data) {
											if(data == 'ok'){
												topicDetails.posts +=1;
												localStorage.setItem("topics",JSON.stringify(topics));
												alert("reply success,page is refreshing");
												showUserContent(topicDetails);
											}else{
												alert("reply failed");
											}

                                        }
                                    });
}


function getListObejctIdFromIntrotoApp(prefix){
	var url = "http://introtoapps.com/datastore.php";
	var param = {prefix:prefix,appid:'214077752',action:'listall'};
	var result = [];
	jQuery.ajax({
                                        type: "GET",
                                        url: url,
                                        data:param,
										async: false,
                                        error: function () {
                                            alert("network false");
                                        },
                                        success: function (data) {
											result = data;
                                        }
                                    });
	return result;
}


function loadDataByObejctId(objectid){
	var url = "http://introtoapps.com/datastore.php";
	var param = {objectid:objectid,appid:'214077752',action:'load'};
	var result;
	 jQuery.ajax({
                                        type: "GET",
                                        url: url,
                                        data:param,
										async: false,
                                        error: function () {
                                            alert("network false");
                                        },
                                        success: function (data) {
											result = data;
                                        }
                                    });
	return result;
}





function clearTopics() {
    localStorage.setItem("topics", JSON.stringify([]));
}

function goToHomePage() {
    showForumTopics();
}
//*****************************************************************
//  web appllcation load
//*****************************************************************
$(document).ready(function () {
    $("#loginbutton").on("click", showloginPage);
    $("#registerbutton").on("click", showRegistrationPage);
    $("#MainPagebutton").on("click", showForumTopics);
	$("#UserCenterbutton").on("click",function(){
		if(!loginCheck()){
			alert("plese login first");
		}
		 showloginPage();
	});
    showForumTopics();
    //now show the Forum Topics
});