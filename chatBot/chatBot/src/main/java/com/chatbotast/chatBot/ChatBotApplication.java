
package com.chatbotast.chatBot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ChatBotApplication {  

    public static void main(String[] args) {
        SpringApplication.run(ChatBotApplication.class, args);
        
        // Startup message to confirm server is running
        System.out.println("\n╔════════════════════════════════════════════╗");
        System.out.println("║   🤖 ChatBot Backend Started Successfully  ║");
        System.out.println("╚════════════════════════════════════════════╝");
        System.out.println();
        System.out.println("📍 Server URL:    http://localhost:8080");
        System.out.println("🏥 Health Check:  http://localhost:8080/api/health");
        System.out.println("💬 Chat Endpoint: POST http://localhost:8080/api/chat");
        System.out.println();
        System.out.println("📌 Tips:");
        System.out.println("   • Make sure GEMINI_API_KEY environment variable is set");
        System.out.println("   • Frontend should call: http://localhost:8080/api/chat");
        System.out.println("   • Check logs above for any configuration issues");
        System.out.println();
        System.out.println("═══════════════════════════════════════════════\n");
    }
}