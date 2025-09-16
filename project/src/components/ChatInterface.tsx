import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, Bot, User, Waves as Wave } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatInterfaceProps {
  onDataRequest?: (query: string) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ onDataRequest }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your ocean data assistant. Ask me anything about ARGO floats, salinity, temperature, or ocean conditions. Try asking: 'Show me temperature profiles in the Arabian Sea' or 'What's the salinity trend near the equator?'",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate typing indicator
    const typingMessage: Message = {
      id: 'typing',
      content: '',
      sender: 'bot',
      timestamp: new Date(),
      isTyping: true,
    };
    setMessages(prev => [...prev, typingMessage]);

    try {
      // Simulate API call to Hugging Face (replace with actual API integration)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const botResponse = generateBotResponse(userMessage.content);
      
      setMessages(prev => prev.filter(msg => msg.id !== 'typing'));
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      
      // Trigger data request if query is data-related
      if (onDataRequest && isDataQuery(userMessage.content)) {
        onDataRequest(userMessage.content);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => prev.filter(msg => msg.id !== 'typing'));
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm having trouble connecting right now. Please try again in a moment.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const generateBotResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('temperature') || lowerQuery.includes('temp')) {
      return "I found temperature data for your query. The ARGO floats show interesting thermal patterns in this region. Temperature profiles indicate seasonal variations with surface warming and deeper thermoclines. I'm generating visualizations for you on the dashboard.";
    } else if (lowerQuery.includes('salinity')) {
      return "Analyzing salinity profiles from ARGO floats... The data shows varying salinity levels across different depths and locations. Surface salinity appears to be influenced by evaporation and freshwater inputs. Check the dashboard for detailed salinity maps and trends.";
    } else if (lowerQuery.includes('arabian sea')) {
      return "The Arabian Sea shows fascinating oceanographic patterns! ARGO floats in this region reveal high salinity levels due to intense evaporation, warm surface temperatures, and unique circulation patterns. The oxygen minimum zone is particularly pronounced here.";
    } else if (lowerQuery.includes('equator')) {
      return "Near the equatorial region, ARGO data reveals the influence of equatorial upwelling, trade winds, and the Intertropical Convergence Zone. Temperature and salinity patterns show distinct seasonal variations with cooler upwelled water and varying precipitation effects.";
    } else if (lowerQuery.includes('float') || lowerQuery.includes('argo')) {
      return "ARGO floats are autonomous profiling instruments that drift with ocean currents, diving to depths of up to 2000m every 10 days to collect temperature and salinity data. There are currently over 4000 active floats worldwide providing real-time ocean observations.";
    } else {
      return "I understand you're interested in ocean data. I can help you explore ARGO float observations, including temperature, salinity, and biogeochemical parameters. Try asking about specific regions, time periods, or oceanographic phenomena you'd like to investigate.";
    }
  };

  const isDataQuery = (query: string): boolean => {
    const dataKeywords = ['temperature', 'salinity', 'show', 'data', 'profile', 'map', 'chart', 'arabian sea', 'equator'];
    return dataKeywords.some(keyword => query.toLowerCase().includes(keyword));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    // Voice input functionality would be implemented here
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-2xl">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Ocean Data Assistant</h3>
            <p className="text-blue-100 text-sm">Powered by AI • Real-time ARGO Data</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white ml-4'
                  : 'bg-white shadow-lg mr-4 border border-blue-100'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full ${
                  message.sender === 'user' 
                    ? 'bg-white/20' 
                    : 'bg-gradient-to-br from-blue-500 to-cyan-500'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  {message.isTyping ? (
                    <div className="flex items-center gap-1">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                      <span className="text-gray-500 text-sm ml-2">AI is thinking...</span>
                    </div>
                  ) : (
                    <p className={`leading-relaxed ${
                      message.sender === 'user' ? 'text-white' : 'text-gray-800'
                    }`}>
                      {message.content}
                    </p>
                  )}
                  <p className={`text-xs mt-2 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white border-t border-blue-100">
        <div className="flex items-end gap-3">
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about ocean data, ARGO floats, temperature, salinity..."
              className="w-full p-4 pr-12 border-2 border-blue-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-400 resize-none transition-all duration-200 bg-blue-50/50"
              rows={1}
              disabled={isLoading}
            />
            <button
              onClick={toggleVoiceInput}
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-200 ${
                isListening 
                  ? 'bg-red-500 text-white shadow-lg' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-4 rounded-2xl hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};