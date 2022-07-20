## ZingSTM Project 

### Table of contents
* General Description
* Technologies 
* Set up Instruction

### General Description: 
* A website simulating ZingMp3, used to listening to music
* Made by Tuan Vu The stupid, Lord Design (Krazezt), Thuan-Thien Nguyen & fullstacker Hieu Tran

### Technologies 
* ReactJS 
* Laravel (PHP)
* PHPMyadmin (MySQL) | Docker-image (mysql:5.7.22) 
* ChakraUI (ReactJS Framework)
* Firebase (used for uploading images and .mp3 files)
* Docker (in-completed)

### I. Set up Instruction using Xampp 
* Make sure you have the following tool(s) installed: 
  * **npm/npx** and **node**
  * **php version 8.0** and **composer** 
  * **Xampp**
  
##### 1. After cloning this project from github, you should install the widget modules for "reactjs" folder 
```
 ... Download $ cd ZingSTM/reactjs
 .../ZingSTM/reactjs $ npm i
```

##### 2. The "npm i" command will read .json package and automatically install. After installing, try "npm start"
```
 .../ZingSTM/reactjs $ npm start 
```

##### 3. Installing the neccessary packages for "laravelPHP" folder
```
 .../ZingSTM/reactjs $ cd ../laravelPHP
 .../ZingSTM/laravelPHP $ composer install
```

##### 4. After installing the neccessary packages, rename the ".env.example" file into ".env" | or add a new file ".env" with the same content in ".env.example"
```
 .../ZingSTM/laravelPHP $ (sudo) cp env.example .env
```
* Then, change DB_DATABASE corresponding to your database name in Xampp

##### 5. Migrate DB 
```
 .../ZingSTM/laravelPHP $ php artisan migrate
```

##### 6. Then create a APP_KEY. Finally, try "php artisan serve" 
```
 .../ZingSTM/laravelPHP $ php artisan key:generate
 .../ZingSTM/laravelPHP $ php artisan serve
```

### II. Set up Instruction using Docker (incompleted)
* Make sure you have **Docker** installed: 
##### 1. After cloning this project from github, change your directory to ZingSTM
```
 ... Download $ cd ZingSTM
 .../ZingSTM $ docker-compose up
```
* Change localhost/127.0.0.1 into your own IP address if you cannot set up
* **Docker** will pull image from **Dockerhub** and set up everything automatically
* (Sun: December 26th 2021): **Backend(port: 8000) & Frontend(port: 3000)** connected and communicating successfully. Problem in db ...

### III. Some images about this project
<p align="center">
  <p align="center">
  Home Page 1  
  </p>

  <img src="https://github.com/tuanvu0801junda/ZingSTM/blob/master/image/main1.png" width="100%" />
  <br />
  <p align="center">
  Home Page 2  
  </p>

  <img src="https://github.com/tuanvu0801junda/ZingSTM/blob/master/image/main2.png" width="100%" />
  <br />
  <p align="center">
  Comments  
  </p>

  <img src="https://github.com/tuanvu0801junda/ZingSTM/blob/master/image/comment.png" width="100%" />
  <br />
  <p align="center">
  Playlist  
  </p>

  <img src="https://github.com/tuanvu0801junda/ZingSTM/blob/master/image/playlist.png" width="100%" />
  <br />
  <p align="center">
  Management  
  </p>

  <img src="https://github.com/tuanvu0801junda/ZingSTM/blob/master/image/management.png" width="100%" />
  <br />
  <p align="center">
  Responsive  
  </p>

  <img src="https://github.com/tuanvu0801junda/ZingSTM/blob/master/image/responsive.png" width="650" />
</p>