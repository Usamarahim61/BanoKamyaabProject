
const express = require('express');
const app = express();
// const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

const fs = require('fs');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);
require("../db/conn");
const User = require("../model/userSchema");
const University = require('../model/UniversitySchema');
const { findOne } = require('../model/userSchema');
const Scholarship = require('../model/ScholarshipSchema');
const Degree = require('../model/DegreeSchema');
const uploadMiddleware = require('../middleware/PhotoMiddleware');
var serveStatic = require('serve-static');
const { flushSync } = require('react-dom');
const { Console } = require('console');
const Demographic = require('../model/Demographic');
const Emotional = require('../model/Emotional');
const Personality = require('../model/Personality');
const Creativity = require('../model/Creativity');



router.use(express.json());



router.get('/', (req, res) => {
  res.send('hello world Router');

});

router.post('/Register', async (req, res) => {

  const { fname, lname, email, DOB, gender, password, cpassword, city } = req.body;

  // if(!name || !email || !DOB|| !gender || !password || !cpassword || !city ){
  //     return res.status(422).json({error: "Please Fill all the Fields"});
  // }
  // Using Promsies Then and Catch
  // User.findOne({email:email}).then((userExist)=>{

  //     if(userExist){
  //         return res.status(422).json({error: "Email Already Exist"});
  //     }

  //     const user = new User({name,email,age,gender,password,cpassword,city});
  //     user.save().then(() =>{
  //         res.status(201).json({message: "User Registered Successfully"});
  //     }).catch((err) => res.status(500).json({error: "Failed to Register"}));

  // }).catch(err => {console.log(err)});

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email Already Exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password doesn't match." });

    } else {
      const user = new User({ fname, lname, email, DOB, gender, password, cpassword, city });


      await user.save();

      res.status(201).json({ message: "User Registered Successfully" });
    }



  } catch (err) {
    console.log(err);
  }

});


//  LOgin Route

router.post('/Login', async (req, res) => {

  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please Fill the Fields" });
    }
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2589200000),
        httpOnly: true
      });
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      }
      else {
        res.json({ message: "User Sign In Successfully" });
      }
    }
    else {
      res.status(400).json({ error: "Invalid Credentials" });

    }

  } catch (err) {
    console.log(err)
  }

});
//  
router.use('/public/uploads', express.static('public/uploads'));
router.post("/AddUniversity", uploadMiddleware.single("photo"), async (req, res) => {
  //  const  photo  = `http://localhost:4000/public/uploads/${photourl}` ;
  if (req.file) {
    const photo = req.file.filename;
    const { name, description, url, field, city, type } = req.body;
    const university = new University({ photo, name, description, url, field, city, type });
    await university.save();

    res.status(201).json({ message: "University Added Successfully with Photo" });
  }
  else {
    const { name, description, url, field, city, type } = req.body;


    const university = new University({ name, description, url, field, city, type });
    await university.save();

    res.status(201).json({ message: "University Added Successfully without Photo" });
  }




  // const { name, description, url, field, city, type } = req.body;


  // const university = new University({ name, description, url, field, city, type });


  // await university.save();

  // res.status(201).json({ message: "University Added Successfully" });


});


router.post("/AddScholarship", uploadMiddleware.single("photo"), async (req, res) => {
  //  const  photo  = `http://localhost:4000/public/uploads/${photourl}` ;
  if (req.file) {
    const photo = req.file.filename;
    const { name, description, url, city, type } = req.body;
    const scholarship = new Scholarship({ photo, name, description, url, city, type });
    await scholarship.save();

    res.status(201).json({ message: "Scholarship Added Successfully with Photo" });
  }
  else {
    const { name, description, url, field, city, type } = req.body;


    const scholarship = new Scholarship({ name, description, url, field, city, type });
    await scholarship.save();

    res.status(201).json({ message: "Scholarship Added Successfully without Photo" });
  }


});


router.post("/AddDegree", uploadMiddleware.single("photo"), async (req, res) => {
  //  const  photo  = `http://localhost:4000/public/uploads/${photourl}` ;
  if (req.file) {
    const photo = req.file.filename;
    const { name, description, type } = req.body;
    const degree = new Degree({ photo, name, description, type });
    await degree.save();

    res.status(201).json({ message: "Degree Added Successfully with Photo" });
  }
  else {
    const { name, description } = req.body;


    const degree = new Degree({ name, description, type });
    await degree.save();

    res.status(201).json({ message: "Degree Added Successfully without Photo" });
  }


});


// ,authenticate 
router.get('/UserProfile', authenticate, (req, res) => {
  console.log("Hello my Profile");
  res.send(req.rootUser);
})



router.get('/ViewEngineeringDegree', async (req, res) => {
  try {
    const degree = await Degree.find();

    // Filter universities with "Private" type
    const engineer = degree.filter(
      (engineer) => engineer.type === "Engineering"
    );

    if (engineer.length > 0) {
      console.log(engineer);
      res.send(engineer);
    } else {
      console.log("No Engineering degree found");
      res.status(404).send("No Engineering degree found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/ViewMedicalDegree', async (req, res) => {
  try {
    const degree = await Degree.find();

    // Filter universities with "Private" type
    const medical = degree.filter(
      (medical) => medical.type === "Medical"
    );

    if (medical.length > 0) {
      console.log(medical);
      res.send(medical);
    } else {
      console.log("No Medical degree found");
      res.status(404).send("No Medical degree found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.get('/ViewICSDegree', async (req, res) => {
  try {
    const degree = await Degree.find();

    // Filter universities with "Private" type
    const ics = degree.filter(
      (ics) => ics.type === "ICS"
    );

    if (ics.length > 0) {
      console.log(ics);
      res.send(ics);
    } else {
      console.log("No ICS degree found");
      res.status(404).send("No ICS degree found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/ViewPrivateUniversity', async (req, res) => {
  try {
    const universities = await University.find();

    // Filter universities with "Private" type
    const privateUniversities = universities.filter(
      (university) => university.type === "Private"
    );

    if (privateUniversities.length > 0) {
      console.log(privateUniversities);
      res.send(privateUniversities);
    } else {
      console.log("No private universities found");
      res.status(404).send("No private universities found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/ViewGovtUniversity', async (req, res) => {
  try {
    const universities = await University.find();

    // Filter universities with "Private" type
    const govtUniversities = universities.filter(
      (university) => university.type === "Govt"
    );

    if (govtUniversities.length > 0) {
      console.log(govtUniversities);
      res.send(govtUniversities);
    } else {
      console.log("No Govt. universities found");
      res.status(404).send("No Govt. universities found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.get('/ViewPrivateScholarship', async (req, res) => {
  try {
    const scholarship = await Scholarship.find();

    const privateScholarships = scholarship.filter(
      (scholarship) => scholarship.type === "Private"
    );

    if (privateScholarships.length > 0) {
      console.log(privateScholarships);
      res.send(privateScholarships);
    } else {
      console.log("No private Scholarship found");
      res.status(404).send("No private Scholarships found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.get('/ViewGovtScholarship', async (req, res) => {
  try {
    const scholarship = await Scholarship.find();

    // Filter universities with "Private" type
    const govtScholarships = scholarship.filter(
      (scholarship) => scholarship.type === "Government"
    );

    if (govtScholarships.length > 0) {
      console.log(govtScholarships);
      res.send(govtScholarships);
    } else {
      console.log("No Govt. Scholarship found");
      res.status(404).send("No Govt. Scholarships found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});


// router.get('/ViewUniversity', async (req, res) => {
//     try {
//         const university = await University.find();
//        if(university.length>0)
//        {
//         console.log(university);
//         res.send(university);        
//        }
//        else{
//         console.log("University not found")
//        }
//     } catch (error) {
//         res.status(404).json(error);
//     }
// })

// router.get('/ViewScholarship', async (req, res) => {
//     try {
//         const scholarship = await Scholarship.find();
//        if(scholarship.length>0)
//        {
//         console.log(scholarship);
//         res.send(scholarship);        
//        }
//        else{
//         console.log("Scholarships not found")
//        }
//     } catch (error) {
//         res.status(404).json(error);
//     }
// })

router.get('/ViewUniversitydata/:id', async (req, res) => {


  try {
    console.log(req.params);

    const { id } = req.params;
    const UniversityIndividual = await University.findById({ _id: id });
    console.log(UniversityIndividual);
    res.send(UniversityIndividual);
  } catch (error) {
    res.status(404).json(error);
  }

})

router.get('/ViewDegreedata/:id', async (req, res) => {


  try {
    console.log(req.params);

    const { id } = req.params;
    const DegreeIndividual = await Degree.findById({ _id: id });
    console.log(DegreeIndividual);
    res.send(DegreeIndividual);
  } catch (error) {
    res.status(404).json(error);
  }

})

router.get('/ViewScholarshipdata/:id', async (req, res) => {


  try {
    console.log(req.params);

    const { id } = req.params;
    const ScholarshipIndividual = await Scholarship.findById({ _id: id });
    console.log(ScholarshipIndividual);
    res.send(ScholarshipIndividual);
  } catch (error) {
    res.status(404).json(error);
  }

})


router.get('/ViewScholarship', (req, res) => {

  console.log("Hello my Scholarship");
  res.send("send Scholarship data");

})


router.get('/SearchPrivateUniversity', async (req, res) => {
  try {
    const universities = await University.find();

    // Filter universities with "Private" type
    const privateUniversities = universities.filter(
      (university) => university.city === req.body.city || university.field === req.body.field
    );

    if (privateUniversities.length > 0) {
      console.log(privateUniversities);
      res.send(privateUniversities);
    } else {
      console.log("No Searching private universities found");
      res.status(404).send("No searching  private universities found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.patch('/UpdateScholarshipdata/:id', uploadMiddleware.single('photo'), async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const scholarship = await Scholarship.findById(id);

    if (!scholarship) {
      return res.status(404).send('Scholarship not found');
    }
    const updatedFields = {
      ...req.body // include any other fields that may have changed

    };
    if (req.file) {
      if (scholarship.photo) {
        await unlinkAsync(`public/uploads/${scholarship.photo}`);
      }

      updatedFields.photo = req.file.filename;

    }

    const ScholarshipUpdate = await Scholarship.findByIdAndUpdate(id, updatedFields, { new: true });
    console.log(ScholarshipUpdate);

    res.status(200).send(ScholarshipUpdate);

  } catch (error) {
    res.status(422).json(error);

  }

})

// 


router.patch('/UpdateDegreedata/:id', uploadMiddleware.single('photo'), async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const degree = await Degree.findById(id);

    if (!degree) {
      return res.status(404).send('Degree not found');
    }
    const updatedFields = {
      ...req.body // include any other fields that may have changed

    };
    if (req.file) {
      if (degree.photo) {
        await unlinkAsync(`public/uploads/${degree.photo}`);
      }

      updatedFields.photo = req.file.filename;

    }

    const DegreeUpdate = await Degree.findByIdAndUpdate(id, updatedFields, { new: true });
    console.log(DegreeUpdate);

    res.status(200).send(DegreeUpdate);

  } catch (error) {
    res.status(422).json(error);

  }

})



// 

router.patch('/UpdateUniversitydata/:id', uploadMiddleware.single('photo'), async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const university = await University.findById(id);

    if (!university) {
      return res.status(404).send('University not found');
    }
    const updatedFields = {
      ...req.body // include any other fields that may have changed

    };
    if (req.file) {
      if (university.photo) {
        await unlinkAsync(`public/uploads/${university.photo}`);
      }

      updatedFields.photo = req.file.filename;

    }

    const UniversityUpdate = await University.findByIdAndUpdate(id, updatedFields, { new: true });
    console.log(UniversityUpdate);

    res.status(200).send(UniversityUpdate);

  } catch (error) {
    res.status(422).json(error);

  }

})


router.patch('/UpdateProfile', authenticate, uploadMiddleware.single('photo'), async (req, res) => {
  console.log("Hello my UpdateProfile");


  const profile = await User.findById(req.userID);

  const updatedFields = {
    ...req.body // include any other fields that may have changed
  };

  if (req.file) {
    if (profile.photo) {
      await unlinkAsync(`public/uploads/${profile.photo}`);
    }

    updatedFields.photo = req.file.filename;
    //    updatedFields.photo  = `http://localhost:4000/public/uploads/${photourl}` ;
  }
  console.log("UPdated")
  const user = await User.findOneAndUpdate(req.userID, updatedFields, { new: true });

  res.send(user);

})

router.delete('/DeleteUniversitydata/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const Universitydelete = await University.findByIdAndDelete({ _id: id });

    console.log(Universitydelete);
    res.send(Universitydelete);
    if (Universitydelete.photo) {
      fs.unlinkSync(`./public/uploads/${Universitydelete.photo}`);
    }

  } catch (error) {
    res.status(422).json(error);
  }

})


router.delete('/DeleteDegreedata/:id', async (req, res) => {

  try {

    const { id } = req.params;
    const Degreedelete = await Degree.findByIdAndDelete({ _id: id });

    console.log(Degreedelete);
    res.send(Degreedelete);
    if (Degreedelete.photo) {
      fs.unlinkSync(`./public/uploads/${Degreedelete.photo}`);
    }

  } catch (error) {
    res.status(422).json(error);
  }

})



router.delete('/DeleteScholarshipdata/:id', async (req, res) => {


  try {

    const { id } = req.params;

    const Scholarshipdelete = await Scholarship.findByIdAndDelete({ _id: id });

    console.log(Scholarshipdelete);
    res.send(Scholarshipdelete);
    if (Scholarshipdelete.photo) {
      fs.unlinkSync(`./public/uploads/${Scholarshipdelete.photo}`);
    }




  } catch (error) {
    res.status(422).json(error);
  }


})

//***********************APTITUDE TEST***************************** */







router.post("/AddDemographics", async (req, res) => {

  const { question, options } = req.body;
  try {
    const demographic = new Demographic({ question, options });
    await demographic.save();
    res.status(201).json({ message: "Question Added Successfully", demographic });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

});


router.patch('/UpdateDemographic/:id', async (req, res) => {
  const { id } = req.params;
  const { question, options } = req.body;

  try {
    const demographic = await Demographic.findByIdAndUpdate(id, {
      question,
      options,
    },
      { new: true });
    if (!demographic) {
      return res.status(404).json({ message: "Demographic not found" });
    }
    res.json({ message: "Updated Successfully", demographic });
    console.log("added Successfully")
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
  // }
});

router.get('/ViewDemographic/:id', async (req, res) => {
  try {
    const mcq = await Demographic.findById(req.params.id);
    res.json(mcq);
    console.log(mcq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/DisplayDemographic', async (req, res) => {
  try {
    const mcqs = await Demographic.find();
    res.status(200).json(mcqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/DeleteDemographic/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const demographicdelete = await Demographic.findByIdAndDelete({ _id: id });

    console.log(demographicdelete);
    res.send(demographicdelete);

  } catch (error) {
    res.status(422).json(error);
  }


})



// Emotional Intelligence


router.post("/AddEmotional", async (req, res) => {

  const { question } = req.body;
  try {
    const emotional = new Emotional({ question});
    await emotional.save();
    res.status(201).json({ message: "Question Added Successfully", emotional });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

});


router.patch('/UpdateEmotional/:id', async (req, res) => {
  const { id } = req.params;
  const { question } = req.body;

  try {
    const emotional = await Emotional.findByIdAndUpdate(id, {
      question,
    },
      { new: true });
    if (!emotional) {
      return res.status(404).json({ message: "Emotional not found" });
    }
    res.json({ message: "Updated Successfully", emotional });
    console.log("added Successfully")
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
  // }
});

router.get('/ViewEmotional/:id', async (req, res) => {
  try {
    const mcq = await Emotional.findById(req.params.id);
    res.json(mcq);
    console.log(mcq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/DisplayEmotional', async (req, res) => {
  try {
    const mcqs = await Emotional.find();
    res.status(200).json(mcqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/DeleteEmotional/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const Emotionaldelete = await Emotional.findByIdAndDelete({ _id: id });

    console.log(Emotionaldelete);
    res.send(Emotionaldelete);

  } catch (error) {
    res.status(422).json(error);
  }


})



// Personality Test


router.post("/AddPersonality", async (req, res) => {

  const { question } = req.body;
  try {
    const personality = new Personality({ question});
    await personality.save();
    res.status(201).json({ message: "Question Added Successfully", personality });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

});


router.patch('/UpdatePersonality/:id', async (req, res) => {
  const { id } = req.params;
  const { question } = req.body;

  try {
    const personality = await Personality.findByIdAndUpdate(id, {
      question,
    },
      { new: true });
    if (!personality) {
      return res.status(404).json({ message: "Personality not found" });
    }
    res.json({ message: "Updated Successfully", personality });
    console.log("added Successfully")
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
  // }
});

router.get('/ViewPersonality/:id', async (req, res) => {
  try {
    const mcq = await Personality.findById(req.params.id);
    res.json(mcq);
    console.log(mcq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/DisplayPersonality', async (req, res) => {
  try {
    const mcqs = await Personality.find();
    res.status(200).json(mcqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/DeletePersonality/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const Personalitydelete = await Personality.findByIdAndDelete({ _id: id });

    console.log(Personalitydelete);
    res.send(Personalitydelete);

  } catch (error) {
    res.status(422).json(error);
  }


})



//      Creativity Test

router.post("/AddCreativity", async (req, res) => {

  const { question, options } = req.body;
  try {
    const creativity = new Creativity({ question, options });
    await creativity.save();
    res.status(201).json({ message: "Question Added Successfully", creativity });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

});


router.patch('/UpdateCreativity/:id', async (req, res) => {
  const { id } = req.params;
  const { question, options } = req.body;

  try {
    const creativity = await Creativity.findByIdAndUpdate(id, {
      question,
      options,
    },
      { new: true });
    if (!creativity) {
      return res.status(404).json({ message: "Creativity not found" });
    }
    res.json({ message: "Updated Successfully", creativity });
    console.log("added Successfully")
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
  // }
});

router.get('/ViewCreativity/:id', async (req, res) => {
  try {
    const mcq = await Creativity.findById(req.params.id);
    res.json(mcq);
    console.log(mcq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/DisplayCreativity', async (req, res) => {
  try {
    const mcqs = await Creativity.find();
    res.status(200).json(mcqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/DeleteCreativity/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const creativitydelete = await Creativity.findByIdAndDelete({ _id: id });

    console.log(creativitydelete);
    res.send(creativitydelete);

  } catch (error) {
    res.status(422).json(error);
  }


})








router.patch('/AddDemoTest', authenticate, async (req, res) => {
  // console.log("Hello my UpdateProfile");


  const profile = await User.findById(req.userID);

  const {question,option}=req.body;
  console.log({question,option})
  // const Demographic.question=question;
  // const demo =  profile.Demographic.findByIdAndUpdate(req._id,{question,option})
  // const profile1 = await User.Demographic.findById(req.userID);

  // await profile1.save();

  const user = await User.findOneAndUpdate(req.userID, {Demographic:[{question,option}]}, { new: true });
  console.log("UPdatedtest")
  res.send(user);

})










router.get('/Logout', (req, res) => {

  res.clearCookie("jwtoken", { path: '/' });
  res.send('User Log Out');

});

module.exports = router;