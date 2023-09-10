import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({children}) {
    const [loginInfo, setLoginInfo] = useState({ displayName: '', uid: '' });
    const [isLogin, setIsLogin] = useState(false);

    return (
        <GlobalContext.Provider value={{ loginInfo, setLoginInfo, isLogin, setIsLogin }}>{children}</GlobalContext.Provider>
    );
}

export function useGlobalData() {
    const globalData = useContext(GlobalContext);
    if(!globalData) throw new Error('useGlobalData hook은 GlobalProvider 컴포넌트 안쪽에서만 호출할 수 있습니다.');
    return globalData;
}