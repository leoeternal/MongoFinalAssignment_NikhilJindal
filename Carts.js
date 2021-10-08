const MongoClient=require("mongodb").MongoClient;
const url="mongodb://localhost:27017/shopping_database";

MongoClient.connect(url,function(err,client){
    if(err) throw err;

    const cartsData=[
        {product:[{name:"iphone 13"},{name:"Nivia Football"}],user:"615ea6a182c627e3b4e638e4",productQuantity:[{name:"iphone 13",quanity:2},{name:"Nivia Football",quanity:5}]
        ,baseprice:201500,sellprice:159120, totalprice:159120 },
        {product:[{name:"Samsung M30s"}],user:"615ea6a182c627e3b4e638e6",productQuantity:[{name:"Samsung M30s",quanity:1}]
        ,baseprice:17000,sellprice:14390, totalprice:14390 },
        {product:[{name:"iphone 13"},{name:"Nivia Football"},{name:"Samsung M30s"}],user:"615ea6a182c627e3b4e638e7",productQuantity:[{name:"iphone 13",quanity:2},{name:"Nivia Football",quanity:5},{name:"Samsung M30s",quanity:1}]
        ,baseprice:218500,sellprice:173510, totalprice:173510 }
    ]

    const db=client.db("shopping_database");

    db.collection("Carts").insertMany(cartsData,function(err,res){
        if(err) throw err;
        console.log("No. of records inserted: "+res.insertedCount);
    })

    db.collection("Carts").find({}).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
    })

    db.collection("Carts").updateOne({user:"615ea6a182c627e3b4e638e6"},{$set:{sellprice:160000}},function(err,updated){
        if(err)throw err;
        console.log(updated);
    })

    db.collection("Carts").deleteOne({user:"615ea6a182c627e3b4e638e4"},function(err,deleted){
        if(err) throw err;
        console.log(deleted);
        client.close();
    })
})