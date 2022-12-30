import './top.css';
import { FiSearch } from 'react-icons/fi';
import Dropdown from 'react-dropdown';
import './dropdown.css'
import { continents, countries,all_countries } from '../../../../constant';
import OrgList from '../orglist/orglist'
import { useState } from 'react';


export default function Top({ list }) {
    //change  by country and continent
    const filterByContCountry = (arr) => {
        let array = []
        if (continent !== undefined && country !== undefined) {
            arr.map((item, index) => {
                if (item.continent == continent && item.country == country) {
                    array.push(item)
                }
            })
        } else if (continent !== undefined && country == undefined) {
            arr.map((item, index) => {
                if (item.continent == continent) {
                    array.push(item)
                }
            })
        } else if (continent == undefined && country !== undefined) {
            arr.map((item, index) => {
                if (item.country == country) {
                    array.push(item)
                }
            })
        } else if (continent == undefined && country == undefined) {
            return arr
        }
        return array;
    }
    const filterBySearch = (arr) => {
        return arr
        if (searched !== undefined && searched.length > 0) {
            let x = []
            arr.map((item, index) => {
                if (item.name.toLowerCase().includes(searched.toLowerCase())) {
                    x.push(item)
                }
            })
            return x
        } else {
            return arr
        }
    }
    const handleSearched = (e) => {
        if (e.target.value !== undefined && e.target.value.length > 0) {
            set_Searched(e.target.value)
        } else {
            set_Searched(undefined)
        }
    }
    const handleCategoryChange = (e) => {

    }
    const handleContinet = (e) => {
        set_selected_continent(e.label)
        set_selected_country(undefined)
        let data = filterByContCountry(list);
        let x = filterBySearch(data)
        setFilteredList(x)
    }
    const handleCountry = (e) => {
        set_selected_country(e.label)
        let data = filterByContCountry(list)
        let x = filterBySearch(data)
        setFilteredList(x)
    }

    const [country, set_selected_country] = useState()
    const [continent, set_selected_continent] = useState()
    const [filteredList, setFilteredList] = useState()
    const [searched, set_Searched] = useState()
    return (
        <>
            <div className='top-part'>
                <div className='topHeadingPart'>
                    <div className='headingDiv'>
                        <h1>The Market Place of Donation</h1>
                    </div>
                    <div className='paraDiv'>
                        <div className='paraBorder'>

                        </div>
                        <p>
                            Today you can make a difference and change lives of millions across the world. Using Marketica - The first indexed search engine for organizations doing good. Either it’s ecology, healthcare, welfare or charity which embraces your conscious and heart, here you can find them all and make a donation today !
                        </p>
                    </div>
                    <div className='searchbar'>
                        <input name='searched_text' id='searchbar' type='text' onChange={handleSearched} placeholder='SUPPORT US BY SEARCHING THE WEB' />
                        <a target="_blank" rel="noopener noreferrer" href={`https://www.bing.com/?q=${searched == undefined ? '':searched}`}><FiSearch id='search-icon' /></a>
                    </div>
                    <div className='filter-form'>
                        <p id='search-text'>I want to donate to organization with agendas of</p>
                        <div id='select'>
                            <input name='category' id='category' type='text' onChange={handleCategoryChange} placeholder='Cancer,Aids' />
                            <button id='select-button'>
                                <p>Select</p>
                            </button>
                        </div>
                        <div className='filter-form-center'>
                            <p>Filter by</p>
                            <div id='filter-form-id'>

                            </div>
                        </div>
                        <div className='drop-div'>
                            <p>Continent</p>
                            <Dropdown className='dropdown' onChange={(e) => {
                                handleContinet(e)
                            }} placeholderClassName='placeholder' menuClassName='menu'
                                options={continents} controlClassName='Dropdown-control' placeholder={''} />
                        </div>
                        <div className='drop-div'>
                            <p>Country</p>
                            <Dropdown 
                                onChange={(e) => { handleCountry(e) }}
                                className='dropdown' options={continent !== undefined ? countries[continent] : all_countries}
                                controlClassName='Dropdown-control' placeholder={''}
                                value={country == undefined ? '' : country}
                                placeholderClassName='placeholder'
                                menuClassName='menu'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <OrgList list={list} filteredList={filteredList} />
        </>
    )
}