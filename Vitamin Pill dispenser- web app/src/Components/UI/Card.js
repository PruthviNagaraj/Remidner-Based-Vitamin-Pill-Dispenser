import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const BasicCard = props => {
    // const [cardHover, setCardHover] = useState(false);
    // console.log(cardHover, 'cardHover')
    return (
        <Card
            sx={{ minWidth: 275, marginBottom: 5, 
                // background: cardHover ? '#F4F0EF' : 'white'  
            }}
            onClick={props.onCardClick}
            // onMouseEnter={() => setCardHover(true)}
        >
            <CardContent>{props.cardContent}</CardContent>
        </Card>
    );
}

export default BasicCard;