# Banking System
In this project, I had created set of API's for user register, user login, get profile, update password, update address, generate debit card pin, add money, send money
,payments, otp Generate, account Balance, account statement.


# Personal

## Banking System Project Requirement

## Phase I



### Models
Branch Model, Account Model, transaction Model

- Branch Model
```
{
bankFullName: { default:"HOUSING DEVELOPMENT FINANCE CORPORATION LIMITED"}, 
bankName: { default:"HDFC"}, 
IFSC: {mandatory}, 
branchName: {mandatory, unique}, 
state: {mandatory}, 
country: {mandatory}, 
totalAcounts: {default:null},
accountNumbers: { default:provided by bank},
cardNumbers: { default:provided by bank},
balance: {default:null},
openningDate: { type: Date, default: Date.now() },
closingDate: { type: Date, default: null },
isDeleted: { type: Boolean, default: false }
}

```
- Account Model
```
{
fullName: {mandatory},
DoB: {mandatory},
gender: {mandatory,enum: ["MALE", "FEMALE", "Others"]},
address: {mandatory},
email: {mandatory},
phone: {mandatory},
currentBalance: {mandatory},
loginId: {mandatory},
password: {mandatory},
OTP: {default:null},
countOTP: {default:0},
isBlock: {default:null},
profileImage: {mandatory},
aadharNumber: {mandatory},
panCardNumber: {mandatory},
branchName: {mandatory},
IFSC:{as per branch}
accountType: {mandatory},
accountNumber: {mandatory}, 
accountStatus: { default: 'DEACTIVATED', enum: ["ACTIVATED", "DEACTIVATED", "SUSPENDED"] }, 
debitCardStatus: { default: 'DEACTIVATED', enum: ["ACTIVATED", "DEACTIVATED", "SUSPENDED"] },
cardNumber: {mandatory}, 
cvvNumber: {mandatory}, 
pinNumber: {default: null}, 
expiryDate: {mandatory},
openingDate: { type: Date, default: Date.now() },
closingDate: { type: Date, default: null },
isDeleted: { type: Boolean, default: false }
}
```

- Transaction Model
```
{
bankFullName: {default: "Housing Development Finance Corporation Limited" },
bankName: { default: "HDFC"},
bankType: { type: String, default: "PRIVATE" },
branchName: {mandatory},
IFSC:{mandatory , as per branch}
accountNumber: {mandatory}, 
transactionStatus: { mandatory , enum: ["completed" , "failed" , "cancelled" }
transactionType:{ }
amount: { mandatory },
currentBalance: { mandatory },
//for reciever details
beneficiaryName: { type: String,  uppercase: true, trim: true },
beneficiaryAccountNo: { type: String,  uppercase: true, trim: true },
beneficiaryIFSC: { type: String,  uppercase: true, trim: true },
beneficiaryBranch: { type: String,  uppercase: true, trim: true },
// for sender details
senderName: { type: String, uppercase: true, trim: true },
senderAccountNo: { type: String, uppercase: true, trim: true },
senderIFSC: { type: String, uppercase: true, trim: true },
senderBranch: { type: String, uppercase: true, trim: true },
// OTP: { type: String, required: true, trim: true }
}
```
#### APIs...
### Phase-I
router.post("/createBranch/hdfc/:branch", createBranch);
router.post("/user/register", createAccount);
router.get("/bank/getProfileForBankUse", getProfileForBankUse);

### Phase-II
router.post("/user/login", login);
router.get("/user/profile", getProfile);
router.put("/user/updatePassword", updatePassword);
router.put("/user/forgotPassword", forgotPassword); 
router.get("/user/accountBalance", accountBalance);
router.get("/user/accountStatement", accountStatement);

### Phase-III
router.put("/user/otpGenerate", otpGenerate);

router.post("/user/sendMoney", sendMoney);

router.post("/user/payment", paymentThroughDebitCard);


//router.delete("/user/deleteTransaction", deleteTransaction);


### Author APIs /authors
- Create an author - atleast 5 authors
- Create a author document from request body.
  `Endpoint: BASE_URL/authors`

### POST /blogs
- Create a blog document from request body. Get authorId in request body only.
- Make sure the authorId is a valid authorId by checking the author exist in the authors collection.
- Return HTTP status 201 on a succesful blog creation. Also return the blog document. The response should be a JSON object like [this](#successful-response-structure) 
- Create atleast 5 blogs for each author

- Return HTTP status 400 for an invalid request with a response body like [this](#error-response-structure)

### GET /blogs
- Returns all blogs in the collection that aren't deleted and are published
- Return the HTTP status 200 if any documents are found. The response structure should be like [this](#successful-response-structure) 
- If no documents are found then return an HTTP status 404 with a response like [this](#error-response-structure) 
- Filter blogs list by applying filters. Query param can have any combination of below filters.
  - By author Id
  - By category
  - List of blogs that have a specific tag
  - List of blogs that have a specific subcategory
example of a query url: blogs?filtername=filtervalue&f2=fv2



### PUT /blogs/:blogId
- Updates a blog by changing the its title, body, adding tags, adding a subcategory. (Assuming tag and subcategory received in body is need to be added)
- Updates a blog by changing its publish status i.e. adds publishedAt date and set published to true
- Check if the blogId exists (must have isDeleted false). If it doesn't, return an HTTP status 404 with a response body like [this](#error-response-structure)
- Return an HTTP status 200 if updated successfully with a body like [this](#successful-response-structure) 
- Also make sure in the response you return the updated blog document. 

### DELETE /blogs/:blogId
- Check if the blogId exists( and is not deleted). If it does, mark it deleted and return an HTTP status 200 without any response body.
- If the blog document doesn't exist then return an HTTP status of 404 with a body like [this](#error-response-structure) 

### DELETE /blogs?queryParams
- Delete blog documents by category, authorid, tag name, subcategory name, unpublished
- If the blog document doesn't exist then return an HTTP status of 404 with a body like [this](#error-response-structure)

## Phase II

- Add authentication and authroisation feature

### POST /login
- Allow an author to login with their email and password. On a successful login attempt return a JWT token contatining the authorId in response body like [this](#Successful-login-Response-structure)
- If the credentials are incorrect return a suitable error message with a valid HTTP status code

### Authentication
- Add an authorisation implementation for the JWT token that validates the token before every protected endpoint is called. If the validation fails, return a suitable error message with a corresponding HTTP status code
- Protected routes are create a blog, edit a blog, get the list of blogs, delete a blog(s)
- Set the token, once validated, in the request - `x-api-key`
- Use a middleware for authentication purpose.

### Authorisation
- Make sure that only the owner of the blogs is able to edit or delete the blog.
- In case of unauthorized access return an appropirate error message.

## Testing (Self-evaluation During Development)
- To test these apis create a new collection in Postman named Project 1 Blogging 
- Each api should have a new request in this collection
- Each request in the collection should be rightly named. Eg Create author, Create blog, Get blogs etc
- Each member of each team should have their tests in running state


Refer below sample

 ![A Postman collection and request sample](assets/Postman-collection-sample.png)

## Response


### Successful Response structure
```yaml
{
  status: true,
  data: {

  }
}
```
### Error Response structure
```yaml
{
  status: false,
  msg: ""
}
```





## Collections
### Blogs
```yaml
{
  "title": "How to win friends",
  "body": "Blog body",
  "tags": ["Book", "Friends", "Self help"],
  "category": "Book",
  "subcategory": ["Non fiction", "Self Help"],
  "published": false,
  "publishedAt": "", // if published is true publishedAt will have a date 2021-09-17T04:25:07.803Z
  "deleted": false,
  "deletedAt": "", // if deleted is true deletedAt will have a date 2021-09-17T04:25:07.803Z,
  "createdAt": "2021-09-17T04:25:07.803Z",
  "updatedAt": "2021-09-17T04:25:07.803Z",
}
```
### Successful Login Response structure
```yaml
{
  status: true,
  data: {
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JJZCI6IjYyZmUzYmUzMzY2ZmFkNDZjY2Q1MzI3ZiIsImlhdCI6MTY2MDgzMDA4MywiZXhwIjoxNjYwODY2MDgzfQ.mSo-TLyRlGhMNcy4ftEvvIlCHlyEqpaFZc-iBth4lfg"

  }
}
```
#### Refer https://jsonplaceholder.typicode.com/guide/ for some fake blogs data.

#### Note: Create a group database and use the same database in connection string by replacing `groupXDatabase
