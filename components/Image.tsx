import React, { ReactElement } from 'react';
import NextImage from 'next/image';
import { Avatar } from '@mui/material';
import { Image as ImageType } from '../pages';

interface Props {
    image: ImageType | undefined;
    name: string;
}

export default function Image({ image, name }: Props): ReactElement {
    const firstLetter = name.slice(0, 1).toUpperCase();

    if (!image) {
        return (
            <Avatar
                sx={(theme) => ({ color: theme.palette.common.white, backgroundColor: theme.palette.primary.main })}
            >
                {firstLetter}
            </Avatar>
        );
    }

    if (image.src.startsWith('/')) {
        return <NextImage src={image.src || firstLetter} width={50} height={50} alt={name} data-testid="image" />;
    }

    return (
        <>
            {/* used for non optimizable entries (files not stored in public directory) */}
            <img data-testid="image" src={image.src || firstLetter} width={50} height={50} alt={name} />
        </>
    );
}
