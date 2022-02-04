import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default ( req: NextApiRequest, res: NextApiResponse ) => {
  if ( req.method !== 'POST' ) {
    return res.setHeader( 'Allow', 'POST' ).status( 405 ).end( 'Method not allowed' )
  }

  const { name, email, message } = req.body
  const transporter = nodemailer.createTransport( {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_USER_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD_EMAIL
    },
    tls: {
      rejectUnauthorized: false
    }
  } )

  transporter.sendMail( {
    from: email,
    to: process.env.NEXT_PUBLIC_USER_EMAIL,
    replyTo: email,
    subject: name,
    text: message
  } ).then( results => res.status( 200 ).json( { Message: results } ) )
    .catch( err => res.status( 400 ).json( { Erro: err } ) )
}
