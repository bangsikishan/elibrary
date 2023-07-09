import { useState } from 'react';
import {
    Input,
    Button
} from "@material-tailwind/react";
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AddBook = () => {
    const user = useSelector((state) => {
        return state.auth.user; 
    });

    const [book, setBook] = useState('');
    const [author, setAuthor] = useState('');
    const [pdf, setPdf] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const sanitizedInput = {
            book: book.trim(),
            author: author.trim()
        };
    }

    return (
        <div className="py-28">
            <h1 className="text-center font-bold text-gray-800 mb-6 text-2xl md:text-3xl">Add Book</h1>
            <form action="#" encType='multipart/form-data' className="max-w-[30rem] space-y-6 mx-auto px-2" onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    label="Book Name" 
                    name="book" 
                    value={book} 
                    onChange={e => setBook(e.target.value)} 
                    required 
                />
                <Input 
                    type="text" 
                    label="Author" 
                    name="author" 
                    value={author} 
                    onChange={e => setAuthor(e.target.value)} 
                    required 
                />
                <input 
                    type="file" 
                    name="pdf" 
                    value={pdf} 
                    onChange={e => setPdf(e.target.value)} 
                    className='class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100'
                    required 
                />
                {error ? <p className='text-xs text-red-600'>{error}</p> : <></>}
                <Button type="submit">Add Book</Button>
            </form>
        </div>
    );
}
 
export default AddBook;