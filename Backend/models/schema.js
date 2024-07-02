const mongoose=require('mongoose')

//dentist
const DentistSchema = new mongoose.Schema({
    id: String,
    image: String,
    description: String,
    name: String,
    experience: String,
    address: String
  });
  
  const DentistModel = mongoose.model('dentists', DentistSchema);
//cardio
const CardiologistSchema=new mongoose.Schema({
    id: String,
    image : String,
    description :String,
    name : String,
    experience: String,
    address: String  
    

})

const CardiologistModel=mongoose.model("cardiologists",CardiologistSchema)
//orthopedic
const OrthopedicSchema=new mongoose.Schema({
    id: String,
    image : String,
    description :String,
    name : String,
    experience: String,
    address: String  
    

})

const OrthopedicModel=mongoose.model("orthopedics",OrthopedicSchema)
//neurologist
const NeurologistSchema=new mongoose.Schema({
    id: String,
    image : String,
    description :String,
    name : String,
    experience: String,
    address: String  
    

})

const NeurologistModel=mongoose.model("neurologists",NeurologistSchema)
//otologist
const OtologistSchema=new mongoose.Schema({
    id: String,
    image : String,
    description :String,
    name : String,
    experience: String,
    address: String  
    

})

const OtologistModel=mongoose.model("otologists",OtologistSchema)
//eye
const EyeSchema=new mongoose.Schema({
    id: String,
    image : String,
    description :String,
    name : String,
    experience: String,
    address: String  
    

})

const EyeModel=mongoose.model("eyes",EyeSchema)
//surgon
const SurgonSchema=new mongoose.Schema({
    id: String,
    image : String,
    description :String,
    name : String,
    experience: String,
    address: String  
    

})

const SurgonModel=mongoose.model("surgons",SurgonSchema)
//general
const GeneralSchema=new mongoose.Schema({
    id: String,
    image : String,
    description :String,
    name : String,
    experience: String,
    address: String  
    

})

const GeneralModel=mongoose.model("generals",GeneralSchema)
//patients

const patientSchema = new mongoose.Schema({
    patientName: String,
    phoneNumber: String,
    date: String,
    time: String,
    note: String,
    doctor: String,
  });
  
  const PatientModel = mongoose.model('patients', patientSchema);
  



//users

const usersSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: {type:String, unique:true},
    password: String,
  });
  
  const UserModel = mongoose.model('users', usersSchema);
//bookings
const bookingSchema = new mongoose.Schema({
    doctorName: String,
    doctorImage: String,
    doctorDescription: String,
    patientName: String,
    date: String,
    time: String,
  });
  const BookingModel = mongoose.model('bookings', bookingSchema);
  //doctor

//   const DoctorSchema = new mongoose.Schema({
//     name: String,
//     image: String,
//     description: String,
//     experience: String,
//     address: String,
//   });
//   const DoctorModel = mongoose.model('doctors', DoctorSchema);

module.exports={DentistModel:DentistModel,
CardiologistModel:CardiologistModel,
OrthopedicModel:OrthopedicModel,
NeurologistModel:NeurologistModel,
OtologistModel:OtologistModel,
EyeModel:EyeModel,
SurgonModel:SurgonModel,
GeneralModel:GeneralModel,
PatientModel:PatientModel,
 UserModel:UserModel,
 BookingModel:BookingModel,
//  DoctorModel:DoctorModel
};