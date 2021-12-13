const cast = new Map([
    ['boy', 'Harry Potter'],
    ['friend1', 'Ron Weasley'],
    ['friend2', "Hermione Granger"]
    ]);
    cast.set(4, "Sirius Black");
    cast.set(true, "Severus Snape");
    
    let humanNames = [];
    let keysNames = [];
    let buf1;
    let buf2;
    
    for (let name of cast.keys()) {
    //console.log(name);
    buf2 = name;
    keysNames.push(buf2)
    buf1 = cast.get(name);
    humanNames.push(buf1);
    }
    //console.log(humanNames);
    //console.log(keysNames);
    
    for (let i = 0; i < humanNames.length; ++i) {
    console.log(`Key - ${keysNames[i]}, Data - ${humanNames[i]}`);
    alert(`Key - ${keysNames[i]}, Data - ${humanNames[i]}`);
    }