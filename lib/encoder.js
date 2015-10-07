var encoder = {
  setMessage: function() {
    this.message = document.getElementById('message').value;
  },
  getPassword: function() {
    this.password = window.prompt('What pass phrase will protect this message?');
  },
  setUrl: function() {
    var baseUrl = 'http://localhost:4000/decode.html/';
    this.url = baseUrl + encoder.encrypt().toString();
  },
  replaceMessageWithUrl: function() {
    var message = document.getElementById('message');
    message.value = 'Your encrypted message is available to anyone with the pass phrase at:\n\n'
    message.value += this.url
  },
  encrypt: function() {
    var cypher = CryptoJS.AES.encrypt(this.message, this.password);
    // console.log('Verified: ' + CryptoJS.AES.decrypt(cypher, 'password').toString(CryptoJS.enc.Utf8));
    return cypher;
  },
  protect: function(e) {
    console.log(e.target + ' clicked!');
    encoder.setMessage();
    encoder.getPassword();
    encoder.setUrl();
    encoder.replaceMessageWithUrl();
  }
};

window.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('encrypt');

  button.addEventListener('click', function(e) {
    encoder.protect(e)
  }, false);
},
  false
);
