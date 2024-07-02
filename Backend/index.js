const express=require('express');
const mongoose=require('mongoose'); 
const cors=require('cors');
const bcrypt=require("bcryptjs")
const bodyParser = require('body-parser');


const { DentistModel, PatientModel, CardiologistModel, OrthopedicModel, NeurologistModel, OtologistModel, EyeModel, SurgonModel, GeneralModel,UserModel,BookingModel} = require('./models/schema');
// const authRoutes = require('./routes/auth');


const app = express();
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
async function connectdb(){
  try{
await mongoose.connect("mongodb+srv://shreya:shreya0101@cluster0.5vdqzgo.mongodb.net/doctor?retryWrites=true&w=majority&appName=Cluster0");
console.log("db connnection success")
         const x= 4000;
         app.listen(x,function(){
             console.log(`starting port ${x}...`)
         })
     }
     catch(err){
        console.log("db not connected: "+err);
    }
}
connectdb();
// app.use('/auth', authRoutes);

// Add dentists 

app.post('/adddentists', async (req, res) => {
  try {
    const { id, image, description, name, experience, address } = req.body;

    const dentist = new DentistModel({
      id,
      image,
      description,
      name,
      experience,
      address
    });

    await dentist.save();
    res.status(201).json({ message: "Dentist added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//addcardiologist
app.post('/addccardiologists', async (req, res) => {
  try {
      const { id,image,description, name, experience , address } = req.body;
      
      const cardiologist = new CardiologistModel({
          id,
          image,
          description,
          name, 
          experience,
          address
      });
      await cardiologist.save();
      res.status(201).json({ message: "cars added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
//add orthopedic
app.post('/addorthopedics', async (req, res) => {
  try {
      const { id,image,description, name, experience , address } = req.body;
      
      const orthopedic = new OrthopedicModel({
          id,
          image,
          description,
          name, 
          experience,
          address
      });
      await orthopedic.save();
      res.status(201).json({ message: "orthopdics added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
//add neurologist
app.post('/addneurologists', async (req, res) => {
  try {
      const { id,image,description, name, experience , address } = req.body;
      
      const neurologist = new NeurologistModel({
          id,
          image,
          description,
          name, 
          experience,
          address
      });
      await neurologist.save();
      res.status(201).json({ message: "Neurologists added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
//add otology
app.post('/addotologists', async (req, res) => {
  try {
      const { id,image,description, name, experience , address } = req.body;
      
      const otologist = new OtologistModel({
          id,
          image,
          description,
          name, 
          experience,
          address
      });
      await otologist.save();
      res.status(201).json({ message: "otologists added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
//add eye
app.post('/addeyes', async (req, res) => {
  try {
      const { id,image,description, name, experience , address } = req.body;
      
      const eye = new EyeModel({
          id,
          image,
          description,
          name, 
          experience,
          address
      });
      await eye.save();
      res.status(201).json({ message: "eyes added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
//add surgon
app.post('/addsurgons', async (req, res) => {
  try {
      const { id,image,description, name, experience , address } = req.body;
      
      const surgon = new SurgonModel({
          id,
          image,
          description,
          name, 
          experience,
          address
      });
      await surgon.save();
      res.status(201).json({ message: "surgons added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
// add general
app.post('/addgenerals', async (req, res) => {
  try {
      const { id,image,description, name, experience , address } = req.body;
      
      const general = new GeneralModel({
          id,
          image,
          description,
          name, 
          experience,
          address
      });
      await general.save();
      res.status(201).json({ message: "generals added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
// add patients
app.post('/addpatients', async (req, res) => {
  try {
    const { patientName, phoneNumber, date, time, note, doctor } = req.body;

    const existingAppointment = await PatientModel.findOne({ date, time, doctor });

    if (existingAppointment) {
      return res.status(400).json({ message: 'This time slot is already booked for the selected doctor' });
    }

    const patient = new PatientModel({
      patientName,
      phoneNumber,
      date,
      time,
      note,
      doctor,
    });

    await patient.save();
    res.status(201).json({ message: 'Patient added successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//available time
app.get('/availableTimes', async (req, res) => {
  try {
    const { date, doctor } = req.query;
    const bookedAppointments = await PatientModel.find({ date, doctor });

    const timeSlots = [
      '9:00 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
      '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '3:00 PM',
      '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
    ];

    const bookedTimes = bookedAppointments.map(appt => appt.time);
    const availableTimes = timeSlots.filter(time => !bookedTimes.includes(time));

    res.json(availableTimes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



//geett dentist

app.get('/getalldentists', async (req, res) => {
  try {
    const dentists = await DentistModel.find();
    res.json(dentists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//get cardio
app.get('/getallcardiologists', async (req, res) => {
  try {
    const cardiologists = await CardiologistModel.find();
    res.json(cardiologists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// get orthopedic
app.get('/getallorthopedics', async (req, res) => {
  try {
    const orthopedics = await OrthopedicModel.find();
    res.json(orthopedics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// gt neurologist
app.get('/getallneurologists', async (req, res) => {
  try {
    const neurologists = await NeurologistModel.find();
    res.json(neurologists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// get otologist
app.get('/getallotologists', async (req, res) => {
  try {
    const otologists = await OtologistModel.find();
    res.json(otologists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get eye
app.get('/getalleyes', async (req, res) => {
  try {
    const eyes = await EyeModel.find();
    res.json(eyes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get surgon
app.get('/getallsurgons', async (req, res) => {
  try {
    const surgons = await SurgonModel.find();
    res.json(surgons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// get general
app.get('/getallgenerals', async (req, res) => {
  try {
    const generals = await GeneralModel.find();
    res.json(generals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//get patient
app.get('/getallpatients', async (req, res) => {
  try {
    const patients = await PatientModel.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//get dentist by name
app.get('/getdentist/:name', async (req, res) => {
  try {
    console.log(`Fetching dentist with name: ${req.params.name}`);
    const dentist = await DentistModel.findOne({ name: req.params.name });
    if (!dentist) {
      return res.status(404).json({ message: 'Dentist not found' });
    }
    res.json(dentist);
  } catch (error) {
    console.error(`Error fetching dentist with name: ${req.params.name}`, error);
    res.status(500).json({ message: error.message });
  }
});
//get cardiologist by name
app.get('/getcardiologist/:name', async (req, res) => {
  try {
    console.log(`Fetching cardiologist with name: ${req.params.name}`);
    const cardiologist = await CardiologistModel.findOne({ name: req.params.name });
    if (!cardiologist) {
      return res.status(404).json({ message: 'Cardiologist not found' });
    }
    res.json(cardiologist);
  } catch (error) {
    console.error(`Error fetching cardiologist with name: ${req.params.name}`, error);
    res.status(500).json({ message: error.message });
  }
});
//get eye by name
app.get('/geteye/:name', async (req, res) => {
  try {
    console.log(`Fetching eye with name: ${req.params.name}`);
    const eye = await EyeModel.findOne({ name: req.params.name });
    if (!eye) {
      return res.status(404).json({ message: 'Eye not found' });
    }
    res.json(eye);
  } catch (error) {
    console.error(`Error fetching eye with name: ${req.params.name}`, error);
    res.status(500).json({ message: error.message });
  }
});
//get general by name
app.get('/getgeneral/:name', async (req, res) => {
  try {
    console.log(`Fetching general with name: ${req.params.name}`);
    const general = await GeneralModel.findOne({ name: req.params.name });
    if (!general) {
      return res.status(404).json({ message: 'General not found' });
    }
    res.json(general);
  } catch (error) {
    console.error(`Error fetching general with name: ${req.params.name}`, error);
    res.status(500).json({ message: error.message });
  }
});

//get orthopedic by name
app.get('/getorthopedic/:name', async (req, res) => {
  try {
    console.log(`Fetching orthopedic with name: ${req.params.name}`);
    const orthopedic = await OrthopedicModel.findOne({ name: req.params.name });
    if (!orthopedic) {
      return res.status(404).json({ message: 'Orthopedic not found' });
    }
    res.json(orthopedic);
  } catch (error) {
    console.error(`Error fetching orthopedic with name: ${req.params.name}`, error);
    res.status(500).json({ message: error.message });
  }
});
//get neurology by name
app.get('/getneurologist/:name', async (req, res) => {
  try {
    console.log(`Fetching neurologist with name: ${req.params.name}`);
    const neurologist = await NeurologistModel.findOne({ name: req.params.name });
    if (!neurologist) {
      return res.status(404).json({ message: 'Neurologist not found' });
    }
    res.json(neurologist);
  } catch (error) {
    console.error(`Error fetching neurologist with name: ${req.params.name}`, error);
    res.status(500).json({ message: error.message });
  }
});
//get otology by name
app.get('/getotologist/:name', async (req, res) => {
  try {
    console.log(`Fetching otologist with name: ${req.params.name}`);
    const otologist = await OtologistModel.findOne({ name: req.params.name });
    if (!otologist) {
      return res.status(404).json({ message: 'Otologist not found' });
    }
    res.json(otologist);
  } catch (error) {
    console.error(`Error fetching otologist with name: ${req.params.name}`, error);
    res.status(500).json({ message: error.message });
  }
});
//get surgon by name

app.get('/getsurgon/:name', async (req, res) => {
  try {
    console.log(`Fetching surgon with name: ${req.params.name}`);
    const surgon = await SurgonModel.findOne({ name: req.params.name });
    if (!surgon) {
      return res.status(404).json({ message: 'Surgon not found' });
    }
    res.json(surgon);
  } catch (error) {
    console.error(`Error fetching surgon with name: ${req.params.name}`, error);
    res.status(500).json({ message: error.message });
  }
});

//delete dentist
app.delete('/deletedentist/:name', async (req, res) => {
  const name = req.params.name;
  console.log(`Deleting dentist with name: ${name}`); 
  try {
    const deletedDentist = await DentistModel.findOneAndDelete({ name: name });
    if (!deletedDentist) {
      return res.status(404).json({ message: "Dentist not found" });
    }
    res.json({ message: "Dentist deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//delete cariologist
app.delete('/deletecariologist/:name', async (req, res) => {
  const name = req.params.name;
  console.log(`Deleting cariologist with name: ${name}`); 
  try {
    const deletedCardiologist = await CardiologistModel.findOneAndDelete({ name: name });
    if (!deletedCardiologist) {
      return res.status(404).json({ message: "Cardiologist not found" });
    }
    res.json({ message: "Cardiologist deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//delete eye
app.delete('/deleteeye/:name', async (req, res) => {
  const name = req.params.name;
  console.log(`Deleting eye with name: ${name}`); 
  try {
    const deletedEye = await EyeModel.findOneAndDelete({ name: name });
    if (!deletedEye) {
      return res.status(404).json({ message: "Eye not found" });
    }
    res.json({ message: "Eye deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//general
app.delete('/deleteGeneral/:name', async (req, res) => {
  const name = req.params.name;
  console.log(`Deleting General with name: ${name}`); 
  try {
    const deletedGeneral = await GeneralModel.findOneAndDelete({ name: name });
    if (!deletedGeneral) {
      return res.status(404).json({ message: "General not found" });
    }
    res.json({ message: "General deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//delete neurologist
app.delete('/deleteneurologist/:name', async (req, res) => {
  const name = req.params.name;
  console.log(`Deleting neurologist with name: ${name}`); 
  try {
    const deletedNeurologist = await NeurologistModel.findOneAndDelete({ name: name });
    if (!deletedNeurologist) {
      return res.status(404).json({ message: "Neurologist not found" });
    }
    res.json({ message: "Neurologist deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//delete orthopedic
app.delete('/deleteorthopedic/:name', async (req, res) => {
  const name = req.params.name;
  console.log(`Deleting orthopedic with name: ${name}`); 
  try {
    const deletedOrthopedic = await OrthopedicModel.findOneAndDelete({ name: name });
    if (!deletedOrthopedic) {
      return res.status(404).json({ message: "Orthopedic not found" });
    }
    res.json({ message: "Orthopedic deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//delete otologist
app.delete('/deleteotologist/:name', async (req, res) => {
  const name = req.params.name;
  console.log(`Deleting otologist with name: ${name}`); 
  try {
    const deletedOtologist = await OtologistModel.findOneAndDelete({ name: name });
    if (!deletedOtologist) {
      return res.status(404).json({ message: "Otologist not found" });
    }
    res.json({ message: "Otologist deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//delete surgon
app.delete('/deletesurgon/:name', async (req, res) => {
  const name = req.params.name;
  console.log(`Deleting surgon with name: ${name}`); 
  try {
    const deletedSurgon = await SurgonModel.findOneAndDelete({ name: name });
    if (!deletedSurgon) {
      return res.status(404).json({ message: "Surgon not found" });
    }
    res.json({ message: "Surgon deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//delete patient
app.delete('/deletepatient/:patientName', async (req, res) => {
  const patientName = req.params.patientName;
  console.log(`Deleting patient with name: ${patientName}`); 
  try {
    const deletedPatient = await PatientModel.findOneAndDelete({ patientName: patientName });
    if (!deletedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//update dentist
app.put('/updatedentist/:name', async (req, res) => {
  const dentistName = req.params.name;
  const { image, description, experience, address } = req.body;

  try {
    let dentist = await DentistModel.findOne({ name: dentistName });

    if (!dentist) {
      return res.status(404).json({ message: 'Dentist not found' });
    }

  
    dentist.image = image;
    dentist.description = description;
    dentist.experience = experience;
    dentist.address = address;
    dentist.updatedAt = Date.now();

   
    await dentist.save();

    res.status(200).json({ message: 'Dentist updated successfully', dentist });
  } catch (error) {
    console.error('Error updating dentist:', error);
    res.status(500).json({ message: 'Error updating dentist' });
  }
});
//update cariologist
app.put('/updatecardiologist/:name', async (req, res) => {
  const cardiologistName = req.params.name;
  const { image, description, experience, address } = req.body;

  try {
    let cardiologist = await CardiologistModel.findOne({ name: cardiologistName });

    if (!cardiologist) {
      return res.status(404).json({ message: 'Cardiologist not found' });
    }

    cardiologist.image = image;
    cardiologist.description = description;
    cardiologist.experience = experience;
    cardiologist.address = address;
    cardiologist.updatedAt = Date.now();

    await cardiologist.save();

    res.status(200).json({ message: 'Cardiologist updated successfully', cardiologist });
  } catch (error) {
    console.error('Error updating cardiologist:', error);
    res.status(500).json({ message: 'Error updating cardiologist' });
  }
});
//update eye
app.put('/updateeye/:name', async (req, res) => {
  const eyeName = req.params.name;
  const { image, description, experience, address } = req.body;

  try {
    let eye = await EyeModel.findOne({ name: eyeName });

    if (!eye) {
      return res.status(404).json({ message: 'eye not found' });
    }

    eye.image = image;
    eye.description = description;
    eye.experience = experience;
    eye.address = address;
    eye.updatedAt = Date.now();

    await eye.save();

    res.status(200).json({ message: 'Eye updated successfully', eye });
  } catch (error) {
    console.error('Error updating eye:', error);
    res.status(500).json({ message: 'Error updating eye' });
  }
});
//update general
app.put('/updategeneral/:name', async (req, res) => {
  const generalName = req.params.name;
  const { image, description, experience, address } = req.body;

  try {
    let general = await GeneralModel.findOne({ name: generalName });

    if (!general) {
      return res.status(404).json({ message: 'general not found' });
    }

    general.image = image;
    general.description = description;
    general.experience = experience;
    general.address = address;
    general.updatedAt = Date.now();

    await general.save();

    res.status(200).json({ message: 'General updated successfully', general });
  } catch (error) {
    console.error('Error updating general:', error);
    res.status(500).json({ message: 'Error updating general' });
  }
});
//update neurologist
app.put('/updateneurologist/:name', async (req, res) => {
  const neurologistName = req.params.name;
  const { image, description, experience, address } = req.body;

  try {
    let neurologist = await NeurologistModel.findOne({ name: neurologistName });

    if (!neurologist) {
      return res.status(404).json({ message: 'neurologist not found' });
    }

    neurologist.image = image;
    neurologist.description = description;
    neurologist.experience = experience;
    neurologist.address = address;
    neurologist.updatedAt = Date.now();

    await neurologist.save();

    res.status(200).json({ message: 'Neurologist updated successfully', neurologist });
  } catch (error) {
    console.error('Error updating neurologist:', error);
    res.status(500).json({ message: 'Error updating neurologist' });
  }
});
//update orthopedic
app.put('/updateorthopedic/:name', async (req, res) => {
  const orthopedicName = req.params.name;
  const { image, description, experience, address } = req.body;

  try {
    let orthopedic = await OrthopedicModel.findOne({ name: orthopedicName });

    if (!orthopedic) {
      return res.status(404).json({ message: 'orthopedic not found' });
    }

    orthopedic.image = image;
    orthopedic.description = description;
    orthopedic.experience = experience;
    orthopedic.address = address;
    orthopedic.updatedAt = Date.now();

    await orthopedic.save();

    res.status(200).json({ message: 'Orthopedic updated successfully', orthopedic });
  } catch (error) {
    console.error('Error updating orthopedic:', error);
    res.status(500).json({ message: 'Error updating orthopedic' });
  }
});
//update otologist
app.put('/updateotologist/:name', async (req, res) => {
  const otologistName = req.params.name;
  const { image, description, experience, address } = req.body;

  try {
    let otologist = await OtologistModel.findOne({ name: otologistName });

    if (!otologist) {
      return res.status(404).json({ message: 'otologist not found' });
    }

    otologist.image = image;
    otologist.description = description;
    otologist.experience = experience;
    otologist.address = address;
    otologist.updatedAt = Date.now();

    await otologist.save();

    res.status(200).json({ message: 'Otologist updated successfully', otologist });
  } catch (error) {
    console.error('Error updating otologist:', error);
    res.status(500).json({ message: 'Error updating otologist' });
  }
});
// update surgon
app.put('/updatesurgon/:name', async (req, res) => {
  const surgonName = req.params.name;
  const { image, description, experience, address } = req.body;

  try {
    let surgon = await SurgonModel.findOne({ name: surgonName });

    if (!surgon) {
      return res.status(404).json({ message: 'surgon not found' });
    }

    surgon.image = image;
    surgon.description = description;
    surgon.experience = experience;
    surgon.address = address;
    surgon.updatedAt = Date.now();

    await surgon.save();

    res.status(200).json({ message: 'Surgon updated successfully', surgon });
  } catch (error) {
    console.error('Error updating surgon:', error);
    res.status(500).json({ message: 'Error updating surgon' });
  }
});
//signup api
app.post('/signup', async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const oldUser = await UserModel.findOne({ email });
    if (oldUser) {
      return res.status(400).send({ error: "User Already Exists" });
    }

    await UserModel.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
    });

    res.status(200).send({ status: 'ok' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: 'error' });
  }
});
//login api

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Request body:', req.body); // Log the request body

  if (!email || !password) {
    return res.status(400).send({ error: 'Email and password are required' });
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).send({ error: 'Wrong email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send({ error: 'Wrong email or password' });
    }

    res.status(200).send({ status: 'ok', user: { fname: user.fname, lname: user.lname, email: user.email } });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send({ status: 'error', error: 'Internal server error' });
  }
});
//add bookings

app.post('/addbooking', async (req, res) => {
  try {
    const { doctorName, doctorImage, patientName, date, time } = req.body;
    const booking = new BookingModel({
      doctorName,
      doctorImage,
      patientName,
      date,
      time,
    });
    await booking.save();
    res.status(201).json({ message: "Appointment booked successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//get doctors
app.get('/getbookings/description/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const bookings = await BookingModel.find({ doctorName: name });
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: error.message });
  }
});




// delete bookings
app.delete('/deletebooking/:name', async (req, res) => {
  const name = req.params.name;
  console.log(`Deleting booking with name: ${name}`);
  try {
    const deletedBooking = await BookingModel.findOneAndDelete({ name: name });
    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});