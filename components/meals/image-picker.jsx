'use client';
import { useRef, useState } from 'react';
import styles from './image-picker.module.css';
import Image from 'next/image';
export default function ImagePicker({ label, name}) {
    console.log(name,'picked name');
    const [imagePicked, setImagePicked] = useState();
    const imageInput = useRef();
    function handlePickClick() {
        imageInput.current.click();
    }
    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setImagePicked(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }
    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <div className={styles.preview}>
                    {!imagePicked && <p>No image Picked.</p>}
                    {imagePicked && (
                        <Image
                            src={imagePicked}
                            alt='Image selected by the user.'
                            fill />
                    )}
                </div>
                <input 
                    className={styles.input}
                    type="file"
                    accept="image/png, image/jpeg"
                    id={name}
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
                <button
                    className={styles.button}
                    type='button'
                    onClick={handlePickClick}
                > Pick an Image</button>
            </div>
        </div>
    );
}