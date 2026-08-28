import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Política de Cookies | Susttenta", description: "Entenda quais cookies o site da Susttenta utiliza e como controlar suas preferências." };

export default function CookiesPage() {
  return <LegalPage eyebrow="Controle e transparência" title="Política de Cookies" intro="Você escolhe quais categorias não essenciais podem ser utilizadas durante a navegação.">
    <h2>1. O que são cookies</h2><p>Cookies são pequenos arquivos ou registros armazenados no dispositivo para permitir funções do site, lembrar preferências, compreender o uso das páginas e, quando autorizado, medir campanhas.</p>
    <h2>2. Categorias utilizadas</h2><h3>Necessários</h3><p>São indispensáveis ao funcionamento, à segurança e ao registro das preferências de consentimento. Não podem ser desativados pelo painel.</p><h3>Análise e desempenho</h3><p>Ajudam a entender, de forma agregada, como o site é utilizado e quais páginas precisam ser melhoradas. Só devem ser ativados após autorização.</p><h3>Marketing</h3><p>Podem ser usados para medir campanhas ou personalizar comunicações quando ferramentas dessa categoria estiverem efetivamente configuradas. Dependem de consentimento.</p>
    <h2>3. Ferramentas atualmente previstas</h2><p>O site foi preparado para respeitar a escolha do visitante antes de carregar recursos não essenciais. A ativação futura de ferramentas de análise ou marketing deverá ser refletida nesta política.</p>
    <h2>4. Como gerenciar</h2><p>Você pode aceitar todos, recusar cookies não essenciais ou selecionar categorias no painel de preferências. A escolha fica armazenada no navegador e pode ser alterada a qualquer momento pelo botão “Gerenciar cookies” ou “Preferências de cookies”.</p>
    <h2>5. Exclusão pelo navegador</h2><p>Também é possível apagar ou bloquear cookies nas configurações do navegador. Isso pode remover preferências salvas e afetar algumas funções.</p>
    <h2>6. Atualizações</h2><p>Esta política será atualizada quando houver mudança relevante nas tecnologias, finalidades ou fornecedores utilizados.</p>
  </LegalPage>;
}
