const express=require('express');
const { getAll, getOne, addPerson, deletePerson, updatePerson } = require('../controller/person.controller');
const router=express.Router();

router.get("/",getAll);
router.get("/:id",getOne);
router.post("/",addPerson);
router.delete("/:id",deletePerson);
router.patch("/:id",updatePerson);
module.exports=router;
