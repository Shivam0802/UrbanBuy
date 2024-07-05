import React, { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Product = (props) => {
    const [data, setData] = useState({
        name: '',
        price: '',
        description: '',
        images: [],
        category: ''
    });
    const [files, setFiles] = useState([]);
    const [percentages, setPercentages] = useState([]);

    useEffect(() => {
        const uploadFiles = () => {
            if (!files.length) return;

            files.forEach((file, index) => {
                const name = `${new Date().getTime()}-${file.name}`;
                const fileRef = ref(storage, name);
                const uploadTask = uploadBytesResumable(fileRef, file);

                uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        setPercentages((prevPercentages) => {
                            const newPercentages = [...prevPercentages];
                            newPercentages[index] = progress;
                            return newPercentages;
                        });
                        console.log(`Upload is ${progress}% done`);
                    },
                    (error) => {
                        console.log(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            setData((prevData) => ({
                                ...prevData,
                                images: [...prevData.images, downloadURL]
                            }));
                            setPercentages((prevPercentages) => {
                                const newPercentages = [...prevPercentages];
                                newPercentages[index] = 100; // Upload completed
                                return newPercentages;
                            });
                        });
                    }
                );
            });
        };

        uploadFiles();
    }, [files]);

    const handleChange = (e) => {
        const { name, value, files: selectedFiles } = e.target;
        if (selectedFiles) {
            setFiles([...selectedFiles]);
            setPercentages(new Array(selectedFiles.length).fill(0));
        } else {
            setData({
                ...data,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, 'products'), {
                name: data.name,
                price: data.price,
                description: data.description,
                images: data.images,
                category: data.category
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='name' name="name" onChange={handleChange} />
                <input type="text" placeholder='price' name="price" onChange={handleChange} />
                <input type="file" multiple placeholder='images' name="images" onChange={handleChange} />
                <input type="text" placeholder='category' name="category" onChange={handleChange} />
                <textarea placeholder='description' name="description" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            {percentages.map((percentage, index) => (
                <div key={index}>Upload {index + 1}: {Math.round(percentage)}%</div>
            ))}
        </div>
    );
}

export default Product;
