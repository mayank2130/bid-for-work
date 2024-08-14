"use server"

import { signIn } from "../lib/auth"
import { CredentialsSignin } from "next-auth"

const credentialsLogin = async (email: string, password:string) => {

    try {
        await signIn("credentials", {
            email,
            password
        })
    } catch (error) {
        console.log(error)
        const err = error as CredentialsSignin
        return err.cause
    }
}

export { credentialsLogin }