window.onload = function() {
  let lst1=document.querySelectorAll('input')
  let lst2=document.querySelectorAll('textarea')
  let lst3=document.querySelectorAll('div.choice input')
  console.log(lst3);
  // console.log(lst1);
  for (let i=0;i<lst1.length;i++){
    // console.log(lst1.value)
    if (lst1[i].type!='submit'){
      lst1[i].value='';
    }
  }
  for (let i=0;i<lst2.length;i++){
    lst2[i].value='';
  }
  for (let i=0;i<lst3.length;i++){
    console.log(lst3[i].checked)
    lst3[i].checked=false;
  }
}