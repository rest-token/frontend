import {ethers} from "ethers";
import { useState } from "react"


const Web3 = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserbalance] = useState(null);

    const connectMetamaskWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                accountChanged(result[0])
            })
        } else {
            setErrorMessage('Install Metamask please!!!')
        }
    }

    const accountChanged = (accountName) => {
        setDefaultAccount(accountName)
        getUserBalance(accountName)
    }

    const getUserBalance = (accountAddress) => {
        window.ethereum.request({method: 'eth_getBalance', params: [String(accountAddress), "latest"]})
        .then(balance => {
            setUserbalance(ethers.formatEther(balance));
        })
    }

    async function sendTransaction(event) {
        event.preventDefault();
        let amount = event.target.amount_coin.value;
        amount *= 1000000000000000;
        let params = [{
            from: defaultAccount,
            to: "0x9f96893e60c84a34753b94f688b59b15bbd64486",
            gas: Number(250000).toString(16),
            gasPrice: Number(35000000).toString(16),
            value: Number(amount).toString(16)
        }]

        let result = await window.ethereum.request({method: 'eth_sendTransaction', params}).catch((err) => {
            console.log(err);
        })
        console.log(result);
    }

    const connectYoroiWallet = () => {
        if (window.cardano) {
            console.log(window.cardano.nami.request())
        } else {
            setErrorMessage('Install Yoroi Wallet please!!!')
        }
    }
    
    return (
        <>
        <button onClick={connectMetamaskWallet}>connect Metamask wallet</button>
        <h3>Address: {defaultAccount}</h3>
        <h3>Balance: {userBalance}</h3>
        <button onClick={connectYoroiWallet}>connect yoroi wallet</button>


        <form onSubmit={sendTransaction} method="post">
            <input type="number" name="amount_coin" placeholder="amount"/>
            <button>send</button>
        </form>
        {errorMessage}
        </>
    )
}

export default Web3;