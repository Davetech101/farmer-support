import Hero from './_components/hero/Hero'
import Revolution from './_components/revolution/Revolution'
import Forecast from './_components/forecast/Forecast'
import Optimize from './_components/optimize/Optimize'
import Footer from './_components/footer/Footer'
import Header from './_components/header/Header'

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Revolution/>
      <Forecast/>
      <Optimize/>
      <Footer/>
    </>
  )
}
