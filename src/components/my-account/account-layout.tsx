import Container from "../ui/container";
// import AccountNav from "./account-nav";

interface Props {
    children: any;
}

const AccountLayout: React.FunctionComponent<Props> = ({ children }) => {
    return (
        <>
            <Container>
                <div className="py-16 lg:py-20 px-0 xl:max-w-screen-xl mx-auto flex  md:flex-row w-full">
                    <div className="flex flex-col md:flex-row w-full">
                        {/* <AccountNav /> */}
                        <div className="md:w-4/6 2xl:w-8/12 mt-4 md:mt-0">{children}</div>
                    </div>
                </div>


            </Container>
        </>
    )
}

export default AccountLayout;


//children에러
//accountlayout에 react붙였는데 react안뜸 그래서 index accountlayout에 빨간줄
