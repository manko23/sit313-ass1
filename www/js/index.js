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
    {
        title: "Student Topic"
        , posts: 14
        , replies: []
    }
    , {
        title: "Other Topics"
        , posts: 5
    }
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
// Functions
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
        var page = $("<div></div>");
        page.append("<h1>Profiles:</h1>");
        var usernameLine = $("<p>Username: " + localStorage.getItem("logedUsername") + "</p>");
        page.append(usernameLine);
        var logoutbutton = $("<button>Logout</button>");
        page.append(logoutbutton);
        logoutbutton.on("click", function () {
            localStorage.removeItem("logedUsername");
            showloginPage();
            console.log("logging in");
        });
        $("#maincontent").html(page);
    }
}
//Login method
function loginWithUserNameAndPassword(username, password) {
    alert(localStorage.getItem(username));
    alert(password);
    if (localStorage.getItem(username) == password) {
        localStorage.setItem("logedUsername", username);
        showForumTopics();
        alert("login success");
    }
    else {
        alert("login failed,username password not match");
    }
}

function loginCheck() {
    if (localStorage.getItem("logedUsername") == "-1") {
        showloginPage();
    }
}
//**************************************************************************
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
    localStorage.setItem(username, password);
    alert("regist success");
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
    page.append("<label> Topic posts:</></br>")
    page.append("<input id='inputTopicPosts'/></br>");
    page.append(submitbutton);
    submitbutton.on("click", function () {
        addTopic();
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
    for (index in topicContent) {
        console.log(topicContent[index].title);
        var row = $("<tr id='content" + count + "><'/tr>");
        row.append("<td>" + topicContent[index].user + "</td>");
        row.append("<td>" + topicContent[index].content + "</td>")
        createTopicContentOnclick(row, topicContent[index]);
        count++;
        topicTable.append(row);
        $("#maincontent").html(page);
    }
    page.append(topicTable);
    page.append("<label>Reply Content:</></br>")
    page.append("<input id='inputReplyContent'/></br>");
    page.append(submitReplybutton);
    page.append(gobackButton);
    $("#maincontent").html(page);
    $("#gobackButton").on("click", showForumTopics);
}
//*******************************************************************************************
//*******************************************************************************************
function showSingleTopic(topicDetails) {
    showUserContent(topicDetails);
}

function addTopic() {
    var title = $("#inputTitle").val();
    var posts = $("#inputTopicPosts").val();
    topics.push({
        title: title
        , posts: posts
    });
    showForumTopics();
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
    showForumTopics();
    $("#row0").on("click", showUserContent);
    //now show the Forum Topics
});