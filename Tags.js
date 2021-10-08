const MongoClient=require("mongodb").MongoClient;
const url="mongodb://localhost:27017/shopping_database";

MongoClient.connect(url,function(err,client){
    if(err) throw err;

    const tagsData=[
        {name:"mobile",slug:"21/31aks0"},
        {name:"iphone",slug:"65/13qwq1"},
        {name:"electronics",slug:"43/49mks2"},
        {name:"smartphone",slug:"91/99fde3"},
        {name:"football",slug:"10/21grh4"},
        {name:"table tennis",slug:"99/65kik5"},
        {name:"ball",slug:"49/43oiy6"},
        {name:"board",slug:"65/91ewq8"},
        {name:"tshirts",slug:"32/77juj2"},
    ]

    const db=client.db("shopping_database");

    db.collection("Tags").insertMany(tagsData,function(err,res){
        if(err) throw err;
        console.log("No. of records inserted: "+res.insertedCount);
    })

    db.collection("Tags").find({}).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
    })

    db.collection("Tags").updateOne({slug:"21/31aks0"},{$set:{name:"cricket"}},function(err,updated){
        if(err)throw err;
        console.log(updated);
    })

    db.collection("Tags").deleteOne({slug:"65/91ewq8"},function(err,deleted){
        if(err) throw err;
        console.log(deleted);
        client.close();
    })
})