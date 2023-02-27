const ChangePassword: React.FC = () => {
    // const { mutate: changePassword, isLoading } = useChangePasswordMutation();

    // const {
    // 	register,
    // 	handleSubmit,
    // 	formState: { errors },
    // } = useForm<ChangePasswordInputType>({
    // 	defaultValues,
    // });
    // function onSubmit(input: ChangePasswordInputType) {
    // 	changePassword(input);
    // }
    return (
        <>
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                {("common:text-change-password")}
            </h2>
            <div
                className={`w-full flex  h-full lg:w-8/12 flex-col`}
            >
                <form
                    className="w-full mx-auto flex flex-col justify-center "
                >
                    <div className="flex flex-col space-y-3">


                        <div className="relative">

                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ChangePassword;
