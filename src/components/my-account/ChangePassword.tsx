import PasswordInput from "../shared/Form/PasswordInput";
import Button from "../shared/Common/Button";


const ChangePassword: React.FC = () => {

    return (
        <>
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                {("Change Password")}
            </h2>
            <div
                className={`w-full flex  h-full lg:w-8/12 flex-col`}
            >
                <form
                    className="w-full mx-auto flex flex-col justify-center "
                >
                    <div className="flex flex-col space-y-3">
                        <PasswordInput
                            label="Old Password"

                            className="mb-4"
                        />
                        <PasswordInput
                            label="New Password"

                            className="mb-4"
                        />
                        <div className="relative">
                            <Button
                                type="submit"
                                className="h-13 mt-3"
                            >
                                {("Change-password")}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ChangePassword;
