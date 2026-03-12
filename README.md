# Human Typing Fun 🖊️

A Chrome extension that automates text input with realistic human-like typing patterns. Perfect for filling forms, testing input fields, or automating repetitive typing tasks.

## ✨ Features

- **Human-Like Typing Simulation**: Types text with natural timing variations and jitter to mimic real human behavior
- **Customizable Typing Speed**: Adjustable speed slider (10-300) to control typing pace
- **Persistent Storage**: Saves your text and speed preferences using Chrome's sync storage
- **Context Menu Integration**: Right-click on any editable field to start typing instantly
- **Ultra-Fast Mode**: Instant paste option for speeds ≥98
- **Works Everywhere**: Compatible with all websites and editable input fields

## 📦 Installation

### Load Unpacked Extension (Development)

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in the top-right corner)
3. Click **Load unpacked**
4. Select the `autotypePro` folder containing all extension files
5. The extension icon should appear in your toolbar

### Packaged Extension (Production)

1. Go to `chrome://extensions/` in Developer mode
2. Click **Pack extension**
3. Select the extension directory
4. Download the `.crx` file and install it

## 🚀 Usage

### Setting Up Your Text

1. Click the extension icon in your Chrome toolbar
2. Enter the text you want to auto-type in the textarea
3. Adjust the typing speed using the slider:
   - **Lower values (10-50)**: Slow, deliberate typing
   - **Medium values (50-80)**: Normal typing pace
   - **High values (80-97)**: Fast typing
   - **Ultra-fast (98-300)**: Instant paste (no animation)
4. Click **Save** to store your preferences

### Using the Extension

1. Navigate to any webpage with an input field (form, textarea, search box, etc.)
2. Click inside the editable field where you want to type
3. **Right-click** to open the context menu
4. Select **"Start Typing"**
5. Watch as your saved text is typed automatically!

## 🛠️ Technical Details

### Architecture

```
autotypePro/
├── manifest.json      # Extension configuration (Manifest V3)
├── popup.html         # Extension popup UI
├── popup.js           # Popup logic & storage management
├── background.js      # Service worker for context menu
├── content.js         # Content script for typing simulation
└── README.md          # Documentation
```

### Components

| File | Purpose |
|------|---------|
| `manifest.json` | Defines permissions, scripts, and extension metadata |
| `popup.html` | User interface for text input and speed control |
| `popup.js` | Handles saving/loading preferences from Chrome storage |
| `background.js` | Creates context menu and routes click events |
| `content.js` | Executes typing simulation on web pages |

### Permissions Explained

- **`storage`**: Save and sync text/speed preferences across devices
- **`contextMenus`**: Add "Start Typing" option to right-click menu
- **`activeTab`**: Access the currently active tab for typing
- **`scripting`**: Inject content scripts into web pages

### How Typing Simulation Works

```javascript
// Delay calculation from speed slider
delay = Math.max(1, 101 - speed);

// Human-like randomness added to each keystroke
jitter = Math.random() * 10;
totalDelay = delay + jitter;
```

The extension:
1. Detects the currently focused editable element
2. Iterates through each character of saved text
3. Appends characters one-by-one with realistic delays
4. Dispatches `input` events to trigger React/Angular listeners
5. Adds random jitter (0-10ms) to avoid robotic patterns

## 🎯 Use Cases

- **Form Testing**: Quickly fill test forms during development
- **Accessibility**: Help users with motor impairments
- **Repetitive Data Entry**: Automate common text inputs
- **Chat Testing**: Test chat interfaces with predefined messages
- **Demo Purposes**: Showcase form behavior without manual typing

## 🔧 Development

### Prerequisites

- Google Chrome (or Chromium-based browser)
- Basic knowledge of JavaScript and Chrome Extensions

### Debugging

1. **Popup**: Right-click extension icon → "Inspect popup"
2. **Background Script**: Go to `chrome://extensions/` → Inspect service worker
3. **Content Script**: Open DevTools on any webpage → Console tab

### Common Issues

| Issue | Solution |
|-------|----------|
| Extension not appearing | Ensure Developer mode is enabled |
| Context menu missing | Reload extension from `chrome://extensions/` |
| Typing not working | Make sure cursor is in an editable field |
| Settings not saving | Check that storage permission is granted |

## 📝 Manifest Version 3

This extension uses **Manifest V3**, the latest Chrome extension platform:
- Service worker instead of persistent background page
- Enhanced privacy and security
- Required for Chrome Web Store submissions (since January 2024)

## 🔒 Privacy & Security

- **No data collection**: All data stored locally in Chrome sync storage
- **No external requests**: Extension works entirely offline
- **Open source**: All code is visible and auditable
- **Minimal permissions**: Only requests necessary permissions

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Potential Enhancements

- [ ] Multiple text profiles/snippets
- [ ] Variable typing patterns (copy-paste, bursts, pauses)
- [ ] Hotkey activation
- [ ] Text formatting options
- [ ] Typing sound effects
- [ ] Statistics and usage tracking

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check Chrome's extension documentation
- Review the code comments in source files

---

**Enjoy automated typing with a human touch!** ⌨️✨
