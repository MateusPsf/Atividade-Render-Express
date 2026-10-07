async function buscarDados(){
  const tabela=document.getElementById('tabela'); 
  const mensagem=document.getElementById('mensagem');

  tabela.innerHTML=''; mensagem.textContent='';

  try { 
    const r=await fetch('/pessoas'); if(!r.ok) throw new Error(); 
    const dados=await r.json();
    if(!dados.length){mensagem.textContent='Nenhum registro cadastrado.';
      return;
    }dados.forEach(p=>{
      const tr=document.createElement('tr'); ['id','nome','sobrenome','email','idade','telefone','rua','bairro','cidade','estado','rg'].forEach(c=>{
        const td=document.createElement('td');
        td.textContent=p[c]??'';
        tr.appendChild(td)});
        tabela.appendChild(tr)});
  } catch { 
    mensagem.textContent='Erro ao buscar os registros.'; 
  }
}
document.getElementById('buscar').addEventListener('click',buscarDados); buscarDados();
