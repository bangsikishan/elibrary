import { useState } from 'react';
import {
    Input,
    Button
} from "@material-tailwind/react";

const AddBook = () => {
    const [book, setBook] = useState('');
    const [author, setAuthor] = useState('');
    const [pdf, setPdf] = useState('');
    const [error, setError] = useState('');

    const onFileChange = (e) => {
        setPdf(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('book', book.trim());
        formData.append('author', author.trim());
        formData.append('pdf', pdf);

        const response = await fetch('http://localhost:3000/add', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if(data.error) {
            setError(data.error);
        }
        else {
            setError('');
            
            setBook('');
            setAuthor('');
            setPdf('');
        }
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
                    onChange={onFileChange} 
                    accept=".pdf" 
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