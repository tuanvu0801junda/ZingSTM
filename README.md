## ZingSTM Project 

### Table of contents
* General Description
* Technologies 
* Set up Instruction

### General Description: A website stimulating ZingMp3, used to listening to music

### Technologies 
* ReactJS 
* Laravel (PHP)
* PHPMyadmin (MySQL) (Require Xampp installed)

### Set up Instruction  

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

##### 4. After installing the neccessary packages, create a APP_KEY with command 
```
 .../ZingSTM/laravelPHP $ php artisan key:generate
```

##### 5. Then rename the ".env.example" file into ".env" | or add a new file ".env" with the same content in ".env.example". Then, try "php artisan serve" 
```
 .../ZingSTM/laravelPHP $ (sudo) mv .env.example .env
 .../ZingSTM/laravelPHP $ php artisan serve
```



