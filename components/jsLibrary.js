import Script from 'next/script'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default function jsLibrary() {
  return (
    <>
<Script src="https://code.jquery.com/jquery-3.6.0.min.js"></Script>
<Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
<Script type="text/javascript" src="/js/system.js"></Script>
</>
  )
}
