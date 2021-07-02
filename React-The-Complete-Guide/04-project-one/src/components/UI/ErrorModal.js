import React from "react";
import ReactDOM from "react-dom";

import styled from "./ErrorModal.module.css";

import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={styled.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styled.modal}>
      <header className={styled.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styled.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styled.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
