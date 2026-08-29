import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 2,
  duration: "10s",

  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<2000"],
  },
};

const BASE_URL = "http://lojaebac.ebaconline.art.br";

export default function () {
  const productResponse = http.get(
    `${BASE_URL}/product/cassia-funnel-sweatshirt/`,
  );

  check(productResponse, {
    "produto retorna status 200": (response) => response.status === 200,
  });

  const cartResponse = http.get(`${BASE_URL}/carrinho/`);

  check(cartResponse, {
    "carrinho responde sem erro de servidor": (response) =>
      response.status < 500,
  });

  sleep(1);
}
