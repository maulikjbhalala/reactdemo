let express=require('express')
let app=express();

let bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

let morgan=require('morgan');
app.use(morgan('dev'));


app.get('/myData',async(req,res)=>
{

    let demoArra=[
        {

            name:'mj',
            email:'myemail@gmail.com'

        },
        {

            name:'mj2',
            email:'myemail2@gmail.com'

        }
    ];


    return res.json(demoArra);

});



