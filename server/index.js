var express = require('express');//imports express js
var bodyParser = require('body-parser');//enable the express app to read the incoming body
var logger = require('morgan');//for logging all http request 
var methodOverride = require('method-override')//allows to use put and delete request
var mysql = require('mysql');
var cors = require('cors');//cross origin resource sharing enables ionic to communicate with server
var Bcrypt = require('bcrypt');
var http = require('http');
var fs = require('fs');


var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());
app.use(cors());
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
   database:"swiftcare",
 
  });
 

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");})

    // app.get('/main',(req,res)=>{
    //     res.sendfile(__dirname + "/main.html");
    // })}

  



    app.post('/patient_reg',(req,res)=>{
        const name=req.body.name
        const email=req.body.email
        const address=req.body.address
        const mobile=req.body.mobile
        const password=req.body.password
        const age=req.body.age
        const sex=req.body.sex
       
     
        var salt = Bcrypt.genSaltSync();
        var encryptedPassword = Bcrypt.hashSync(password, salt);
        var sql_reg='SELECT email FROM patient WHERE email="'+email+'"'
        con.query(sql_reg, function (err,result) {
            if(result.length>0)
            {
                console.log(result)
                console.log("duplicate entry not allowed!")
                res.json({
                    status:409,
                    success:false
                })}
                else{
        var sql='INSERT INTO patient (password,name,mobile,email,address,age,sex) VALUES ("'+encryptedPassword+'","'+name+'","'+mobile+'","'+email+'","'+address+'","'+age+'","'+sex+'")'
            con.query(sql, function (err, result) {
                if (err){
                    console.log(err);
                    res.json({
                        success:false,
                        status:400
                    })
                }
                else 
                {
                    res.json({
                        status:200,
                        success:true
     
                    })
                   
                console.log("Data Successfully Entered!");}
              });
             
            }})});
    

    app.post('/patient_login',(req,res)=>{
        const email=req.body.email
        const password=req.body.password
        var hashedPassword;
        var sql='SELECT password,email FROM patient WHERE email="'+email+'"'
            con.query(sql, function (err,result) {
                if (result.length<1) {
                    //console.log(err);
                    res.json({
                        status:404,
                        success:false
                    })
                 }
                 else {
                     if(result[0].password==null)
                     {
                     res.json({
                        status:400,
                        success:false
                     })
                    }
                    else{
                hashedPassword = result[0].password;	
                name=result[0].name;
                patient_id=result[0].patient_id;
                mobile=result[0].mobile;
                email1=result[0].email;
                  Bcrypt.compare(password, hashedPassword, (err, result) => {
                      if (err) {
                         console.log('Bcrypt - error - ', err);
                         //res.status(400);
                         res.json({
                             status:400,
                             success:false
                         })
                      } else {
                         console.log('Bcrypt - result - ', result);
                         if(result==true){
                      
                            res.json({
                                status:200,
                                success:true,
                               name:name,
                               mobile:mobile,
                               patient_id:patient_id,
                               email:email1
                               
                            });
                            
                     }
                         else {
                           //res.status(400);
                           res.json({
                               status:400,
                               success:false
                           })
                         }
                      }})}}
                     
   })

});

app.post('/health_reg',(req,res)=>{
   
    const blood_group=req.body.blood_group
    const previous_disease=req.body.previous_disease
    const height=req.body.height
    const weight=req.body.weight
    
    var sql='INSERT INTO '+patient+' (blood_group,previous_disease,height,weight) VALUES ("'+blood_group+'","'+previous_disease+'","'+height+'","'+weight+'")'
        con.query(sql, function (err, result) {
            if (err){
                console.log(err);
                res.json({
                    success:false,
                    status:400
                })
            }
            else
            {
                res.json({
                    success:true,
                    status:200
                })
            console.log("Data successfully entered!");}
          });});



     
app.get('/doctor_select',(req,res)=>{
   
    
    var sql='SELECT doctor_name,doctor_id,hospital_name,qualification FROM doctor'
        con.query(sql, function (err, result) {
            if (err){
                console.log(err);
                res.json({
                    success:false,
                    status:400
                })
            }
            else
            { 
                res.json(result);
            console.log("Here are the doctors!");}
          });});   
          
          

          app.post('/slot',(req,res)=>{
            const doctor_name=req.body.doctor_name
            const doctor_id=req.body.doctor_id

            console.log(doctor_id);

                        var sql='SELECT slot FROM '+doctor_name+' WHERE doctor_id='+doctor_id+''
                        con.query(sql, function (err,result) {
                            if (err) {
                                console.log(err);}
                                else{
                               console.log(result);
                               res.json(result);
                                }
                    })
                })


                app.post('/prescription',(req,res)=>{
            
                    const id=req.body.id
                    const name=req.body.name
                    const disease=req.body.disease
                    const medicine=req.body.medicine
                    const quantity=req.body.quantity
                
                  
                    var sql='INSERT INTO '+name+' (disease,medicine,quantity) VALUES ("'+disease+'","'+medicine+'","'+quantity+'")'
                        con.query(sql, function (err, result) {
                            if (err){
                                console.log(err);
                                res.json({
                                    success:false,
                                    status:400
                                })
                            }
                            else
                            {
                                res.json({
                                    success:true,
                                    status:200
                                })
                            console.log("Prescription added successfully!");}
                          });});




                          app.post('/appointment',(req,res)=>{
            
                            const id=req.body.id
                            const name=req.body.name
                            const date=req.body.date
                           
                        
                          
                            var sql='INSERT INTO '+name+' (date) VALUES ("'+date+'")'
                                con.query(sql, function (err, result) {
                                    if (err){
                                        console.log(err);
                                        res.json({
                                            success:false,
                                            status:400
                                        })
                                    }
                                    else
                                    {
                                        res.json({
                                            success:true,
                                            status:200
                                        })
                                    console.log("Next appoitment successfully marked!");}
                                  });});



                                  app.post('/records',(req,res)=>{

                                    const file_name=req.body.file_name
                                    const name=req.body.name


                                    fs.readFile(`${file_name}`, function(err, result) {

                                        res.writeHead(200, {'Content-Type': 'text/html'});
                                        res.write(result);
                                        return res.end();
                                    })

                                    var sql='INSERT INTO '+name+' (records) VALUES ("'+file_name+'")'
                                    con.query(sql, function (err, result) {
                                        if (err){
                                            console.log(err);
                                            res.json({
                                                success:false,
                                                status:400
                                            })
                                        }
                                        else
                                        {
                                            res.json({
                                                success:true,
                                                status:200
                                            })
                                        console.log("File Uploaded Successfully!");}
                                      });
                                
                                
                                });

                                app.post('/presc',(req,res)=>{
                                    const id=req.body.id;
                                    const dis1=req.body.dis1;
                                    const dis2=req.body.dis2;
                                    const dis3=req.body.dis3;
                                    // var sql='UPDATE '+name+' SET sugar ="'+sugar+'" , wbc = "'+wbc+'", rbc = "'+rbc+'", cholesterol = "'+cholesterol+'"  WHERE id="'+id+'"'
                                    var sql='UPDATE patient SET dis1="'+dis1+'",dis2="'+dis2+'",dis3="'+dis3+'" WHERE id="'+id+'"';
                                    con.query(sql, function (err, result) {
                                        if (err){
                                            console.log(err);
                                            res.json({
                                                success:false,
                                                status:400
                                            })
                                        }
                                        else
                                        {
                                            res.json({
                                                success:true,
                                                status:200
                                            })
                                        console.log("Report Successfully Updated");}
                                      });




                                })

                                app.post('/report',(req,res)=>{
                                    const id=req.body.id
                                    const insulin=req.body.insulin
                                    const wbc=req.body.wbc
                                    const rbc=req.body.rbc
                                    const bp=req.body.bp
                                    const hg=req.body.hg
                                
                                    var sql='UPDATE patient SET insulin="'+insulin+'",wbc="'+wbc+'",rbc="'+rbc+'",bp="'+bp+'",hg="'+hg+'" WHERE id="'+id+'"';
                            
                                        con.query(sql, function (err, result) {
                                            if (err){
                                                console.log(err);
                                                res.json({
                                                    success:false,
                                                    status:400
                                                })
                                            }
                                            else
                                            {
                                                res.json({
                                                    success:true,
                                                    status:200
                                                })
                                            console.log("Report Successfully Updated");}
                                          });});












                          app.post('/heat',(req,res)=>{
                            const name=req.body.name
                            const id=req.body.id
                
                           
                
                                        var sql='SELECT longitude,latitude FROM patient WHERE id='+id+''
                                        con.query(sql, function (err,result) {
                                            if (err) {
                                                console.log(err);}
                                                else{
                                               console.log(result);
                                               res.json(result);
                                                }
                                    })
                                });


                                app.post('/qr',(req,res)=>{
                                    const id=req.body.id
                        
                                   
                        
                                                var sql='SELECT id,name,bg,age,mobile,hg,rbc,wbc,bp,insulin,dis1,dis2,dis3 FROM patient WHERE id='+id+''
                                                con.query(sql, function (err,result) {
                                                    if (err) {
                                                        console.log(err);}
                                                        else{
                                                            
                                                       console.log(result);
                                                       res.json(result);
                                                        }
                                            })
                                        })


            
            

app.listen(process.env.PORT||5060);
