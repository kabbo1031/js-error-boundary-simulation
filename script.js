function run(){
  try{
    // simulate error
    throw new Error('App crashed');
  }catch(e){
    document.getElementById('app').style.display = 'none';
    document.getElementById('error').style.display = 'block';
  }
}
