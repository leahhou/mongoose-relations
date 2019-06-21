const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("./../../../app");

//beforeAll is a function before any test run
beforeAll(()=>{ //to get connec to database
    mongoose.connect("mongodb://localhost/books_r_us_test", { useNewUrlParser: true });
    mongoose.Promise = global.Promise;

    mongoose.connection.on("error", err => console.log(err));

})


//after all test are done
afterAll(()=> { //to disconnect to database 
    mongoose.connection.close();
})

describe("The user creates a new author", ()=>{
    test("POST /authors with a valid req body", async ()=> {
       const response = await supertest(app)
       .post("/authors")
       .send({
           name:" Leah",
           bio: "My Bio",
           gender: "female"
       })
       .expect(302);

    expect(response.body).toEqual({});
    expect(response.headers.location).toMatch(/^\/authors\/.*$/);
    });
});