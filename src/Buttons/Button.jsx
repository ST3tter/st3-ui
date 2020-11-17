import React from 'react';
import styled from 'styled-components';

const animationSpeed = 0.1;

const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 0;
  border: none;
  background: none;
  padding: 1rem 3rem;
  text-decoration: none;
  text-transform: uppercase;
  color: #2894ff;
  background-color: #262c37;
  margin: 1rem;
  letter-spacing: 2px;

  &:hover {
    background-color: #2894ff;
    color: #1f242d;
    transition: ${animationSpeed * 2}s;
    transition-delay: ${animationSpeed * 4}s;
  }

  & span {
    position: absolute;
    display: block;
    background-color: #2894ff;
  }

  & span:nth-child(1) {
    left: 0;
    bottom: 0;
    width: 1px;
    height: 100%;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform ${animationSpeed}s;
  }

  &:hover span:nth-child(1) {
    transform: scaleY(1);
    transform-origin: bottom;
    transition: transform ${animationSpeed}s;
  }

  & span:nth-child(2) {
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform ${animationSpeed}s;
    transition-delay: ${animationSpeed}s;
  }

  &:hover span:nth-child(2) {
    transform: scaleX(1);
    transform-origin: left;
    transition: transform ${animationSpeed}s;
    transition-delay: ${animationSpeed}s;
  }

  & span:nth-child(3) {
    right: 0;
    bottom: 0;
    width: 1px;
    height: 100%;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform ${animationSpeed}s;
    transition-delay: ${animationSpeed * 2}s;
  }

  &:hover span:nth-child(3) {
    transform: scaleY(1);
    transform-origin: top;
    transition: transform ${animationSpeed}s;
    transition-delay: ${animationSpeed * 2}s;
  }

  & span:nth-child(4) {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${animationSpeed}s;
    transition-delay: ${animationSpeed * 3}s;
  }

  &:hover span:nth-child(4) {
    transform: scaleX(1);
    transform-origin: right;
    transition: transform ${animationSpeed}s;
    transition-delay: ${animationSpeed * 3}s;
  }
`;

Button.defaultProps = {
  theme: {
    main: 'tomato',
  },
};

/**
 * Simple button
 */
export default ({ backgroundColor, label, ...props }) => {
  return (
    // <Button
    // // type="button"
    // // className={[styles.storybookButton, mode].join(' ')}
    // // style={backgroundColor && { backgroundColor }}
    // // {...props}
    // >
    //   {label}
    // </Button>

    <Button>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Button
    </Button>
  );
};
