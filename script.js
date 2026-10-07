// 매장 정보가 확정되면 아래 3개 값만 바꾸면 됩니다.
const STORE = {
  phone: "053-000-0000",
  address: "대구광역시 북구 태전동 대학로 일대 (임시주소)",
  naverMapUrl: "https://map.naver.com/"
};

document.getElementById("addressText").textContent = STORE.address;
document.getElementById("phoneText").textContent = STORE.phone;

document.querySelectorAll(".js-phone").forEach((el) => {
  el.href = "tel:" + STORE.phone.replace(/[^0-9]/g, "");
});
document.querySelectorAll(".js-map").forEach((el) => {
  el.href = STORE.naverMapUrl;
});