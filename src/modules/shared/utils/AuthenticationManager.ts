const ACCESS_TOKEN_KEY = "access_token"

export function saveAccessToken(accessToken: string): void {
    const token = accessToken.split(' ')[1];
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function getAccessToken(): string | null {
    console.log('passou aqui!!!')
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function isAuthenticated(): boolean {
    const token = getAccessToken();
    if (!token) {
        console.log('not authenticated')
        return false;
    }
    console.log('authenticated')
    return true;
}