import LoanPage from "stories/pages/loanPage";
import ProdDetailPage from "stories/pages/prodDetail";
import ZipCodePage from "stories/pages/zipcodePage";

export const NO_LAYOUT_ROUTES_URL = {
  zipCodePage: {
    name: "우편번호 찾기 페이지",
    path: () => "/zipcode",
    component: ZipCodePage,
  },
  LoanPage: {
    name: "대출가입 페이지",
    path: () => "/loan",
    component: LoanPage,
  },
  ProdDetailPage: {
    name: "상품상세 페이지",
    path: () => "/productDetail",
    component: ProdDetailPage,
  },
};
