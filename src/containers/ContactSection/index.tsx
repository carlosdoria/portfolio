import React, { useState } from 'react'
import * as S from './styles'
import { ApiEmail } from '../../services/api'
import { toast, Flip } from 'react-toastify'
import { Fade } from 'react-awesome-reveal'

export default function ContactSection () {

  const [ email, setEmail ] = useState( {
    name: '',
    email: '',
    message: ''
  } )

  async function handlSubmit ( event: React.FormEvent ) {
    event.preventDefault()
    await ApiEmail.post( '/email', email )
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

  const handleInputChange = ( name: string, value: string ) => {
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
      <Fade>
        <S.SectionTitle>Contato</S.SectionTitle>
        <S.Form onSubmit={e => handlSubmit( e )}>
          <S.Field>
            <label htmlFor="">Nome</label>
            <input
              type="text"
              value={email.name}
              placeholder="Nome"
              required
              onChange={e => handleInputChange(
                'name',
                e.currentTarget.value
              )}
            />
          </S.Field>

          <S.Field>
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={email.email}
              placeholder="Email"
              required
              onChange={e => handleInputChange(
                'email',
                e.currentTarget.value
              )}
            />
          </S.Field>

          <S.Field>
            <label htmlFor="">Mensagem</label>
            <textarea
              value={email.message}
              cols={0}
              rows={10}
              placeholder="Digite sua mensagem"
              required
              onChange={e => handleInputChange(
                'message',
                e.currentTarget.value
              )}
            />
          </S.Field>

          <S.InputButton type="submit" value="Enviar" />
        </S.Form>
      </Fade>
    </S.ContactSection>
  )
}
