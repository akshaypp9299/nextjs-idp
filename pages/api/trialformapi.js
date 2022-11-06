import axios from "axios";

const URL="https://login.xecurify.com/moas/rest/customer/contact-us";

export const dataHandler = async (data) =>{
    // const data1 = JSON.stringify(data);
    try {
        return await axios.post(`${URL}`,data,()=>{
        });
    } catch (error) {
        console.log("error ",error);
    }
}