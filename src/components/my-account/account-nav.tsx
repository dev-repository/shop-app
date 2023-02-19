import Link from "next/link";

const accountMenu = [
    {
        name: "text-1",
    },
    {
        name: "text-2",
    },
    {
        name: "text-3",
    },
    {
        name: "text-4",
    },
]

export default function AccountNav() {
    return (
        <nav className="flex flex-col md:w-2/6 2xl:w-4/12 md:pe-8 lg:pe-12 xl:pe-16 2xl:pe-20 pb-2 md:pb-0">
            {accountMenu.map((item) => {
                return (
                    // <Link href={item.name}>
                    <a className="flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 rounded mb-2">
                        <span className="ps-2">{(`${item.name}`)}</span>
                    </a>
                    // </Link>
                )
            })}
        </nav>
    );
}