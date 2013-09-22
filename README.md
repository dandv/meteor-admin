#meteor-admin

An easy-to-use interface for managing your Meteor app

**Alpha version**

Heavily depends on iron-router to function. Iron-router will be explicitly included in your project through api.imply.

#Usage
##Conventions
Call any of the below methods on the client using Meteor.call(), while an underscore is used to designate serverside methods

##Authorization checks
* Meteor.call('admin'): check the current user for the admin flag *CLIENTSIDE*
* _admin(): check the current user for the admin flag *SERVERSIDE*

##Configuration model
* Configurations are where you store app constants like server names or API keys.
* The document parameter should be an associative array containing name and value key/values. Name should be unique.
* addConfig(document): adds a configuration
* updateConfig(document): updates a configuration
* removeConfig(document): removes a configuration

#MIT License
