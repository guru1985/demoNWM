process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const base_url = "http://jsonplaceholder.typicode.com";
const request = require('supertest');
const expect = require('chai');
const should = require('chai');
const assert = require('chai');

var JSONResp;
var apibase = request(base_url);

describe("End To End test to check number of photos in an album", ()=>{
    it("Test associated number of photos and the photo id in an album for an user", function(){
        
        apibase.get('/users')
        .set("Accept","application/json")
        .then(async (responseUsers1)=>{
            respBodyUsers1 = responseUsers1.body
            respBodyusersLn1 = respBodyUsers1.length
            // console.log(respBodyusersLn)
            for(i=0;i<respBodyusersLn1;i++){
                user_id = respBodyUsers1[i]['id']
                user_name = respBodyUsers1[i]['username']
                user_email = respBodyUsers1[i]['email']
                // console.log(i + ' ' + user_id + ' ' +user_name)
            
            const responseAlbums = await (apibase)
                .get('/albums?userId=' + user_id)
                .set("Accept", "application/json");
            respBodyAlbum = responseAlbums.body;
            // console.log(respBodyPosts)
            respBodyAlbumLn = respBodyAlbum.length;
            for(j=0;j<respBodyAlbumLn;j++){
                albumid = respBodyAlbum[j]['id']
                // console.log(albumid)
                const responsePhotos = await(apibase)
                .get('/photos?id='+albumid)
                .set("Accept", "application/json");
                respBodyPhotos = responsePhotos.body;
                // console.log(respBodyPosts)
                respBodyPhotosLn = respBodyPhotos.length;
                console.log('User ID ' + user_id + ' whose user name is '
            + user_name + ' and email ' + user_email + ' has posted album id ' + albumid + ' album and '
            + 'has '+respBodyPhotosLn + ' photo(s) in the album');
            }
            }
            });
        });
      });
