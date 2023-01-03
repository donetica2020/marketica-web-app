import { useEffect, useState } from 'react';
import './orglist.css';
import arrowLeft from '../../assets/leftarrow.png'
import rightArrow from '../../assets/right-arrow.png'

export default function OrgList({ list, filteredList }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [upperOrg, setUpperOrg] = useState([currentIndex, currentIndex + 1, currentIndex + 2])
    const [lowerOrg, setLowerOrg] = useState([currentIndex + 3, currentIndex + 4, currentIndex + 5]);
    useEffect(() =>{

    },[filteredList]);
    
    const handleNext = () => {
        if (currentIndex < list.length) {
            let index = currentIndex;
            index = index + 6;
            setCurrentIndex(index)
            setUpperOrg([currentIndex, currentIndex + 1, currentIndex + 2]);
            setLowerOrg([currentIndex + 3, currentIndex + 4, currentIndex + 5]);
        }
    }
    const handlePrevious = () => {
        if (currentIndex > 0) {
            console.log(true)
            let index = currentIndex;
            index = index - 6;
            setCurrentIndex(index)
            setUpperOrg([currentIndex, currentIndex + 1, currentIndex + 2]);
            setLowerOrg([currentIndex + 3, currentIndex + 4, currentIndex + 5]);
        }
    }
    const handleMore = () => {
        console.log('more')
    }
    return (
        <div>
            <div className='OrgList'>
                <div className='side'>
                    <button id={currentIndex == 0 ? 'side-arrow':''}  onClick={() => { handlePrevious() }} disabled={currentIndex == 0}   className={ currentIndex > 0 ? 'arrow-container' : 'grey-arrow-container'}>
                        <img src={arrowLeft} id='arrow' />
                    </button>
                    <p>Prev</p>
                </div>
                <div className='center'>
                    <div className='orgrow'>
                        {
                            upperOrg.map((item, index) => {
                                if (filteredList !== undefined) {
                                    if (filteredList[item] !== undefined) {
                                        return (
                                            <div className='organization-container' key={index}>
                                                <div style={{ cursor: 'pointer' }} onClick={()=>{
                                                     window.open(filteredList[item].donationurl, '_blank', 'noopener,noreferrer') }}>
                                                    <iframe src={filteredList[item].website} className='orgnaization-item' title={list[item].name}  >

                                                    </iframe>
                                                    <a target="_blank" rel="noopener noreferrer" href={filteredList[item].donationurl} id='website-link-id'></a>
                                                </div>
                                                <p id='country-name'>{filteredList[item].country}</p>
                                                <a target="_blank" rel="noopener noreferrer" href={filteredList[item].website} id='org-name'>{[filteredList[item].name]}</a>
                                                <a target="_blank" rel="noopener noreferrer" href={filteredList[item].website}>{filteredList[item].website}</a>
                                                <a target="_blank" rel="noopener noreferrer" href={filteredList[item].website} id='mission-text'>{filteredList[item].mission}</a>
                                            </div>
                                        )
                                    } else {
                                        return null
                                    }
                                } else {
                                    if (list[item] !== undefined) {
                                        return (
                                            <div className='organization-container' key={index}>
                                                <div style={{cursor:'pointer'}} onClick={()=>{ window.open(list[item].donationurl, '_blank', 'noopener,noreferrer') }}>
                                                    <iframe src={list[item].website}  className='orgnaization-item' title={list[item].name}  >

                                                    </iframe>
                                                </div>
                                                <p  id='country-name'>{list[item].country}</p>
                                                <a target="_blank" rel="noopener noreferrer" href={list[item].website} id='org-name'>{list[item].name}</a>
                                                <a target="_blank" rel="noopener noreferrer" href={list[item].website} >{list[item].website}</a>
                                                <a target="_blank" rel="noopener noreferrer" href={list[item].website} id='mission-text'>{list[item].mission}</a>
                                            </div>
                                        )
                                    } else {
                                        return null
                                    }
                                }
                            })
                        }
                    </div>
                    <div className='orgrow'>
                        {
                            lowerOrg.map((item, index) => {
                                if (filteredList !== undefined) {
                                    if (filteredList[item] !== undefined) {
                                        return (
                                            <div className='organization-container' key={index}>
                                                <div style={{ cursor:'pointer'}} onClick={()=>{ window.open(filteredList[item].donationurl, '_blank', 'noopener,noreferrer') }}>
                                                    <iframe src={filteredList[item].website} className='orgnaization-item' title={list[item].name}  >

                                                    </iframe>
                                                </div>
                                                <p id='country-name'>{filteredList[item].country}</p>
                                                <a target="_blank" rel="noopener noreferrer" href={filteredList[item].website} id='org-name'>{[filteredList[item].name]}</a>
                                                <a target="_blank" rel="noopener noreferrer" href={filteredList[item].website} >{filteredList[item].website}</a>
                                                <a target="_blank" rel="noopener noreferrer" href={filteredList[item].website} id='mission-text'>{filteredList[item].mission}</a>
                                            </div>
                                        )
                                    } else {
                                        return null
                                    }
                                } else {
                                    if (list[item] !== undefined) {
                                        return (
                                            <div className='organization-container' key={index}>
                                                <div style={{ cursor: 'pointer' }} onClick={()=>{ window.open(list[item].donationurl, '_blank', 'noopener,noreferrer') }}>
                                                    <iframe src={list[item].website} className='orgnaization-item' title={list[item].name}  >

                                                    </iframe>
                                                </div>
                                                <p id='country-name'>{list[item].country}</p>
                                                <a target="_blank" rel="noopener noreferrer" href={list[item].website} id='org-name'>{list[item].name}</a>
                                                <a target="_blank" rel="noopener noreferrer" href={list[item].website} >{list[item].website}</a>
                                                <a target="_blank" rel="noopener noreferrer" href={list[item].website} id='mission-text'>{list[item].mission}</a>
                                            </div>
                                        )
                                    } else {
                                        return null
                                    }
                                }
                            })
                        }
                    </div>
                </div>
                <div className='side'>
                    <button onClick={() => { handleNext() }} className='arrow-container'>
                        <img src={rightArrow} id='arrow' />
                    </button>
                    <p>Next</p>
                </div>
            </div>
            <div className='org-bottom'>
                <div className='bottomArrows'>
                    <button id={currentIndex == 0 ? 'side-arrow':''}  onClick={() => { handlePrevious() }} className={currentIndex > 0 ? 'bottom-arrow-container':'grey-bottom-arrow-container'}>
                        <img src={arrowLeft} id='bottom-arrow' alt='previous' />
                    </button>
                    <button onClick={() => { handleNext() }} className='bottom-arrow-container'>
                        <img src={rightArrow} id='bottom-arrow' alt='next' />
                    </button>
                </div>
                <button className='org-bottom-button' title='More' onClick={() => { handleMore() }} >
                    <p>More</p>
                </button>
            </div>
        </div>
    )
}