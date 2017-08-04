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
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
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
    {title: "Student Topic", posts: 14, replies: []},
    {title: "Other Topics", posts: 5}
];

var userContent=[
	{user: "Student Topic", content: 14},
    {user: "Other Topics", content: 5}
];



//*****************************************************************
// Functions
//*****************************************************************





function showloginPage(){
     console.log("running showloginpage()");

//  create the page
      var page = $("<div></div>");
      page.append("<h1>Login page</h1>");

// Add the username field
      var username = $("<input type='text'></input>");
      var usernameLine = $("<p>Username: </p>");
      usernameLine.append(username);

      page.append(usernameLine);

      var password = $("<input type='text'></input>");
      var passwordLine = $("<p>Password: </p>");
      passwordLine.append(password);

      page.append(passwordLine);

// Add the loginbutton
       var loginbutton = $("<button>Login</button>");
       page.append(loginbutton);
       loginbutton.on("click",function() {
         console.log("logging in");
         showForumTopics();
       });


      $("#maincontent").html(page);
  }
function createTopicOnclick(node, topic){
    node.on("click",function(){
     showSingleTopic(topic);

   });
}




  //**************************************************************************

  // ******************************************************************************/
  function showRegistrationPage(){
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
      Registrationbutton.on("click",function() {
        console.log("logging in");
        showForumTopics();
              });


      $("#maincontent").html(page);

  }


  function showTopocTable(){
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
      Registrationbutton.on("click",function() {
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
      var row = $("<tr id='row"+count+"><'/tr>");
     row.append("<td>" + topics[index].title + "</td>");
     row.append("<td>" + topics[index].posts + "</td>");
     createTopicOnclick(row,topics[index]);
	count++;
     topicTable.append(row);

  }
  page.append(topicTable);
  page.append("<label>Topic Title:</></br>")
  page.append("<input id='inputTitle'/></br>");
  page.append("<label> Topic posts:</></br>")
  page.append("<input id='inputTopicPosts'/></br>");
  page.append(submitbutton);

  submitbutton.on("click",function() {

addTopic();
});

  $("#maincontent").html(page);
}


function showUserContent() {
  var page = $("<div></div>");
  page.append("<h1>ContentTopic</h1>");
  var topicTable = $("<table class='Topicstable'><tr><th>Title</th><th>posts</th></tr></table>");
  var count = 0;
  for (index in userContent) {
     console.log(userContent[index].title);
     var row = $("<tr id='"+count+"><'/tr>");
     row.append("<td>" + userContent[index].user + "</td>");
     row.append("<td>" + userContent[index].content + "</td>");
     createTopicOnclick(row,userContent[index]);
	count++;
     topicTable.append(row);
  $("#maincontent").html(page);
  }



  page.append(topicTable);

  page.append("<label>Topic Title:</></br>")
  page.append("<input id='inputTitle'/></br>");
  page.append("<label> Topic posts:</></br>")
  page.append("<input id='inputTopicPosts'/></br>");


  $("#maincontent").html(page);


}

//*******************************************************************************************

//*******************************************************************************************
function showSingleTopic(topicDetails) {
     alert(topicDetails.title);

}

function addTopic(){
	var title = $("#inputTitle").val();
	var posts = $("#inputTopicPosts").val();
	topics.push({title:title,posts:posts});
	showForumTopics();
}


//*****************************************************************
//  web appllcation load
//*****************************************************************
$( document ).ready(function() {
  $("#loginbutton").on("click", showloginPage);
  $("#registerbutton").on("click", showRegistrationPage);
  $("#MainPagebutton").on("click",showForumTopics);
   showForumTopics();
   $("#row0").on("click",showUserContent);


  //now show the Forum Topics


});
