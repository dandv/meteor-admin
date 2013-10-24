#Meteor Admin

An easy-to-use interface for managing your Meteor app.

***Alpha Version***

Heavily depends on standard-app-packages, accounts-base, accounts-password, iron-router. These packages will be explicitly included in your project through api.imply.

#Goals

* Semantic as hell markup for ease of custom styling
* Task-focused interface for managing user accounts
* Simple to implement user account roles
* Collection management through a simple api

#Todo

* Auto-detect collections and complete an interface to manage them
* Decouple styling from Bootstrap
* Testing

#Usage

##Conventions

Call any of the below methods on the client using Meteor.call(), while an underscore is used to designate serverside methods

##Authorization checks

###Clientside

```
Meteor.user() ? Meteor.user().admin : false
```

###Serverside

* _admin(userId): check the userId for the admin flag 

##Configuration model

* Configurations are where you store app constants like server names or API keys.

```
document = { name: 'imgurApiKey', value: 'asdf1234567890' }
```

* addConfig(document): adds a configuration
* updateConfig(document): updates a configuration
* removeConfig(document): removes a configuration

#MIT Licensed
