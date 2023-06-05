
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const base_url = "http://jsonplaceholder.typicode.com";
const request = require('supertest');
const expect = require('chai');
const should = require('chai');
const assert = require('chai');

var JSONResp;
var apibase = request(base_url);


describe("API test Automation using Supertest", ()=>{
    // Test if all basic routes are responding with a 200 on a GET call
    it("Test if the posts API is giving a 200 response", function(){
      apibase.get('/posts')
      .set("Accept","application/json")
      .then((response)=>{
        expect(response.status).to.eq(200);
      });
    });

    it("Test if the comments API is giving a 200 response", function(){
        apibase.get('/posts/1/comments')
        .set("Accept","application/json")
        .then((response)=>{
            expect(response.status).to.eq(200);
        });
      });

    
      it("Test if the albums API is giving a 200 response", function(){
        
        apibase.get('/albums')
        .set("Accept","application/json")
        .then((response)=>{
          expect(response.status).to.eq(200);
        });
      });

      it("Test if the photos API is giving a 200 response", function(){
        
        apibase.get('/photos')
        .set("Accept","application/json")
        .then((response)=>{
          expect(response.status).to.eq(200);
        });
      });

      it("Test if the todos API is giving a 200 response", function(){
        
        apibase.get('/todos')
        .set("Accept","application/json")
        .then((response)=>{
          expect(response.status).to.eq(200);
        });
      });

      it("Test if the todos API is giving a 200 response", function(){
        
        apibase.get('/users')
        .set("Accept","application/json")
        .then((response)=>{
          expect(response.status).to.eq(200);
        });
      });

    //   Test if comments API is only giving values associated with a particular ID

      it("Test if the API returns the comments associated with an id", function(){
        
        apibase.get('/posts/16/comments')
        .set("Accept","application/json")
        .then((response)=>{
            respBody = response.body
            responseArrayLn = respBody.length
            for(i=0;i<responseArrayLn;i++){
                postid = respBody[i]['postId']
                expect(postid).to.eq(16)
            }
        });
      });

      it("Test if the API returns unique response when an id is passed in the api", function(){
        
        apibase.get('/posts/1')
        .set("Accept","application/json")
        .then((response)=>{
          JSONResp = JSON.parse(response.text)
          userID  = JSONResp['userId']
          expect(userID).to.eq(1)
          
        });
      });

      it("Test if the API returns the comments associated with an id by sending the id as a parameter", function(){
        
        apibase.get('/comments')
        .query({postId:16})
        .set("Accept","application/json")
        .then((response)=>{
            respBody = response.body
            responseArrayLn = respBody.length
            for(let i=0;i<responseArrayLn;i++){
                PostID = respBody[i]['postId']
                expect(PostID).to.eq(16)
                
            }
        });
      });

    //   get the list of user ids and figure out how many posts albums and todos are present for each user

    it("Test associated number of posts for an user", function(){
        
         return apibase.get('/users')
        .set("Accept", "application/json")
        .then((response)=>{
          respBodyUsers = response.body;
          respBodyUsersLn = respBodyUsers.length;
          // console.log(respBodyUsersLn)
          for (i = 0; i < respBodyUsersLn; i++) {
            // console.log(i);
            user_id = respBodyUsers[i]['id'];
            user_name = respBodyUsers[i]['username'];
            user_email = respBodyUsers[i]['email'];
            console.log(user_id + '  ' + user_name);
            apibase
              .get('/posts?userId=' + user_id)
              .set("Accept", "application/json")
              .then((responsePosts) => {
              respBodyPosts = responsePosts.body;
            // console.log(respBodyPosts)
              respBodyPostsLn = respBodyPosts.length;
              console.log('User ID ' + user_id + ' whose user name is '
              + user_name + ' and email ' + user_email + ' has posted ' + respBodyPostsLn + ' comments')
              })
            }
        })
      }); 
    });     
