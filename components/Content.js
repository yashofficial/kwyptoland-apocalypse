export default function Content() {
  return (
<div className='main-div'>
<div id="glitch-banner" className='wrapper'>
<div className='banner-caption'>
<div className='container'>
<h1>Welcome to KwyptoLand.</h1>
<p>A metaverse that is carefully curated for the fun that exists on the<br />Ethereum blockchain, forever…</p>
<h2>Exclusive whitelisting for certain NFT holders.</h2>
<p>Army of Apocalypse important dates<br />
Exclusive whitelist sale for KwyptoKado holders 21st Nov 5pm est<br />
Public sale 21st Nov 7pm est</p>
<div className='button-box'>
<a href="#" className='yellow-button' rel="noopener">Join Discord</a>
<a href="#" className='yellow-button' rel="noopener">Mint Now</a>
</div>
</div>  
</div>
<canvas className='p-canvas-webgl' id="canvas-webgl"></canvas>  
</div>
<div className='wrapper' id="content-area">
<div className='container' id="about">
<h2>Who is KwyptoLand?</h2>
<p>Kwyptoland is an innovative sandbox collective that is created by a rag tag team of crypto enthusiasts, up-and-coming artists, tech geeks, and you, our community member. We’re made for everyone that creates and aims to be building projects in the crypto world.</p>
<p>Our team came from all over the world, with different credentials and passions but with the same shared goal - <strong>future proofing our world</strong>.</p>
<p>Our mission is to help and bring people together to create something amazing for humanity, and there is nothing too small or too large for us.</p>
<a href="#" className='yellow-button dark-bdr' rel="noopener">Meet The Team</a>
<div className='space-box'></div>
<h2>What is the Army of Apocalypse?</h2>
<p>Army of Apocalypse (AoA) is created by our project lead, Chels, and brought to life by our talented artist, Mert Ozel. Mert is an up-and-coming artist in Turkey.</p>  
<p>This collection is inspired by the four horsemen of the apocalypse in the bible (book of Revelation) and our current state of the world in 2021 post Covid-19, a pandemic that just hit Earth with terrifying infection rates, authoritative governments, never-ending lockdowns, and uncertainty for mankind’s future.</p>
<p>The wordings on some of the horsemen’s mouth represents a factor of destruction, be it internal or external, body or soul. Let’s face it - we all have our insecurities and fears. That is what makes us unique. What is yours?</p>
<p>The Army of Apocalypse collection is nominated for multiple NFT awards and also acts as a speed booster for your future football team as destruction is always swift!</p>
</div>
<div className='container' id="what-container">

                <div className='what-block'>
                    <div className='image-block'>
                        <img src="img/power.gif" alt="" />
                    </div>
                    <div className='line1'>Power</div>
                    <div className='line2'>Sold out, buy at OpenSea.</div>
                </div>

                <div className='what-block' style={{'font-size': '130px', 'padding': '0 50px 80px 50px'}}>+</div>

                <div className='what-block'>
                    <div className='image-block' style={{'background-color': '#FEFF2E'}}>
                        <img src="img/speed.png" alt="" />
                    </div>
                    <div className='line1'>Speed</div>
                    <div className='line2'>Minting begins 21st Nov.</div>
                </div>

                <div className='what-block' style={{'font-size':'130px', 'padding': '0 50px 80px 50px'}}>=</div>

                <div className='what-block'>
                    <div className='image-block' style={{'background-color': '#FEFF2E'}}>
                        <img src="img/winner.gif" alt="" />
                    </div>
                    <div className='line1'>Winner</div>
                    <div className='line2'>Ether Footy – The world’s first<br />
                    NFT football game.<br />
                    Releasing 15th Dec.</div>
                </div>

            </div>
</div>
<div className='wrapper' id="countdown-area">
<div className='container'>
<div className='flex-box'>
<div className='img-container'>
<img src="img/fire-horse-img.svg" alt="" />
</div>
<div className='content-container'>
<h2>Mint your Army of 
Apocalypse for only 0.2 eth
</h2>
<p>Automatic whitelist for every KwyptoKado (KK) holder.
– you can mint now till launch at a discounted rate! Save at least $200/mint!
</p>
<p>FREE OG player (earn passive income from Ether Footy) airdrop for holders of KK and AoA.</p>
<p>Public sale Nov 21st 7pm EST @ 0.2eth.</p>
<div className='countdown-box'>
<a href="#" className='yellow-button' rel="noopener">Join Discord</a>
<div className='countdown'>
    <div id="days1">0</div>
    <div id="hours1">0</div>
    <div id="minuts1">0</div>
    <div id="seconds1">0</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
  )
}
