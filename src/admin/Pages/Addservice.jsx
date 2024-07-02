import React, { useState } from 'react'
import AHeader from '../Comoan/AHeader'
import AFooter from '../Comoan/AFooter'
import axios from 'axios'

function Addservice() {
   

    const [fromvalue,setfromvalue] = useState({
        id:"",
        service_name:"",
        desc:"",
        ser_img:""

    })

    // state 
    const chnagehadle=(e)=>{
        setfromvalue({
            ...fromvalue,
            id:new Date().getTime().toString(),
            [e.target.name]:e.target.value,
            
        })
        console.log(fromvalue)
    }

    // 

    const submithandle =async(e)=>{
        e.preventDefault() 

        const res = await axios.post(`http://localhost:3000/service`,fromvalue)
        console.log(res.data)
        setfromvalue({
            id:"",
            service_name:"",
            desc:"",
            ser_img:""
        })
    }

  return (
    <div>
      <AHeader />
      <div className="col-lg-12 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                                <div className="p-lg-5 pe-lg-0">
                                    <div className="section-title text-start">
                                        <h1 className="display-5 mb-4">Add Sevice</h1>
                                    </div>
                                    <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                                    <form onSubmit={submithandle}>
                                        <div className="row g-3">
                                            <div className="col-12 col-sm-6">
                                                <input type="text" onChange={chnagehadle} name='service_name' value={fromvalue.service_name} className="form-control border-0" placeholder="add service name" style={{ height: 55 }} />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input  onChange={chnagehadle} type="url" name='ser_img' value={fromvalue.ser_img} className="form-control border-0" placeholder="add imgae" style={{ height: 55 }} />
                                            </div>
                                        
                                            <div className="col-12">
                                                <textarea name='desc'  onChange={chnagehadle} value={fromvalue.desc} className="form-control border-0" placeholder="add desc" defaultValue={""} />
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
      <AFooter />
    </div>
  )
}

export default Addservice
