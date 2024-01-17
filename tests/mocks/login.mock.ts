const hashedPassword = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJIYWdhciIsImlhdCI6MTY4Njc1NDc1Nn0.jqAuJkcLp0RuvrOd4xKxtj_lm3Z3-73gQQ9IVmwE5gA';

const existingUser = {
    username: 'Hagar',
    password: 'armadura',
};

const nonExistingUser = {
    username: '',
    password: 'fantasminha',
};


export default {
    hashedPassword,
    existingUser,
    nonExistingUser,
};