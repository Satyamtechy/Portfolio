import React,{useState} from 'react'

const Contact=()=> {

    const [data,setData]=useState({
        fullName:"",
        phone:"",
        email:"",
        msg:""
    })
    
    const InputEvent=(event)=>{
        const{name,value}=event.target;
        setData((preValue)=>{
            return{
                ...preValue,
                [name]:value,
            };
        });
    };

    const formSubmit=(e)=>{
        e.preventDefault();
    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Me </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1">Full Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" name="Full Name" value={data.fullName} onChange={InputEvent} placeholder="Enter your name" />
                        </div>
                        
                        <div class="mb-3">
                            <label for="exampleFormControlInput1">Phone</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" name="Phone" value={data.phone} onChange={InputEvent} placeholder="Mobile Number" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1">Email Address</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" name="Email Address" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                        </div>

                        <div class="col-auto">
                        <button type="submit" class="btn btn-outline-primary ">Submit Form</button>
                        </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
