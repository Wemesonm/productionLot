import React, {useState, useRef, useEffect} from 'react';



function DragNDrop({data}) {
    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
        setList(data);
    }, [setList, data])

    const dragItem = useRef();
    const dragItemNode = useRef();

    const handleDragStart = (e, params) => {
        console.log('Drag starting...', params);
        dragItemNode.current = e.target;
        dragItemNode.current.addEventListener('dragend', handleDragEnd);
        dragItem.current = params;
        
        setTimeout(() => {
            setDragging(true);
        }, 0);
    }

    const handleDragEnter = (e, params) => {
        console.log('Entering drag...', params);
        const currentItem = dragItem.current;
        if(dragItemNode.current !== e.target) {
            console.log('Target is not the same')
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList))
                newList[params.grpI].items.splice(params.itemI, 0, newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0]);
                dragItem.current = params;
                return newList
            })
        }

    }

    const handleDragEnd = (e) => {
        console.log('Ending drag....');
        setDragging(false);
        dragItem.current = null;
        dragItemNode.current.removeEventListener('dragend', handleDragEnd);
        dragItemNode.current = null;

    }

    const getStyles = (params) => {
        const currentItem = dragItem.current;
        if(currentItem.grpI === params.grpI && currentItem.itemI === params.itemI) {
            return 'dnd-item current'
        }
        return 'dnd-item'
    }

    if(list) {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="drag-n-drop">
                        {list.map((grp, grpI) => (
                            <div 
                                key={grp.title} 
                                className="dnd-group"
                                onDragEnter={dragging && !grp.items.length?(e) => handleDragEnter(e, {grpI, itemI: 0}) : null}
                            >
                                <div className="group-title">{grp.title}</div>
                                {grp.items.map((item, itemI) => (
                                    
                                    <div 
                                        draggable 
                                        onDragStart={(e) => {handleDragStart(e, {grpI, itemI})}} 
                                        onDragEnter={dragging?(e) => {handleDragEnter(e, {grpI, itemI})}:null}
                                        key={item} 
                                        className={dragging?getStyles({grpI, itemI}):"dnd-item"}
                                    >
                                        <label className="lot-number">Lot#{item}</label>
                                        
                                    </div>
                                ))}
                                <button>+</button>
                            </div>
                        ))}
                    </div>
                </header>
            </div>
        )
    } else{return null}
}

export default DragNDrop;