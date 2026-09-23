import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";
import Container from "../common/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50"><Container><nav className="mt-4 rounded-2xl border border-white/60 bg-white/80 px-5 py-3.5 shadow-lg backdrop-blur-xl md:px-7"><div className="flex items-center justify-between"><Link to="/" onClick={() => setOpen(false)}><b className="block font-serif text-xl tracking-[.12em] text-[#3d0b13]">SATGURU</b><span className="block text-[9px] font-semibold tracking-[.2em] text-[#b68625]">SAIN SADHRAM SAHIB</span></Link><div className="hidden gap-6 lg:flex">{navigation.map((x) => <NavLink key={x.path} to={x.path} className={({isActive}) => `text-sm font-medium ${isActive ? "text-[#b68625]" : "text-[#58443d] hover:text-[#b68625]"}`}>{x.label}</NavLink>)}</div><button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Navigation">{open?<X/>:<Menu/>}</button></div>{open&&<div className="mt-4 flex flex-col gap-1 border-t border-[#eadfce] pt-4 lg:hidden">{navigation.map((x) => <NavLink key={x.path} to={x.path} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-[#58443d] hover:bg-[#f6ebd3]">{x.label}</NavLink>)}</div>}</nav></Container></header>;
}
