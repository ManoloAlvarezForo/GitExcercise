import React from 'react';
import Routes from '../routes'

const styles = {
  mainBackground: {
    background: ' linear-gradient(to right, #D7DDE8, #757F9A) '/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
}

const App = () => (
  <main style={styles.mainBackground}>
    <Routes />
  </main>
)

export default App
