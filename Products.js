const MongoClient=require("mongodb").MongoClient;
const url="mongodb://localhost:27017/shopping_database";

MongoClient.connect(url,function(err,client){
    if(err) throw err;

    var productData=[
        {name:"Nivia Football",thumbnail:"https://m.media-amazon.com/images/I/61R-VccFN9L._SX425_.jpg",productGallery:[
            "https://images.news18.com/ibnlive/uploads/2021/08/football-16287529283x2.jpg",
            "https://m.media-amazon.com/images/I/71SdjGyL-JL._SL1500_.jpg"
        ],description:"It is a NIVIA football. Medium in size and very durable.",baseprice:1100,sellprice:800,categoryName:"90/76yuh4"
        ,tags:["football","sports","nivia","soccer"],additionalInformation:"none"},

        {name:"iphone 13",thumbnail:"https://m.media-amazon.com/images/I/61R-VccFN9L._SX425_.jpg",productGallery:[
            "https://images.news18.com/ibnlive/uploads/2021/08/football-16287529283x2.jpg",
            "https://m.media-amazon.com/images/I/71SdjGyL-JL._SL1500_.jpg"
        ],description:"Latest iphone 13 with best camera and very durable",baseprice:98000,sellprice:77560,categoryName:"34/21bbh3"
        ,tags:["iphone","mobile","electronics","apple"],additionalInformation:"none"},

        {name:"Samsung M30s",thumbnail:"https://m.media-amazon.com/images/I/61R-VccFN9L._SX425_.jpg",productGallery:[
            "https://images.news18.com/ibnlive/uploads/2021/08/football-16287529283x2.jpg",
            "https://m.media-amazon.com/images/I/71SdjGyL-JL._SL1500_.jpg"
        ],description:"Latest samsung m30s with best camera and very durable",baseprice:17000,sellprice:14390,categoryName:"34/21bbh3"
        ,tags:["samsung","mobile","electronics","m30s"],additionalInformation:"none"},

    ]

    const db=client.db("shopping_database");

    db.collection("Products").insertMany(productData,function(err,res){
        if(err) throw err;
        console.log("No. of records inserted: "+res.insertedCount);
    })

    db.collection("Products").find({}).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
    })

    db.collection("Products").updateOne({name:"Nivia Football"},{$set:{sellprice:1000}},function(err,updated){
        if(err)throw err;
        console.log(updated);
    })

    db.collection("Products").deleteOne({name:"Nivia Football"},function(err,deleted){
        if(err) throw err;
        console.log(deleted);
        client.close();
    })
})