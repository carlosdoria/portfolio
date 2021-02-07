import React, { useState } from 'react'
import * as S from './styles'
import { ApiEmail } from '../../services/api'

const ContactSection = () => {

  const [ email, setEmail ] = useState( {
      'name': '',
      'email': '',
      'message': ''
    } ),

    handleClick = ( event: React.FormEvent ) => {
      event.preventDefault()
      ApiEmail.post( '/send', email )
      clearFields()

    },

    handleChange = ( name: string, value: string ) => {

      setEmail( {
        ...email,
        [ name ]: value
      } )

    },

    clearFields = () => {
      setEmail( {
        'name': '',
        'email': '',
        'message': ''
      } )

    }

  return (
    <S.ContactSection id="contact">
      <S.SectionTitle>Contato</S.SectionTitle>
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
