import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Termos de Uso | Susttenta", description: "Condições de uso do site institucional da Susttenta." };

export default function TermsPage() {
  return <LegalPage eyebrow="Condições de navegação" title="Termos de Uso" intro="Ao acessar este site, você concorda com as condições abaixo e com as políticas de privacidade e cookies.">
    <h2>1. Finalidade do site</h2><p>O site apresenta informações institucionais e comerciais sobre a Susttenta, suas áreas de atuação e soluções relacionadas à tecnologia Embio. O conteúdo não substitui avaliação técnica, proposta comercial ou recomendação específica.</p>
    <h2>2. Uso adequado</h2><p>O visitante compromete-se a não utilizar o site para atividades ilícitas, tentativas de invasão, coleta automatizada abusiva, disseminação de código malicioso ou qualquer ação que comprometa sua disponibilidade e segurança.</p>
    <h2>3. Informações técnicas</h2><p>Resultados e formas de aplicação podem variar conforme as condições de cada propriedade ou operação. Nenhuma informação publicada deve ser interpretada isoladamente como garantia de resultado ou instrução técnica definitiva.</p>
    <h2>4. Propriedade intelectual</h2><p>Marcas, textos, identidade visual, imagens e demais conteúdos pertencem aos respectivos titulares. Materiais das marcas representadas foram publicados em seus canais oficiais e são utilizados para apresentação comercial, com a origem documentada. A reprodução fora das hipóteses legais depende de autorização do respectivo titular.</p>
    <h2>5. Links externos</h2><p>Links para WhatsApp, redes sociais e outros serviços são disponibilizados por conveniência. A Susttenta não controla integralmente a disponibilidade, segurança ou políticas dessas plataformas.</p>
    <h2>6. Limitação de responsabilidade</h2><p>A Susttenta busca manter informações corretas e o site disponível, mas não garante funcionamento ininterrupto. Decisões técnicas ou comerciais devem ser confirmadas diretamente com a equipe responsável.</p>
    <h2>7. Alterações</h2><p>Os termos podem ser atualizados para acompanhar mudanças no site, nos serviços ou na legislação. A versão vigente será a publicada nesta página.</p>
    <h2>8. Legislação</h2><p>Estes termos são regidos pela legislação brasileira, incluindo o Marco Civil da Internet, o Código de Defesa do Consumidor quando aplicável e a Lei Geral de Proteção de Dados.</p>
  </LegalPage>;
}
