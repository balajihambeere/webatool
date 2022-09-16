import React, { createContext, useContext, useReducer } from 'react';

export interface AppContextType {
    items: any;
    addItem: (item: any) => void;
    removeItem: () => void;
}
export const AppContext = createContext({} as AppContextType);

const AppContextWrapper = ({ children }: any) => {
    const reducer = (state: AppContextType, items: any) => {
        return { ...state, items: items }
    };

    const [state, dispatch] = useReducer(reducer, {} as AppContextType);

    const addItem = React.useCallback((item: any) => {
        let sections = [];
        if (localStorage.getItem('sections')) {
            sections = JSON.parse(localStorage.getItem('sections') as string);
        }
        sections.push(item);
        localStorage.setItem('sections', JSON.stringify(sections));
        dispatch(sections);
    }, []);

    const removeItem = React.useCallback(() => {
        localStorage.setItem('sections', JSON.stringify([]));
        dispatch([]);
    }, []);

    React.useEffect(() => {
        if (localStorage.getItem('sections')) {
            dispatch(JSON.parse(localStorage.getItem('sections') as string));
        }
    }, []);

    return (<AppContext.Provider value={{ ...state, addItem, removeItem }}>
        {children}
    </AppContext.Provider>);
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppContextWrapper, useAppContext }