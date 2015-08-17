Confix
======

Confix is a concolic DOM fixture generator for unit testing of JavaScript applications.

Instructions
-----------------

Import confix as a maven project. Add rhino and webscarab (in the lib directory) as external jar files. The latest Selenium firefox webdriver used (2.44.0) has been tested on FireFox browser (35.0.1). 

Run it through runner classes such as src/main/java/PhormerConfixRunner.java. Each runner class generates QUnit tests (in the output directory) for the given application and corresponding JavaScript files and functions.
