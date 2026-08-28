import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Política de Privacidade e LGPD | Susttenta", description: "Como a Susttenta trata dados pessoais e protege a privacidade dos visitantes." };

export default function PrivacyPage() {
  return <LegalPage eyebrow="Privacidade e LGPD" title="Política de Privacidade" intro="Este documento explica como os dados pessoais podem ser coletados, utilizados, armazenados e protegidos durante sua interação com a Susttenta.">
    <h2>1. Quem é o responsável pelo tratamento</h2><p>A Susttenta é responsável pelos dados tratados em seus canais institucionais. Solicitações relacionadas à privacidade podem ser encaminhadas pelo canal oficial de atendimento disponibilizado no site.</p>
    <h2>2. Dados que podem ser tratados</h2><p>Podemos tratar dados fornecidos voluntariamente, como nome, telefone, e-mail, empresa ou propriedade, cidade, conteúdo da solicitação e informações necessárias ao atendimento. Também podem ser registrados dados técnicos básicos, como endereço IP, navegador, dispositivo, páginas acessadas e preferências de cookies.</p>
    <h2>3. Finalidades</h2><ul><li>responder dúvidas, solicitações e pedidos de orçamento;</li><li>prestar atendimento comercial e técnico;</li><li>manter a segurança e o funcionamento do site;</li><li>cumprir obrigações legais e regulatórias;</li><li>melhorar a experiência e medir o desempenho, quando houver consentimento.</li></ul>
    <h2>4. Bases legais</h2><p>O tratamento pode se apoiar em consentimento, execução de procedimentos preliminares ou contrato, cumprimento de obrigação legal, exercício regular de direitos e legítimo interesse, sempre observando os direitos e as expectativas do titular.</p>
    <h2>5. Compartilhamento</h2><p>Dados podem ser compartilhados com fornecedores estritamente necessários à hospedagem, segurança, comunicação, análise de desempenho e atendimento. Esses fornecedores devem tratar as informações apenas conforme as finalidades contratadas e a legislação aplicável. A Susttenta não vende dados pessoais.</p>
    <h2>6. WhatsApp e serviços externos</h2><p>Ao utilizar links para WhatsApp, redes sociais ou serviços externos, o visitante também estará sujeito às políticas dessas plataformas. Recomendamos consultar os respectivos documentos de privacidade.</p>
    <h2>7. Retenção e segurança</h2><p>Os dados são mantidos somente pelo período necessário às finalidades informadas, ao cumprimento de obrigações e ao exercício de direitos. Adotamos medidas administrativas e técnicas proporcionais para reduzir riscos de acesso, perda, alteração ou divulgação indevida.</p>
    <h2>8. Direitos do titular</h2><p>Nos termos da LGPD, o titular pode solicitar confirmação e acesso, correção, anonimização, bloqueio ou eliminação quando cabível, portabilidade, informação sobre compartilhamentos, revisão do consentimento e oposição ao tratamento irregular.</p>
    <h2>9. Cookies</h2><p>As categorias, finalidades e opções de controle estão descritas na Política de Cookies. Cookies não essenciais dependem da escolha do visitante.</p>
    <h2>10. Alterações</h2><p>Esta política poderá ser atualizada para refletir mudanças legais, técnicas ou operacionais. A versão vigente estará sempre publicada nesta página.</p>
  </LegalPage>;
}
