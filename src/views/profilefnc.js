 export const echangeStatus=(e, param,changeEditingStatus,editingStatus )=>{
    {    
        switch(param){
            case 'nickname':{
                changeEditingStatus({...editingStatus, nickname:true, flag:true})
                break
            }
            case 'firstname':{
                changeEditingStatus({...editingStatus, firstname:true, flag:true})
                break
            }
            case 'lastname':{
                changeEditingStatus({...editingStatus, lastname:true, flag:true})
                break
            }
            case 'exp':{
                changeEditingStatus({...editingStatus, exp:true, flag:true})
                break
            }
            case 'about':{
                changeEditingStatus({...editingStatus, about:true, flag:true  })
                break
            }
            case 'password':{
                changeEditingStatus({...editingStatus, password:true, flag:true})
                break
            }
                
           
        }     
        
    }
    
} 
export const ehandleChange=(param,e,editCustomData, customData)=>{
      
    switch(param){
      case 'nickname':{
          editCustomData({...customData, nickname:e.target.value})
          break
      }
      case 'firstname':{
          editCustomData({...customData, firstname:e.target.value})
          break
      }
      case 'lastname':{
          editCustomData({...customData, lastname:e.target.value})
          break
      }
      case 'exp':{
          editCustomData({...customData, exp:e.target.value})
          break
      }
      case 'about':{
          editCustomData({...customData, about:e.target.value})
          break
      }
      case 'password':{
          editCustomData({...customData, password:e.target.value})
          break
      }
  } 
    
    
  }


