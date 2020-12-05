import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import * as Mat from '@material-ui/icons'
import AudioX from './Audio'
import './style.css'
import ToolTip from '@material-ui/core/Tooltip'

function Cards(props) {
  const [show,setShow]=useState(false);



    const Set = ()=>{
       show===true?setShow(false):setShow(true);
        console.log(show);
    }  




    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });

      const styles = useStyles();
      
    return (
        <>
        <div className='box'>
             <Card className={styles.root}>
      <CardActionArea>
        <CardMedia
          className={styles.media}
          image={props.img}
          title="Anime OSTs"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <ToolTip title='Listen Now or click the 3-dot menu Button to Download the song'>
        <Button size="small" color="primary"  onClick={Set}>
          Listen Now <Mat.ChevronRightRounded/>
        </Button>
        </ToolTip>


      </CardActions>
    </Card> 


    <div className='show'>
        {show?<AudioX img={props.img} name={props.name}audio={props.audio}/>:''}
    </div>
         
        </div>

        </>
    );
}

export default Cards
