# FXGT Demo: WordPress React Ticker Plugin 🚀

A high-performance WordPress plugin demonstrating the integration of **React 18** and **TypeScript** within the legacy WordPress PHP ecosystem.

Built specifically as a Proof of Concept for the **FXGT WordPress Developer** application.

## ⚡ Features
- **Hybrid Architecture:** Mounts a modern React app into a standard PHP-rendered WordPress page via Shortcode.
- **Real-Time Data:** Fetches live Crypto prices (BTC/ETH) using public APIs (CoinGecko).
- **TypeScript:** Fully typed codebase for reliability and maintainability.
- **Performance Optimized:** Assets are conditionally enqueued only when the `[fx_market_live]` shortcode is present.
- **Modern Tooling:** Built using `@wordpress/scripts` (Webpack/Babel).

## 🛠️ Installation
1. Download this repository as a ZIP file.
2. Upload to your WordPress site via **Plugins > Add New > Upload Plugin**.
3. Activate the plugin.
4. Add the shortcode `[fx_market_live]` to any Post or Page.

## 🏗️ Project Structure
- `/src`: React source code (Components, Hooks).
- `/build`: Compiled assets (JS/CSS).
- `/includes`: PHP classes for Shortcode & Asset registration.

## 👨‍💻 Author
**Fadjar Setiawan**
*The Architect*
