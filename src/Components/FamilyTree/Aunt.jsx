import {use} from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = () => {

    const [money,setMoney] = use (MoneyContext)
    const handleAddMoney = () =>
    {
        setMoney(money+5000)
    }
    return (
        <div>
             <h3>Aunt</h3>
             <section className=''>
                <Cousin name={'Ayman'} ></Cousin>
                <Cousin name={'Mahi'}></Cousin>
                <button onClick={handleAddMoney}>Add 5000 tk</button>
             </section>
        </div>
    );
};

export default Aunt;