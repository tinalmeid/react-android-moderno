#!/bin/bash
# test-all.sh - Executa testes com cobertura em TODOS os apps

echo "================================"
echo "Executando testes em TODOS os apps"
echo "================================"

# 01-AppSorteio
echo -e "\n\n📱 Testando 01-AppSorteio..."
cd 01-AppSorteio
npm test -- --coverage
cd ..

# 02-AppNoticias
echo -e "\n\n📰 Testando 02-AppNoticias..."
cd 02-AppNoticias
npm test -- --coverage
cd ..

# 03-AppNetflix
echo -e "\n\n🎬 Testando 03-AppNetflix..."
cd 03-AppNetflix
npm test -- --coverage --collectCoverageFrom="src/data/**/*.js"
cd ..

echo -e "\n\n================================"
echo "✅ Todos os testes executados!"
echo "================================"
echo "Relatórios de cobertura gerados em:"
echo "  - 01-AppSorteio/coverage/lcov.info"
echo "  - 02-AppNoticias/coverage/lcov.info"
echo "  - 03-AppNetflix/coverage/lcov.info"
