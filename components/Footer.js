export default function Footer() {
  return (
<footer>
<div className='space-box'></div>
<div className='wrapper' id="footer">
<div className='container'>
<ul>
<li><p>©2021 KwyptoLand</p><a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a></li>
<li><a href="javascript:void(0)" className='white-button' id="myBtn">SEND ME UPDATES</a><div className='social-icons'>
<a href="https://discord.com/invite/4pB2KZYvrm" target="_blank" className='discord-icon' rel="noopener noreferrer"><img alt="" src="img/discord.svg" /></a>
<a href="https://twitter.com/KwyptoLand" target="_blank" className='twitter-icon' rel="noopener noreferrer"><img alt="" src="img/twitter.svg" /></a>
<a href="https://www.instagram.com/kwyptoland/" target="_blank" className='instagram-icon' rel="noopener noreferrer"><img alt="" src="img/instagram.svg" /></a>
</div></li>
</ul>
</div>
</div>
<div id="myModal" className='modal'>
  <div className='modal-content'>
    <span className='close' id="close">&times;</span>
    <p style={{'text-align': 'center', 'font-size': '2em'}}>Subscribe for VIP updates</p>
        <input type="text" placeholder="email@domain.com" id="email" />
        <br />
        <a className='yellow-button' style={{'margin': '30px 0 0'}} onClick="subscribe();" id="subscribe">Subscribe</a>
        <p id="status" style={{'margin-bottom': '20px', 'color': '#ffff2e', 'font-weight': '300'}}></p>
  </div>

</div>
    </footer>
  )
}
