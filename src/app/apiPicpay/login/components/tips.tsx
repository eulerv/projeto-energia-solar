// tips.tsx
"use client";

export default function Tips() {
  return (
    <div className="p-4 rounded-lg border border-zinc-600 bg-white shadow-md lg:col-span-2 xl:col-span-1">
      <div className="bg-gray-500 bg-opacity-60 border-2 border-black font-aleo rounded-lg w-full text-black p-2 mb-4 text-center">
        ***Tips<br/>
      </div>
      <div className="flex flex-col bg-gray-100 p-4 rounded-lg text-sm text-gray-700">
        <p>-&gt; Depois de se autenticar fazendo o login, o token gerado vai automaticamente para os cookies do navegador.</p>
        <p>-&gt; Porém, se desejar testar mais de um login, basta gerar diferentes tokens, e altera-los manualmente copiando/colando.</p>
        <p>-&gt; Se perdeu ou esqueceu o usuário e senha, pode criar outro user, nesta API não foi implementado ainda o envio de email/redirecionamento/troca de senha</p>
        <p>-&gt; Utilize o token no cabeçalho das requisições como <code>Authorization: Bearer &lt;seu_token&gt;</code>.</p>
      </div>
    </div>
  );
}
