const MongoClient=require("mongodb").MongoClient;
const url="mongodb://localhost:27017/shopping_database";

MongoClient.connect(url,function(err,client){
    if(err) throw err;

    const orderData=[
        {userId:"615ea6a182c627e3b4e638e4",totalItems:2,products:[{name:"iphone 13"},{name:"Nivia Football"}],billingAddress:"Ghaziabad, Uttar Pradesh"
        ,shippingAddress:"Ghaziabad, Uttar Pradesh",transactionStatus:"failed",paymentMode:"COD",paymentStatus:"pending",orderStatus:"not delivered" },
        {userId:"615ea6a182c627e3b4e638e6",totalItems:1,products:[{name:"Samsung M30s"}],billingAddress:"Delhi"
        ,shippingAddress:"Delhi",transactionStatus:"success",paymentMode:"UPI",paymentStatus:"done",orderStatus:"delivered" },
        {userId:"615ea6a182c627e3b4e638e7",totalItems:3,products:[{name:"iphone 13"},{name:"Nivia Football"},{name:"Samsung M30s"}],billingAddress:"Lucknow"
        ,shippingAddress:"Lucknow",transactionStatus:"failed",paymentMode:"Net Banking",paymentStatus:"done",orderStatus:"pending" }
    ]

    const db=client.db("shopping_database");

    db.collection("Orders").insertMany(orderData,function(err,res){
        if(err) throw err;
        console.log("No. of records inserted: "+res.insertedCount);
    })

    db.collection("Orders").find({}).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
    })

    db.collection("Orders").updateOne({userId:"615ea6a182c627e3b4e638e4"},{$set:{totalItems:4}},function(err,updated){
        if(err)throw err;
        console.log(updated);
    })

    db.collection("Orders").deleteOne({userId:"615ea6a182c627e3b4e638e7"},function(err,deleted){
        if(err) throw err;
        console.log(deleted);
        client.close();
    })
})