import * as React from 'react';
import '../Packages/PackagePage.css'
import package1 from '../../images/package/central america-hero.jpg'
import package2 from '../../images/package/Chile Tours-hero (1).jpg'
import package3 from '../../images/package/peru tours-hero.jpg'
import package4 from '../../images/package/Rio de Janeiro Tours-a.jpg'
import package5 from '../../images/package/Greece.jpeg'
import package6 from '../../images/package/New Zealand Tours-hero_0.jpg'
import package7 from '../../images/package/Vancouver Tours-a.jpg'
import package8 from '../../images/package/Northwest Territories Tours-a.jpg'
import package9 from '../../images/package/morocco tours-hero (1).jpg'
import package10 from '../../images/package/thailand tours-hero.jpg'
import package11 from '../../images/package/vietnam-hero.jpg'
import package12 from '../../images/package/China Tours-hero.jpg'


import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import {Box, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import PackageDetail from './PackageDetail';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.black,
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);



export default function RowAndColumnSpacing() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
      };

   
  return (
    <Box sx={{ width: '100%'}} className="boxcontainer">

     <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth:200 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    img src={package1}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Central America Tours & Excursions


                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    A Central America guided tour through Liberty Travel takes you on active adventures in Costa Rica and beyond. Relax on a white-sand beach, or surf Costa Rica’s renowned waves.

                    </Typography>
                </CardContent>
                <CardActions>
                    <button size="small" className='myBtn' onClick={handleClickOpen}>Learn More</button>
                    <Dialog id='dialog-contain' 
                    fullScreen
                    open={open}
                    onClose={handleClose}
                        className='dialog-contain'
                    style={{opacity: 0.95}}
                    >
                       <DialogTitle id="package-dialog-title" onClose={handleClose}>
                       Central America Tours
                        </DialogTitle>
                        <DialogContent dividers id='PackageDialogContent'>
                      
                        <PackageDetail/>

                        </DialogContent>
       
                    </Dialog>

                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    img src={package2}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Chile Guided Tours & Excursions
                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                    A Chile guided tour through Liberty Travel takes you to a land of mountains, fjords, and rich traditions. Guides can take you to Chilean wine country and to the funiculars of Valparaíso, a World Heritage city.                    </Typography>
                </CardContent>
                <CardActions>
                    <button size="small" className='myBtn'>Learn More</button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    img src={package3}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Peru Guided Tours: Wonders of History 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Machu Picchu on your bucket list? Peru guided tours offered through Liberty Travel take you to this Inca wonder with an expert guide. Trek the Inca Trail or let your guide take the wheel as you drive through the Andes. 
                    </Typography>
                </CardContent>
                <CardActions>
                    <button size="small" className='myBtn'>Learn More</button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    img src={package4}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Brazil Tours: From Rio to the Amazon

                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    isit Rio de Janeiro, a prismatic city known for its yearly Carnival. Celebrate the Samba spirit year-round, or visit the famous Copacabana and Ipanema beaches.                    </Typography>
                </CardContent>
                <CardActions>
                    <button size="small" className='myBtn'>Learn More</button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    img src={package5}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Greece  
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    From island hopping—Santorini, Mykonos, Hydra, and Corfu—to seeing the legendary historical sites of Athens, a Greece guided tour through Liberty Travel gets you the expertise of local guides who know their destinations inside, out.                     </Typography>
                </CardContent>
                <CardActions>
                    <button size="small" className='myBtn'>Learn More</button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    img src={package6}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    New Zealand
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    A New Zealand guided tour offered through Liberty Travel takes you beyond the guidebook. Visit New Zealand’s wineries and leading cities like Wellington.

                    </Typography>
                </CardContent>
                <CardActions>
                    <button size="small" className='myBtn'>Learn More</button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    img src={package7}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Vancouver
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Witness glacial-fed fjord, soaring mountains, and roaring waterfalls on a tour to Whistler. Tour Granville Island, a world-famous hub for food, art, and culture. Go cycling on the Stanley Park seawall. Vancouver is just a tour away.                 
                    </Typography>
                </CardContent>
                <CardActions>
                    <button size="small" className='myBtn'>Learn More</button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    img src={package8}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Northwest Territories 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    North America’s deepest lake—a Northwest Territories guided tour offers you the expertise of local guides who know their destinations inside out. 
                    </Typography>
                </CardContent>
                <CardActions>
                    <button size="small" className='myBtn'>Learn More</button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    img src={package9}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Morocco 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Medinas and mosques, beaches and sand dunes—the country’s vibrant culture and diverse landscape will leave you fascinated. 
                    </Typography>
                </CardContent>
                <CardActions>
                    <button size="small" className='myBtn'>Learn More</button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    img src={package10}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Thailand 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    From gilded Buddhas to gorgeous beaches, fascinating history to mouth-watering cuisine—this “Land of Smiles” is a dream destination of South-East Asia. 
                    </Typography>
                </CardContent>
                <CardActions>
                    <button size="small" className='myBtn'>Learn More</button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    img src={package11}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Viet Nam
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Vietnam offers the traveler a wonderful mélange of history, culture, and natural beauty—a nation that needs to be experienced, not just seen.
                    </Typography>
                </CardContent>
                <CardActions>
                    <button size="small" className='myBtn'>Learn More</button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    img src={package12}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    China 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Rich culture, diverse landscapes, ancient history and bustling urban centers—China has everything you could ask from a bucket-list destination.                    </Typography>
                </CardContent>
                <CardActions>
                    <button size="small" className='myBtn'>Learn More</button>
                </CardActions>
            </Card>
        </Grid>

        
    </Grid>
    </Box>
  );
}


