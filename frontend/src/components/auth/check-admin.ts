import { Auth } from 'aws-amplify';

export async function isAdmin(): Promise<boolean> {
    try {
        const currentUser = await Auth.currentAuthenticatedUser();
        const groups =
            currentUser.signInUserSession.accessToken.payload['cognito:groups'];

        const isUserAnAdmin = groups.includes('restroreviewer_userpool_admins');
        return isUserAnAdmin;
    } catch (error: any) {
        console.error(`Error checking if user is admin: ${error}`);
        return false;
    }
}
