import Script from 'next/script'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function jsLibrary() {
  return (
    <>
<Script src="https://code.jquery.com/jquery-3.6.0.min.js"></Script>
<Script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></Script>
<Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
<Script src="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/jquery.slicknav.min.js"></Script>
<Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></Script>
<Script type="text/javascript" src="/js/system.js"></Script>
</>
  )
}
