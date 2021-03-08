import GaneshChaturthi from './images/GaneshChaturthi.png';
import I from './images/IPL2020Dubai.png';
import M from './images/MuharramS.png';
import O from './images/Our_Pizza_Your_Smile.png';
import P from './images/Pizza_Deliver_B.png';
import S from './images/Sandal_Poster_5.png';
import H from './images/SuperFastHomeDelivery.png';
import T from './images/TeachersDayL.png'



import icon2 from './images/BB2.svg'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './page4.css'
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default class Page4 extends React.Component {
    //  classes = useStyles();

    render() {
        return (
            <div className="container2">

            <h2 className="text"> Our Happy Customers</h2>
            <div className="page4">
               
                <Card className="card">
                    <CardMedia
                        className="cardMedia"
                        title="Paella dish"
                    />     <img src={GaneshChaturthi} className="cardImages">
                    </img>
                </Card>

                <Card className="card">
                    <CardMedia
                        className="cardMedia"
                        title="Paella dish"
                    />     <img src={I} className="cardImages">
                    </img>
                </Card>

                <Card className="card">
                    <CardMedia
                        className="cardMedia"
                        title="Paella dish"
                    />     <img src={M} className="cardImages">
                    </img>
                </Card>
                
                <Card className="card">
                    <CardMedia
                        className="cardMedia"
                        title="Paella dish"
                    />     <img src={O} className="cardImages">
                    </img>
                </Card>

                <Card className="card">
                    <CardMedia
                        className="cardMedia"
                        title="Paella dish"
                    />     <img src={P} className="cardImages">
                    </img>
                </Card>

                <Card className="card">
                    <CardMedia
                        className="cardMedia"
                        title="Paella dish" 
                    />     <img src={S} className="cardImages">
                    </img>
                </Card>
            </div>
            </div>
        )
    }
}