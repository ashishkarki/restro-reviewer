import { create } from 'zustand';
import { checkAdminStatus, signOutUser } from '../helpers/userHelpers';

export type UserState = {
    currentUser: any;
    isAdmin: boolean;
    error: Error | null;
    setCurrentUser: (user: any) => void;
    setError: (error: Error | null) => void;
    checkAdminStatus: () => Promise<void>;
    signOut: () => Promise<void>;
};

export const useUserStore = create<UserState>((set) => ({
    currentUser: null,
    isAdmin: false,
    error: null,

    setCurrentUser: (user: any) => set({ currentUser: user }),
    setError: (error: Error | null) => set({ error }),
    checkAdminStatus: () => checkAdminStatus(set),
    signOut: () => signOutUser(set),
}));
