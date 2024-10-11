import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyleDiv = styled.div`
    width: 70%;
`

function ContainerText({tittle, text}) {
  return (
    <StyleDiv>
        <h2>{tittle}</h2>
        <p>{text}</p>
    </StyleDiv>
  )
}

ContainerText.propTypes = {
    tittle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired

}

export default ContainerText
