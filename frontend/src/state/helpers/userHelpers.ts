import { Auth } from 'aws-amplify';
import { UserState } from '../stores/userStore';
import { SetState } from '../../types';

export async function checkAdminStatus(set: SetState<UserState>) {
    try {
        const currentUser = await Auth.currentAuthenticatedUser();
        const groups =
            currentUser.signInUserSession.accessToken.payload[
                'cognito:groups'
            ] || [];

        // get user group name from aws using env variables
        const adminGroupName =
            process.env
                .REACT_APP_ADMIN_USER_GROUP_NAMEREACT_APP_ADMIN_USER_GROUP_NAME ||
            '';
        const isUserAnAdmin = groups.includes(adminGroupName);

        set({ currentUser: currentUser, isAdmin: isUserAnAdmin, error: null });
    } catch (error: any) {
        console.error(`Error checking if user is admin: ${error}`);
        set({ currentUser: null, isAdmin: false, error: error as Error });
    }
}

export async function signOutUser(set: SetState<any>) {
    try {
        await Auth.signOut();
        set({ user: null, isAdmin: false, error: null });
    } catch (error) {
        console.error('Error signing out user', error);
        set({ user: null, isAdmin: false, error: error as Error });
    }
}
