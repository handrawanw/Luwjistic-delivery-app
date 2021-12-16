const express=require("express");
const Router=express.Router();

const {KurirDelete,KurirGet,KurirGetOne,KurirUpdate}=require("../controller/kurir");

// Authentikasi JWT
const {AuthJWT}=require("../middleware/auth");
// Authentikasi JWT

Router.get("/",AuthJWT,KurirGet);

Router.patch("/edit/:id_kurir",AuthJWT,KurirUpdate);

Router.delete("/remove/:id_kurir",AuthJWT,KurirDelete);

module.exports=Router;
