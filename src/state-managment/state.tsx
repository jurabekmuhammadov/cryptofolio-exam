import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';

interface State {
    isOpen: boolean;
    watchList: any[];
    allCoins: any[];
    currentPage: number;
    perPage: number,
    totalPages: number
}

type StateActions =
    | { type: 'TOGGLE' }
    | { type: 'SET_ALL_COINS', payload: any[] }
    | { type: 'SET_CURRENT_PAGE', payload: number }
    | { type: 'ADD_TO_WATCHLIST', payload: {} }

interface StateContextProps {
    state: State;
    dispatch: React.Dispatch<StateActions>;
}

const StateContext = createContext<StateContextProps | undefined>(undefined);

const initialState: State = {
    isOpen: false,
    watchList: [],
    allCoins: [],
    currentPage: 1,
    perPage: 10,
    totalPages: 10,
};

const StateReducer = (state: State, action: StateActions): State => {
    switch (action.type) {
        case 'TOGGLE':
            return {
                ...state,
                isOpen: !state.isOpen,
            };
        case 'SET_ALL_COINS':
            return {
                ...state,
                allCoins: action.payload,
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload,
            };
        default:
            return state;
    }
};

interface StateProviderProps {
    children: ReactNode;
}

export const StateProvider = ({ children }: StateProviderProps) => {
    const [state, dispatch] = useReducer(StateReducer, initialState);

    const getAllCoins = async (page: number) => {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=${state.perPage}&page=${page}&sparkline=false&price_change_percentage=24h`);
            const data = await response.json();

            dispatch({ type: 'SET_ALL_COINS', payload: data });
        } catch (error) {
            console.error('Failed to fetch coins data:', error);
        }
    };

    useEffect(() => {
        getAllCoins(state.currentPage);
    }, [state.currentPage]);

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateManagment = (): StateContextProps => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error('useStateManagment must be used within a StateProvider');
    }
    return context;
};
