import { useState } from 'react'
import { Login } from '../services/authServices';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router';

const useLogin = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const payload = {
            name,
            email,
            password
        }

        try {
            console.log(payload);
            
            const res = await Login(payload);
            console.log(res);
            alert('Login berhasil');
            navigate('/home');
        } catch (error) {
    if (isAxiosError(error)) {
        console.log('Error response:', error.response?.data);
        alert(error.response?.data?.message || 'Login gagal');
    } else {
        console.error('Unexpected error:', error);
        alert('Terjadi kesalahan tak terduga');
    }
}

    };

    return {
        name, setName,
        email, setEmail,
        password, setPassword,
        handleLogin
    };
};

export default useLogin;
