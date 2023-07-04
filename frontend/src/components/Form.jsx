import { useState } from 'react';
import { Input, Button } from "@material-tailwind/react";

const Form = () => {
    const [book, setBook] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const sanitizedInput = {
            book: book.trim()
        };

        const response = await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sanitizedInput)
        });

        const data = await response.json();

        console.log(data);
    }

    return (
        <form action="#" onSubmit={handleSubmit} className="relative flex w-full mx-auto max-w-[52rem] px-2">
            <Input
                type="text"
                label="Search Book"
                value={book}
                onChange={e => setBook(e.target.value)}
                className="pr-20"
                containerProps={{
                    className: "min-w-0",
                }}
            />
            <Button
                type="submit"
                size="sm"
                color={book ? "blue" : "blue-gray"}
                disabled={!book}
                className="!absolute right-3 top-1 rounded"
            >
                Search
            </Button>
        </form>
    );
}
 
export default Form;