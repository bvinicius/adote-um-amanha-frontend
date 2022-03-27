// TODO: Remover esta constante assim que for feita a integração com o backend.
const FAKE_JWT = `eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY0ODM0MjY5MiwiaWF0IjoxNjQ4MzQyNjkyfQ.DMjUFiMU58Zsbhijk_bzn4fM5D71h6Az5GicWJTPYak`;

function login(email: string, password: string): Promise<string> {
  console.log(email, password);
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(FAKE_JWT);
    }, 500);
  });
}

export default {
  login,
};
