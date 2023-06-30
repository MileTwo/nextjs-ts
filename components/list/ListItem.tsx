import Image from '../Image';
import { ListItem as MUIListItem, ListItemAvatar, Avatar, ListItemText, Grid, Typography } from '@mui/material';
import Link from '../link/Link';
import { Image as ImageType } from '../../pages/index';

export type Link = {
    label: string;
    href: string;
    as?: string;
};

type Props = {
    name: string;
    image: ImageType | undefined;
    link: Link;
};

export default function ListItem({ name, image, link }: Props) {
    return (
        <MUIListItem divider>
            <Grid container alignItems="center">
                <ListItemAvatar>
                    <Avatar alt={name} sx={(theme) => ({ backgroundColor: theme.palette.grey[100] })}>
                        {/* NextJS Image optimization example. Props are src(any file under the public dir), width, and height */}
                        <Image image={image} name={name} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText>
                    <Typography variant="body1">{name}</Typography>
                </ListItemText>
                <Grid
                    container
                    item
                    xs={12}
                    md={3}
                    sx={(theme) => ({ justify: 'center', padding: theme.spacing(2) })}
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <Link as={link?.as} underline="hover" color="inherit" href={link.href} aria-label={link.label}>
                        {link.label}
                    </Link>
                </Grid>
            </Grid>
        </MUIListItem>
    );
}
