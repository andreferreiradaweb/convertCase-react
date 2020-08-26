import React, { useRef, useState } from 'react'
import { StyledH1, StyledTextarea, StyledButton, StyledButton2, Styledp, StyledDiv } from '../../styles'

const Hello = () => {
  
  const handleChange = event => {
    setValue(event.target.value)
  }

  const [value, setValue] = useState('')
  const [copy, setCopy] = useState('')
  const textAreaRef = useRef(null)

  function copyToClipboard() {
    textAreaRef.current.select()
    document.execCommand('copy')
    setCopy('Copied!')
    setTimeout(() => 
      setCopy('')
     , 2000)
  }

  return (
    <div className="container">
      <StyledH1>Ferramenta para ajuste de texto</StyledH1>
      <Styledp>Escreva seu texto abaixo:</Styledp>
      <StyledTextarea ref={textAreaRef} value={value} onChange={handleChange} cols="60" rows="10" />
      
      <div>
        <StyledButton onClick={() => setValue(value.toUpperCase())}>Convert to UPPERCASE</StyledButton>
        <StyledButton onClick={() => setValue(value.toLowerCase())}>Convert to lowercase</StyledButton>
        <StyledButton onClick={() => setValue(value.replace(/(?:^|\s)\S/g, a => a.toUpperCase() ))}>Convert to Camel Case</StyledButton>
        <StyledButton2 onClick={copyToClipboard}>Copiar</StyledButton2>
        <StyledButton2 onClick={() => setValue('')}>Limpar</StyledButton2>
      </div>
      <StyledDiv>{copy}</StyledDiv>
      
      
      
    </div>
  )
}

export default Hello
