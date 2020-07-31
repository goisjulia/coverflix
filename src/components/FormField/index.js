import React from "react";
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  position: relative;
  transition: all 0.2s ease;

  & > input,
  & > textarea {
    border: 1px solid var(--grayMedium);
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 12px 3px 12px 15px;
    font-size: 16px;
    transition: all 0.2s ease;
    z-index: 500;
    resize: vertical;
  }

  & > label {
    color: grey;
    position: absolute;
    top: 15px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 500;

    ${props => props.focused &&
    `
      font-size: 13px;
      transform: translateY(-23px) translateX(-5px);
      z-index: 501;
      background: white;
      padding: 0 8px;
    `}
  }

  `;

function FormField({ label, value, type, name, onChange }) {

  const [focused] = React.useState(false);
  const isFocused = focused || String(value).length || type === "date";

  return (
    <InputContainer className="input-container" focused={isFocused}>
      {type === "textarea" ?
        <textarea
          value={value}
          name={name}
          onChange={onChange}
          rows="2"
        />
        :
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          required
        />
      }
      <label className="label">
        {label}
      </label>
    </InputContainer>
  )
}

export default FormField;
