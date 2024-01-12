import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;

    align-items: center;
    background-color: #333;
    padding: 10px;
`;

const UL = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
        padding: 0;
    }
`;

const LI = styled.li`
    display: inline;
    margin: 0;

    @media (max-width: 768px) {
        margin: 10px 0;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    padding: 10px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #555;
    }
`;

const NavBar: React.FC = () => {
    return (
        <Nav>
            <UL>
                <LI>
                    <NavLink to="/">Home</NavLink>
                </LI>

                <LI>
                    <NavLink to="/restaurants">Restaurants</NavLink>
                </LI>

                {/* <LI>
          <NavLink to='/review'>Post Review</NavLink>
        </LI> */}
            </UL>
        </Nav>
    );
};

export default NavBar;
