var request = require("request");
var base_url = "http://localhost:3000/user"

describe("Board", function() {
  describe("GET /", function() {
    it("returns status code 200", function() {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200); 
        // also expect a list of all public boards;
      });
    });
  });
  // below should be implemented with fabricated board lists;
  describe("GET /:board", function() {
    it("returns status code 200", function() {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200); 
        // expect a single board;
      });
    });
  });
  describe("POST /:board", function() {
    it("returns status code 200", function() {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200); 
        // expect a modified board;
      });
    });
  });
  describe("DELETE /:board", function() {
    it("returns status code 200", function() {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200); 
        // expect board to be deleted;
      });
    });
  });
  describe("GET /:board/edit", function() {
    it("returns status code 200", function() {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200); 
        // expect an edit form for editing a board; 
      });
    });
  });
});
