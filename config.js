/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['9779867447089','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3ptYxoV5RLREaOFXBpvKCi6MQ8FFFgKBVIFqBP++wb2ZeZhd7b3rThF5MmTmad+ApoThm18BepPUJSkRhy3R34tMFDBuIpjXIIOiBBHQAXb12cY53y/gDtn8mROyvNw6SbkiWXTrZcINzgLavg0VUrBewH3DiiqICXhHwDl4SJasNszhFUgyrqmucVFCg/n3K797taKDaSwvW1fNoLwAu4tIiIlocmkOOAMlyi18XWJSPk1+mcdRok9lQx9R5FNV0/wxNCp7o0zA470ivbDwi5SmvY24tfo2064OgV0L0myJJ69qX5erq1BaG1XWaGkB6eGa9Efh6+11rzRZyShOLIiTDnh1y/rPppI2LtObhqxd+zgVwtCxleDUrvvYnqmWZYcZ9Czl8LG+hpxEZtTr1qefTuRIwu/Drhze1bC3Ckd+RjMm1pOz+HewM4D8JP4svzIyun/6C7bycFInENfX20nK7dZXlKymZ+8xHPXy+zZM0/aOBqO9XnWfDU2qGD8MIjd+XjEnux5tZwcTU2sdHzuuppXBxouaK036990R7wq/8RyzHZPlpP6I3yZSbcI+u5G62+y6TZohNNaie2R2+dB/2qaM89x8l0xyDTedGt4QzNfG9AuvIaD6yW6Zpewt3NzKVcGx+blMdEJX60IqN17B5Q4IYyXiJOcPmqDQQegqF7jsMT8IS+wTiN/VPfoOsDWZh1w05IiJsIj7OGxvEs8iWU9V970MtF7AR1QlHmIGcORSRjPy+sMM4YSzID6148OoPjC34xr2/W7HRCTknGPVkWao+jD1Y9LFIZ5Rfn6SkPYHnAJVOFXGXNOaMJaHSuKyvBAagwPiDOgxihl+HNCXOIIqLys8OfWwjxqhXdcZea7zhZ0QPYwhERABYokKfJQEkVJkBW1+519a1pYVBTfKOagA9LHb+JQVPpSbzDsy1JPVLvf2/L9k18LF2GOSMqACqA9dI91Y0yWppSFsmGMJskIJiPwa56PYLwJb4imOdl3lelhNR8Mmt3AFDZ90u1u5CLxQycItrx5Nblyvjov/wDSthTE4fg5WE6Une/7l0Ny6s0MyOI4c5VmW04D6FlLB503c8nYW0mo+3UvLQopgVol8EnkVbfelokoXCk6nN9keDtIY+el7RbhmoT492bHGZxY+U3ZWav+XlNMrBibWNOnOhaOmUfJIs+qV3k3OuvYNxrBGLLjsUilc06NPHuu/UQmxkaf+hdJWdDsVVvsRmfyHtnHyqTvTxV5hKl1qv2MCX5sPkWtf//t3BvxNmDCvfMbxvtb8m/7uKrGl4sRxWvRczEOjcVK0SORR5vY3un9idHrliFcSTFiJ3C//+iAIkU8zssMqADRqMxJBDqgzKs2sRaN8z80gyNmQSdZt5OniPHRry1wSYYZR1kB1K4kDaVuvyeI978Bms5V1DsHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
