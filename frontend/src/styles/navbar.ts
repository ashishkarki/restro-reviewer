import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;

    align-items: center;
    background-color: #333;
    padding: 10px;
`;

export const UL = styled.ul`
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

export const LI = styled.li`
    display: inline;
    margin: 0;

    @media (max-width: 768px) {
        margin: 10px 0;
    }
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    padding: 10px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #555;
    }
`;

export const UserSection = styled.div`
    display: flex;
    justify-content: end; // sits at the end of this div/grid
    align-items: center;

    position: relative;
    cursor: pointer;
`;

export const UserAvatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #ddd;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

export const UserDropdown = styled.ul`
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #333;
    list-style: none;
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
    display: none;

    &.active {
        display: block;
    }
`;

export const DropdownItem = styled.li`
    color: white;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
        background-color: #555;
    }
`;
