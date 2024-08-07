import "jest";
import mongoose from "mongoose";



beforeAll(async () => {

})



afterAll(async () => {

    await mongoose.connection.close();
})