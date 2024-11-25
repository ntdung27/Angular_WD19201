import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const {user} = JSON.parse(localStorage.getItem('user') || '{}')
  
  if(!user || user.id !== 1){
    alert("Bạn không có quyền truy cập vào trang này");
    return false;
  }
  
  return true;
};
