import { useState } from "react";

const useInitialState = () => {
    const [isOn, setIsOn] = useState(false);
    const [arcade, setArcade] = useState(false);
    const [advanced, setAdvanced] = useState(false);
    const [pro, setPro] = useState(false);
    const [state, setState] = useState(null);
    const [state2, setState2] = useState(null);
    const [state3, setState3] = useState(null);

    const [selectedPlan, setSelectedPlan] = useState(null); 
    const [selectedAddOns, setSelectedAddOns] = useState([]);


    const plans = {
        Arcade:{
            month: 9,
            year: 90,
            title: 'Arcade'
        },
        Advanced:{
            month: 12,
            year: 120,
            title: 'Advanced'
        },
        Pro:{
            month: 15,
            year: 150,
            title: 'Pro'
        }
    }

    const addOns = {
        one:{
            month: 1,
            year: 10,
            title: 'Online service'
        },
        two:{
            month: 2,
            year: 20,
            title: 'Large storage'
        },
        three:{
            month: 2,
            year: 20,
            title: 'Customizable profile'
        }
    }

    const handleSum = () => {
        if(state){
            setSelectedAddOns(prevAddOns => [...prevAddOns, addOns.one.month])
            // if(isOn){
            //     setSelectedAddOns(prevAddOns => [...prevAddOns, addOns.one.year])
            // }else{
            //     setSelectedAddOns(prevAddOns => [...prevAddOns, addOns.one.month])
            // }
        }
        if(state2){

            setSelectedAddOns(prevAddOns => [...prevAddOns, addOns.two.month])
            // if(isOn){
            //     setSelectedAddOns(prevAddOns => [...prevAddOns, addOns.two.year])
            // }else{
            //     setSelectedAddOns(prevAddOns => [...prevAddOns, addOns.two.month])
            // }
        }
        if(state3){
            setSelectedAddOns(prevAddOns => [...prevAddOns, addOns.three.month])
            // if(isOn){
            //     setSelectedAddOns(prevAddOns => [...prevAddOns, addOns.three.year])
            // }else{
            //     setSelectedAddOns(prevAddOns => [...prevAddOns, addOns.three.month])
            // }
        }
        console.log(state)
    }


    
    return {
        isOn,
        arcade,
        advanced,
        pro,
        plans,
        addOns,
        state,
        state2,
        state3,
        selectedPlan,
        selectedAddOns,
        handleSum,
        setSelectedAddOns, 
        setSelectedPlan,
        setIsOn,        
        setArcade,
        setAdvanced,       
        setPro,
        setState,
        setState2,
        setState3,
    }
}

export default useInitialState;