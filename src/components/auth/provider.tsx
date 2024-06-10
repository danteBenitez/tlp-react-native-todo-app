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
    logout: () => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider(props: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    async function signIn(auth: Omit<AuthData, "email">) {
        const result = await signInService({
            username: auth.username,
            password: auth.password
        });
        console.log("Result: ", result)
        if (!result) {
            throw new Error("Invalid credentials");
        }
        setUser(result);
    }

    async function signUp(auth: AuthData) {
        const result = await signUpService(auth);
        if (!result) {
            throw new Error("Sign up failed");
        }
        setUser(result);
    }

    async function logout() {
        setUser(null);
    }

    return <AuthContext.Provider value={{
        user: user,
        logout,
        isAuthenticated: !!user,
        signIn,
        signUp
    }}>{props.children}</AuthContext.Provider>;
}