#!/bin/bash
# SCHNELLSTART DEPLOYMENT SCRIPT für neLabz Website
# ====================================================
# Dieses Script hilft Ihnen bei der schnellen Einrichtung und Deployment

echo "================================"
echo "neLabz Website - GitHub Pages Setup"
echo "================================"
echo ""

# Schritt 1: GitHub Username abfragen
read -p "Bitte geben Sie Ihren GitHub Benutzernamen ein: " GITHUB_USERNAME

# Schritt 2: Repository Name
REPO_NAME="nelabz"

# Schritt 3: Homepage URL in package.json anpassen
echo "Passe package.json an..."
sed -i "s/YOUR-GITHUB-USERNAME/$GITHUB_USERNAME/g" package.json

echo ""
echo "✓ package.json wurde angepasst"
echo ""

# Schritt 4: Git initialisieren
echo "Initialisiere Git Repository..."
git init

# Schritt 5: Erste Commit
git add .
git commit -m "Initial commit - neLabz Website"

# Schritt 6: Branch umbenennen
git branch -M main

echo ""
echo "✓ Git Repository wurde initialisiert"
echo ""

# Schritt 7: Remote hinzufügen
echo "Füge GitHub Remote hinzu..."
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

echo ""
echo "================================"
echo "WICHTIGE NÄCHSTE SCHRITTE:"
echo "================================"
echo ""
echo "1. Erstellen Sie ein neues Repository auf GitHub:"
echo "   → Gehen Sie zu: https://github.com/new"
echo "   → Name: $REPO_NAME"
echo "   → Visibility: Public (WICHTIG!)"
echo "   → NICHT 'Initialize with README' auswählen"
echo ""
echo "2. Nachdem das Repository erstellt wurde, führen Sie aus:"
echo "   npm install"
echo "   git push -u origin main"
echo "   npm run deploy"
echo ""
echo "3. Ihre Website wird dann erreichbar sein unter:"
echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME"
echo ""
echo "================================"
echo ""
echo "Tipp: Speichern Sie diese Informationen für später!"