const MongoClient=require("mongodb").MongoClient;
const url="mongodb://localhost:27017/shopping_database";

MongoClient.connect(url,function(err,client){
    if(err) throw err;

    const rolesData=[
        {name:"buyer",slug:"123"},
        {name:"admininstrator",slug:"967"},
        {name:"web producer",slug:"409"},
        {name:"seller",slug:"119"},
        {name:"exporter",slug:"522"}
    ]

    const db=client.db("shopping_database");

    db.collection("Roles").insertMany(rolesData,function(err,res){
        if(err) throw err;
        console.log("No. of records inserted: "+res.insertedCount);
    })

    db.collection("Roles").find({}).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
    })

    db.collection("Roles").updateOne({name:"seller"},{$set:{slug:"905"}},function(err,updated){
        if(err)throw err;
        console.log(updated);
    })

    db.collection("Roles").deleteOne({name:"buyer"},function(err,deleted){
        if(err) throw err;
        console.log(deleted);
        client.close();
    })
})