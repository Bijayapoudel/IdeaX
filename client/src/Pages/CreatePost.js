/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useState } from 'react';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [files, setFiles] = useState('');
    async function createNewPost(ev) {

        ev.preventDefault();
        const newPost = {
            title,
            summary,
            content,
        };
        const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
        existingPosts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(existingPosts));
        // Clear the input fields
        setTitle('');
        setSummary('');
        setContent('');
    }
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    };
    // eslint-disable-next-line no-undef
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    return (
        <form onSubmit={createNewPost}>
            <input type="title" placeholder={'title'} value={title} onChange={ev => setTitle(ev.target.value)} />
            <input type="summary" placeholder={'Summary'} value={summary} onChange={ev => setSummary(ev.target.value)} />
            <input type="file" onChange={ev => setFiles(ev.target.files)} />
            <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats} />
            <button style={{ marginTop: '10px' }}>Create Post</button>
        </form>
    )
}

