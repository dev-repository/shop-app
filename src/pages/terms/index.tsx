import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Container from '~/components/ui/container';
import Terms from '../../../public/locales/en/terms.json';


const Page = () => {
    const Terms = () => {
        console.log(typeof Terms);
    }
    return <>
        <Header />
        <Container>
            <div className='mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24'>

            </div>
        </Container>
    </>;
}

export default Page;