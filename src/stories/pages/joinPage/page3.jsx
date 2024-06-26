import { usePostIdCheck, usePostRegister } from "hooks/queries/userQueries";
import useValid from "hooks/useValid";
import React from "react";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import ShortButton from "stories/atoms/shortButton";
import Title from "stories/atoms/title";

const Page3 = ({ registForm, setRegistForm }) => {
  const { mutate: checkId, ok } = usePostIdCheck();
  const { mutate: register } = usePostRegister();

  const { validText, isValid } = useValid(registForm);

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setRegistForm((draft) => {
      draft[field] = value;
    });
  };

  const handleId = () => {
    checkId(registForm.userId);
  };

  const handleClick = () => {
    if (isValid.isUserPassword && isValid.isUserRePassword) {
      const { userRePwd, ...formDataToSend } = registForm;

      register(formDataToSend);
      window.location.href = "/login";
    }
  };

  return (
    <div>
      <Title text1={"회원가입"} text2={""} />
      <div className="pl-10">아이디/패스워드를 설정해주세요.</div>
      <div className="mt-35 flex flex-col space-y-4">
        <div className="flex justify-between space-x-3">
          <Input
            placeholder={"아이디"}
            onChange={handleChange("userId")}
            validate={ok ? true : false}
            msg={
              ok !== null
                ? ok
                  ? "사용가능한 아이디입니다."
                  : "중복된 아이디입니다."
                : ""
            }
          />
          <span className="mt-2" onClick={handleId}>
            <ShortButton
              text={"중복체크"}
              active={registForm.userId ? true : false}
            />
          </span>
        </div>

        <Input
          placeholder={"비밀번호"}
          onChange={handleChange("userPwd")}
          msg={validText.userPwd}
          type="password"
        />
        <Input
          placeholder={"비밀번호 재확인"}
          onChange={handleChange("userRePwd")}
          msg={validText.userRePwd}
          type="password"
        />
      </div>
      <div className="flex flex-col justify-center items-center absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"가입하기"}
          active={isValid.isUserPassword && isValid.isUserRePassword}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Page3;
