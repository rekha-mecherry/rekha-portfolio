import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.html',
  styleUrl: './chat-widget.css'
})
export class ChatWidgetComponent {
  isOpen = false;
  messages: { text: string, sender: 'user' | 'bot' }[] = [
    { text: 'Hi! I am Rekha\'s AI Assistant. Ask me about her Cloud or AI experience.', sender: 'bot' }
  ];
  userInput = '';
  isLoading = false;

  constructor(private chatService: ChatService) { }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    const msg = this.userInput;
    this.messages.push({ text: msg, sender: 'user' });
    this.userInput = '';
    this.isLoading = true;

    this.chatService.sendMessage(msg).subscribe({
      next: (res) => {
        this.messages.push({ text: res.response, sender: 'bot' });
        this.isLoading = false;
      },
      error: () => {
        this.messages.push({ text: 'Sorry, I am having trouble connecting to the backend.', sender: 'bot' });
        this.isLoading = false;
      }
    });
  }
}
