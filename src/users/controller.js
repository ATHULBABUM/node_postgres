const pool = require("../../db");
const queries = require("../users/queries");

const getAllUsers= (req, res) => {
    // let allData = [
    //     [ "name", "age", "cast" ],
    //     [ "Am", 34, "sdxcx" ],
    //     [ "sd", 23, "xzc" ],
    //     [ "sds", 235, "abcd" ]
    // ];
    // res.send(allData);

    pool.query(queries.getAllUsers, (err, result) => {
    console.log("works here", err, " = === = = = = == ", result)
        if (err) throw err;
        res.send(result.rows);
    } );
};

module.exports = {
    getAllUsers
}