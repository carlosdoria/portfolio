import React, { useState } from 'react'
import * as S from './styles'
import { ApiEmail } from '../../services/api'
import { toast, Flip } from 'react-toastify'

const ContactSection = () => {

  const [ email, setEmail ] = useState( {
    'name': '',
    'email': '',
    'message': ''
  } )

  const handleClick = ( event: React.FormEvent ) => {
    event.preventDefault()
    ApiEmail.post( '/send', email )
    clearFields()
    return (
      toast.info( 'Email enviado com sucesso', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Flip
      } )
    )
  }

  const handleChange = ( name: string, value: string ) => {

    setEmail( {
      ...email,
      [ name ]: value
    } )
  }

  const clearFields = () => {
    setEmail( {
      'name': '',
      'email': '',
      'message': ''
    } )
  }

  return (
    <S.ContactSection id="contact">
      <S.SectionTitle>Contato</S.SectionTitle>
      {/* <button onClick={() => test()}>asd</button> */}
      <S.ContactContainer>
        <S.Form onSubmit={e => handleClick( e )}>
          <S.InputText
            type="text"
            value={email.name}
            placeholder="Nome"
            onChange={e => handleChange(
              'name',
              e.currentTarget.value
            )}
            required
          />
          <S.InputEmail
            type="email"
            value={email.email}
            placeholder="Email"
            required
            onChange={e => handleChange(
              'email',
              e.currentTarget.value
            )}
          />
          <S.TextArea
            value={email.message}
            cols={0}
            rows={10}
            placeholder="Digite sua mensagem"
            required
            onChange={e => handleChange(
              'message',
              e.currentTarget.value
            )}
          />
          <S.InputButton type="submit" value="Enviar" />
        </S.Form>
      </S.ContactContainer>
    </S.ContactSection>
  )

}

export default ContactSection
