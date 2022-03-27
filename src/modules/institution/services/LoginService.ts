// TODO: Remover esta constante assim que for feita a integração com o backend.
const FAKE_JWT = `eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY0ODM0MjY5MiwiaWF0IjoxNjQ4MzQyNjkyfQ.DMjUFiMU58Zsbhijk_bzn4fM5D71h6Az5GicWJTPYak`;

function login(email: string, password: string): Promise<HTTPResponse> {
  // Método com implementação mocada enquanto não existe integração com o backend.
  console.log(email, password);
  return new Promise((resolve) => {
    const responseMock = {
      status: 401,
      data: {
        token: FAKE_JWT,
      },
    };

    setTimeout(() => {
      return resolve(responseMock);
    }, 500);
  });
}

type HTTPResponse = {
  status: number;
  data: LoginResponseData;
};

type LoginResponseData = {
  token: string;
};

export default {
  login,
};
