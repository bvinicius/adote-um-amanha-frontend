import { HTTP } from "@/api/http-common";

async function login(email: string, password: string): Promise<HTTPResponse> {
  const response = await HTTP.post('public/autenticacao/login', { email, senha: password })
    .catch(err => {
      return Promise.resolve({
        data: err.data,
        status: err.statusCode || 500
      })
    });

  const httpResponse: HTTPResponse = {
    data: response.data,
    status: response.status
  };
  return Promise.resolve(httpResponse);
}

type HTTPResponse = {
  status: number;
  data: LoginResponseData;
};

type LoginResponseData = {
  accessToken: string;
};

export default {
  login,
};
