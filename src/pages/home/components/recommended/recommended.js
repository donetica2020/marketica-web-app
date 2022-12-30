import './recommended.css'

export default function RecommendedOrganization({ recommended }) {
    const list = ['1', '2', '3', '4']
    return (
        <div className='container'>
            <div className='text-container'>
                <h1>
                    Today's recommended organization
                </h1>
                <p>Take a close glance at these magnificent organizations and applaud ! They make a difference every day, what about you ?</p>
            </div>
            <div className='org-list'>
                {
                    recommended.map((item, index) => {
                        return (
                            <div className='org' key={index} >
                                <div style={{ position: 'relative' }}>
                                    <iframe src={item.website} className='orgnaization-item' title={item.name}  >

                                    </iframe>
                                    <a target="_blank" rel="noopener noreferrer" href={item.donationurl} id='website-link-id'></a>
                                </div>
                                <p id='country-name'>{item.country}</p>
                                <a target="_blank" rel="noopener noreferrer" href={item.website} id='org-name'>{item.name}</a>
                                <a target="_blank" rel="noopener noreferrer" href={item.website}>{item.website}</a>
                                <a target="_blank" rel="noopener noreferrer" href={item.website} id='mission-text'>{item.mission}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

