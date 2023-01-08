function reversePath(elem, root){
    const path = [];
    let pointer = elem;
    while(pointer.parent){
        const index = pointer.parent.children.indexOf(pointer);
        path.push(index);
        pointer = pointer.parent;
    }

    pointer = root;
    while(path.length){
        pointer = pointer.children[path.pop()];
    }
}