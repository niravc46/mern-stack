import mongoose from 'mongoose';

export const Connection = async (USERNAME ,PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce-web.gphuzli.mongodb.net/?retryWrites=true&w=majority`;
    try {   
        mongoose.set('strictQuery',false);
        await  mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });   
        console.log("Databse connect successfully");
    } catch (error) {   
        console.log('Error: ', error.message);
    }
}
export default Connection;