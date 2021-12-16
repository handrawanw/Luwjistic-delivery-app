const express=require("express");
const Router=express.Router();

const {updatePengiriman,trackPengiriman,pemilihanKurir}=require("../controller/pengiriman");

// Authentikasi
const {AuthJWT}=require("../middleware/auth");
// Authentikasi

Router.get("/:id_pengiriman",trackPengiriman);

Router.patch("/edit/:id_pengiriman",AuthJWT,updatePengiriman);
Router.patch("/kurir/:id_pengiriman",AuthJWT,pemilihanKurir);

module.exports=Router;

