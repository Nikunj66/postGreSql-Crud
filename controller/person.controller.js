const pool=require('../db');

exports.getAll=async(req,res)=>{
    try {
        const getData= await pool.query("SELECT * from tbl_person");
        res.json(getData.rows);
    } catch (error) {
        console.log(error);
    }
    
};

exports.getOne=async(req,res)=>{
    try {
        const getOneData=await pool.query("SELECT * from tbl_person where id="+req.params.id);
        res.json(getOneData.rows);
    } catch (err) {
        console.log(err);
    }
}

exports.addPerson=async(req,res)=>{
    try {
        const add=await pool.query("INSERT INTO tbl_person values("+req.body.id+",'"+req.body.name+"',"+req.body.age+")");
        res.json(add);
    } catch (error) {
        console.log(error);
    }
}

exports.deletePerson=async(req,res)=>{
    try {
        const dp=await pool.query("DELETE from tbl_person where id="+req.params.id);
        res.json(dp);
    } catch (error) {
        console.log(error);
    }
};

exports.updatePerson=async(req,res)=>{
    try {
        const up=await pool.query("UPDATE tbl_person SET name='"+req.query.name+"',age="+req.query.age+" WHERE id="+req.params.id);
        res.json(up);
    } catch (error) {
        console.log(error);
        
    }
}