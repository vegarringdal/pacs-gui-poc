


type dataRow = {
    tag:string;
    description:string;
    comment:string;
    op:string;
    fromTag:string;
    toTag:string;
    planned: number;
    installed: number;
}
const data: dataRow[]= [];

let u = 0;

for(let i = 0; i < 5000; i++){

    u++
    let OP = ""
    let planned = 1
    let installed = 0;
    if(u === 1){
        OP = "PU"
        planned = 66
    }
    if(u === 2){
        OP = "TF"
    }
    if(u === 3){
        OP = "TT"
    }
    if(u === 4){
        OP = "TC"
    }
    if(u === 5){
        OP = "IE"
    }
    if(u === 6){
        OP = "ICLC"
        u = 0
    }


    data.push({
        tag: `Tagno:${i}`,
        description: `Tagno:${i}-desc`,
        comment: `Tagno:${i}-some comment`,
        op: OP,
        planned,
        installed,
        fromTag: `Tagno:${i} -from`,
        toTag: `Tagno:${i} -to`
    })
}



export function getDummyData(){
    return data
}