import Link from "next/link";
import { useRouter } from "next/router";
import { ROUTES } from "~/utils/routes";
const accountMenu = [
    {
        slug: ROUTES.ACCOUNT,
        name: "text-dashboard",
    },
    {
        slug: ROUTES.ORDERS,
        name: "text-orders",
    },
    {
        slug: ROUTES.ACCOUNT_DETAILS,
        name: "text-account-details",
    },
    {
        slug: ROUTES.CHANGE_PASSWORD,
        name: "text-change-password",
    },
]

export default function AccountNav() {

    const { pathname } = useRouter();
    const newPathname = pathname.split("/").slice(2, 3);
    const mainPath = `/${newPathname[0]}`;



    return (
        <nav className="flex flex-col md:w-2/6 2xl:w-4/12 md:pe-8 lg:pe-12 xl:pe-16 2xl:pe-20 pb-2 md:pb-0">
            {accountMenu.map((item) => {
                const menuPathname = item.slug.split("/").slice(2, 3);
                const menuPath = `/${menuPathname[0]}`;

                return (
                    <Link key={item.slug} href={item.slug}>
                        {/* <a className="flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 rounded mb-2"> */}
                        <span className="ps-2">{(`${item.name}`)}</span>
                        {/* </a> */}
                    </Link>
                )
            })}
        </nav>
    );
}