// import React from 'react';
// import { useState, useEffect } from 'react';
// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
// import {  db, storage } from '../firebase';
// import { collection, addDoc } from 'firebase/firestore';

// const Product = (props) => {

//     const [data, setData] = React.useState({
//         name: '',
//         price: '',
//         description: '',
//         image: [''],
//         category: ''
//     });
//     const [file, setFile] = React.useState(null);
//     const [percentage, setPercentage] = React.useState(0);

//     useEffect(() => {
//         const uploadFile = () => {
//           if (!file) return;
          
//           const name = `${new Date().getTime()}-${file.name}`;
//           const fileRef = ref(storage, name);
//           const uploadTask = uploadBytesResumable(fileRef, file);
    
//           uploadTask.on('state_changed', 
//             (snapshot) => {
//               const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//               setPercentage(progress);
//               console.log('Upload is ' + progress + '% done');
//               switch (snapshot.state) {
//                 case 'paused':
//                   console.log('Upload is paused');
//                   break;
//                 case 'running':
//                   console.log('Upload is running');
//                   break;
//                 default:
//                   console.log('Upload is done');
//               }
//             }, 
//             (error) => {
//               console.log(error);
//             }, 
//             () => {
//               getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                 setData((prevData) => ({
//                   ...prevData,
//                   image: downloadURL
//                 }));
//                 setPercentage(100); // Upload completed
//               });
//             }
//           );
//         };
    
//         uploadFile();
//       }, [file]);

//       const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         if (files) {
//           setFile(files[0]);
//         } else {
//           setData({
//             ...data,
//             [name]: value
//           });
//         }
//       };

//       const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         try {
//           await addDoc(collection(db, 'products'), {
//             name: data.name,
//             price: data.price,
//             description: data.description,
//             image: data.image,
//             category: data.category
//           });
//         } catch (error) {
//           console.log(error);
//         }
//       };

//     return (
//         <div>
//             <form>
//                 <input type="text" placeholder='name'  onChange={handleChange} />
//                 <input type="text" placeholder='price'onChange={handleChange} />
//                 <input type="file" placeholder='image'  onChange={handleChange}/>
//                 <input type='text' placeholder='category'  onChange={handleChange} />
//                 <textarea placeholder='description' onChange={handleChange} />
//                 <button onClick={handleSubmit}>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Product;

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
