import styled from 'styled-components'

export const MobileNav = styled.ul`
    display: none;
    text-align: center;
    background-color: #e53935;
    margin: 0;
    padding-top: 60px;
    li {
        padding: 10px;
        font-weight: bold;
        border-bottom: 1px solid white;
        
        a {
            color: #0000;
        }
    }
    @media (max-width: 992px) {
        display: block;
    }
`