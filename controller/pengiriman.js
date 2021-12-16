const PengirimanModel=require("../model/pengiriman");
const Kurir=require("../model/kurir");

class Pengiriman {

    static pemilihanKurir(req,res,next){
        const {id_pengiriman}=req.params;
        Kurir.findOne({status:"open"}).populate("user",["-password"]).then(async(data)=>{
            if(data){
                let PengirimanUpdate=await PengirimanModel.findOneAndUpdate({_id:id_pengiriman,status_pengiriman:"pending"},{kurir:data.user,status_pengiriman:"sedang dikemas"},{new:true});
                if(PengirimanUpdate){
                    res.status(200).json({
                        message:`Kurir berhasil dipilih ${data.user.username} siap mengatar pesanan Order-${PengirimanUpdate._id}`,
                        payload:PengirimanUpdate
                    });
                }else{
                    throw new Error("Pengiriman ini sudah ada kurirnya");
                }
            }else{
                throw new Error("Maaf kurir tidak ada yang open antar untuk saat ini");
            }
        }).catch(next);
    }

    static updatePengiriman(req,res,next){
        const {id_pengiriman}=req.params;
        const {id,role}=req.decoded;
        const {status_pengiriman}=req.body;
        // fungsi ini hanya dapat diupdate oleh kurir di role kurir 30 di table role.js
        if(role&&role.role_number===30&&role.permission.includes("UPDATE")){
            PengirimanModel.findOneAndUpdate({_id:id_pengiriman,kurir:id},{status_pengiriman},{new:true}).then((data)=>{
                if(data){
                    res.status(200).json({
                        message:"Pengiriman berhasil di update",
                        payload:data
                    });
                }else{
                    throw new Error("Maaf pengiriman ini anda tidak bisa update");
                }
            }).catch(next);
        }else{
            res.status(403).json({
                message:"Anda tidak di izinkan untuk mengupdate pengiriman",
                payload:null
            });
        }
    }

    static trackPengiriman(req,res,next){
        const {id_pengiriman}=req.params;
        PengirimanModel.findOne({_id:id_pengiriman}).then((data)=>{
            res.status(200).json({
                message:"Successfull",
                payload:data
            });
        }).catch(next);
    }

}

module.exports=Pengiriman;