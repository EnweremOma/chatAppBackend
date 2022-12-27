import mongoose from "mongoose";
import {config} from "./config";
import bluebird  from "bluebird";

;(<any>mongoose).Promise = bluebird

 mongoose.set('strictQuery', false);

mongoose
    .connect(config.mongo.url)
    .then(() => {
        console.log('connected to database');
    })
    .catch((error) => {
        console.log(error);
    });
    
   