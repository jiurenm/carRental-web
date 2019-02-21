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

interface HelpState {
    context: any;
}

interface HelpProps {
    id: string;
    match: any;
    history: any;
}