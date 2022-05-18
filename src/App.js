import './App.css';
import { connectWallet, signMessage } from 'wallet-js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p
          className="link-wallet"
          rel="noopener noreferrer"
          onClick={async () => {
            console.log(await connectWallet())
          }}
        >
          Link MetaMask
        </p>
        <p
          className="link-wallet"
          rel="noopener noreferrer"
          onClick={async () => {
            console.log(await signMessage("hello, spike"))
          }}
        >
          sign
        </p>
      </header>
    </div>
  );
}

export default App;
