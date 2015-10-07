var decoder = {
  getPassword: function() {
    this.password = window.prompt("What's the magic phrase?");
  },
  decryptMessage: function() {
    var cypher = location.search.substring(1);
    this.message = CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8);
  },
  showMessage: function() {
    if (this.message)
      alert(this.message);
    else
      alert("That's not the magic phrase!");
  },
  reveal: function(e) {
    decoder.getPassword();
    decoder.decryptMessage();
    decoder.showMessage();
  }
}

window.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('decrypt');

  button.addEventListener('click', function(e) {
    decoder.reveal(e);
  }, false);
},
  false
);
