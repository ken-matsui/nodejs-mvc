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

## Directory

```
.
|- app -- assets -- images -- background.jpg
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

###### [background.jpg](./app/assets/images/background.jpg)
This file is an image to use in HTML.

##### stylesheets
Here, all of the stylesheet files are included.

###### index.css
This file is a stylesheet to use in HTML.

#### controllers
Here, all of the javascript files are included.

##### index.js
This file is a javascript file that calls HTML.

#### views
Here, all of the Jade files are included.

##### index.jade
This file is converted to HTML Jade file.

#### index.js
This file supervises the controllers.

### .gitignore
A file specifying a file to be ignored in git.

### README.md
This file.

### 