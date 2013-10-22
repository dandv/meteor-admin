#Meteor Admin

An easy-to-use interface for managing your Meteor app.

***Alpha Version***

Heavily depends on standard-app-packages, accounts-base, accounts-password, iron-router. These packages will be explicitly included in your project through api.imply.

#Goals

* Semantic as hell markup for ease of custom styling
* Task-focused interface for managing user accounts
* Simple to implement user account roles

#Todo

* Auto-detect collections and complete an interface to manage them
* Decouple styling from Bootstrap
* Testing

#Usage

##Conventions

Call any of the below methods on the client using Meteor.call(), while an underscore is used to designate serverside methods

##Authorization checks

```
Meteor.user() ? Meteor.user().admin : false
```
* check the current user for the admin flag *CLIENTSIDE*
* _admin(userId): check the userId for the admin flag *SERVERSIDE*

##Configuration model

* Configurations are where you store app constants like server names or API keys.
* The document parameter should be an associative array containing name and value key/values. Name should be unique.
* addConfig(document): adds a configuration
* updateConfig(document): updates a configuration
* removeConfig(document): removes a configuration

#MIT Licensed
