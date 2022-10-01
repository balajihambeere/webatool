import { ReactElement } from 'react'
import Head from 'next/head';
import HeroSection from 'src/features/home/views/HeroSection';
import HomeLayout from 'src/features/home/views/Layout';
import { NextPageWithLayout } from './_app';
import Footer from 'src/features/home/views/Footer';
import InfoSection from 'src/features/home/views/InfoSection';

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Webatool Web Accessibility</title>
        <meta name="description" content="Web Accessibility Tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <InfoSection />
      <Footer title='webatool' />
    </div>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (<HomeLayout>
    {page}
  </HomeLayout>
  );
}

export default HomePage
