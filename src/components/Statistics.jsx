import React from 'react'

const Statistics = () => {
    return (
        <section className="flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6">
            <div className="flex-1 flex justify-start items-center flex-row m-3">
                <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">3800+</h4>
                <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">User Active</p>
            </div>
            <div classNameName="flex-1 flex justify-start items-center flex-row m-3">
                <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">230+</h4>
                <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">Trusted by Company</p>
            </div>
            <div className="flex-1 flex justify-start items-center flex-row m-3">
                <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">$230M+</h4>
                <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">Transaction</p>
            </div>
        </section>
    )
}

export default Statistics