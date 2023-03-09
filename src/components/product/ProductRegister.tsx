// import ProductRegister from "~/pages/my-account/ProductRegister";
import { useState } from 'react';



const Register = ({ }) => {
    const [name, setName] = useState({
        id: "",
        product: "",
        price: ""
    });
    const { id, product, price } = name;

    // const contentRef = useRef();
    // const onChange = (e) => {
    //     setName({
    //         ...name,
    //         [e.target.value]: e.target.value
    //     })
    // }

    function onChange(e) {
        const { value, name } = e.target;
        setName({
            ...name,
            [name]: value,
        })
    }

    const buttonSubmit = () => {
        console.log("dfdf");
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
                            name='id'
                            value={name.id}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <input
                            name='product'
                            value={name.product}
                            onChange={onChange}
                        />
                    </div>

                    <div>
                        <input name="price"
                            value={name.price}
                            onChange={onChange}
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
