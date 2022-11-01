import React from 'react'

const WorksItems = ({ item }) => {
    return (
        <div>
            <div className="work__card" key={item.id}>
                <img src={item.image} alt="" className='work__img' />
                <h3 className="work__title">{item.title}</h3>
                <a href={item.host} target="_blank" className="work__button">
                    Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <br />
                <a href={item.git} target="_blank" className="work__button">
                    Git <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
            </div>
        </div>
    )
}

export default WorksItems
