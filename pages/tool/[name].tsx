import { Button, Grid, Typography } from '@mui/material';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Tool, tools } from 'lib/tools';
import { ReactElement } from 'react';
import Layout from 'components/layout';

interface Props {
    tool?: Tool;
}

export default function ToolInfo({ tool }: Props): ReactElement {
    if (!tool) {
        return (
            <Grid container spacing={4} sx={{ padding: '.5em 2em' }}>
                <Grid item xs={12}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link href="/" passHref>
                            Home
                        </Link>
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={12} container>
                    <Typography variant="h3" component="p">
                        Tool not found.
                    </Typography>
                </Grid>
            </Grid>
        );
    }
    return (
        <>
            <Layout title={`${tool.name} | Next.js example`}>
                <Grid container spacing={4} sx={{ padding: '.5em 2em' }}>
                    <Grid item xs={12}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link href="/" passHref>
                                Home
                            </Link>
                            <Typography color="textPrimary">{tool.name}</Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item xs={12} container justifyContent="center" alignItems="center">
                        {/* NextJS Image optimization example. Props are src(any file under the public dir), width, and height */}
                        {tool.image && <Image {...tool.image} data-testid="image" aria-hidden="true" />}
                        <Typography
                            variant="h2"
                            sx={(theme) => ({ paddingLeft: '1em', color: theme.palette.primary.main })}
                        >
                            {tool.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container justifyContent="center">
                        <Typography variant="body1" sx={{ maxWidth: '80ch' }}>
                            {tool.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container justifyContent="center">
                        <Button variant="contained" href={tool.link} color="primary">
                            Visit {tool.name} documentation
                        </Button>
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}

// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export async function getStaticPaths() {
    return {
        paths: tools.map((tool) => ({ params: { name: tool.name } })),
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    if (params?.name) {
        const tool = tools.find(({ name: toolName }) => toolName === params.name);
        return {
            props: { tool },
        };
    }
    return {
        props: {},
    };
};
