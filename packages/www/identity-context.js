import React, { useState, useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

export const IdentityContext = React.createContext({})

export const Provider = (props) => {
  const [user, setUser] = useState()
  const { Provider } = IdentityContext

  useEffect(() => {
    netlifyIdentity.init({})
  })
  netlifyIdentity.on('login', (user) => {
    netlifyIdentity.close()
    setUser(user)
  })
  netlifyIdentity.on('logout', () => {
    netlifyIdentity.close()
    setUser()
  })

  return (
    <Provider value={{ identity: netlifyIdentity, user }}>
      {props.children}
    </Provider>
  )
}
