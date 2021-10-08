const MongoClient=require("mongodb").MongoClient;
const url="mongodb://localhost:27017/shopping_database";

MongoClient.connect(url,function(err,client){
    if(err) throw err;

    const categoryData=[
        {name:"Electronics",slug:"34/21bbh3",image:"https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg",description:"Electronics consist of all gadgets like smartphones, laptops, computers, gaming devices etc"},
        {name:"Sports",slug:"90/76yuh4",image:"https://mongooseagency.com/files/3415/9620/1413/Return_of_Sports.jpg",description:"Sports consist of all items like football, gaurds, bat, ball, table tennis table etc"}
    ]

    const db=client.db("shopping_database");

    db.collection("Categories").insertMany(categoryData,function(err,res){
        if(err) throw err;
        console.log("No. of records inserted: "+res.insertedCount);
    })

    db.collection("Categories").find({}).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
    })

    db.collection("Categories").updateOne({slug:"90/76yuh4"},{$set:{image:"https://etimg.etb2bimg.com/photo/74881928.cms"}},function(err,updated){
        if(err)throw err;
        console.log(updated);
    })

    db.collection("Categories").deleteOne({slug:"90/76yuh4"},function(err,deleted){
        if(err) throw err;
        console.log(deleted);
        client.close();
    })
})