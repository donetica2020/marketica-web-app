import { useState } from 'react';
import './form.css';
import Dropdown from 'react-dropdown';
import { continents, countries } from '../../../../constant';
import saveOrg from '../../../../db/saveorg';
import validator from 'validator'

export default function Form() {
    const [continent, set_selected_continent] = useState();
    const [country, set_selected_country] = useState();
    //references
    const validateUrl = (url) => {
        let regex = /^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/
        return regex.test(url)
    }

    function myFunction() {
        var elements = document.getElementById("org-form").elements;
        var obj = {};
        for (var i = 0; i < elements.length; i++) {
            var item = elements.item(i);
            obj[item.name] = item.value;
        }
        if (obj.organization !== undefined && obj.organization.length > 0) {
            if (obj.website !== undefined && validator.isURL(obj.website)) {
                if (continent !== undefined) {
                    if (country !== undefined) {
                        if (obj.donationurl !== undefined && validator.isURL(obj.donationurl)) {
                            if (obj.language !== undefined && obj.language.length > 0) {
                                if (obj.email !== undefined && obj.email.length > 0) {
                                    if (obj.address !== undefined && obj.address.length > 3) {
                                        if (obj.mission !== undefined && obj.mission.length > 0) {
                                            let data = {
                                                name: obj.organization, email: obj.email, mission: obj.mission, address: obj.address, country: country,
                                                continent: continent, language: obj.language, website: obj.website, donationurl: obj.donationurl
                                            }
                                            saveOrg(data).then(res => {
                                                if (res !== 'error') {
                                                    document.getElementById('org-form').reset();
                                                    set_selected_continent(undefined);
                                                    set_selected_country(undefined);
                                                    alert('Organization submitted for admin approval')
                                                } else {
                                                    alert('Error Please try again')
                                                }
                                            })
                                                .catch(err => {
                                                    alert('Error Please try again')
                                                })
                                        } else {
                                            alert('Please enter valid summary.')
                                        }
                                    } else {
                                        alert('Please enter valid address')
                                    }
                                } else {
                                    alert('Please enter valid email')
                                }
                            } else {
                                alert('Please enter valid language')
                            }
                        } else {
                            alert('Please enter valid  donation url')
                        }
                    } else {
                        alert('Please select a country')
                    }
                } else {
                    alert('Please select a continent')
                }
            } else {
                alert('Please enter valid website url')
            }
        } else {
            alert('Please enter valid organization name')
        }

    }

    return (
        <div className='form-container'>
            <div className='form-text-container'>
                <h1>Be a part of this unprecedented project</h1>
                <h2>Just fill the following form in order to join</h2>
            </div>
            <div className='formContainer'>
                <form className='form' id='org-form' >
                    <div className='input'>
                        <label className='label' htmlFor='organization' >Organization*</label>
                        <input className='longinput' name='organization' type='text' />
                    </div>
                    <div className='input'>
                        <label className='label' htmlFor='website'>Website*</label>
                        <input className='longinput' name='website' type='text' />
                    </div>
                    <div className='twoInputs'>
                        <div className='input'>
                            <label className='label' htmlFor='continent'>Continent*</label>
                            <Dropdown className='shortInput' name='continent' onChange={(e) => {
                                set_selected_country(undefined)
                                set_selected_continent(e.label)
                            }} placeholderClassName='short-input-placeholder' menuClassName='short-menu'
                                options={continents} controlClassName='short-input-placeholder' placeholder={continent == undefined ? '' : continent} />
                        </div>
                        <div className='input'>
                            <label className='label' htmlFor='country' >Country*</label>
                            <Dropdown disabled={continent == undefined} name='country'
                                className='shortInput' onChange={(e) => {
                                    set_selected_country(e.label)
                                }} placeholderClassName='short-input-placeholder' menuClassName='short-menu'
                                options={continent !== undefined ? countries[continent] : []}
                                controlClassName='short-input-placeholder' placeholder={country == undefined ? '' : country} />
                        </div>
                    </div>
                    <div className='input'>
                        <label className='label' htmlFor='donationurl' >Donation url*</label>
                        <input className='longinput' name='donationurl' type='text' />
                    </div>
                    <div className='input'>
                        <label className='label' htmlFor='language'>Language*</label>
                        <input className='longinput' name='language' type='text' />
                    </div>
                    <div className='input'>
                        <label className='label' htmlFor='email'>Email*</label>
                        <input className='longinput' name='email' type='email' />
                    </div>
                    <div className='input'>
                        <label className='label' htmlFor='address'>Full Address</label>
                        <input className='longinput' name='address' type='text' />
                    </div>
                    <div className='input'>
                        <label className='label' htmlFor='mission'>Summary</label>
                        <input className='longinput' name='mission' type='text' />
                    </div>
                    <div className='input'>
                        <button type='button' id='submit-button' onClick={() => { myFunction() }}  >Join</button>
                    </div>

                </form>
            </div>
        </div>
    )
}