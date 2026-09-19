#!/bin/bash
cd "$(dirname "$0")"
echo "=================================================="
echo "    Iniciando Site da Escola Carneiro (v2.0)     "
echo "=================================================="
echo ""
echo "Iniciando servidor local..."
open "http://localhost:3000"
npm run dev
