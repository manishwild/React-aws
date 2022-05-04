import { Amplify } from 'aws-amplify'

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Region
    region: 'eu-center-1',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'eu-central-1_ayJ1jkTKC',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '6otmejo8vqjihka2n0q26lturk',

  },
})

function App() {
  return (
    
    <Authenticator hideSignUp={true}>
      {({ signOut, user }) => (
              <main>
                <h1>Hello {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
              </main>
            )}
    </Authenticator>

  )
}

export default App
