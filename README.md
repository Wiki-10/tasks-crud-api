# tasks-crud-api
##This is a CRUD Api for tasks developed with MongoDB, Node.js and Express

### ¿How to use?
#### First you need to change the database link in server.js

![image](https://user-images.githubusercontent.com/77585783/165754651-a354a5f9-849b-4fb8-9b0d-61c2cdea764e.png)

then you type in the console `npm start` to start the server

#### Functionalities (Recommendation: use Postman to test the API)

1. The first thing you need to do is to post a new User so that you can use the app using your username
![image](https://user-images.githubusercontent.com/77585783/165756527-bb6de671-734e-48d3-93a3-2a9b48d05e83.png)

2. You can check all posted tasks with this route
![image](https://user-images.githubusercontent.com/77585783/165756857-ff4db621-4183-4f66-bcaa-5d30e78fb791.png)

3. You can check a specific task with this route (Using the task id)
![image](https://user-images.githubusercontent.com/77585783/165757314-82dfb200-dc79-4d59-b30a-ff28d97a083f.png)

4. You can post a task using this route (You need to add the respective JSON in the body; Check the task model in the code to see which fields are required and which ones are not)
![image](https://user-images.githubusercontent.com/77585783/165758144-ad6a10dc-a5a1-4540-a529-53fda47b3981.png)

5. You can delete a task using this route (You need to add the task id) 
![image](https://user-images.githubusercontent.com/77585783/165758424-7f998be7-96c6-49cd-90ba-3ceade4fe92c.png) 
You can repeat the second functionality to get all the tasks and check if it was sucesfully deleted

6. You can update a task using this route (You need to add the task id in the request parameters and add in the body the respective changes)
![image](https://user-images.githubusercontent.com/77585783/165758815-de996c11-b467-444e-9cce-bc8e8e761d27.png)
You can repeat the second functionality to get all the tasks and check if it was sucesfully updated

If you have any questions you can contact me on Alexhdzcontacto@gmail.com





