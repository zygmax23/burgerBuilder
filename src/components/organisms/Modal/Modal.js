import React, { useEffect } from "react";
import ModalStyle from "./ModalStyle";
import BackDrop from "components/atoms/Backdrop/Backdrop";

const Modal = (props) => {
  useEffect(() => {}, [props.show]);

  return (
    <>
      <BackDrop show={props.show} closeModalFn={props.closeModalFn} />
      <ModalStyle show={props.show}>{props.children}</ModalStyle>
    </>
  );
};

export default Modal;
