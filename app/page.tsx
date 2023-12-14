import Image from 'next/image'
import Hero from './_components/hero/Hero'
import Revolution from './_components/revolution/Revolution'
import Forecast from './_components/forecast/Forecast'
import Optimize from './_components/optimize/Optimize'

export default function Home() {
  return (
    <>
      <Hero/>
      <Revolution/>
      <Forecast/>
      <Optimize/>
    </>
  )
}
