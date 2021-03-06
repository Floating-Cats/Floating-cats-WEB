
if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}
const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  showAccount.innerHTML = account;
}

function hideButton(x)
 {
  x.style.display = 'none';
 }

