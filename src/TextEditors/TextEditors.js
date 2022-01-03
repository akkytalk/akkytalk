import React, { useState } from "react";
import "./TextEditor.css";

function TextEditors() {
  const [value, setValue] = useState([]);

  const inputHandle = (event) => {
    setValue(event.target.value);
    document.getElementById("text-output").innerText = event.target.value;
  };

  const makeBold = () => {
    document.getElementById("bold").classList.toggle("active");
    document.getElementById("text-output").classList.toggle("bold");
  };

  const makeItalic = () => {
    document.getElementById("italic").classList.toggle("active");
    document.getElementById("text-output").classList.toggle("italic");
  };

  const makeUnderline = () => {
    document.getElementById("underline").classList.toggle("active");
    let output = document.getElementById("text-output");
    if (output.classList.contains("underline")) {
      output.classList.remove("underline");
    } else {
      output.classList.add("underline");
    }
  };

  const alignText = (elem, alignType) => {
    document.getElementById("text-output").style.textAlign = alignType;
    let alignButtons = document.getElementsByClassName("align");

    console.log("alignButtons", alignButtons);
    for (let button of alignButtons) {
      button.classList.remove("active");
    }
    if (alignType == "left") {
      document.getElementById("left-align").classList.toggle("active");
    } else if (alignType == "center") {
      document.getElementById("center-align").classList.toggle("active");
    } else if (alignType == "right") {
      document.getElementById("right-align").classList.toggle("active");
    }
  };
  // console.log("value", value);

  return (
    <div class="text-center container">
      <h1 class="banner p-3 text-primary">TextEditor</h1>
      <div class="row">
        <div class="col">
          <button
            id="bold"
            type="button"
            onClick={makeBold}
            class="btn btn-light"
          >
            Bold
          </button>
          <button
            id="italic"
            type="button"
            onClick={makeItalic}
            class="btn btn-light"
          >
            Italic
          </button>
          <button
            id="underline"
            type="button"
            onClick={makeUnderline}
            class="btn btn-light"
          >
            Underline
          </button>
          <button
            id="left-align"
            type="button"
            onClick={() => alignText(this, "left")}
            class="align btn btn-light"
          >
            <i class="fas fa-align-left"></i>
          </button>
          <button
            id="center-align"
            type="button"
            onClick={() => alignText(this, "center")}
            class="align btn btn-light"
          >
            <i class="fas fa-align-center"></i>
          </button>
          <button
            id="right-align"
            type="button"
            onClick={() => alignText(this, "right")}
            class="align btn btn-light"
          >
            <i class="fas fa-align-right"></i>
          </button>
        </div>
      </div>
      <hr />
      <div class="row editor">
        <div class="col">
          <div class="form-group">
            <label for="text-input">Your Document Text</label>
            <textarea
              class="form-control"
              id="text-input"
              onChange={inputHandle}
              rows="3"
            ></textarea>
          </div>
        </div>
        <div class="col">
          <label for="text-input">Formatted Text</label>
          <div id="text-output" class="bg-light"></div>
        </div>
      </div>
    </div>
  );
}

export default TextEditors;
