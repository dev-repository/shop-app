import Layout from "~/components/shared/Layout/Layout";
import AccountLayout from "~/components/my-account/AccountLayout";
import Register from "~/components/product/ProductRegister";
import { useState, useRef } from "react";

export default function RegisterPage() {

    const [data, setData] = useState([]);

    const dataId = useRef(0);

    const onCreate = (product, explain, price) => {
        const newItem = {
            product,
            explain,
            price,
            id: dataId.current,
        };
        dataId.current += 1;
        setData([newItem, ...data]);
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
                    My Account
                </h2>
            </div>
        </div>
        {/* 약관제목 및 배경 */}
        <AccountLayout>
            <Register onCreate={onCreate} />
        </AccountLayout>
    </>;
}

RegisterPage.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>;
};