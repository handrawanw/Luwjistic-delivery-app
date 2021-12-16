const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const PengirimanSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    kurir:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    media_pengiriman:{
        type:String,
        default:"Kurir PT"
    },
    status_pengiriman:{
        type:String,
        enum:["pending","sedang dikemas","sedang dikirim","telah diterima"],
        default:"pending"
    },
    id_transaksi:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
},{
    timestamps:{
        createdAt:"createdAt"
    }
});

module.exports=mongoose.models.pengiriman||mongoose.model("pengiriman",PengirimanSchema);
