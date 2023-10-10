'use client'

import {signOut} from "next-auth/react";

export default function NavBar() {
  return (
    <div className="flex flex-col justify-between w-60">
        <div>
        <a href="/" className="border border-slate-400 rounded-r-lg bg-teal-400 block p-1 mt-2">Список пациентов</a>
        <a href="/" className="border border-slate-400 rounded-r-lg bg-teal-400 block p-1 m-0">Список приемов?</a>
        <a href="/" className="border border-slate-400 rounded-r-lg bg-teal-400 block p-1 m-0 mb-3">Отчеты</a>
</div>
        <a href={"#"} onClick={() => signOut()} className="border border-black rounded-lg p-2 m-2 bg-neutral-300 hover:bg-neutral-400 text-center">Выход</a>
    </div>
  )
}
