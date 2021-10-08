const MongoClient=require("mongodb").MongoClient;
const url="mongodb://localhost:27017/shopping_database";

MongoClient.connect(url,function(err,client){
    if(err) throw err;

    var myobj=[
        {firstname:"Nikhil",lastname:"Jindal",email:"nikhiljindal79@gmail.com",profileimage:"https://cdn-icons-png.flaticon.com/512/149/149071.png",role:"Sales Manager"},
        {firstname:"Siddharth",lastname:"Boora",email:"siddharth79@gmail.com",profileimage:"https://cdn-icons-png.flaticon.com/512/149/149071.png",role:"Administrator"},
        {firstname:"Vedansh",lastname:"Singh",email:"vedansh79@gmail.com",profileimage:"https://cdn-icons-png.flaticon.com/512/149/149071.png",role:"Buyer"},
        {firstname:"Aryan",lastname:"Awasthi",email:"aryan79@gmail.com",profileimage:"https://cdn-icons-png.flaticon.com/512/149/149071.png",role:"Buyer"},
        {firstname:"Mohit",lastname:"Sharma",email:"mohit79@gmail.com",profileimage:"https://cdn-icons-png.flaticon.com/512/149/149071.png",role:"Web Producer"},
        {firstname:"Annanya",lastname:"Singh",email:"annanya79@gmail.com",profileimage:"https://cdn-icons-png.flaticon.com/512/149/149071.png",role:"RnR Moderator"},
    ];

    const db=client.db("shopping_database");
    db.collection("Users").insertMany(myobj,function(err,res){
        if(err)throw err;
        console.log("No. of records inserted: "+res.insertedCount);
    })

    db.collection("Users").find({}).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
    })

    db.collection("Users").updateOne({firstname:"Nikhil"},{$set:{email:"leoeternal99@gmail.com"}},function(err,updated){
        if(err)throw err;
        console.log(updated);
    })

    db.collection("Users").deleteOne({email:"siddharth79@gmail.com"},function(err,deleted){
        if(err) throw err;
        console.log(deleted);
        client.close();
    })
    
})