import React, {useEffect, useState} from "react"
import styles from "./index.module.sass";
import {Button} from "../ui/Button";
import {UserPet} from "./UserPet";
import {useStores} from "../../utils/use-stores-hook";
import {PetsAddModal} from "../Modals/PetsAddModal";
import {userByTokenGet, userPetsByIdGet} from "../../fetchData";
import {PetsGalleryPin} from "../PetsGalleryPin";

export const UserPets = ({data}:any) => {

  const [userData, setUserData] = useState<any>(null);
  const [userPets, setUserPets] = useState<any>(null)
  const {modalStore: {setCurrentModal, clearCurrentModal}} = useStores();

  const openModal = () => {
    clearCurrentModal()
    setCurrentModal(PetsAddModal)
  }

  let token = localStorage.getItem("token")

  useEffect(()=>{
    if(token){
      userByTokenGet(token).then((data)=>setUserData(data.data))
    }
  }, [token])


  useEffect(()=>{
    if(userData){
      userPetsByIdGet(userData?.id).then((data)=> setUserPets(data))
    }
  }, [userData])

  return (
        <div className={styles.pets_wrapper}>
            <div className={styles.pets}>
              {userPets?.data && userPets?.data.map((data: any) => (
                <UserPet data={data}/>
              ))}
            </div>
            <Button disabled={false} onClick={()=>openModal()}>Добавить питомца</Button>
        </div>
    )
}