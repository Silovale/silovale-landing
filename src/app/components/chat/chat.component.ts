import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent {
  userInput = '';
  chatLog: string[] = [];

  constructor(private http: HttpClient) { }

  async sendMessage() {
    this.chatLog.push(`Usuario: ${this.userInput}`);
    const response = await this.getResponseFromOpenAI(this.userInput);
    const botReply: string = response.choices[0].text.trim();
    this.chatLog.push(`SiLoValeGPT: ${botReply}`);
    this.userInput = '';
  }

  private async getResponseFromOpenAI(input: string) {
    const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
    const apiKey = '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'; // Reemplaza con tu clave API
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    });

    const body = {
      prompt: input,
      max_tokens: 256
    };

    return this.http.post<any>(apiUrl, body, { headers }).toPromise();
  }
}
