import Layout from '~/components/shared/Layout/Layout';
import AccountLayout from '~/components/my-account/AccountLayout';
import Link from "next/link";
import { ROUTES } from "~/utils/routes";


export default function AccountPage() {
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
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-3 xl:mb-5">
                {("Dashboard")}
            </h2>
            <p className=" text-sm leading-7 md:text-base md:leading-loose lowercase">
                {("from your account dashboard you can view your")}{" "}
                <Link
                    href={ROUTES.ORDERS}
                    className="text-heading underline font-semibold"
                >
                    {("recent orders")}
                </Link>
                ,{("manage your")}{" "}
                <Link
                    href={ROUTES.ACCOUNT_DETAILS}
                    className="text-heading underline font-semibold"
                >
                    {("account details")}
                </Link>
                ,{("and")}{" "}
                <Link
                    href={ROUTES.CHANGE_PASSWORD}
                    className="text-heading underline font-semibold"
                >
                    {("change your password")}
                </Link>
                .
            </p>
        </AccountLayout>
    </>
}

AccountPage.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>;
};