var request = require("request");

var base_url = "http://localhost:3000/user"

describe("User", function() {
  describe("GET /", function() {
    it("returns status code 200", function() {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200); 
      });
    });
  });
  // below should be implemented with fabricated user accounts;
  describe("GET /:user", function() {
    it("returns status code 200", function() {
      request.get(base_url+'/:user', function(error, response, body) {
        expect(response.statusCode).toBe(200); 
      });
    });
  });
  describe("POST /:user", function() {
    it("returns status code 200", function() {
      request.get(base_url+'/:user', function(error, response, body) {
        expect(response.statusCode).toBe(200); 
        // also expect changes to be implemented; i.e. email address;
      });
    });
  });
  describe("DELETE /:user", function() {
    it("returns status code 200", function() {
      request.get(base_url + '/:user', function(error, response, body) {
        expect(response.statusCode).toBe(200); 
        // also expect user to be deleted;
      });
    });
  });
  describe("GET /:user/edit", function() {
    it("returns status code 200", function() {
      request.get(base_url + '/:user/edit', function(error, response, body) {
        expect(response.statusCode).toBe(200); 
        // expect an edit form;
      });
    });
  });
  describe("GET /:user/likes", function() {
    it("returns status code 200", function() {
      request.get(base_url + '/:user/likes', function(error, response, body) {
        expect(response.statusCode).toBe(200); 
        // expect a list of user likes;
      });
    });
  });
  describe("POST /:user/likes", function() {
    it("returns status code 200", function() {
      request.get(base_url + '/:user/likes', function(error, response, body) {
        expect(response.statusCode).toBe(200); 
        // expect an addition to user likes;
      });
    });
  });
  describe("GET /:user/boards", function() {
    it("returns status code 200", function() {
      request.get(base_url + '/:user/likes', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        // expect a list of boards;
      });
    });
  });
});
