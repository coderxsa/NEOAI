
## 🚀 Installation & Setup

Choose your preferred method to deploy **Neo Ai**.

<details>
  <summary><strong>🤖 Neo Ai - Termux Setup Guide</strong></summary>

1. Open **Termux** on your Android device [TERMUX](https://play.google.com/store/apps/details?id=com.termux) .  
2. Run this **one-line command** to update packages.

```bash
pkg update -y && pkg upgrade -y && pkg install -y nodejs git && git clone https://github.com/coderxsa/Neo-Ai.git && cd Neo-Ai && npm install && node index.js
```

### 🧹 To Remove state and Unlink Device

1) If you want to unlink your WhatsApp session or reset login, run this command:

```bash
cd Neo-Ai && rm -rf sessions
```

```bash
node index.js
```

> [!WARNING]
> Always delete the `sessions` file and unlink your device after finishing a session.

</details>


```javascript
/**
 * Command Template by @CoderXSA
 * Prompt: Optimized for ESM make me command with this formate and my given code in axios for requests make sure to keep the esm requirments the same as the templates dont add others.
 */

let handler = async (m, { sock, text, prefix, command, reply }) => {
    // 1. Logic: What the command does
    if (!text) return reply(`❌ Usage: ${prefix + command} <text>\nExample: ${prefix + command} Hello`)
    
    // 2. Action: Sending a message back
    await reply(`✅ You said: ${text}`)
}

// 3. Command Triggers (Regex)
handler.command = /^(test|hello|hi)$/i 

// 4. Menu Metadata
handler.tags = ['misc'] // Category in the menu
handler.help = ['test <text>'] // Usage hint

// 5. Requirements (True/False)
handler.group = false   // Works only in groups? true or false
handler.admin = false   // Only for group admins? true or false
handler.owner = false   // Only for bot owner? true or false
handler.premium = false // Only for premium users? true or false
handler.private = false // Only for private chats? true or false

export default handler
```

---

## 🤝 Support & Credits

**Main Developer:**
<br>
<a href="https://github.com/coderxsa">
  <img src="https://avatars.githubusercontent.com/u/149763717?v=4" width="100" height="100" alt="coderxsa" style="border-radius: 50%;"/>
</a>
<br>
**coderxsa**

---

## ⚠️ Disclaimer & Notice

**Terms of Use:**
1.  **Not For Sale:** This bot is free.
2.  **Obfuscated Code:** If a plugin's code is encrypted/obfuscated, you do not have permission to edit it.
3.  **Credits:** Do not remove credits if you re-upload or use these files.

**WhatsApp Policy Warning:**
> This bot is not affiliated with `WhatsApp Inc.` Misusing the bot (spamming, bulk messaging) may result in your WhatsApp account being **banned**.
> * I am not responsible for any bans your account may receive.
> * Use this bot at your own risk.

