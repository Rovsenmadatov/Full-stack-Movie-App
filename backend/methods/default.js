const defaultRequest = (req, res) => {
    res.statusCode = 404
    res.write(JSON.stringify({ message: "istek adresi tanimsiz" }))
    res.end("Istek turu algilandi")
}

module.exports = defaultRequest;