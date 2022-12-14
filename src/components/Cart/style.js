import styled from "styled-components";

export const StyledCart = styled.div`
  width: 100%;
  max-width: 365px;
  min-height: 223px;
  max-height: 400px;

  border: solid 1px var(--gray20);
  border-radius: 5px 5px 0 0;

  padding-bottom: 20px;

  .Cart__Header {
    background-color: var(--colorPrimary);

    height: 65px;

    border-radius: 5px 5px 0px 0px;
    h2 {
      display: flex;
      align-items: center;

      margin-left: 15px;
      max-width: 100%;
      height: 100%;

      color: var(--white);

      font-size: var(--fontSize18);
      font-weight: var(--fontWeiBold);
    }
  }

  ul {
    width: 100%;

    background-color: var(--white);

    margin: 20px 0 0 0;

    flex-wrap: wrap;

    max-height: 300px;

    overflow-y: auto;
  }
`;
