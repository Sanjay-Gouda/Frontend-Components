import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length, onOtpSubmit }) => {
  const [otpInput, setOtpInput] = useState(new Array(length).fill(""));

  const inputRef = useRef<unknown>([]);

  console.log(inputRef);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  const handleInputChange = (e, ind) => {
    const value = e.target.value;

    if (isNaN(value)) return;

    const newOtp = [...otpInput];

    /* Allow only one Input */
    newOtp[ind] = value.substring(value.length - 1);
    setOtpInput(newOtp);

    /* Submit Trigger */
    const combineOtp = newOtp.join("");

    if (combineOtp.length === length) {
      console.log(combineOtp);
    }

    /* focus on to the next input if current field is filed*/
    if (value && ind < length - 1 && inputRef.current[ind + 1]) {
      inputRef.current[ind + 1].focus();
    }
  };

  const handleKeyDown = (e, ind) => {
    if (
      e.key === "Backspace" &&
      !otpInput[ind] &&
      ind > 0 &&
      inputRef.current[ind - 1]
    ) {
      inputRef.current[ind - 1].focus();
    }
  };

  const handleClick = (ind) => {
    inputRef.current[ind].setSelectionRange(1, 1);

    if (ind && !otpInput[ind - 1]) {
      inputRef.current[otpInput.indexOf("")].focus();
    }

    if (ind > 0) {
      inputRef.current[otpInput.indexOf("")].focus();
    }

    // findEmptyInput();
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
        {otpInput?.map((value, ind) => (
          <div className="w-16 h-16 ">
            <input
              className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
              type="text"
              value={value}
              onClick={() => handleClick(ind)}
              onChange={(e) => handleInputChange(e, ind)}
              onKeyDown={(e) => handleKeyDown(e, ind)}
              ref={(input) => (inputRef.current[ind] = input)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default OtpInput;
