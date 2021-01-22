const express = require('express');
  const app = express();
  const router = express.Router();
  function generateJWT(email, key) {
    var crypto = require('crypto');
    var hmac = crypto.createHmac('sha256', key); 

    var payload = {
        "email": email
    };
    var header = {
        "alg": "HS256",
        "typ": "JWT"
    };
    function cleanBase64(string) {
        return string.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
    }

    function base64encode(object) {
        return cleanBase64(Buffer.from(JSON.stringify(object)).toString("base64"));
    }

    var data = base64encode(header) + "." + base64encode(payload);
    hmac.update(data);
    return data + "." + cleanBase64(hmac.digest('base64'));
}

 router.route('/billing/getToken').post((req, res) => {
    var SECRET_KEY = "4f3cfbc1688e03d3518fb04462ef3d23f176382541d9b3a519b381454f690867"; //keep this key safe!
    var userToken = generateJWT(req.body.email , SECRET_KEY);
    if(userToken == undefined || userToken == '' || userToken == null){
      res.send("No Token");
    }else{
        res.send(JSON.stringify(userToken));
    }
});
 

module.exports = router