Object subclass: #RosConnection
	instanceVariableNames: 'connection'
	category: 'Rostalk-core'!

!RosConnection methodsFor: 'not yet classified'!

connection: aConnection

connection := aConnection
!

onOpenDo: actionBlock

<self['@connection'].setOnOpen(actionBlock)>
!

onCloseDo: actionBlock

<self['@connection'].setOnClose(actionBlock)>
!

onErrorDo: actionBlock

<self['@connection'].setOnError(actionBlock)>
!

publish: aValue onTopic: aTopic withType: aROSType

Transcript show:'Publication'; cr.
<self['@connection'].publish(aTopic, aROSType, aValue)>
!

topicsList
"print the current ROS topics list on the Transcript"

self callService:'/rosjs/topics' withArguments: '{}' callBack:[:x | Transcript show: x]
!

callService: aServiceName withArguments: arguments callBack: anActionBlock

<self['@connection'].callService(aServiceName, arguments, anActionBlock)>
! !

!RosConnection class methodsFor: 'not yet classified'!

example
|connection|
connection := RosConnection with:'ws://localhost:9090'.
connection onCloseDo:[Transcript show:'Connection closed'].
connection onErrorDo:[Transcript show:'Error'].
connection onOpenDo:[Transcript show:'Connected to ROS'; cr.
connection publish:'{}' onTopic:'/cmd_vel' withType:'geometry_msgs/Twist'.
Transcript show: connection topicsList; cr.
                    ]
!

with: aString
|connection|
<connection = new ros.Connection(aString)>.
^ super new connection: connection
! !

