Rostalk
=======

Rostalk is a <a href="http://www.ros.org/">ROS</a> client implemented in <a href="http://www.amber-lang.net/">Amber Smalltalk</a> that used <a href="http://www.ros.org/wiki/rosbridge/Tutorials/Using%20Javascript%20to%20control%20ROS%20via%20rosjs">rosjs</a> (ROS javascript binding) and rosbridge. The main idea of Rostalk is to be able to develop and control robotic systems on the web with a high-level language like Smalltalk instead of using JavaScript.

Amber Smalltalk (previously known as jtalk) is an implementation of the <a href="http://en.wikipedia.org/wiki/Smalltalk">Smalltalk</a> language that runs on top of the <a href="http://en.wikipedia.org/wiki/Javascript">JavaScript</a> runtime. It is designed to make client-side development faster and easier. Amber is written in itself, including the parser and compiler. Amber compiles into efficient JavaScript, mapping one-to-one with the equivalent JavaScript. There is no interpretation at runtime.

Install rostalk
===============

### Get last version of amber:

    git clone https://github.com/NicolasPetton/amber.git

### Get last version of rostalk:

    git clone https://github.com/SergeStinckwich/rostalk.git

### Move Rostalk files in the jtalk repository:

    cd rostalk
    cp rostalk.html ../amber/
    cp Rostalk-core.js ../amber/js/
    cp Rostalk-core.deploy.js ../amber/js/
    cp Rostalk-code.st ../amber/st/
    cd ..

### Launch webserver provides by jtalk (you need Node.js):

    cd amber
    ./bin/server

### View http://localhost:4000/rostalk.html in your favorite webserver supporting Websocket.

Setup your ROS environment
==========================

### Install ROS diamonback

### Start up a roscore, if you haven't already.

    roscore&

### Launch rosbridge to connect ROS to rosjs

    rosrun rosbridge rosbridge.py

License
=======

Rostalk is released under the MIT license. All contributions made for inclusion are considered to be under MIT.

