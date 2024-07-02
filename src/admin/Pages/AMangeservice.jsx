import React, { useEffect, useState } from 'react'
import AHeader from '../Comoan/AHeader'
import AFooter from '../Comoan/AFooter'
import axios from 'axios'

function AMangeservice() {

    useEffect(() => {
        fetch()
    })

    const [data1, setdata1] = useState()

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/service`)
        console.log(res.data)
        setdata1(res.data)
    }

    // delete 
    const deletehandle=async(id)=>{
        const res = await axios.delete(`http://localhost:3000/service/${id}`)
        console.log(res.data)
    }

    // edit 
    const [editingservice,seteditngservice]=useState(null)
    const [editedservice,seteditedservice]= useState({
        id:"",
        service_name:"",
        desc:"",
        ser_img:""
    })

    function saveedit(service)
    {
        seteditngservice(service)
        seteditedservice(service)
        
    }

    const savesumithadle=async(e)=>{
        try {
            e.preventDefault()
            await axios.put(`http://localhost:3000/service/${editingservice.id}`,editedservice)
           
            fetch() // refresh
            seteditngservice(null)
            console.log("update succeefully")
        } catch (error) {
            console.error("error api not res",error)
        }
    }

    return (
        <div>
            <AHeader />
            <div className="container">
                <div>
                    <h1 className='text-center'>Manage service</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Service_name</th>
                                <th scope="col">Service_desc</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data1 && data1.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{value.id}</th>
                                            <td>{value.service_name}</td>
                                            <td>{value.desc}</td>
                                            <td>
                                                <button className='btn btn-primary'>View</button>
                                                <button className='btn btn-success mx-2' onClick={()=>saveedit(value)}>Edit</button>
                                                <button className='btn btn-danger' onClick={()=>deletehandle(value.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>


                    </table>
                    {
                        editingservice && (
                           <div className="edit-from">
                             <div className="col-lg-12 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                                <div className="p-lg-5 pe-lg-0">
                                    <div className="section-title text-start">
                                        <h1 className="display-5 mb-4">update Sevice</h1>
                                    </div>
                                    
                                    <form >
                                        <div className="row g-3">
                                            <div className="col-12 col-sm-6">
                                                <input type="text"  value={editedservice.service_name} onChange={(e)=>seteditedservice({...editedservice,service_name:e.target.value})} className="form-control border-0" placeholder="add service name" style={{ height: 55 }} />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input  type="url" value={editedservice.ser_img} onChange={(e)=>seteditedservice({...editedservice,ser_img:e.target.value})} className="form-control border-0" placeholder="add imgae" style={{ height: 55 }} />
                                            </div>
                                        
                                            <div className="col-12">
                                                <textarea  value={editedservice.desc} onChange={(e)=>seteditedservice({...editedservice,desc:e.target.value})}   className="form-control border-0" placeholder="add desc" defaultValue={""} />
                                            </div>
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={savesumithadle}>update</button>
                                                    </div>
                                                    <div className="col-6">
                                                    <button className="btn btn-primary w-100 py-3" onClick={()=>seteditngservice(null)}>cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                           </div>
                        )
                    }
                </div>
            </div>

            <AFooter />
        </div>
    )
}

export default AMangeservice
