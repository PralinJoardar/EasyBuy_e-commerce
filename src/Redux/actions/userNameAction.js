import { USER_NAME } from "../constants";
export const userNameAction = (userName) => {
    return{
        type:USER_NAME,
        payload:userName
    }
};
