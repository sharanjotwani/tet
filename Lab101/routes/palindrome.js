const express = require("express");
const router = express.Router();
// const data = require("../data");
// const postData = data.palindrome;

const saltRounds = 16;
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.render("palindrome/static");
});


router.post("/result", (req, res) => {

let operation = req.body;
var inputstr = operation.palindrome;
var pass = operation.psw;
//var checkpalindrome = postData.checkPalindrome(pass,saltRounds)
const plainTextPassword = "Sharan";
const hash = await bcrypt.hash(plainTextPassword, saltRounds);
let compareToMatch = false;

  try {
    compareToMatch = await bcrypt.compare(pass, hash);
  } catch (e) {
    // no op
  }
  // if (compareToMatch === true) {
  //   return true;
  // } else {
  //   return false;
  // }
// if(checkpalindrome == "multiple")
//  {
//    res.status(400).render("palindrome/result" , 
//                            {palindrome : "", 
//                            testclass: "error" , 
//                            res: "Number of arguments should only be 1"})
 
//  }
// else if(checkpalindrome == "notstring")
// {
//   res.status(400).render("palindrome/result" , 
//                           {palindrome : "", 
//                           testclass: "error" , 
//                           res: "Argument should be of type string"})

// } 
// else if(checkpalindrome == null)
// {
//   res.status(400).render("palindrome/result" , 
//                           {palindrome : "", 
//                           testclass: "error" , 
//                           res: "Input cannot be blank"})

// }
// else if(checkpalindrome == "empty")
// {
//   res.status(400).render("palindrome/result" , 
//               {palindrome : inputstr, 
//               testclass: "error" , 
//               res: "Please enter alphanumeric characters"})
// }

if(compareToMatch==true)
{
   res.render("palindrome/result" , 
              {palindrome : inputstr,
              testclass: "success" , 
              res: "It is a Palindrome"})
}

else
{
    res.render("palindrome/result" , 
                {palindrome : inputstr , 
                testclass: "failure" , 
                res: "It is not a Palindrome"})
}
});
module.exports = router;
