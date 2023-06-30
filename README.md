# PasswordGeneratorAP
Challenge Module 3 - Random password generator using Javascript

## About this page and its application

The purpose of this application is to allow an employee that has access to sensitive data to generate a random password.

The following steps and acknowlegements were taken to achieve the criteria requested by the client for this application:

* The client requires a series of prompts that allows a user to select some criteria for the password they are generating.
* The criteria needs to include a password length range between 8 and 128 characters.
* The criteria needs to include the ability for the user to choose whether to accept numbers, lower case letters, upper case letters, and special characters.
* When a user clicks on the Generate Password button, they receive the prompts allowing them to choose through the criteria as described above.
* To achieve this I wrote a function in the script file that takes into consideration the various password output options based on the user's selected criteria and then generates the random password using the Math method. The password is then printed to the page's text box.
* The script file includes comments throughout that note the different components of the script.

## Credits

To accomplish this project I leaned on the activities and lessons learned in the 03-Javascript module, MDN documentation, and W3 Schools documentation. Also, I reviewed various code elements utilized for a similar project repository [I found here] (https://github.com/jamierachael/Password-Generator). While the scope is not exactly the same, I found reviewing their approach to be helpful when determining my own strategy. I did get stuck trying to exclude special characters if that criteria was excluded on the front end. A huge shout out to tutor Savian Love for helping me through that issue!

## Screenshot

![Screenshot] (./Assets/PasswordGeneratorScreenshot.jpeg)

## Deployed Link

[Here is a link to the deployed application] (https://adrummer1.github.io/PasswordGeneratorAP/)
