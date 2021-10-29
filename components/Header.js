export default function Header() {
  return (
<header>
<div className='wrapper' id="custom-header">
<div className='container' id="header-holder">
<div id="logo-holder">
<img src="img/logo.svg" width="auto" height="36" alt="KwyptoLand logo" />
</div>
<div id="menu-header">
<div className='social-icons'>
<a href="https://discord.com/invite/4pB2KZYvrm" target="_blank" rel="noreferrer" ><img src="/img/discord.svg" alt="" /></a>
<a href="https://twitter.com/KwyptoLand" target="_blank" rel="noreferrer" ><img src="/img/twitter.svg" alt="" /></a>
<a href="https://www.instagram.com/kwyptoland/" target="_blank" rel="noreferrer"><img src="/img/instagram.svg" alt="" /></a>
</div>
<a onClick="scrollto('#home');" rel="noopener">Home</a>
<a onClick="scrollto('#about');" rel="noopener">About</a>
<a onClick="scrollto('#roadmap');" rel="noopener">Roadmap</a>
<a onClick="scrollto('#team');" rel="noopener">Team</a>
<a onClick="scrollto('#mint');" rel="noopener">Mint</a>
<a href="https://metamask.io" target="_blank" rel="noreferrer" className='enableEthereumButton yellow-button' rel="noopener">Connect Wallet</a>
</div>
</div>
</div>
    </header>
  )
}
