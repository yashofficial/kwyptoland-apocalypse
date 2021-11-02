import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
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
<Scrollspy items={ ['glitch-banner', 'content-area', 'roadmap-wrap', 'team', 'mint'] } currentClassName="active" >
<AnchorLink href="#glitch-banner" rel="noopener" data-id="home">Home</AnchorLink>
<AnchorLink href="#content-area" scrollOffset="100" rel="noopener" data-id="about">About</AnchorLink>
<AnchorLink href="#roadmap-wrap"  rel="noopener" data-id="roadmap">Roadmap</AnchorLink>
<AnchorLink href="#team"  rel="noopener" data-id="team">Team</AnchorLink>
<AnchorLink href="#mint"  rel="noopener" data-id="mint">Mint</AnchorLink>
</Scrollspy> 
<a href="https://metamask.io" target="_blank" rel="noreferrer" className='enableEthereumButton yellow-button'>Connect Wallet</a>
</div>
</div>
</div>
    </header>
  )
}
