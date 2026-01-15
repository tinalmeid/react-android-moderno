# test-all.ps1 - Executa testes com cobertura em TODOS os apps (Windows)

Write-Host "================================" -ForegroundColor Cyan
Write-Host "Executando testes em TODOS os apps" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan

# 01-AppSorteio
Write-Host "`n📱 Testando 01-AppSorteio..." -ForegroundColor Yellow
Push-Location "01-AppSorteio"
npm test -- --coverage
Pop-Location

# 02-AppNoticias
Write-Host "`n📰 Testando 02-AppNoticias..." -ForegroundColor Yellow
Push-Location "02-AppNoticias"
npm test -- --coverage
Pop-Location

# 03-AppNetflix
Write-Host "`n🎬 Testando 03-AppNetflix..." -ForegroundColor Yellow
Push-Location "03-AppNetflix"
npm test -- --coverage --collectCoverageFrom="src/data/**/*.js"
Pop-Location

Write-Host "`n================================" -ForegroundColor Cyan
Write-Host "✅ Todos os testes executados!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Relatórios de cobertura gerados em:" -ForegroundColor Green
Write-Host "  - 01-AppSorteio/coverage/lcov.info" -ForegroundColor Green
Write-Host "  - 02-AppNoticias/coverage/lcov.info" -ForegroundColor Green
Write-Host "  - 03-AppNetflix/coverage/lcov.info" -ForegroundColor Green
