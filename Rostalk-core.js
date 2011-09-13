smalltalk.addClass('RosConnection', smalltalk.Object, ['connection'], 'Rostalk-core');
smalltalk.addMethod(
'_connection_',
smalltalk.method({
selector: 'connection:',
category: 'not yet classified',
fn: function (aConnection){
var self=this;
self['@connection']=aConnection;
return self;},
args: ["aConnection"],
source: unescape('connection%3A%20aConnection%0A%0Aconnection%20%3A%3D%20aConnection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RosConnection);

smalltalk.addMethod(
'_onOpenDo_',
smalltalk.method({
selector: 'onOpenDo:',
category: 'not yet classified',
fn: function (actionBlock){
var self=this;
self['@connection'].setOnOpen(actionBlock);
return self;},
args: ["actionBlock"],
source: unescape('onOpenDo%3A%20actionBlock%0A%0A%3Cself%5B%27@connection%27%5D.setOnOpen%28actionBlock%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RosConnection);

smalltalk.addMethod(
'_onCloseDo_',
smalltalk.method({
selector: 'onCloseDo:',
category: 'not yet classified',
fn: function (actionBlock){
var self=this;
self['@connection'].setOnClose(actionBlock);
return self;},
args: ["actionBlock"],
source: unescape('onCloseDo%3A%20actionBlock%0A%0A%3Cself%5B%27@connection%27%5D.setOnClose%28actionBlock%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RosConnection);

smalltalk.addMethod(
'_onErrorDo_',
smalltalk.method({
selector: 'onErrorDo:',
category: 'not yet classified',
fn: function (actionBlock){
var self=this;
self['@connection'].setOnError(actionBlock);
return self;},
args: ["actionBlock"],
source: unescape('onErrorDo%3A%20actionBlock%0A%0A%3Cself%5B%27@connection%27%5D.setOnError%28actionBlock%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RosConnection);

smalltalk.addMethod(
'_publish_onTopic_withType_',
smalltalk.method({
selector: 'publish:onTopic:withType:',
category: 'not yet classified',
fn: function (aValue, aTopic, aROSType){
var self=this;
(function($rec){smalltalk.send($rec, "_show_", ["Publication"]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
self['@connection'].publish(aTopic, aROSType, aValue);
return self;},
args: ["aValue", "aTopic", "aROSType"],
source: unescape('publish%3A%20aValue%20onTopic%3A%20aTopic%20withType%3A%20aROSType%0A%0ATranscript%20show%3A%27Publication%27%3B%20cr.%0A%3Cself%5B%27@connection%27%5D.publish%28aTopic%2C%20aROSType%2C%20aValue%29%3E'),
messageSends: ["show:", "cr"],
referencedClasses: []
}),
smalltalk.RosConnection);

smalltalk.addMethod(
'_topicsList',
smalltalk.method({
selector: 'topicsList',
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_callService_withArguments_callBack_", [unescape("/rosjs/topics"), unescape("%7B%7D"), (function(x){return smalltalk.send((smalltalk.Transcript || Transcript), "_show_", [x]);})]);
return self;},
args: [],
source: unescape('topicsList%0A%22print%20the%20current%20ROS%20topics%20list%20on%20the%20Transcript%22%0A%0Aself%20callService%3A%27/rosjs/topics%27%20withArguments%3A%20%27%7B%7D%27%20callBack%3A%5B%3Ax%20%7C%20Transcript%20show%3A%20x%5D'),
messageSends: ["callService:withArguments:callBack:", "show:"],
referencedClasses: []
}),
smalltalk.RosConnection);

smalltalk.addMethod(
'_callService_withArguments_callBack_',
smalltalk.method({
selector: 'callService:withArguments:callBack:',
category: 'not yet classified',
fn: function (aServiceName, arguments, anActionBlock){
var self=this;
self['@connection'].callService(aServiceName, arguments, anActionBlock);
return self;},
args: ["aServiceName", "arguments", "anActionBlock"],
source: unescape('callService%3A%20aServiceName%20withArguments%3A%20arguments%20callBack%3A%20anActionBlock%0A%0A%3Cself%5B%27@connection%27%5D.callService%28aServiceName%2C%20arguments%2C%20anActionBlock%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RosConnection);


smalltalk.addMethod(
'_example',
smalltalk.method({
selector: 'example',
category: 'not yet classified',
fn: function (){
var self=this;
var connection=nil;
connection=smalltalk.send((smalltalk.RosConnection || RosConnection), "_with_", [unescape("ws%3A//localhost%3A9090")]);
smalltalk.send(connection, "_onCloseDo_", [(function(){return smalltalk.send((smalltalk.Transcript || Transcript), "_show_", ["Connection closed"]);})]);
smalltalk.send(connection, "_onErrorDo_", [(function(){return smalltalk.send((smalltalk.Transcript || Transcript), "_show_", ["Error"]);})]);
smalltalk.send(connection, "_onOpenDo_", [(function(){(function($rec){smalltalk.send($rec, "_show_", ["Connected to ROS"]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));smalltalk.send(connection, "_publish_onTopic_withType_", [unescape("%7B%7D"), unescape("/cmd_vel"), unescape("geometry_msgs/Twist")]);return (function($rec){smalltalk.send($rec, "_show_", [smalltalk.send(connection, "_topicsList", [])]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));})]);
return self;},
args: [],
source: unescape('example%0A%7Cconnection%7C%0Aconnection%20%3A%3D%20RosConnection%20with%3A%27ws%3A//localhost%3A9090%27.%0Aconnection%20onCloseDo%3A%5BTranscript%20show%3A%27Connection%20closed%27%5D.%0Aconnection%20onErrorDo%3A%5BTranscript%20show%3A%27Error%27%5D.%0Aconnection%20onOpenDo%3A%5BTranscript%20show%3A%27Connected%20to%20ROS%27%3B%20cr.%0Aconnection%20publish%3A%27%7B%7D%27%20onTopic%3A%27/cmd_vel%27%20withType%3A%27geometry_msgs/Twist%27.%0ATranscript%20show%3A%20connection%20topicsList%3B%20cr.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D'),
messageSends: ["with:", "onCloseDo:", "show:", "onErrorDo:", "onOpenDo:", "cr", "publish:onTopic:withType:", "topicsList"],
referencedClasses: [smalltalk.RosConnection]
}),
smalltalk.RosConnection.klass);

smalltalk.addMethod(
'_with_',
smalltalk.method({
selector: 'with:',
category: 'not yet classified',
fn: function (aString){
var self=this;
var connection=nil;
connection = new ros.Connection(aString);
return smalltalk.send(smalltalk.send(self, "_new", [], smalltalk.Object.klass), "_connection_", [connection]);
return self;},
args: ["aString"],
source: unescape('with%3A%20aString%0A%7Cconnection%7C%0A%3Cconnection%20%3D%20new%20ros.Connection%28aString%29%3E.%0A%5E%20super%20new%20connection%3A%20connection'),
messageSends: ["connection:", "new"],
referencedClasses: []
}),
smalltalk.RosConnection.klass);


