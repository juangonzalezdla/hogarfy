import { useEffect } from "react"
import BasicHeader from '../../components/BasicHeader';
import Main from '../components/Main';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Footer from '../../components/Footer';

export default function AboutUs() {
  return (
    <>
      <BasicHeader />
      <Main>
        <Title title='¿Quiénes somos?' />
      </Main>
      <Footer />
    </>
  )
}
