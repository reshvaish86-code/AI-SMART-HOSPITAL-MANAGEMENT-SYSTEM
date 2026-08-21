/**
 * AI Health Assistant Client Logic
 */

const AIAssistant = {
  async triageSymptoms(symptomsText) {
    if (!symptomsText || symptomsText.trim().length === 0) {
      API.toast('Please describe your symptoms in detail', 'warning');
      return null;
    }

    try {
      const response = await API.post('/ai/triage', { symptoms: symptomsText });
      if (response && response.status === 'success') {
        return response.data;
      }
    } catch (error) {
      console.error('AI Triage Error:', error);
    }
    return null;
  },

  async sendMessage(messageText) {
    try {
      const response = await API.post('/ai/chat', { message: messageText });
      if (response && response.status === 'success') {
        return response.data;
      }
    } catch (error) {
      console.error('AI Chat Error:', error);
    }
    return null;
  }
};
