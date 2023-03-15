import { css } from "styled-components";

export const mobile = (props: { [key: string]: string | number}) => {
    return css`
      @media only screen and (max-width: 380px) {
        ${props}
      }
    `;
  };
  