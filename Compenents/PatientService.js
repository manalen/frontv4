import axios from 'axios' 



class PatientService {

    
    hola() {
        return axios.get(`http://localhost:5000/med/showallpatient`);
    }
    bola(id ){
        
        return axios.get( `http://localhost:5000/med/showpatientbyid/${id}`);
    }
    cinola(cin){
        return axios.get( `http://localhost:5000/med/showpatientbycin/${cin}`);
    }
    numola(num){
        return axios.get( `http://localhost:5000/med/showpatientbynum/${num}`);

    }
    namola(nom,prenom){
        return axios.get( `http://localhost:5000/med/showpatientbynomprenom/${nom}/${prenom}`);
    }
    kola(id){
        return axios.get(`http://localhost:8087/medecin/afficherprescriptionpatient/${id}` );
    } 
    ola( kaman){
        
        return axios.get(`http://localhost:5000/med/showpatientbyid/${kaman}`);

    }
    pola( consultation){
    return axios.post(`http://localhost:8087/medecin/creerconsultation`, consultation);}

}

export default new PatientService()
