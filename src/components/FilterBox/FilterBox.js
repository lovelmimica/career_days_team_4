import React, { useState } from 'react';

//Styled components 
import { StyledFilterBox, FilterTitle, MainSection, FilterSection, StyledFilterPage, ShowResultsButon, CloseButon, FilterBoxFooter, ClosingIcon, TitleSection, Head } from './FilterBoxStyle';

//Components
import TextFilter from '../TextFilter/TextFilter';
import DateFilter from '../DateFilter/DateFilter';
import CheckBoxFilter from '../CheckBoxFilter/CheckBoxFilter';
import SelectFilter from '../SelectFilter/SelectFilter';
import CloseIcon from '../../assets/images/CloseIcon.png';
import Button from '../Button/Button';

const FilterBox = (props) => {
    const [display, setDisplaye] = useState(true);

    const handleClick = (e) =>{
        setDisplaye(!display);
    }

    return(
        <>
        {props.type == 'all' && display &&
        <StyledFilterPage className={props.className}>
            <MainSection>
                <Head>
                    <TitleSection><h1>Filtriraj</h1></TitleSection>
                    <ClosingIcon src={CloseIcon} onClick={handleClick}/>
                </Head>
                <StyledFilterBox>
                    <FilterSection>
                        <FilterTitle>Pretraži događaj</FilterTitle>
                        <TextFilter />
                    </FilterSection>
                    <FilterSection>
                        <FilterTitle>Dan događanja</FilterTitle>
                        <DateFilter />
                    </FilterSection>
                    <FilterSection>
                        <FilterTitle>Firma</FilterTitle>
                        <SelectFilter />
                    </FilterSection>
                    <FilterSection>
                        <FilterTitle>Kategorije</FilterTitle>
                        <CheckBoxFilter options={['IOT', 'marketing', 'marketing', 'frontend', 'frontend', 'backend', 'backend', 'mobile apps', 'mobile apps', 'development']} />
                    </FilterSection>
                </StyledFilterBox>
            </MainSection>

            <FilterBoxFooter>
                <Button text="Prikaži rezultate"/>
                <Button className='closeButton' text="Zatvori" onClick={handleClick}/>
            </FilterBoxFooter>
        </StyledFilterPage>}

        {props.type == 'status' && display &&
            <StyledFilterPage className={props.className}>
                <MainSection>
                    <Head>
                        <TitleSection><h1>Status događaja</h1></TitleSection>
                        <ClosingIcon src={CloseIcon} onClick={handleClick}/>
                    </Head>
                    <StyledFilterBox>
                        <FilterSection>
                            <FilterTitle className='statusFiltersTitle'>Status događaja</FilterTitle>
                            <CheckBoxFilter className='evidenceFilters' options={['Svi', 'Nadolazeći', 'Završeni']} />
                        </FilterSection>
                    </StyledFilterBox>
                </MainSection>
                <FilterBoxFooter>
                    <Button text="Prikaži rezultate"/>
                    <Button className='closeButton' text="Zatvori" onClick={handleClick}/>
                </FilterBoxFooter>
            </StyledFilterPage>
        }
        </>
    );
}

export default FilterBox;