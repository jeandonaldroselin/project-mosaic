# project-mosaic


Based on Ionic 4 and Angular 7+,

Mosaic Project is a simple mosaic displaying projects that you want to show online.



Examples of use case :

> Increase the visibility of a team :

A new member just arrived in your team ? You would like to show him the projects

on which he will be working ?

You can simply give him the link to the project Mosaic, then he is able to 

discover your ecosystem applications.

> Portfolio :

You want a place online where can ( see / show ) your running applications  ?

Because sometimes the visitors see your github but without demo it 

is difficult to understand what your project does concretly. 

What do you expect ? ;)
--------------

It is often said that a picture is worth a thousand words when it comes to illustrating a point ...

![src/assets](src/assets/img/demo/1.png?raw=true)


How to use ?
--------------

It is so simple :

1 - Install and launch the project with the following commands :

```bash
$ npm i

$ ionic serve
```

2 - Update the mosaic by editing this file :

"src/assets/json/projects.json"

This is the typical structure of one project in the projects.json file :

```json
  {
    "title": "Gitlab",
    "image": "assets/img/previews/gitlab.png",
    "description": "This tool is used to version the team projects",
    "ports": [2222, 8080, 4433],
    "links": [
      {
        "url": "http://127.0.0.1:8080",
        "text": "Gitlab"
      }
    ]
  }
```
 
   
How to deploy ?
----------------

It is also simple :)


1 - Build the project for browser

```bash
$ ionic cordova platform add browser

$ ionic cordova build browser
```

2 - Deploy the files under the following folder

platforms/browser/www/
