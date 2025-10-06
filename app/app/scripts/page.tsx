"use client";
import { useState } from "react";
type ApiOut = { success: boolean; script: string; meta: any };
export default function ScriptsPage(){
  const [prompt,setPrompt]=useState(""); const [duration,setDuration]=useState(15);
  const [tone,setTone]=useState("motivant"); const [category,setCategory]=useState("finance");
  const [outline,setOutline]=useState(true); const [loading,setLoading]=useState(false);
  const [err,setErr]=useState<string|null>(null); const [out,setOut]=useState<ApiOut|null>(null);
  async function onSubmit(e:React.FormEvent){e.preventDefault(); setErr(null); setOut(null); if(!prompt.trim()) return setErr("Prompt required");
    setLoading(true);
    try{
      const res=await fetch("/api/ipsera/scripts",{method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({prompt,duration,tone,category,outline})});
      if(!res.ok) throw new Error(String(res.status));
      setOut(await res.json());
    }catch(e:any){setErr(e.message||"Request failed");}finally{setLoading(false);}
  }
  return (<div className="mx-auto max-w-2xl p-6 space-y-6">
    <h1 className="text-xl font-semibold">YouTube Scripts</h1>
    <form onSubmit={onSubmit} className="space-y-3">
      <input className="w-full rounded border p-2" placeholder="Prompt *" value={prompt} onChange={e=>setPrompt(e.target.value)}/>
      <div className="grid grid-cols-2 gap-3">
        <input className="rounded border p-2" type="number" min={5} max={60} value={duration} onChange={e=>setDuration(Number(e.target.value))}/>
        <input className="rounded border p-2" placeholder="tone" value={tone} onChange={e=>setTone(e.target.value)}/>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <input className="rounded border p-2" placeholder="category" value={category} onChange={e=>setCategory(e.target.value)}/>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={outline} onChange={e=>setOutline(e.target.checked)}/>Outline</label>
      </div>
      <button disabled={loading||!prompt.trim()} className="rounded border px-4 py-2 disabled:opacity-50">{loading?"Generating...":"Generate"}</button>
    </form>
    {err&&<div className="rounded border border-red-400 bg-red-50 p-3 text-sm">{err}</div>}
    {out&&<pre className="rounded border p-3 text-xs whitespace-pre-wrap">{JSON.stringify(out,null,2)}</pre>}
  </div>); }
