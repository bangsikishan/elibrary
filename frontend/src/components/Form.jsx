import { useState } from 'react';
import { Input, Button } from "@material-tailwind/react";

const Form = () => {
    const [book, setBook] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(book);
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