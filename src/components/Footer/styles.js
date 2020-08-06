import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 100px;
  color: var(--white);
  text-align: center;
  color: #fff;
  height: 150px;
  text-align: center;
  @media (max-width: 500px) {
    margin-bottom: 40x;
    
  }

    img{
        margin-bottom: 6px;
        height: 24px;
    }
    p{
        font-size: 14px;
    }
    .social{
        margin-top: 4px;
        a{
            margin: 10px;
            transition: .2s;
            :hover{
                opacity: .5;
            }
        }
    }
`;

 
 