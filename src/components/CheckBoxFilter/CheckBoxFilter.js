import React, {useState, useEffect} from 'react';

//Styled components
import { StyledCheckBoxFilter, StyledListItem, CheckBoxItem, CheckBoxForm, CheckBoxText, InfoIcon, InfoBox, InfoBoxMob } from './CheckBoxFilterStyle';
import Checkbox from '../Checkbox/Checkbox';


const CheckBoxFilter = (props) => {
    const [titles, setTitles]=useState('');
    const [info, setInfo]=useState(false);

    useEffect(()=>{
        setTitles(props.options);
    },[]);

    const InfoEvent = () => {
        if (info) {
            setInfo(false);
        }
        else {
            setInfo(true);
        }
    }

    return(
        <StyledCheckBoxFilter className={props.className}>
            {titles==='' ? '' : titles.map((titles,index)=>(
                <>
                <CheckBoxForm>
                    <StyledListItem key={index}>
                        <Checkbox checked={false} />
                        <CheckBoxText>{titles} {titles==='Završeni' ? <InfoIcon onClick={InfoEvent}/> :<div></div>}</CheckBoxText>
                    </StyledListItem>
                    {titles==='Završeni' && info ? <InfoBox>Završene događaje možete ocijeniti.</InfoBox> : ''}
                </CheckBoxForm>
                {titles==='Završeni' ? <InfoBoxMob><InfoIcon /> Završene događaje možete ocijeniti.</InfoBoxMob> : ''}
                </>
            ))}
        </StyledCheckBoxFilter>
    );
}

export default CheckBoxFilter;