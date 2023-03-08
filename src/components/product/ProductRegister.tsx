// import ProductRegister from "~/pages/my-account/ProductRegister";
import { useState, useRef } from 'react';



const Register = ({ }) => {
    const [name, setName] = useState("");
    const contentRef = useRef();
    const onChange = (e) => {
        setName(e.target.value);
    }

    const buttonSubmit = () => {
        if (name.length < 2) {
            contentRef.current.focus();
            return;
        }
    }
    return (
        <>
            <div className="md:w-4/6 2xl:w-8/12 mt-4 md:mt-0">
                <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                    {("상품 등록 페이지")}
                </h2>
                <div>
                    <div>
                        <input
                            value={name}
                            onChange={onChange}
                            ref={contentRef}
                        />
                    </div>
                    <div>
                        <textarea
                            value={name}
                            onChange={onChange}
                            ref={contentRef}
                        />
                    </div>
                    <button onClick={buttonSubmit}>
                        등록
                    </button>
                </div>
            </div>
        </>
    )
}

export default Register;
