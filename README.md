# Quote Cleaner – Firefox Extension

**Quote Cleaner** is a simple Firefox extension that replaces smart quotes (`‘’“”`) with straight quotes (`'` and `"`) when you paste text into editable areas (like rich-text editors such as [Trix](https://trix-editor.org)).

## ✨ Features

- Automatically replaces curly/smart quotes on paste
- Works in `contenteditable` elements
- Displays a subtle flash message in the bottom-right when replacements happen

## 🔧 How it Works

On paste into a `contenteditable` element:
- Replaces:
  - `‘` and `’` → `'`
  - `“` and `”` → `"`
- Inserts cleaned text at the cursor
- Shows a temporary notification in the corner if replacements occurred

## 🚀 Installation (Manual)

To use it in Firefox:
1. Clone this repo
2. Run `make release`
3. Go to `about:debugging#/runtime/this-firefox`
4. Click **Load Temporary Add-on…** and select `manifest.json` from the root directory

### 🔒 Permanent Installation

To install it permanently:
- [Submit it as an unlisted extension to Mozilla AMO](https://addons.mozilla.org/en-US/developers/addon/submit/upload-unlisted)
- Upload the `.zip` file generated in `dist/quote-cleaner.zip`

## 🛠️ Development

```bash
make release   # Build zip file
make clean     # Remove build artifacts
```
