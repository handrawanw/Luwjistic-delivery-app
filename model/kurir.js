const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const KurirSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    status:{
        type:String,
        enum:["open","close"],
        default:"open"
        // jika open kurir sedang nganggur nganter
        // kalau close dia sedang antar pesanan
    },
    alamat_kurir:{
        type:String,
        required:["alamat_kurir harus di isi",true]
    },
    status_pernikahan:{
        type:String,
        enum:["lajang","menikah"],
        required:["status_pernikahan harus di isi",true]
    },
    no_hp:{
        type:String,
        required:["no_hp harus di isi",true]
    },
    kebangsaan:{
        type:String,
        default:"Indonesia"
    }
},{
    timestamps:{
        createdAt:"createdAt"
    }
});

module.exports=mongoose.models.kurir||mongoose.model("kurir",KurirSchema);
