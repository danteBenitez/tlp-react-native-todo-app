import { useEffect, useState } from "react";
import { EmitterSubscription, Keyboard, KeyboardEventListener } from "react-native";

export function useKeyboard() {
    const [visible, setVisible] = useState(false);
    const [listeners, setListeners] = useState<KeyboardEventListener[]>([]);
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            () => {
                setVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide",
            () => {
                setVisible(false);
            }
        );
        const subscriptions: EmitterSubscription[] = [];
        for (const listener of listeners) {
            subscriptions.push(Keyboard.addListener("keyboardDidShow", listener));
        }

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
            for (const remover of subscriptions) {
                remover.remove();
            }
        };
    }, []);

    const addListener = (listener: KeyboardEventListener) => {
        setListeners([...listeners, listener]);
    }
    const removeListener = (listener: KeyboardEventListener) => {
        setListeners(listeners.filter(l => l !== listener));
    }

    return { visible, addListener };
}