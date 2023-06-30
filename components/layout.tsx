import { Typography } from '@mui/material';
import { ReactElement } from 'react';
import Head from 'next/head';

interface LayoutProps {
    children: ReactElement[] | ReactElement | string;
    title?: string;
}

const Layout = ({ children, title }: LayoutProps): ReactElement => {
    return (
        <>
            <Head>
                <title>{`${title} Title`}</title>
            </Head>
            <header style={{ padding: '1em 2em' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
                </Typography>
            </header>
            <main>{children}</main>
        </>
    );
};

export default Layout;
