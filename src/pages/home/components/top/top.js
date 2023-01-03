import './top.css';
import { FiSearch } from 'react-icons/fi';
import Dropdown from 'react-dropdown';
import './dropdown.css'
import { continents, countries, filteredCountries } from '../../../../constant';
import OrgList from '../orglist/orglist'
import { useEffect, useRef, useState } from 'react';
import filterSerch from '../../../../db/filteapi';


export default function Top({ list }) {
    //lists
    const [country, set_selected_country] = useState();
    const [continent, set_selected_continent] = useState();
    const [filteredList, setFilteredList] = useState();
    const [resultList, setResultList] = useState()
    const [searched, set_Searched] = useState();
    const [category, setCategory] = useState();
    const inputRef = useRef();
    const countryRef = useRef();
    const contRef = useRef();
    //clear all
    const clearAll = () => {
        inputRef.current.value = '';
        countryRef.current.value = '';
        contRef.current.value = '';
        setResultList()
        setCategory();
        setFilteredList();
        set_selected_country();
        set_selected_continent();
    }
    //change  by country and continent
    const getAgendaData = () => {
        const data = {
            country: "",
            continent: "",
            keyword: category !== undefined ? category : ""
        }
        filterSerch(data).then(res => {
            setFilteredList(res);
            setResultList(res)
        })
    }

    const handleSearched = (e) => {
        if (e.target.value !== undefined && e.target.value.length > 0) {
            set_Searched(e.target.value)
        } else {
            set_Searched(undefined)
        }
    }
    const handleCategoryChange = (e) => {
        if (e.target.value !== undefined && e.target.value.length > 0) {
            setCategory(e.target.value)
        } else {
            setCategory(undefined)
        }
    }
    const handleContinet = (e) => {
        set_selected_continent(e.label)
        if (resultList !== undefined) {
            if (country !== undefined && country !== '') {
                let arr = []
                resultList.map((item, index) => {
                    if (item.continent == e.label && item.country == country) {
                        arr.push(item)
                    }
                })
                setFilteredList(arr)
            } else {
                let arr = []
                resultList.map((item, index) => {
                    if (item.continent == e.label) {
                        arr.push(item)
                    }
                })
                setFilteredList(arr)
            }
        } else {
            if (country !== undefined && country !== '') {
                let arr = []
                list.map((item, index) => {
                    if (item.continent == e.label && item.country == country) {
                        arr.push(item)
                    }
                })
                setFilteredList(arr)
            } else {
                let arr = []
                list.map((item, index) => {
                    if (item.continent == e.label) {
                        arr.push(item)
                    }
                })
                setFilteredList(arr)
            }
        }
    }
    const handleCountry = async (e) => {
        set_selected_country(e.label)
        if (resultList !== undefined) {
            if (continent !== undefined && continent !== '') {
                let arr = []
                resultList.map((item, index) => {
                    if (item.continent == continent && item.country == e.label) {
                        arr.push(item)
                    }
                })
                setFilteredList(arr)
            } else {
                let arr = []
                resultList.map((item, index) => {
                    if (item.country == e.label) {
                        arr.push(item)
                    }
                })
                setFilteredList(arr)
            }
        } else {
            if (continent !== undefined && continent !== '') {
                let arr = []
                list.map((item, index) => {
                    if (item.continent == continent && item.country == e.label) {
                        arr.push(item)
                    }
                })
                setFilteredList(arr)
            } else {
                let arr = []
                list.map((item, index) => {
                    if (item.country == e.label) {
                        arr.push(item)
                    }
                })
                setFilteredList(arr)
            }
        }
    }



    return (
        <>
            <div className='top-part'>

                <div className='topHeadingPart'>
                    <div className='searchbar'>
                        <input name='searched_text' id='searchbar' type='text' onChange={handleSearched} placeholder='SUPPORT US BY SEARCHING THE WEB' />
                        <a target="_blank" rel="noopener noreferrer" href={`https://www.bing.com/?q=${searched == undefined ? '' : searched}`}><FiSearch id='search-icon' /></a>
                    </div>
                    <div className='top-text-form-container'>
                        <div className='top-text-div'>
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
                        </div>
                        <div className='filter-form'>
                            <p id='search-text'>I want to donate to organization with agendas of</p>
                            <div id='select'>
                                <input name='category' ref={inputRef} id='category' type='text' onChange={handleCategoryChange} placeholder='Aids' />
                                {
                                    filteredList !== undefined ?
                                        <button id='select-button' onClick={() => { clearAll() }} >
                                            <p>Clear</p>
                                        </button> :
                                        <button id='select-button' onClick={() => { getAgendaData() }} >
                                            <p>Search</p>
                                        </button>
                                }
                            </div>
                            <div className='filter-form-center'>
                                <p>Filter by</p>
                                <div id='filter-form-id'>

                                </div>
                            </div>
                            <div className='drop-div'>
                                <p>Continent</p>
                                <Dropdown
                                    ref={contRef}
                                    className='dropdown' onChange={(e) => {
                                        handleContinet(e)
                                    }} placeholderClassName='placeholder' menuClassName='menu'
                                    options={continents} controlClassName='Dropdown-control'
                                    value={continent == undefined ? '' : continent}
                                    placeholder={continent == undefined ? '' : continent} />
                            </div>
                            <div className='drop-div'>
                                <p>Country</p>
                                <Dropdown
                                    ref={countryRef}
                                    onChange={(e) => { handleCountry(e) }}
                                    className='dropdown' options={continent !== undefined ? countries[continent] : filteredCountries}
                                    controlClassName='Dropdown-control' placeholder={''}
                                    value={country == undefined ? '' : country}
                                    placeholderClassName='placeholder'
                                    menuClassName='menu'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    list !== undefined && list.length > 0 ?
                        <OrgList list={list} filteredList={filteredList} /> :
                        null
                }
            </div>

        </>
    )
}