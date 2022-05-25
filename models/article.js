import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    titel: {
        type: String,
        required: true,
    },
    undertitel: {
        type: String,
    },
    journalist: {
        type: String,
    },
    tekst: {
        type: String,
        required: true,
    },
    type:{
        type: String,
    }
});

const Artikel = mongoose.model("Artikel", articleSchema);

export default Artikel

