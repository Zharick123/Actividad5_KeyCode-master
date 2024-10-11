import styled from 'styled-components'
import PropTypes from 'prop-types'

//estilo de figure con styled-components

const styleFigure = styled.figure`
    margin:0;
    padding: 0;
    width: 100%;
`


function Figure({src}) {
  return (
    <styleFigure>
        <img  src={src}></img>
    </styleFigure>
  )
}

Figure.propTypes = {
   src: PropTypes.string.isRequired
}

export default Figure
