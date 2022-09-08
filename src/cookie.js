import { Cookies } from "react-cookie";

//클라이언트(브라우저) 로컬에 저장되는 키와 값이 들어있는 데이터파일
//Key와 Value로 구성되고, String의 형태로 이루어져 있음

const cookies = new Cookies();

//
export const setCookie = (name, value) => {
    return cookies.set(name, value, { path: "/", secure: true });
};

//token 확인하기.
export const getCookie = (name) => {
    return cookies.get(name);
};

//로그아웃 토큰 삭제.
export const removeCookie = (name) => {
    return cookies.remove(name, { path: "/" });
};
