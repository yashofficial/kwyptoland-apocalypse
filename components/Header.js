import AnchorLink from 'react-anchor-link-smooth-scroll'
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
<a href="https://discord.com/invite/4pB2KZYvrm" target="_blank" rel="noreferrer" className='discord-icon'><img src="/img/discord.svg" alt="" /><span>Discord</span></a>
<a href="https://twitter.com/KwyptoLand" target="_blank" rel="noreferrer" className='twitter-icon'><img src="/img/twitter.svg" alt="" /><span>Twitter</span></a>
<a href="https://www.instagram.com/kwyptoland/" target="_blank" rel="noreferrer" className='instagram-icon'><img src="/img/instagram.svg" alt="" /><span>Instagram</span></a>
</div>
<AnchorLink href="#glitch-banner"  rel="noopener" data-id="home" className='active' scrollOffset="100">Home</AnchorLink>
<AnchorLink href="#about"  rel="noopener" data-id="about" scrollOffset="100">About</AnchorLink>
<AnchorLink href="#roadmap"  data-id="roadmap" scrollOffset="100" >Roadmap</AnchorLink>
<AnchorLink href="#team"  rel="noopener" data-id="team">Team</AnchorLink>
<AnchorLink href="#mint"  rel="noopener" data-id="mint">Mint</AnchorLink>
<a href="https://metamask.io" target="_blank" rel="noreferrer" className='enableEthereumButton yellow-button'>Connect Wallet</a>
</div>
</div>
</div>
    </header>
  )
}
