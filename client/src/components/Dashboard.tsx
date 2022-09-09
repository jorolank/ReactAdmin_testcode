import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { Button } from "@mui/material";
import { useResetStore, useStore, useStoreContext } from "react-admin";

const Dashboard = () =>{

    const [helpOpen,setHelpOpen] = useStore('help.open',false);
    const reset = useResetStore();
    const store = useStoreContext();

    const setOpen = () =>{
        setHelpOpen(v => !v)
    }
    const resetStore = ()=>{
        reset();
    }

    const storeContext = () =>{
        console.log(store.getItem('help.open',false))
    }

    return (
        <Card>
            <CardHeader title="Welcome to the administration" />
            <CardContent>
               <h1>Helloworld</h1>
               <div style={{display: 'flex',gap: '15px'}}>
               <Button onClick={setOpen} variant="contained">{helpOpen ? 'Show' : 'Hide'} Help</Button>
               <Button onClick={resetStore} variant="contained">Reset</Button>
               <Button onClick={storeContext} variant="contained">Store Context</Button>
               </div>
            </CardContent>
       
        </Card>
    )
}

export default Dashboard;