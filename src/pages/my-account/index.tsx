import Layout from '~/components/shared/Layout/Layout';



export default function AccountPage() {
    return (
        <>
            <div>ㅇㅇ</div>
        </>
    )
}

AccountPage.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>;
};