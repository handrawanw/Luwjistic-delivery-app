const express=require("express");
const Router=express.Router();

// Router file
const UsersRouter=require("./users");
const RoleRouter=require("./role");
const ProductRouter=require("./product");
const TransaksiRouter=require("./transaksi");
const PembayaranRouter=require("./pembayaran");
const Wallet=require("./wallet");
const Other=require("./other");
const Pengiriman=require("./pengiriman");
const Kurir=require("./kurir");
// Router file

// Register Router
Router.use("/user",UsersRouter);
Router.use("/role",RoleRouter);
Router.use("/product",ProductRouter);
Router.use("/transaksi",TransaksiRouter);
Router.use("/pembayaran",PembayaranRouter);
Router.use("/wallet",Wallet);
Router.use("/other",Other);
Router.use("/pengiriman",Pengiriman);
Router.use("/kurir",Kurir);
// Register Router

module.exports=Router;
