import { CardContent, CardHeader, Link, Typography } from '@mui/material';
import { Avatar, Grid, Card, CardActions } from '@mui/material';
import { integrantes } from '../../Helpers/Helpers';
import { useTheme } from '@emotion/react';

const AboutUs = () => {
  const theme = useTheme();
  const { values } = theme.breakpoints;

  return (
    <Grid
      container
      spacing={4}
      sx={{
        minHeight: theme.heights.homeSection,
        justifyContent: 'start',
        padding: '10px',
        width: {
          mobile: '99.5%',
          tablet: '99.5%',
          laptop: '99.5%',
          desktop: values.desktop,
        },
        alignSelf: 'center',
        mb: 8,
      }}
    >
      {integrantes.map((integrante) => (
        <Grid item mobile={12} tablet={6} laptop={6} desktop={6} key={integrante.id}>
          <Card
            sx={{
              maxWidth: '100%',
              minWidth: '200px',
              padding: 2,
              height: 'auto',
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  src={integrante.imagen}
                  sx={{ width: 160, height: 160, bgcolor: theme.palette.primary.light }}
                  aria-label="recipe"
                >
                  {integrante.nombre
                    .split(' ')
                    .map((ele) => ele[0])
                    .join('')}
                </Avatar>
              }
              title={
                <>
                <Typography variant="h9" sx={{ display: 'flex', flexWrap: 'wrap', fontWeight: 'bold' }}>
                  {integrante.redes}
                </Typography>
                  <Typography sx={{ display: 'flex', width: '20px' }} variant="h6">
                    {integrante.nombre}
                  </Typography>
                  
                  <Typography variant="h7">{integrante.area}</Typography>
                  
                </>
              }
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}
            >
              <Typography sx={{ width: 200, h: 200, fontSize: 14 }}>
                {integrante.description}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                mt: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <Link href={integrante.linkedin} sx={{ fontSize: 12, textAlign: 'start' }}>
                <Typography>LINKEDIN</Typography>
              </Link>
              <Link href={integrante.github} sx={{ fontSize: 12, textAlign: 'start' }}>
                <Typography>GITHUB</Typography>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AboutUs;
