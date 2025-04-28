const bodyParser = require("../utils/bodyParser")
const crypto = require("crypto");
const fs = require("fs");

const postRequest = async (req, res) => {
    if (req.url === "/api/movies") {
        const body = await bodyParser(req)

        const keys = [ "title" , "year", "rating", "description" , "language" , "director"]


        console.log("gelen body", body)

        if (
            keys.some((key) => !body[key]) || 
            !body.genre.length > 0 ||
            !body.cast.length > 0
        ){
            res.writeHead(404);
            res.end("Lutfen zorunlu olan butun alanlari tamamlayin");
            return; }
        

        body.id = crypto.randomUUID();

        // json dosyasından verileri al
        let data = fs.readFileSync("./data/movies.json", "utf-8");
        data = JSON.parse(data);
    
        // mevcut filmlerin üzerine yeni film ekle
        data.push(body);
    
        // json dosyasını güncelle
        fs.writeFileSync("./data/movies.json", JSON.stringify(data));
    
        // client'a cevap gönder
        res.writeHead(201);
        res.end(JSON.stringify(body));
    
    }
    else {
        res.writeHead(404)
        res.end("Gecer yola istek atildi")
    } 
};

module.exports = postRequest