export default function Content() {
  return (
<div className='main-div'>
<div id="glitch-banner" className='wrapper'>
<div className='banner-caption'>
<div className='container'>
<h1 data-aos="fade-up">Welcome to KwyptoLand.</h1>
<p data-aos="fade-up" data-aos-delay="300">A metaverse that is carefully curated for the fun that exists on the<br />Ethereum blockchain, forever…</p>
<h2 data-aos="fade-up" data-aos-delay="350">Exclusive whitelisting for certain NFT holders.</h2>
<p data-aos="fade-up" data-aos-delay="400">Army of Apocalypse important dates<br />
Exclusive whitelist sale for KwyptoKado holders 21st Nov 5pm est<br />
Public sale 21st Nov 7pm est</p>
<div className='button-box'  data-aos="fade-up">
<a href="https://discord.com/invite/4pB2KZYvrm" target="_blank" rel="noreferrer" className='yellow-button'>Join Discord</a>
<a href="https://mint.kwyptoland.com/" target="_blank" rel="noreferrer" className='yellow-button'>Mint Now</a>
</div>
</div>  
</div>
<video controls="" name="media" autoPlay loop muted><source src="img/apocalypse-banner.mp4" type="video/mp4" /></video>
</div>
<div className='scroll-space' id="about"></div>
<div id="content-area" className='wrapper'>

<div className='container'>
<h2 data-aos="fade-up">Who is KwyptoLand?</h2>
<p data-aos="fade-up" data-aos-delay="300">Kwyptoland is an innovative sandbox collective that is created by a rag tag team of crypto enthusiasts, up-and-coming artists, tech geeks, and you, our community member. We’re made for everyone that creates and aims to be building projects in the crypto world.</p>
<p data-aos="fade-up" data-aos-delay="500">Our team came from all over the world, with different credentials and passions but with the same shared goal - <strong>future proofing our world</strong>.</p>
<p data-aos="fade-up" data-aos-delay="700">Our mission is to help and bring people together to create something amazing for humanity, and there is nothing too small or too large for us.</p>
<a onClick="scrollto('#team');" className='yellow-button dark-bdr' data-aos="fade-up" data-aos-delay="900">Meet The Team</a>
<div className='space-box'></div>
<h2 data-aos="fade-up">What is the Army of Apocalypse?</h2>
<p data-aos="fade-up" data-aos-delay="300">Army of Apocalypse `&#40;`AoA`&#41;` is created by our project lead, Chels, and brought to life by our talented artist, Mert Ozel. Mert is an up-and-coming artist in Turkey.</p>
<p data-aos="fade-up" data-aos-delay="500">This collection is inspired by the four horsemen of the apocalypse in the bible `&#40;`book of Revelation&#41; and our current state of the world in 2021 post Covid-19, a pandemic that just hit Earth with terrifying infection rates, authoritative governments, never-ending lockdowns, and uncertainty for mankind’s future.</p>
<p data-aos="fade-up" data-aos-delay="700">The wordings on some of the horsemen’s mouth represents a factor of destruction, be it internal or external, body or soul. Let’s face it - we all have our insecurities and fears. That is what makes us unique. What is yours?</p>
<p data-aos="fade-up" data-aos-delay="900">The Army of Apocalypse collection is nominated for multiple NFT awards and also acts as a speed booster for your future football team as destruction is always swift!</p>
</div>
<div className='container' id="what-container">
                <div className='what-block' data-aos="flip-left">
                    <div className='image-block'>
                        <img alt="" src="img/power.gif" />
                    </div>
                    <div className='line1'>Power</div>
                    <div className='line2'>Sold out, buy at OpenSea.</div>
                </div>

                <div className='what-block' data-aos="fade-up" data-aos-delay="300" style={{'font-size': '130px', 'padding': '0 50px 80px 50px'}}>+</div>

                <div className='what-block' data-aos="flip-left" data-aos-delay="400">
                    <div className='image-block' style={{'background-color': '#7a1128'}}>
                        <img alt="" src="img/Speed.gif" />
                    </div>
                    <div className='line1'>Speed</div>
                    <div className='line2'>Minting begins 21st Nov.</div>
                </div>
                <div className='what-block' data-aos="fade-up" data-aos-delay="500" style={{'font-size': '130px', 'padding': '0 50px 80px 50px'}}>=</div>

                <div className='what-block' data-aos="flip-left" data-aos-delay="700">
                    <div className='image-block' style={{'background-color': '#FEFF2E'}}>
                        <img alt="" src="img/winner.gif" />
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
<img src="img/fire-horse-img.svg" alt="" className='rotating-img' id="image-rotation" />
</div>
<div className='content-container'>
<h2 data-aos="fade-up" data-aos-delay="200">Mint your Army of 
Apocalypse for only 0.2 eth
</h2>
<p data-aos="fade-up" data-aos-delay="400">Automatic whitelist for every KwyptoKado `&#40;`K`&#41;` holder.
– you can mint now till launch at a discounted rate! Save at least $200/mint!
</p>
<p data-aos="fade-up" data-aos-delay="600">FREE OG player `&#40;`earn passive income from Ether Footy&#41; airdrop for holders of KK and AoA.</p>
<p data-aos="fade-up" data-aos-delay="800">Public sale Nov 21st 7pm EST @ 0.2eth.</p>
<div className='countdown-box' data-aos="fade-up" data-aos-delay="1000">
<a href="https://discord.com/invite/4pB2KZYvrm" target="_blank" rel="noreferrer" className='yellow-button'>Join Discord</a>
<div id="countdown" className='countdown'>
    <ul>
      <li><span id="days"></span>days</li>
      <li><span id="hours"></span>Hours</li>
      <li><span id="minutes"></span>Minutes</li>
      <li><span id="seconds"></span>Seconds</li>
    </ul>
</div>
</div>
</div>
</div>
</div>
</div>
<div className='scroll-space' id="roadmap-wrap"></div>
<div className='wrapper'>
            <div className='container' style={{'font-size': '13px', 'font-weight': '300'}}>
<h2 data-aos="fade-up">Roadmap</h2>
<p data-aos="fade-up" data-aos-delay="300">Each Army of Apocalypse grants you the exclusive lifetime privilege of first access to all of Kwyptoland, where you can hang out with your fun family and have first dips on projects, airdrops, and benefits.</p>

                <div id="roadmap">
                    <div className='roadmap-left' style={{'display': 'flex', 'flex-basis': '50%'}}>
                        <div className='roadmap-point' data-aos="fade-up">

                            <div className='border-top'><div></div></div>

                            <h3>October 27th</h3>
                            <div>
                                <p>KwyptoKados – power booster – launched and SOLD OUT.</p>
                                <p>$70,000 given away to one lucky KwyptoKado holder. $50,000 to the holder and $20,000 to the charity of their choice!</p>
                                <img alt="" src="img/power.gif" />
                            </div>
                        </div>
                        <div className='roadmap-point' data-aos="fade-up" data-aos-delay="400">

                            <div className='border-top'><div></div></div>



                            <h3>November 21st</h3>
                            <div>
                                <p>Exclusive KwyptoKado mint ends Nov 21st 4.59pm EST @ 0.15eth.</p>
                                <p>Public sale Nov 21st 7pm EST @ 0.2eth.</p>
                                <p>Every Army of Apocalypse holder enter a raffle automatically to win $100,000!</p>
                            </div>
                        </div>
                        <div className='roadmap-point' data-aos="fade-up" data-aos-delay="400">

                            <div className='border-top'><div></div></div>



                            <h3>November 27nd</h3>
                            <div>
                                <p>To be announced.
                                </p>
                            </div>
                        </div>
                        <div className='roadmap-point' data-aos="fade-up" data-aos-delay="400">

                            <div className='border-top'><div></div></div>



                            <h3>December 15th</h3>
                            <div>
                                <p>First look into KwyptoLand’s play-to-earn NFT game where holders can play together, earn money through playing, betting, or passive income by holding only OG players!</p>
                            </div>
                        </div>


                    </div>
                    <div className='roadmap-right' style={{'display': 'flex', 'flex-basis': '50%'}}>
                        <div className='roadmap-point' data-aos="fade-up" data-aos-delay="400">
                            <div className='border-top'><div></div></div>
                            <h3>October 28th</h3>
                            <div>
                                <p>Announcement of the Army of Apocalypse. All holders of KwyptoKado is whitelisted automatically and can mint from now till launch and save at least $200 per mint!</p>
                            </div>
                        </div>
                        <div className='roadmap-point' data-aos="fade-up" data-aos-delay="400">
                            <div className='border-top'><div></div></div>
                            <h3>November 24th</h3>
                            <div>
                                <p>Holders of both collections will be asked to create a wishlist of what they need/want for Christmas.</p>
                            </div>
                        </div>
                        <div className='roadmap-point' data-aos="fade-up" data-aos-delay="400">
                            <div className='border-top'><div></div></div>
                            <h3>December 13th</h3>
                            <div>
                                <p>Free OG player airdrop for KwyptoKado (power) & mystery (speed) holders. Earn passive income through your player!</p>
                            </div>

                        </div>
                        <div className='roadmap-point' data-aos="fade-up" data-aos-delay="400">
                            <div className='border-top'><div></div></div>
                            <h3>December 22-24</h3>
                            <div>
                                <p>Real-life airdrop of Christmas presents to holders.</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

</div>
<div className='scroll-space' id='team'></div>
<div className='wrapper'>
            <div className='container'>
                <h2 data-aos="fade-up">Team</h2>
                    <div className='team-holder'>
                        <div className='team-member' data-aos="fade-up">
                            <div className='photo'>
                                <div className='photo-holder'><img alt="" src="img/chels.png" /></div>
                                <div className='line2' style={{'display': 'none'}}>
                                    <p>MetaBrains of the project, Bitcoin class of 2017, NFT collector, and addicted to learning, experimenting and adventures.</p> 
                                    <p>Chels is well-educated in behavioural economics, psychology, and finance.</p>
                                </div>


                            </div>
                            <div className='name'>Chels</div>
                            <div className='line1'></div>

                        </div>
                        <div className='team-member' data-aos="fade-up" data-aos-delay="200">
                            <div className='photo'>
                                <div className='photo-holder'><img alt="" src="img/mert.png" /></div>
                                <div className='line2' style={{'display': 'none'}}>
                                    <p>An up-and-coming artist from Turkey that leads the designing for the website and the second collection. His full profile will be revealed on 21st of October.</p>

                                </div>
                            </div>
                            <div className='name'>Mert</div>
                            <div className='line1'></div>

                        </div>
                        <div className='team-member' data-aos="fade-up" data-aos-delay="400">
                            <div className='photo'>
                                <div className='photo-holder'><img alt="" src="img/suraj.png" /></div>
                                <div className='line2' style={{'display': 'none'}}>
                                    <p>Everything Blockchain</p>
                                    <p>Blockchain & smart contract wizard, a scientist, and the director of Appsus UK. Yes, he’s THE legend that created the NFT image generator FREE for everyone to use.</p>
                                    <p>He’s also a valuable contributor on reddit discord for r/NFTcommunity.</p>
                                </div>
                            </div>
                            <div className='name'>Suraj</div>
                            <div className='line1'></div>

                        </div>
                        <div className='team-member' data-aos="fade-up" data-aos-delay="600">
                            <div className='photo'>
                                <div className='photo-holder'><img alt="" src="img/volodymyr.png" /></div>
                                <div className='line2' style={{'display': 'none'}}>
                                    <p>Website Developer</p>
                                    <p>Self-educated Website Developer from Ukraine that has been on the internet since 1994. He specializes mostly on web development.</p>
                            </div>

                            </div>
                            <div className='name'>Volodymyr</div>
                            <div className='line1'></div>

                        </div>
                        <div className='team-member' data-aos="fade-up" data-aos-delay="800">
                            <div className='photo'>
                                <div className='photo-holder'><img alt="" src="img/tracy.png" /></div>
                                <div className='line2' style={{'display': 'none'}}>
                                    <p>Tracy is a high-profile international award-winning publicist, and Universal Women's Network 2020 Woman of Inspiration Winner for the Women in Media award.</p>
                                    <p>She is Featured in Rolling Stone Magazine, The Hollywood Times, NBC TV, and other major media.</p>
                            </div>

                            </div>
                            <div className='name'>Tracy</div>
                            <div className='line1'></div>

                        </div>
                        <div className='team-member' data-aos="fade-up" data-aos-delay="1000">
                            <div className='photo'>
                                <div className='photo-holder'><img alt="" src="img/isabel.png" /></div>
                                <div className='line2' style={{'display': 'none'}}>
                                    <p>Isabel is our Performance Marketing Manager with 3+ years experience in managing successful campaigns and generating real results for clients.</p>
                                    <p>She is performance-based, passionate, and a driven digital marketer who thinks big and always testing new channels to acquire more customers.</p>
                            </div>

                            </div>
                            <div className='name'>Isabella</div>
                            <div className='line1'></div>

                        </div>
                        <div className='team-member' data-aos="fade-up" data-aos-delay="1200">
                            <div className='photo'>
                                <div className='photo-holder'><img alt="" src="img/sam.png" /></div>
                                <div className='line2' style={{'display': 'none'}}>
                                    <p>Sam has been in the crypto gaming space since 2020 and is a football fanatic.</p>
                                    <p>He's an award winning game designer and he currently lives in Japan.</p>
                            </div>

                            </div>
                            <div className='name'>Sam</div>
                            <div className='line1'></div>

                        </div>
                        <div className='team-member' data-aos="fade-up" data-aos-delay="1400">
                            <div className='photo'>
                                <div className='photo-holder'><img alt="" src="img/rio.png" /></div>
                                <div className='line2' style={{'display': 'none'}}>
                                    <p>Talented Artist from Indonesia that illustrated KwyptoKado.</p>
                            </div>

                            </div>
                            <div className='name'>Rio</div>
                            <div className='line1'></div>

                        </div>
                    </div>

            </div>

</div>
<div className='scroll-space' id="mint"></div>
<div className='wrapper'>
    <div className='container'>
        <h2 data-aos="fade-up">Fair Distribution & Efficient Minting</h2>
        <p data-aos="fade-up" data-aos-delay="300"><strong>9999 Army of Apocalypse cost 0.2 Eth to mint, and will be revealed once 100% of the minting is complete.</strong></p>
        <p data-aos="fade-up" data-aos-delay="500">Our minting is broken down to three phases to <strong>reduce gas wars:</strong></p>
        <p data-aos="fade-up" data-aos-delay="700">Exclusive whitelisted (KwyptoKado holders) mint, Nov 21st 5pm EST @ 0.15eth.<br />
            Public sale Nov 21st 7pm EST @ 0.2eth.</p>
        <p data-aos="fade-up" data-aos-delay="900">Our smart contract is <strong>fully optimised to reduce transaction failure to save you in gas fees.</strong></p>
    </div>
</div>
<div className='wrapper' id="join-family">
    <div className='container'>
        <h2 data-aos="fade-up">Join our fun family on discord for updates, giveaways, and AMA.</h2>
        <div id="countdown" className='countdown' data-aos="fade-up" data-aos-delay="300">
    <ul>
      <li><span id="days1"></span>days</li>
      <li><span id="hours1"></span>Hours</li>
      <li><span id="minutes1"></span>Minutes</li>
      <li><span id="seconds1"></span>Seconds</li>
    </ul>
</div>
<div className='button-box' data-aos="fade-up" data-aos-delay="500">
<a href="https://discord.com/invite/4pB2KZYvrm" target="_blank" rel="noreferrer" className='yellow-button'>DISCORD</a>
<a href="https://twitter.com/KwyptoLand" target="_blank" rel="noreferrer" className='yellow-button'>TWITTER</a>
<a href="https://www.instagram.com/kwyptoland/" target="_blank" rel="noreferrer" className='yellow-button'>INSTAGRAM</a>
</div>
    </div>
</div>
<div className='space-box'></div>
<div className='wrapper' id="featured-in">
    <div className='container'>
        <h2 data-aos="fade-up">As featured In</h2>
        <div data-aos="fade-up" data-aos-delay="300" className='center'>
            <div><img src="img/yahoo.png" alt="" /></div>
            <div><img src="img/ticker.png" alt="" /></div>
            <div><img src="img/marketwatch.png" alt="" /></div>
            <div><img src="img/googlenews.png" alt="" /></div>
            <div><img src="img/benzinga.png" alt="" /></div>
            <div><img src="img/bilibili.png" alt="" /></div>
            <div><img src="img/foxnews@2x.png" alt="" /></div>
            <div><img src="img/eastmoney.png" alt="" /></div>
        </div>
        <p>And many more...</p>
    </div>
</div>
</div>
  )
}
