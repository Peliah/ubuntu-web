"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { background } from '@/components/utils';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const demoCredentials = {
    password: '123',
};

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === demoCredentials.password) {
            router.push('/');
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };


    return (
        <div className="flex items-center justify-center h-screen " style={{ backgroundImage: `url(${background})` }}>
            <div className='h-full w-full flex items-center justify-center backdrop-blur-md'>

                <form onSubmit={handleSubmit} className=" rounded w-1/5 text-center flex flex-col items-center justify-center">
                    <div className='h-40 w-40 rounded-full text-center bg-zinc-500 opacity-45 mb-4'></div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="mb-8 text-zinc-200 text-3xl">
                        <span>Peliah</span>
                    </div>
                    <div className="relative mb-4 w-full">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border  p-1 pr-10 rounded-xl text-white text-3xl bg-opacity-20 text-opacity-100 bg-zinc-500"
                            required
                        />
                        <span
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                        </span>
                    </div>
                    <button type="submit" className="w-0 text-white p-2 rounded"></button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
