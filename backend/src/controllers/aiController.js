const { analyzeSymptomsLocally, processHealthQuery, CLINICAL_DISCLAIMER } = require('../services/aiService');
const { SPECIALIZATIONS, TAMIL_NADU_DISTRICTS } = require('../utils/constants');

/**
 * @desc    Analyze symptoms and recommend medical specialist
 * @route   POST /api/ai/triage
 * @access  Public
 */
const triageSymptoms = async (req, res, next) => {
  try {
    const { symptoms } = req.body;

    if (!symptoms || typeof symptoms !== 'string' || symptoms.trim().length === 0) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide detailed symptoms description'
      });
    }

    const triageResult = await processHealthQuery(symptoms);

    res.status(200).json({
      status: 'success',
      data: triageResult
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Interactive AI Health Assistant Chat
 * @route   POST /api/ai/chat
 * @access  Public
 */
const chatWithAssistant = async (req, res, next) => {
  try {
    const { message, conversationHistory } = req.body;

    if (!message || message.trim().length === 0) {
      return res.status(400).json({
        status: 'fail',
        message: 'Message cannot be empty'
      });
    }

    const result = analyzeSymptomsLocally(message);

    const reply = `Based on your description: "${message}"\n\n` +
      `🩺 **Recommended Specialist**: ${result.recommendedSpecialist}\n` +
      `⚡ **Urgency Level**: ${result.urgencyLevel}\n` +
      `📋 **Clinical Summary**: ${result.clinicalSummary}\n\n` +
      `💡 **General Home Guidance**:\n` +
      result.homeCareAdvice.map(a => `• ${a}`).join('\n') + `\n\n` +
      `❓ **Suggested Questions for Your Doctor**:\n` +
      result.questionsForDoctor.map(q => `• ${q}`).join('\n') + `\n\n` +
      `---\n` +
      `${CLINICAL_DISCLAIMER}`;

    res.status(200).json({
      status: 'success',
      data: {
        reply,
        recommendedSpecialist: result.recommendedSpecialist,
        urgencyLevel: result.urgencyLevel,
        disclaimer: CLINICAL_DISCLAIMER
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get All Supported Specialists and Tamil Nadu Districts
 * @route   GET /api/ai/metadata
 * @access  Public
 */
const getSystemMetadata = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      specializations: SPECIALIZATIONS,
      districts: TAMIL_NADU_DISTRICTS,
      disclaimer: CLINICAL_DISCLAIMER
    }
  });
};

module.exports = {
  triageSymptoms,
  chatWithAssistant,
  getSystemMetadata
};
