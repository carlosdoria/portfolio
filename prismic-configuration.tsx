import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://carlosdoria.cdn.prismic.io/api/v2'
const accessToken = '' // This is where you would add your access token for a Private repository

export const Client = Prismic.client( apiEndpoint, { accessToken } )
