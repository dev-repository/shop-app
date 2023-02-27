import { useForm } from "react-hook-form";
import { RadioBox } from "../ui/RadioBox";
import Button from "../ui/button";
import Input from "../ui/input";


const AccountDetails: React.FC = () => {

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm<UpdateUserType>({
    //     defaultValues,
    // });
    // function onSubmit(input: UpdateUserType) {
    //     updateUser(input);
    // }

    return (
        // motion.div뭔지
        <div className={`w-full flex flex-col`}>
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                {("Account-details")}
            </h2>
            <form
                className="w-full mx-auto flex flex-col justify-center ">
                <div className="flex flex-col space-y-4 sm:space-y-5">
                    <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                        <Input
                            labelKey="forms:label-email-star"
                            variant="solid"
                            className="w-full sm:w-1/2"
                            value={"First Name"}
                        />
                        <Input
                            variant="solid"
                            className="w-full sm:w-1/2"
                            value={"Last Name"}
                        />
                    </div>
                    <Input
                        className="w-full sm:w-1/2"
                        value={"Display Name"}
                    />
                    <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                        <Input
                            className="w-full sm:w-1/2"
                            value={"PhoneNumber"}
                        />
                        <Input
                            className="w-full sm:w-1/2"
                            value={"email"}
                        />
                    </div>
                    <div className="relative flex flex-col">
                        <span className="mt-2 text-sm text-heading font-semibold block pb-1">
                            {("Gender")}
                        </span>
                        <div className="mt-2 flex items-center space-s-6">
                            <RadioBox
                                labelKey="male"
                                // {...register("gender")}
                                value="male"
                            />
                            <RadioBox
                                labelKey="female"
                                // {...register("gender")}
                                value="female"
                            />
                        </div>
                        <div className="relative">
                            <Button
                                type="submit"
                                className="h-12 mt-3 w-full sm:w-32"
                            >
                                {("Save")}
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AccountDetails;