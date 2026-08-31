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

const BASE_URL = __ENV.BASE_URL || "http://lojaebac.ebaconline.art.br";

export default function () {
  const productResponse = http.get(
    `${BASE_URL}/product/cassia-funnel-sweatshirt/`,
  );

  check(productResponse, {
    "produto retorna status 200": (response) => response.status === 200,
  });

  const cartResponse = http.get(`${BASE_URL}/carrinho/`);

  // O check aceita qualquer status abaixo de 500 (não exige 200 exato):
  // como o K6 não estabelece sessão autenticada, o carrinho pode responder
  // com redirecionamento dependendo do estado da sessão. O objetivo aqui é
  // detectar erro de servidor, não validar o conteúdo da página.
  check(cartResponse, {
    "carrinho responde sem erro de servidor": (response) =>
      response.status < 500,
  });

  sleep(1);
}