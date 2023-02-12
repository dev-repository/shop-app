import React from 'react';
import Container from '~/components/ui/container';
import { termsAndServices } from '~/setting/terms-setting';
import { Link, Element } from "react-scroll";
import Layout from '~/components/shared/Layout/Layout';
// import { useTranslation } from "next-i18next";


interface HeaderProps {
    pageSubHeader?: string; //pageSubHeader가 값을 가지면string 안가져도 값이 있음
    pageHeader: string;
}

function makeTitleToDOMId(title: string) {
    return title.toLowerCase().split(" ").join("_");
}

const Page = () => {
    // const { t } = useTranslation("terms");
    const Terms = () => {
        console.log(typeof Terms);
    }
    return <>
        {/* 약관제목 및 배경 */}
        <div
            className="flex justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover"
            style={{
                backgroundImage: "url(/assets/images/page-header.jpg)",
            }}
        >
            <div className="absolute top-0 start-0 bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
            <div className="w-full flex items-center justify-center relative z-10 py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">
                    <span className="font-satisfy block font-normal mb-3">
                        explore
                    </span>
                    Terms of Service
                </h2>
            </div>
        </div>
        {/* 약관제목 및 배경 */}


        <div className='mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24'>
            <Container>
                <div className="flex flex-col md:flex-row">
                    <nav className="md:w-72 xl:w-3/12 mb-8 md:mb-0">
                        <ol className="sticky md:top-16 lg:top-28 z-10">
                            {termsAndServices?.map((item, index) => (
                                <li key={item.id}>
                                    <Link
                                        spy={true}
                                        offset={-120}
                                        smooth={true}
                                        duration={500}
                                        to={makeTitleToDOMId(item.title)}
                                        activeClass="text-heading font-semibold"
                                        className="block cursor-pointer py-3 lg:py-3.5 text-sm lg:text-base  text-gray-700 uppercase"
                                    >

                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </nav>
                    {/* End of section scroll spy menu */}

                    <div className="md:w-9/12 md:ps-8 ">
                        {termsAndServices?.map((item) => (
                            // @ts-ignore
                            <Element
                                key={item.title}
                                id={makeTitleToDOMId(item.title)}
                                className="mb-10"
                            >
                                <h2 className="text-lg md:text-xl lg:text-2xl text-heading font-bold mb-4">

                                </h2>
                                <div
                                    className="text-heading text-sm leading-7 lg:text-base lg:leading-loose"
                                    dangerouslySetInnerHTML={{
                                        __html: (`${item.description}`),
                                    }}
                                />
                            </Element>
                        ))}
                    </div>
                    {/* End of content */}
                </div>
            </Container>
        </div>

    </>;
}


Page.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>;
};

export default Page;