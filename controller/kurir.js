const KurirModel = require("../model/kurir");

class Kurir {

    static KurirUpdate(req, res, next) {
        const { role, id } = req.decoded;
        const { id_kurir } = req.params;
        if(role&&role.permission.includes("UPDATE")){
            let field={...req.body};
            if(field.hasOwnProperty("user")){
                delete field["user"];
            }
            KurirModel.findOneAndUpdate({ _id: id_kurir },field, { new: true, upsert:false }).then((data) => {
                res.status(200).json({
                    message: "Kurir berhasil diupdate",
                    payload: data
                });
            }).catch(next);
        }else{
            res.status(403).json({
                message: "Anda tidak di izinkan untuk mengedit Kurir",
                payload: null
            });
        }
    }

    static KurirGet(req, res, next) {
        const {skip,limit}=req.query;
        KurirModel.aggregate([
            {
                $skip:skip?Number(skip):0
            },{
                $limit:limit?Number(limit):10
            }
        ]).then((data) => {
            res.status(200).json({
                message: "List Kurir berhasil ditampilkan",
                payload: data.length>0?data:[]
            });
        }).catch(next);
    }

    static KurirGetOne(req, res, next) {
        const { id_kurir } = req.params;
        KurirModel.findOne({ _id: id_kurir }).then((data) => {
            res.status(200).json({
                message: "Kurir berhasil ditampilkan",
                payload: data
            });
        }).catch(next);
    }

    static KurirDelete(req, res, next) {
        const { role } = req.decoded;
        const { id_kurir } = req.params;
        if (role && role.permission.includes("DELETE")) {
            /*
            User yang di izinkan untuk menghapus data Kurir
            */
            KurirModel.findOneAndDelete({ _id: id_kurir }).then((data) => {
                res.status(200).json({
                    message: "Kurir berhasil dihapus",
                    payload: data
                });

            }).catch(next);


        } else {
            res.status(403).json({
                message: "Anda tidak di izinkan untuk menghapus Kurir",
                payload: null
            });
        }
    }

}

module.exports = Kurir;