import IDataList from "../model/IDataList";
import axios from 'axios'

const GetDataFromServer = () => {
  return axios.get<IDataList[]>(`http://localhost:5000/items`)
  .then(response => response.data)
}

const PushDateFromUser = (formData : Omit<IDataList, "id">) =>{
  return axios.post<IDataList>(`http://localhost:5000/items`,formData,{
    headers : {'Content-Type': 'application/json'}
  }).then(response => response.data)
}


export { GetDataFromServer, PushDateFromUser }