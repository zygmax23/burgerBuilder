import styled from "styled-components";

const Modal = styled.div`
  transform: ${(props) =>
    props.show ? "translateY(0) translateX(-50%)" : "translateY(-100vh) translateX(-50%)"};
  opacity: ${(props) => (props.show ? 1 : 0)};
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 300px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 50%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;

  /* @media (min-width: 600px) {
    width: 500px;
    left: calc(50% -250px);
  } */
`;

export default Modal;
