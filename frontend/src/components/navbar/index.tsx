import React, { useState } from 'react';
import {
    DropdownItem,
    LI,
    Nav,
    NavLink,
    UL,
    UserAvatar,
    UserDropdown,
    UserSection,
} from '../../styles';
import { Auth } from 'aws-amplify';

const NavBar: React.FC = () => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    const handleSignOut = async () => {
        try {
            await Auth.signOut();
            // Handle post-sign-out logic here, like redirecting to the sign-in page
        } catch (error) {
            console.error('Error signing out user', error);
        }
    };

    return (
        <Nav>
            <UL>
                <LI>
                    <NavLink to="/">Home</NavLink>
                </LI>

                <LI>
                    <NavLink to="/restaurants">Restaurants</NavLink>
                </LI>
            </UL>

            <UserSection onClick={() => setIsDropdownActive(!isDropdownActive)}>
                <UserAvatar>U</UserAvatar>
                <UserDropdown className={isDropdownActive ? 'active' : ''}>
                    <DropdownItem onClick={handleSignOut}>
                        Sign out
                    </DropdownItem>
                </UserDropdown>
            </UserSection>
        </Nav>
    );
};

export default NavBar;
