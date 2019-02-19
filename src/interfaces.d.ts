interface HelloProps {
    firstName: string;
    lastName: string;
}

interface HelloState {
    liked: boolean
}

interface LoginState {
    username: string;
    password: string;
}

interface HeaderProps {
    url: string
}

interface HeaderState {
    state: string
}