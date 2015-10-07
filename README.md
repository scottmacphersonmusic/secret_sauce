# secret_sauce
By [Scott Macpherson](https://github.com/scottmacphersonmusic)

### Description
secret_sauce is small Node.js app for securely passing messages client-side.

### Usage
Start by navigating to the project's root directory and serving the script at `localhost:4000`.

Open a browser and visit `localhost:4000`.

Enter a message of your choosing in the text field and then click the "Lock Down" button.

You will be prompted to enter a password/phrase. Once submitted, the message will be encrypted and the text field will display instructions for decoding the message.

Enter the given URL in your browser's address bar, and once the page
has loaded click the "Decrypt" button.  You will be prompted to enter the password/phrase.  If you enter the right password the secret message will be revealed to you in an alert pop-up, otherwise you will see an alert pop-up telling you the password was wrong.

### Contributing
1. Fork It
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

### Credit
[Amy Kang](https://github.com/amykangweb) helped me figure out how to parse the cypher out of the URL

This README was edited at [dillinger.io](dillinger.io)
