import { useWindowSize } from "react-use";
import Link from "../ui/link";

const OrdersTable: React.FC = () => {

    const { width } = useWindowSize();
    return (
        <>
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                {("Orders")}
            </h2>
            <div className="w-full flex flex-col">
                {width >= 1025 ? (
                    <table>
                        <thead className="text-sm lg:text-base">
                            <tr>
                                <th className="bg-gray-100 p-4 text-heading font-semibold text-start first:rounded-ts-md">
                                    {("text-order")}
                                </th>
                                <th className="bg-gray-100 p-4 text-heading font-semibold text-start lg:text-center">
                                    {("text-date")}
                                </th>
                                <th className="bg-gray-100 p-4 text-heading font-semibold text-start lg:text-center">
                                    {("text-status")}
                                </th>
                                <th className="bg-gray-100 p-4 text-heading font-semibold text-start lg:text-center">
                                    {("text-total")}
                                </th>
                                <th className="bg-gray-100 p-4 text-heading font-semibold text-start lg:text-end last:rounded-te-md">
                                    {("text-actions")}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm lg:text-base">
                            <tr className="border-b border-gray-300 last:border-b-0">
                                <td className="px-4 py-5 text-start">

                                </td>
                                <td className="text-start lg:text-center px-4 py-5 text-heading">
                                    March 18, 2021
                                </td>
                                <td className="text-start lg:text-center px-4 py-5 text-heading">
                                    Completed
                                </td>
                                <td className="text-start lg:text-center px-4 py-5 text-heading">
                                    $16,950.00 for 93 items
                                </td>
                                <td className="text-end px-4 py-5 text-heading">

                                </td>
                            </tr>
                            <tr className="border-b border-gray-300 last:border-b-0">
                                <td className="px-4 py-5 text-start">

                                </td>
                                <td className="text-start lg:text-center px-4 py-5 text-heading">
                                    March 18, 2021
                                </td>
                                <td className="text-start lg:text-center px-4 py-5 text-heading">
                                    Completed
                                </td>
                                <td className="text-start lg:text-center px-4 py-5 text-heading">
                                    $16,950.00 for 93 items
                                </td>
                                <td className="text-end px-4 py-5 text-heading">

                                </td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <div className="w-full space-y-4">
                        <ul className="text-sm font-semibold text-heading border border-gray-300 rounded-md flex flex-col px-4 pt-5 pb-6 space-y-5">
                            <li className="flex items-center justify-between">
                                {("text-order")}
                                <span className="font-normal">

                                </span>
                            </li>
                            <li className="flex items-center justify-between">
                                {("text-date")}
                                <span className="font-normal">March 18, 2021</span>
                            </li>
                            <li className="flex items-center justify-between">
                                {("text-status")}
                                <span className="font-normal">Completed</span>
                            </li>
                            <li className="flex items-center justify-between">
                                {("text-total")}
                                <span className="font-normal">$16,950.00 for 93 items</span>
                            </li>
                            <li className="flex items-center justify-between">
                                {("text-actions")}
                                <span className="font-normal">

                                </span>
                            </li>
                        </ul>
                        <ul className="text-sm font-semibold text-heading border border-gray-300 rounded-md flex flex-col px-4 pt-5 pb-6 space-y-5">
                            <li className="flex items-center justify-between">
                                {("text-order")}
                                <span className="font-normal">

                                </span>
                            </li>
                            <li className="flex items-center justify-between">
                                {("text-date")}
                                <span className="font-normal">March 18, 2021</span>
                            </li>
                            <li className="flex items-center justify-between">
                                {("text-status")}
                                <span className="font-normal">Completed</span>
                            </li>
                            <li className="flex items-center justify-between">
                                {("text-total")}
                                <span className="font-normal">$16,950.00 for 93 items</span>
                            </li>
                            <li className="flex items-center justify-between">
                                {("text-actions")}
                                <span className="font-normal">

                                </span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default OrdersTable;