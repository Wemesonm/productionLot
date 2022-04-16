import React from 'react';
import './style.css';

function CadLot() {
  return (
    <form className='formerInput' action='#'>
        <fieldset>            
            <div className='groupInputHeader'>
                <div className='genedInput'>
                    <label htmlFor="material">Material:</label>
                    <input type="text" id="material"/>
                </div>
                <div className='genedInput'>
                    <label htmlFor="lot">Lot#</label>
                    <input type="text" id="lot"/>
                </div>
                <div className='genedInput'>
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description"/>
                    </div>
                <div className='genedInput'>
                    <label htmlFor="extruder">Extruder:</label>
                    <input type="text" id="extruder"/>
                    </div>
                <div className='genedInput'>
                    <label htmlFor="revisionDate">Revision Date:</label>
                    <input type="text" id="revisionDate"/>
                    </div>
                <div className='genedInput'>
                    <label htmlFor="bulk">Bulk#</label>
                    <input type="text" id="bulk"/>
                </div>
            </div>
        </fieldset>
        <fieldset>
            <div className='groupInputBody'>
                <div className='genedInput'>
                    <label htmlFor="consumption">Consumption</label>
                    <input type="text" id="consumption"/>
                </div>
                <div className='genedInput'>
                    <label htmlFor="lotNumber">Lot Number(s)</label>
                    <input type="text" id="lotNumber"/>
                </div>
                <div className='genedInput'>
                    <label htmlFor="batchNumber">Batch Number(s)</label>
                    <input type="text" id="batchNumber"/>
                </div>
                <div className='genedInput'>
                    <label htmlFor="poundsPerBatch">Pounds per Batch</label>
                    <input type="text" id="poundsPerBatch"/>
                </div>
                <div className='genedInput'>
                    <label htmlFor="plannedTotal">Planned Total (lbs)</label>
                    <input type="text" id="plannedTotal"/>
                </div>
            </div>
        </fieldset>
        <div>
            <button>Register</button>
        </div>
    </form>
  )
}

export default CadLot;
