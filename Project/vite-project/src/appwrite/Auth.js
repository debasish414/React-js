import conf from '../conf/conf'
import { Client,Account, ID } from 'appwrite';

export class AuthService{
     client = new Client()
     Account;
     constructor(){
        this.client
        .setEndpoint(conf.appWriteURL)
        .setProject(conf.appWriteProjectID)
        this.Account = new Account(this.client)
     }


     async createAccount ({email, password, name}){
        try {
            const CreateAccount= await this.Account.create(ID.unique(), email, password, name)
            if (CreateAccount) {
                return this.logIn({email, password})
            } else {
                return CreateAccount
            }
            
        } catch (error) {
            throw error
        }
     }

     async logIn ({email, password}){
        try {
            return await this.Account.createEmailSession(email, password)
            
        } catch (error) {
            throw error
        }
     }

     async GetCurrentUser (){
        try {
            return await this.Account.get()
            
        } catch (error) {
            // throw error
            console.log("the Error is :", error);
        }

        return null
     }

     async logOut(){
        try {
            // await this.Account.deleteSession('current') /* for single value */
            await this.Account.deleteSessions()
            return true
        } catch (error) {
            throw error
        }
     }
     
}


const authService = new AuthService()

export default authService 