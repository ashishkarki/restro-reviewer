import React, { ReactNode } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

type AuthenticatorProps = {
    children: ReactNode;
};

export const RestroReviewerAuthenticator: React.FC<AuthenticatorProps> = ({
    children,
}) => (
    <Authenticator>
        {({ signOut, user }) =>
            user ? (
                <main>
                    {/* <Heading1>Hello, {user?.attributes?.given_name}</Heading1> */}
                    {children}
                    {/* <button onClick={signOut}>Sign out</button> */}
                </main>
            ) : (
                <div>Authentication isn't setup correctly.</div>
            )
        }
    </Authenticator>
);
