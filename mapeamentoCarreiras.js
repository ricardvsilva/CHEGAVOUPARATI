const mapeamentoCarreiras = [
  // Casos já registrados e principais perfis escolhas típicas

  // 1. Administrativo, Superior, Contato Sim, Alta Analítica, Trabalho em Equipe, Temperamento Calmo, Salário 2-4k, Presencial, Aprendizado e Crescimento
  {
    areaAtuacao: "Administrativa",
    escolaridade: "Superior",
    contatoTecnologia: "Sim",
    habilidadesAnaliticas: "Alta",
    trabalhoEquipe: "Em Equipe",
    temperamento: "Calmo",
    faixaSalarial: "R$2.000 a R$4.000",
    preferenciaTrabalho: "Presencial",
    motivacao: "Aprendizado e Crescimento",
    recomendacao: {
      areaPai: "Infraestrutura de TI",
      areaFilho: "Redes e Servidores",
      profissao: "Assistente de Redes"
    }
  },
  // 2. Técnica, Médio, Contato Sim, Muito Alta Analítica, Sozinho, Dinâmico, Salário 4-6k, Remoto, Flexibilidade
  {
    areaAtuacao: "Técnica",
    escolaridade: "Médio",
    contatoTecnologia: "Sim",
    habilidadesAnaliticas: "Muito Alta",
    trabalhoEquipe: "Sozinho",
    temperamento: "Dinâmico",
    faixaSalarial: "R$4.000 a R$6.000",
    preferenciaTrabalho: "Remoto",
    motivacao: "Flexibilidade",
    recomendacao: {
      areaPai: "Desenvolvimento",
      areaFilho: "Desenvolvimento Web",
      profissao: "Desenvolvedor Júnior Front-end"
    }
  },
  // 3. Comercial/Vendas, Superior, Contato Pouco, Média Analítica, Em Equipe, Comunicativo, Salário Mais de 6k, Híbrido, Salário
  {
    areaAtuacao: "Comercial/Vendas",
    escolaridade: "Superior",
    contatoTecnologia: "Pouco",
    habilidadesAnaliticas: "Média",
    trabalhoEquipe: "Em Equipe",
    temperamento: "Comunicativo",
    faixaSalarial: "Acima de R$6.000",
    preferenciaTrabalho: "Híbrido",
    motivacao: "Salário",
    recomendacao: {
      areaPai: "Comercial",
      areaFilho: "Vendas de TI",
      profissao: "Assistente de Vendas de TI"
    }
  },

  // Casos adicionais criados para cobrir variados perfis não registrados explicitamente:

  // 4. Produção, Médio, Contato Pouco, Média Analítica, Sozinho, Introvertido, Até 2k, Remoto, Estabilidade
  {
    areaAtuacao: "Operacional/Produção",
    escolaridade: "Médio",
    contatoTecnologia: "Pouco",
    habilidadesAnaliticas: "Média",
    trabalhoEquipe: "Sozinho",
    temperamento: "Introvertido",
    faixaSalarial: "Até R$2.000",
    preferenciaTrabalho: "Remoto",
    motivacao: "Estabilidade",
    recomendacao: {
      areaPai: "Desenvolvimento",
      areaFilho: "Qualidade de Software",
      profissao: "Testador Júnior"
    }
  },
  // 5. Gestão/Liderança, Pós, Contato Sim, Alta Analítica, Em Equipe, Comunicativo, Acima de 6k, Presencial, Impacto Social
  {
    areaAtuacao: "Gestão/Liderança",
    escolaridade: "Pós-graduação",
    contatoTecnologia: "Sim",
    habilidadesAnaliticas: "Alta",
    trabalhoEquipe: "Em Equipe",
    temperamento: "Comunicativo",
    faixaSalarial: "Acima de R$6.000",
    preferenciaTrabalho: "Presencial",
    motivacao: "Impacto Social",
    recomendacao: {
      areaPai: "Gestão de TI",
      areaFilho: "Liderança de TI",
      profissao: "Assistente de Coordenação de TI"
    }
  },
  // 6. Saúde, Fundamental, Nenhum, Baixa Analítica, Em Equipe, Paciente, Até 2k, Presencial, Estabilidade
  {
    areaAtuacao: "Saúde",
    escolaridade: "Fundamental",
    contatoTecnologia: "Não",
    habilidadesAnaliticas: "Baixa",
    trabalhoEquipe: "Em Equipe",
    temperamento: "Paciente",
    faixaSalarial: "Até R$2.000",
    preferenciaTrabalho: "Presencial",
    motivacao: "Estabilidade",
    recomendacao: {
      areaPai: "Implementação no Cliente",
      areaFilho: "Suporte ao Usuário",
      profissao: "Assistente de Suporte Técnico"
    }
  },
  // 7. Educação, Superior, Contato Pouco, Alta Analítica, Equilibrado, Calmo, 2-4k, Híbrido, Aprendizado
  {
    areaAtuacao: "Educação",
    escolaridade: "Superior",
    contatoTecnologia: "Pouco",
    habilidadesAnaliticas: "Alta",
    trabalhoEquipe: "Ambos",
    temperamento: "Calmo",
    faixaSalarial: "R$2.000 a R$4.000",
    preferenciaTrabalho: "Híbrido",
    motivacao: "Aprendizado e Crescimento",
    recomendacao: {
      areaPai: "Arquitetura de Soluções",
      areaFilho: "Análise de Sistemas",
      profissao: "Assistente de Análise de Sistemas"
    }
  },

  // Fallback inteligente para casos não contemplados, com base em respostas chave mais comuns:
  {
    areaAtuacao: "*",
    escolaridade: "*",
    contatoTecnologia: "*",
    habilidadesAnaliticas: "*",
    trabalhoEquipe: "*",
    temperamento: "*",
    faixaSalarial: "*",
    preferenciaTrabalho: "*",
    motivacao: "*",
    recomendacao: {
      areaPai: "TI - Área Genérica",
      areaFilho: "Explorar as Possibilidades",
      profissao: "Profissional de TI em Formação"
    }
  }
];

// Note que o "*" atua como coringa para combinar qualquer valor se não houver match exato.
// Sua lógica no scripts.js deve ser adaptada para tratar o "*" como 'match qualquer'.

