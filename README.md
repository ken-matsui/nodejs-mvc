# node-template

This template built MVC with Node.js.

## Installation

```
$ git clone https://github.com/matken11235/node-template.git
$ npm i
```

## Usage

Run within the app direcotry.

```
$ node index.js
```

GET and POST requestable.

## Directory

```
.
|- app -- assets -- images -- background.png
|      |         |_ stylesheets -- index.css
|      |
|      |- controllers -- index.js
|      |- views -- index.jade
|      |_ index.js
|
|- .gitignore
|- README.md
|- package-lock.json
|_ package.json
```

### [app](./app/)
Here, all of the application files are included.

#### [assets](./app/assets/)
Here, all of the static files are included.

##### [images](./app/assets/images/)
Here, all of the image files are included.

###### [background.png](./app/assets/images/background.png)
This file is an image to use in HTML.

##### [stylesheets](./app/assets/stylesheets/)
Here, all of the stylesheet files are included.

###### [index.css](./app/assets/stylesheets/index.css)
This file is a stylesheet to use in HTML.

#### [controllers](./app/controllers/)
Here, all of the javascript files are included.

##### [index.js](./app/controllers/index.js)
This file is a javascript file that calls HTML.

#### [views](./app/views/)
Here, all of the Jade files are included.

##### [index.jade](./app/views/index.jade)
This file is converted to HTML Jade file.

#### [index.js](./app/index.js)
This file supervises the controllers.

### [.gitignore](./.gitignore)
A file specifying a file to be ignored in git.

### [README.md](./README.md)
This file.

### [package-lock.json](./package-lock.json)
Automatically generated file.

### [package.json](./package.json)
Package management file.