const{
    createPool
}=require('mysql');
const pool = createPool(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"test",
        connectionLimit:10
    }
)
function f()
{
    pool.query('select count from totalclicks where name=?',[french],(err,result,fields)=>
    {
        if(err)
    {
        document.write(err);
        console.log(err);
    }
    console.log(result);
    document.write(result);
    })
}
pool.query('select * from totalclicks where id=?',[4],(err,result,fields)=>
{
    if(err)
    {
        console.log(err);
    }
    var s = result;
    console.log(s);
})
module.exports=pool;
