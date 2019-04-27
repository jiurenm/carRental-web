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

interface DrawerState {
    confirmLoading: boolean;
    visible: boolean;
}

interface contractState {
    dataSource: Array<any>,
    zhuti: string,
    phone: string,
    email: string,
    context: string,
}

interface carProp {
}

interface CarState {
    initLoading: boolean,
    loading: boolean,
    carList: string,
    key: string,
    noTitleKey: string,
    selectedTag: any
}