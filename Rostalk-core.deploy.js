smalltalk.addClass('RosConnection', smalltalk.Object, ['connection'], 'Rostalk-core');
smalltalk.addMethod(
'_connection_',
smalltalk.method({
selector: 'connection:',
fn: function (aConnection){
var self=this;
self['@connection']=aConnection;
return self;}
}),
smalltalk.RosConnection);

smalltalk.addMethod(
'_onOpenDo_',
smalltalk.method({
selector: 'onOpenDo:',
fn: function (actionBlock){
var self=this;
self['@connection'].setOnOpen(actionBlock);
return self;}
}),
smalltalk.RosConnection);

smalltalk.addMethod(
'_onCloseDo_',
smalltalk.method({
selector: 'onCloseDo:',
fn: function (actionBlock){
var self=this;
self['@connection'].setOnClose(actionBlock);
return self;}
}),
smalltalk.RosConnection);

smalltalk.addMethod(
'_onErrorDo_',
smalltalk.method({
selector: 'onErrorDo:',
fn: function (actionBlock){
var self=this;
self['@connection'].setOnError(actionBlock);
return self;}
}),
smalltalk.RosConnection);

smalltalk.addMethod(
'_publish_onTopic_withType_',
smalltalk.method({
selector: 'publish:onTopic:withType:',
fn: function (aValue, aTopic, aROSType){
var self=this;
(function($rec){smalltalk.send($rec, "_show_", ["Publication"]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
self['@connection'].publish(aTopic, aROSType, aValue);
return self;}
}),
smalltalk.RosConnection);

smalltalk.addMethod(
'_topicsList',
smalltalk.method({
selector: 'topicsList',
fn: function (){
var self=this;
smalltalk.send(self, "_callService_withArguments_callBack_", [unescape("/rosjs/topics"), unescape("%7B%7D"), (function(x){return smalltalk.send((smalltalk.Transcript || Transcript), "_show_", [x]);})]);
return self;}
}),
smalltalk.RosConnection);

smalltalk.addMethod(
'_callService_withArguments_callBack_',
smalltalk.method({
selector: 'callService:withArguments:callBack:',
fn: function (aServiceName, arguments, anActionBlock){
var self=this;
self['@connection'].callService(aServiceName, arguments, anActionBlock);
return self;}
}),
smalltalk.RosConnection);


smalltalk.addMethod(
'_example',
smalltalk.method({
selector: 'example',
fn: function (){
var self=this;
var connection=nil;
connection=smalltalk.send((smalltalk.RosConnection || RosConnection), "_with_", [unescape("ws%3A//localhost%3A9090")]);
smalltalk.send(connection, "_onCloseDo_", [(function(){return smalltalk.send((smalltalk.Transcript || Transcript), "_show_", ["Connection closed"]);})]);
smalltalk.send(connection, "_onErrorDo_", [(function(){return smalltalk.send((smalltalk.Transcript || Transcript), "_show_", ["Error"]);})]);
smalltalk.send(connection, "_onOpenDo_", [(function(){(function($rec){smalltalk.send($rec, "_show_", ["Connected to ROS"]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));smalltalk.send(connection, "_publish_onTopic_withType_", [unescape("%7B%7D"), unescape("/cmd_vel"), unescape("geometry_msgs/Twist")]);return (function($rec){smalltalk.send($rec, "_show_", [smalltalk.send(connection, "_topicsList", [])]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));})]);
return self;}
}),
smalltalk.RosConnection.klass);

smalltalk.addMethod(
'_with_',
smalltalk.method({
selector: 'with:',
fn: function (aString){
var self=this;
var connection=nil;
connection = new ros.Connection(aString);
return smalltalk.send(smalltalk.send(self, "_new", [], smalltalk.Object.klass), "_connection_", [connection]);
return self;}
}),
smalltalk.RosConnection.klass);


