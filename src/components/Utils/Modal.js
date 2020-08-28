import React from 'react';
import styles from "./Utils.module.scss";

import { useDispatch } from "react-redux";

export default function Modal(props) {
  const dispatch = useDispatch();
  function toggle() {
    document.getElementById(props.id).classList.toggle("is-active");
  }

  function sendit() {
    toggle();
    if (props.func) {
        dispatch(props.func());
    }
  }


  return (
    <div id={props.id} className="modal">
      <div className="modal-background" onClick={toggle} />
      <div className={`modal-content ${styles.box}`}>{props.content}
        <div className="field is-grouped">
            <div className="control">
                <button onClick={sendit} className="button is-primary">Ok</button>
            </div>
            <div className="control">
                <button onClick={toggle} className="button is-light is-primary">Cancel</button>
            </div>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={toggle}
      ></button>
    </div>
  );
}
