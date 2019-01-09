/**
 * Can I make a type alias nominal?
 */

/* intersection type */
type URL = string & { url: {} };
type URI = string & { uri: {} };

let url: URL = "http://www.baidu.com" as URL;
let uri: URI = "http://www.google.com" as URI;

/*
url = uri;
*/

export {};
