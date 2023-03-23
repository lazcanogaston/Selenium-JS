const assert = require('assert');
const request = require('request');

const api_key = 'AIzaSyCdOumQL1PJLCPVEL6kVUvyjkSmC6fzmEQ'
const url = 'https://www.googleapis.com/youtube/v3/search/'
        




describe('API Endpoint', function() {
  it('should return success with valid parameters', function(done) {
    const params = {
        "part": "snippet",
        "q": "mi amigo invencible",  // search query
        "type": "video",
        "key": api_key 
    }

    request.get({ url: url, qs: params }, function(error, response, body) {
      assert.equal(response.statusCode, 200);

      const data = JSON.parse(body);
      
      console.log(data)

      done();
    });
  });
});