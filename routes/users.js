var express = require('express');
var router = express.Router();

let userList = [
  {
    id: 1, 
    firstName: 'Erkki',
    lastName: 'Metsola'
  },
  {
    id: 2, 
    firstName: 'Jarkko',
    lastName: 'Metsola'
  },
  {
    id: 3, 
    firstName: 'Markku',
    lastName: 'Korpi'
  },
  {
    id: 4, 
    firstName: 'Jaana',
    lastName: 'Mäkinen'
  }
]

router.get('/', function(req, res) {
  res.json(userList);
});

router.get('/:id', function(req, res) {
  const searchUser = userList.find(u => u.id.toString() === req.params.id);
  if (searchUser) {
    res.json(searchUser);
  } else {
    res.status(400).send({ error: "User not found" });
  }
});

router.get('/:firstname/:lastname', function(req, res) {
  const searchUser = userList.find(u => u.firstName === req.params.firstname && u.lastName === req.params.lastname);
  console.log(`Terve ${req.params.firstname} ${req.params.lastname}`)
  if (searchUser) {
    res.json(searchUser);
  } else {
    res.status(400).send({ error: "lUser not found" });
  }
});

router.post('/', function(req, res) {
  const newUser = req.body;
  newUser.id = userList.length + 1;
  userList = userList.concat(newUser);
  res.json(newUser);
})

module.exports = router;
