let baseURL 

if(process.env.NODE_ENV === 'production') {
  baseURL = 'https://boqii.com'
}

if(process.env.NODE_ENV === 'development') {
  baseURL = 'https://www.fastmock.site/mock/f6c02f51b99c17b995f3b056e4e405b7/openh5'
}


export { baseURL }