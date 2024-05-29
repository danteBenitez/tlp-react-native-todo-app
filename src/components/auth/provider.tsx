import { ReactNode, createContext, useState } from "react";
import { signIn as signInService, signUp as signUpService } from "@/services/auth";

export type AuthData = {
    username: string;
    email: string;
    password: string;
};

export type User = {
    username: string;
    email: string;
}

type AuthContextValue = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (auth: Omit<AuthData, "email">) => Promise<void>;    
    signUp: (auth: AuthData) => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider(props: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    async function signIn(auth: Omit<AuthData, "email">) {
        console.log("Sign in", auth);
        const result = await signInService({
            username: auth.username,
            password: auth.password
        });
        if (!result) {
            throw new Error("Invalid credentials");
        }
        setUser(result);
    }

    async function signUp(auth: AuthData) {
        console.log("Sign up", auth);
        const result = await signUpService(auth);
        if (!result) {
            throw new Error("Sign up failed");
        }
        setUser(result);
    }

    return <AuthContext.Provider value={{
        user: user,
        isAuthenticated: !!user,
        signIn,
        signUp
    }}>{props.children}</AuthContext.Provider>;
}