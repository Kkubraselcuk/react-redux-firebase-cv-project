import {createSlice } from "@reduxjs/toolkit";
import {auth,db} from '../config/firebase';
import {  setDoc, doc  } from 'firebase/firestore';

const initialState = {
    nameSurname: "",
    emailAddress: "",
    phoneNumber: "",
    university: "",
    department: "",
    degree: "",
    lastWork: "",
    lastWorkDescription: "",
    github: "",
    linkedin:"",
    product: [],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        changeProductNameSurname: (state, action) => {
            state.nameSurname = action.payload;
        },
        changeProductEmailAddress: (state, action) => {
            state.emailAddress = action.payload;
        },
        changeProductPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
        changeProductUniversity: (state, action) => {
            state.university = action.payload;
        },
        changeProductDepartment: (state, action) => {
            state.department = action.payload;
        },
        changeProductDegree: (state, action) => {
            state.degree = action.payload;
        },
        changeProductLastWork: (state, action) => {
            state.lastWork = action.payload;
        },
        changeProductLastWorkDescription: (state, action) => {
            state.lastWorkDescription = action.payload;
        },
        changeProductGithub: (state, action) => {
            state.github = action.payload;
        },
        changeProductLinkedin: (state, action) => {
            state.linkedin = action.payload;
        },
        setProducts: (state, action) => {
            state.product = action.payload;
        },
    },
});

export const {
    changeProductNameSurname,
    changeProductEmailAddress,
    changeProductPhoneNumber,
    changeProductUniversity,
    changeProductDepartment,
    changeProductDegree,
    changeProductLastWork,
    changeProductLastWorkDescription,
    changeProductGithub,
    changeProductLinkedin,
    setProducts
} = productsSlice.actions;

export const addProduct = async (nameSurname,emailAddress,phoneNumber,university,department,degree,lastWork,lastWorkDescription,github,linkedin) => {
    // const uid = auth.currentUser?.uid;
    await setDoc(doc(db, "cvgetir", auth.currentUser.email), {
        "nameSurname": nameSurname,
        "emailAddress": emailAddress,
        "phoneNumber": phoneNumber,
        "university": university,
        "department": department,
        "degree": degree,
        "lastWork": lastWork,
        "lastWorkDescription": lastWorkDescription,
        "github":github,
        "linkedin":linkedin
    });
}
export default productsSlice.reducer;