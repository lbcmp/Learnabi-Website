import { firestore } from "../../components/firebase/firebase"

export const newEmployeeSubmitHandler = (email, name, title, image) =>{
    const snapShot = firestore.doc(`learnabiEmployees/${email}`);
    snapShot.get().then((doc) => {
        if(!doc.exists) {
            snapShot.set({
                Name: name,
                Tittle: title,
                Image: image,
                EmployeeId: email
            });
            alert('New Employee has been added successfully');
        }else{
            alert('Employee already in the system')
        }
    })
}
export const updateEmployeeHandler = (email, name, title, image) => {
    const snapShot = firestore.doc(`learnabiEmployees/${email}`);
    // console.log(emplid);
    snapShot.update({
        Name: name,
        Tittle: title,
        Image: image,
        EmployeeId: email
    }).then(() => {
      alert(`${name} has been updated`)
     
    })
}
export const deleteEmployeeHandler = (path) => {
    const snapShot = firestore.collection('learnabiEmployees').doc(path);
    snapShot.delete().then(() => {
        alert('Employee has been deleted successfully')
    }).catch((error) => {
        alert('Employee was not removed')
        console.log(`Delete Error: ${error}`);
    })
}