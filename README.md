# community-post
A dummy backend to handle the community posts, comments and  likes of Happyhub (for SWEP presentation)

URL = https://happyhub-community.onrender.com

# POST MESSAGE ENDPONT
URL = https://happyhub-community.onrender.com/message
REQUEST = { text: I'm on the verge of commiting suicide, somebody save me}
RESPONSE = {
  "message": {
    "text": "I'm on the verge of commiting suicide, somebody save me ",
    "likes": 0,
    "comments": [],
    "_id": "64dd26d6f4d47cedfb3c30b8",
    "__v": 0
  },
  "status": "true"
}

# POST COMMENT ENDPOINT
URL = http://localhost:3000/comment/64dd26d6f4d47cedfb3c30b8
METHOD = POST
REQUEST = {
  "text": "pls don't do it, its not worth it "
}
RESPONSE = {
  "message": {
    "_id": "64dd26d6f4d47cedfb3c30b8",
    "text": "I'm on the verge of commiting suicide, somebody save me ",
    "likes": 0,
    "comments": [],
    "__v": 0
  },
  "status": "true",
  "comment": {
    "text": "pls don't do it, its not worth it ",
    "_id": "64dd29d7128502b48e919e85",
    "__v": 0
  }


# POST LIKES ENDPOINT
METHOD = PUT
RESPONSE = {
  "_id": "64dd26d6f4d47cedfb3c30b8",
  "text": "I'm on the verge of commiting suicide, somebody save me ",
  "likes": 7,
  "comments": [
    "64dd29d7128502b48e919e85"
  ],
  "__v": 0
}

# GET ALL POST
METHOD = GET
RESPONSE = {
  "message": "Messages fetched successfully",
  "status": "true",
  "messages": [
    {
      "_id": "64dd2661f4d47cedfb3c30b4",
      "text": "Hello i've been finding it hard to sleep for about a week now what do you think i can do about that?",
      "likes": 0,
      "comments": [],
      "__v": 0
    },
    {
      "_id": "64dd26bdf4d47cedfb3c30b6",
      "likes": 0,
      "comments": [],
      "__v": 0
    },
    {
      "_id": "64dd26d6f4d47cedfb3c30b8",
      "text": "I'm on the verge of commiting suicide, somebody save me ",
      "likes": 7,
      "comments": [
        "64dd29d7128502b48e919e85"
      ],
      "__v": 0
    }
  ]
}

# GET SINGLE MESSAGE
METHOD = GET 
RESPOSE = {
  "message": {
    "_id": "64dd26d6f4d47cedfb3c30b8",
    "text": "I'm on the verge of commiting suicide, somebody save me ",
    "likes": 7,
    "comments": [
      {
        "_id": "64dd29d7128502b48e919e85",
        "text": "pls don't do it, its not worth it ",
        "__v": 0
      }
    ],
    "__v": 0
  },
  "status": "true"
}

# DELETE MESSAGE
METHOD = DELETE 
RESPONSE = {
  "message": {
    "_id": "64dd26d6f4d47cedfb3c30b8",
    "text": "I'm on the verge of commiting suicide, somebody save me ",
    "likes": 7,
    "comments": [
      "64dd29d7128502b48e919e85"
    ],
    "__v": 0
  },
  "status": "true"
}

# DELETE COMMENT 
METHOD = DELETE
PESPONSE = {
  "message": "Comment deleted successfully",
  "status": "true",
  "comment": {
    "_id": "64dd29d7128502b48e919e85",
    "text": "pls don't do it, its not worth it ",
    "__v": 0
  }
}


