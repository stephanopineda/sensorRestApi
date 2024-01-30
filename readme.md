instructions:

install mongodb but don't install compass on setup
https://www.mongodb.com/try/download/community


tutorial link:
https://www.youtube.com/watch?v=fgTGADljAeg&pp=ygUNcmVzdGFwaSBxdWljaw%3D%3D

install rest client extension in VS Code to use route.rest
you can also use cURL or postman to test the API

create .env file for the database connection:
DATABASE_URL = mongodb://0.0.0.0/<Your-Database-Name>
Save it to the root api folder

open api folder to vs code and run to terminal these commands:
-npm init 					        //then enter all to save default values)

-npm i express mongoose 			//install dependencies

-npm i --save-dev dotenv nodemon 	//save dev = pull to env file, nodemon = update whenever there are changes

-npm run PHCDatabaseAPI 			//devStart = package.json variable = nodemon server.js


install studio 3t to check if database is connected
https://studio3t.com/download/

to use studio3t:
-select connect button on top left
-configure new connection
-manually configure
-server: localhost, port 27017
connection name, sinet ko sa PaltocHCDatabase