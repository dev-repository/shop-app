import React from 'react';
import Container from '~/components/ui/container';
// import { termsAndServices } from '~/setting/terms-setting';
import { Link, Element } from "react-scroll";
import Layout from '~/components/shared/Layout/Layout';
import { Terms } from '~/api/mock/terms';


interface HeaderProps {
    pageSubHeader?: string; //pageSubHeader가 값을 가지면string 안가져도 값이 있음
    pageHeader: string;
}

function makeTitleToDOMId(title: string) {
    return title.toLowerCase().split(" ").join("_");
}

export const termsAndServices = [
    {
        id: "1",
        title: "PURPOSE",
        description: "Little & Big is committed to protecting your privacy because we are committed to valuing people. Our Privacy Policy below sets out how your personal information is collected, used and protected. The Demo Country Privacy Principles also apply to us. <br><br> This Privacy Policy describes our policies and procedures on the collection, holding, use and disclosure of your personal information and should be read together with our Terms and Conditions. By providing your personal information you consent to our collection, use and disclosure of that information in accordance with this Privacy Policy."
    },
    {
        id: "2",
        title: "WHAT IS PERSONAL DATA?",
        description: "When used in this Policy, 'personal information' has the meaning given in the Privacy Act. Generally, it means any information or an opinion that could be used to identify you",
    },
    {
        id: "3",
        title: "PERSONAL DATA COLLECTED",
        description: "Personal Data collected for the following purposes and using the following services: <br> Google Analytics: Cookies; Usage Data <br> Contact form: email address; first name; phone number <br> Mailing list or newsletter: email address; first name",
    },
    {
        id: "4",
        title: "ACCESSING YOUR PERSONAL DATA",
        description: "You may request access to your personal information collected by us, and ask that we correct that personal information. You can ask for access or correction by contacting us and we will usually respond within 30 days. If we refuse to give you access to, or correct, your personal information, we will notify you in writing setting out the reasons.",
    },
    {
        id: "5",
        title: "COMPLAINTS",
        description: "If you believe your privacy has been breached or you have a complaint about how we have handled your personal information, please contact us in writing. We will respond within a reasonable period (usually within 30 days).",
    },
    {
        id: "6",
        title: "OWNER AND DATA CONTROLLER",
        description: "The Commons<br>20-40 demo St,<br>Jon doe NSW 2008<br>Country<br><br>Email: demo@demo.com",
    },
];


const Page = () => {
    console.log(Terms);
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
                    Terms of ervice
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
                                        {(index <= 9 ? "0" : "") + //index가 9보다 작을때 0 아니면 ""
                                            index +
                                            " " +
                                            (`${item.title}`)}
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
                                    {(`${item.title}`)}
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