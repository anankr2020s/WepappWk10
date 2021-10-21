const bcrypt = require('bcryptjs');

const makeHash = async (MyText) => {
    const resultPromise = await bcrypt.hash(MyText, 10);
    return resultPromise;
}

const CompareHash = async (testText, myHash) => {
    const resultCompare = await bcrypt.compare(testText, myHash);
    return resultCompare;
}

const testText = '523419';

makeHash(testText).then( hash =>{
    console.log(hash);

    CompareHash(testText, hash).then(result =>{
        console.log(result);
    }).catch(err =>{
        console.log(err);
    });
}).catch(err =>{
    console.log(err);
})