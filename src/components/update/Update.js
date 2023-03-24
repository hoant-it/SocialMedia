import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { makeRequest } from '../../axios';
import'./update.scss'

function Update({setOpenUpdate,user}) {

    const[cover,setCover]=useState(null)
    const[profile,setProfile]=useState(null)

    const[texts,setTexts]=useState({
        name:"",
        city:"",
        website:"",
        
    })

    const upload=async (file)=>{
        try {
            const formData=new FormData();
            formData.append("file",file)
            const res=await makeRequest.post("/upload",formData)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange=(e)=>{
        setTexts((prev)=>({...prev,[e.target.name]:[e.target.value]}))
    }

    const queryClient = useQueryClient();

    const mutation = useMutation(
      (user) => {
        return makeRequest.put("/user", user);
      },
      {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries(["user"]);
        },
      }
    );
  
    const handleClick = async (e) => {
      e.preventDefault();
      let coverUrl 
      let profileUrl 


      coverUrl = cover ? await upload(cover):user.coverPi;
      profileUrl = profile? await upload(profile) :user.profilePic;

      mutation.mutate({ ...texts, coverPic:coverUrl,profilePic:profileUrl});
      setOpenUpdate(false)
      setCover(null);
      setProfile(null);
    };

    return (
        <div className='update'> update
        <form>
            <input type="file" onChange={e=>setCover(e.target.files[0])}></input>
            <input type="file" onChange={e=>setProfile(e.target.files[0])}></input>
            <input type="text" name='name' onChange={handleChange}></input>
            <input type="text" name='city' onChange={handleChange}></input>
            <input type="text" name='website' onChange={handleChange}></input>
            <button onClick={handleClick}> Update</button>


        </form>
        <button onClick={()=>setOpenUpdate(false)}>X</button>
        </div>
      );
}

export default Update;