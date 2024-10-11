import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

//estilo del button  con styled-components
const StyledButton = styled.button`
    background-color: hsl(245, 75%, 52%);
    color: white;
    width: 82%;
    margin:1em;
    padding: 13px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`
function Button({text}) {
  return (
    <StyledButton><strong>{text}</strong></StyledButton>
  )
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button
