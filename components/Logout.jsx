import React from 'react'
import firebase from '@/firebase'

function Logout() {
    const handleLogout = () => {
        firebase.auth().signOut();
        alert('로그아웃 되었습니다');
    }
  return (
    <div>
        <button onClick={handleLogout}>로그아웃</button>
    </div>
  )
}

export default Logout