import React from 'react';

const ContactSlugsPages = async ({params}) => {
    const p = await params
    console.log(p);
    return (
        <div>
            this is slugs
        </div>
    );
};

export default ContactSlugsPages;