


type dataRow = {
    tag:string;
    description:string;
    comment:string;
    op:string;
    fromTag:string;
    toTag:string;
}
const data: dataRow[]= [];

let u = 0;

for(let i = 0; i < 5000; i++){

    u++
    let OP = ""
    if(u === 1){
        OP = "PU"
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
        fromTag: `Tagno:${i} -from`,
        toTag: `Tagno:${i} -to`
    })
}



export function getDummyData(){
    return data
}