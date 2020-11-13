import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: ${(props) => props.theme.main};
    color: white;
  }
`

Button.defaultProps = {
  theme: {
    main: 'tomato'
  }
}

/**
 * Simple button
 */
export default ({ backgroundColor, label, ...props }) => {
  return (
    <Button
    // type="button"
    // className={[styles.storybookButton, mode].join(' ')}
    // style={backgroundColor && { backgroundColor }}
    // {...props}
    >
      {label}
    </Button>
  )
}
