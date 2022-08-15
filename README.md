## ADVİCE GENERATOR APP

- An app that generates random advice.
- I made it using HTML, TailwindCss and Javascript.
- (https://api.adviceslip.com/) => We cache random recommendations using the Advice Slip JSON API.

Here, I used the **fetch()** method because there is a data receiving and sending data operation.
### Fetch Api 
- It is an asynchronous structure and operations made with Fetch return to us as resolved, rejected, that is, with the promise structure.
- Fetch was returning a promise structure. The await operator is used to wait for this promise structure

### await ifadesi
- Causes asynchronous function execution to pause until a Promise is given (so fulfilled or rejected ) and continues execution of the asynchronous function after fullfillment.
-  When resumed, the value of await is the value of the fulfilled Promise.
- When the Promise rejects , the await statement assigns the value reject .

### Response.json()
-With the json() method of the Response interface, we take JSON as input and parse it to produce a JavaScript object.


