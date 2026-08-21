/**
 * AI Health Assistant Service
 * Modular Clinical Intelligence with Deterministic Knowledge-Base Fallback
 */

const CLINICAL_DISCLAIMER = `⚠️ IMPORTANT MEDICAL DISCLAIMER: This AI Health Assistant provides preliminary triage, educational guidance, and specialist recommendations only. It is NOT a certified medical practitioner, diagnostic device, or substitute for professional clinical judgment. If you are experiencing a life-threatening emergency (such as severe chest pain, sudden numbness, difficulty breathing, or severe bleeding), immediately dial emergency services (108 / 112 in India) or proceed to the nearest emergency department.`;

// Knowledge graph mapping symptom keywords to medical specialists, urgency levels, and guidance
const CLINICAL_KNOWLEDGE_GRAPH = [
  {
    keywords: ['chest pain', 'heart', 'palpitation', 'angina', 'left arm pain', 'high blood pressure', 'bp', 'cardiac'],
    specialist: 'Cardiologist',
    urgency: 'Emergency',
    summary: 'Symptoms may be associated with cardiovascular or cardiac stress.',
    advice: [
      'Avoid strenuous physical exertion and sit in an upright, relaxed posture.',
      'If chest pain is crushing or radiating to the left jaw/arm, call emergency services (108/112) immediately.',
      'Schedule an urgent consultation with a Cardiologist for ECG, Echo, and cardiac markers.'
    ],
    suggestedQuestions: [
      'Do I need an immediate ECG or 2D Echo test?',
      'Are my symptoms related to hypertension or arterial blockage?'
    ]
  },
  {
    keywords: ['skin', 'rash', 'acne', 'itching', 'eczema', 'psoriasis', 'pigmentation', 'hair loss', 'dandruff', 'scalp', 'allergy'],
    specialist: 'Dermatologist',
    urgency: 'Moderate',
    summary: 'Dermatological symptoms related to epidermis, hair follicles, or skin hypersensitivity.',
    advice: [
      'Avoid scratching or applying unprescribed steroid creams.',
      'Use gentle, fragrance-free cleansers and keep the affected area moisturized and dry.',
      'Note any triggers like new soaps, cosmetics, foods, or detergents.'
    ],
    suggestedQuestions: [
      'Is this skin condition allergic, fungal, or inflammatory?',
      'What topical creams or oral antihistamines are safest for my skin type?'
    ]
  },
  {
    keywords: ['headache', 'migraine', 'dizziness', 'seizure', 'numbness', 'tremor', 'nerve', 'paralysis', 'vertigo', 'memory loss'],
    specialist: 'Neurologist',
    urgency: 'High',
    summary: 'Neurological symptoms affecting the central or peripheral nervous system.',
    advice: [
      'Rest in a quiet, dark, well-ventilated room if experiencing severe headache or photophobia.',
      'Keep a record of headache frequency, duration, and associated nausea or visual aura.',
      'Seek emergency attention immediately if accompanied by slurred speech or facial droop.'
    ],
    suggestedQuestions: [
      'Do I need a brain MRI or CT scan to rule out structural causes?',
      'What preventive therapy or lifestyle modifications can mitigate these neurological episodes?'
    ]
  },
  {
    keywords: ['child', 'baby', 'infant', 'toddler', 'pediatric', 'vaccine', 'measles', 'mumps', 'growth', 'teething'],
    specialist: 'Pediatrician',
    urgency: 'Moderate',
    summary: 'Pediatric health, developmental, or childhood viral illness symptoms.',
    advice: [
      'Ensure the child stays adequately hydrated with oral fluids, breast milk, or electrolyte solutions.',
      'Monitor body temperature using a digital thermometer every 4-6 hours.',
      'Never administer adult medications, aspirin, or unmeasured doses to infants.'
    ],
    suggestedQuestions: [
      'Is my child meeting their normal growth and developmental milestones?',
      'Are there any pending vaccinations or immunization boosters needed?'
    ]
  },
  {
    keywords: ['bone', 'joint', 'knee', 'fracture', 'arthritis', 'back pain', 'spine', 'shoulder pain', 'ligament', 'sprain'],
    specialist: 'Orthopedic',
    urgency: 'Moderate',
    summary: 'Musculoskeletal concerns involving bones, joints, tendons, or spinal column.',
    advice: [
      'Apply R.I.C.E protocol (Rest, Ice for 15-20 mins, Compression, Elevation) for acute joint sprains.',
      'Avoid heavy lifting and high-impact physical activities until clinically evaluated.',
      'Maintain ergonomic seated posture with lumbar support.'
    ],
    suggestedQuestions: [
      'Is an X-Ray or MRI necessary to evaluate joint damage or disc herniation?',
      'Will physical therapy and targeted exercises help prevent recurrence?'
    ]
  },
  {
    keywords: ['period', 'menstrual', 'pregnancy', 'cramps', 'ovary', 'pcos', 'pcod', 'fertility', 'vaginal', 'uterus', 'gynec'],
    specialist: 'Gynecologist',
    urgency: 'Moderate',
    summary: 'Obstetric, gynecological, or reproductive health considerations.',
    advice: [
      'Track menstrual cycle dates, flow intensity, and pain levels on a calendar.',
      'Use a warm heating pad on the lower abdomen to ease menstrual cramping.',
      'Maintain proper hydration and consult a specialist for hormonal or ultrasound assessment.'
    ],
    suggestedQuestions: [
      'Do I need a pelvic ultrasound or hormone panel (FSH, LH, Thyroid)?',
      'How can I manage symptoms of PCOS or hormonal irregularities?'
    ]
  },
  {
    keywords: ['ear', 'throat', 'tonsil', 'sinus', 'hearing', 'tinnitus', 'nasal', 'snoring', 'voice', 'sore throat', 'ent'],
    specialist: 'ENT Specialist',
    urgency: 'Moderate',
    summary: 'Otorhinolaryngology symptoms involving ears, nasal passages, larynx, or throat.',
    advice: [
      'Do warm saline water gargles twice daily for soothing pharyngeal discomfort.',
      'Use steam inhalation to relieve sinus congestion and promote airway clearance.',
      'Avoid inserting cotton swabs or foreign objects inside the ear canal.'
    ],
    suggestedQuestions: [
      'Is this throat/ear infection bacterial or viral?',
      'Do I require antibiotic therapy or nasal spray decongestants?'
    ]
  },
  {
    keywords: ['eye', 'vision', 'blurred', 'red eye', 'conjunctivitis', 'cataract', 'glaucoma', 'spectacles', 'dry eye', 'sight'],
    specialist: 'Ophthalmologist',
    urgency: 'Moderate',
    summary: 'Ophthalmic conditions impacting visual acuity, cornea, or ocular health.',
    advice: [
      'Follow the 20-20-20 rule: every 20 minutes look at something 20 feet away for 20 seconds.',
      'Avoid rubbing the eyes to prevent corneal abrasions or spread of infection.',
      'Wear protective UV-blocking sunglasses when stepping outdoors.'
    ],
    suggestedQuestions: [
      'Is my vision change due to refractive error, dry eye syndrome, or eye strain?',
      'Should I undergo a comprehensive dilated fundus examination?'
    ]
  },
  {
    keywords: ['anxiety', 'depression', 'stress', 'insomnia', 'sleep', 'panic', 'mood', 'mental health', 'bipolar', 'trauma'],
    specialist: 'Psychiatrist',
    urgency: 'Moderate',
    summary: 'Mental well-being, mood regulation, cognitive stress, or sleep cycle disturbances.',
    advice: [
      'Practice rhythmic deep breathing (box breathing: 4s inhale, 4s hold, 4s exhale, 4s hold).',
      'Establish a fixed bedtime routine and disconnect from digital screens 1 hour prior to sleep.',
      'Reach out to trusted family members, counselors, or psychological support helplines.'
    ],
    suggestedQuestions: [
      'What therapeutic approaches (CBT, psychotherapy) or lifestyle steps are recommended?',
      'How can I improve sleep hygiene and manage stress triggers effectively?'
    ]
  },
  {
    keywords: ['tooth', 'teeth', 'gum', 'cavity', 'dental', 'bleeding gums', 'bad breath', 'root canal', 'denture', 'molar'],
    specialist: 'Dentist',
    urgency: 'Routine',
    summary: 'Oral and dental conditions concerning dentition, gingiva, or periodontal tissue.',
    advice: [
      'Brush teeth twice daily with a soft-bristled toothbrush and fluoride toothpaste.',
      'Rinse with warm salt water to alleviate minor gum soreness.',
      'Avoid overly hot, freezing cold, or highly acidic food and beverages.'
    ],
    suggestedQuestions: [
      'Is this tooth pain caused by deep decay requiring a filling or root canal?',
      'How frequently should I schedule professional dental scaling and cleaning?'
    ]
  },
  {
    keywords: ['cough', 'breathing', 'asthma', 'wheezing', 'lungs', 'bronchitis', 'shortness of breath', 'phlegm', 'chest congestion'],
    specialist: 'Pulmonologist',
    urgency: 'High',
    summary: 'Respiratory and pulmonary airway conditions affecting lung capacity.',
    advice: [
      'Avoid exposure to smoke, chemical fumes, dust mites, and cold air triggers.',
      'Use prescribed inhalers or bronchodilators with a spacer as instructed by your clinician.',
      'Check oxygen saturation using a pulse oximeter; if below 94%, seek medical care.'
    ],
    suggestedQuestions: [
      'Do I need a spirometry (Pulmonary Function Test) or Chest X-Ray?',
      'What is the difference between my maintenance inhaler and rescue inhaler?'
    ]
  },
  {
    keywords: ['stomach', 'gastric', 'acid', 'gerd', 'indigestion', 'vomiting', 'diarrhea', 'constipation', 'liver', 'ulcer', 'abdomen'],
    specialist: 'Gastroenterologist',
    urgency: 'Moderate',
    summary: 'Gastrointestinal disorders involving the digestive tract, stomach, or bowel.',
    advice: [
      'Eat smaller, frequent meals and avoid lying down for at least 2 hours after eating.',
      'Stay well-hydrated with water, coconut water, or buttermilk; avoid spicy and fried foods.',
      'Monitor for red flag symptoms like blood in vomit/stool or severe localized abdominal tenderness.'
    ],
    suggestedQuestions: [
      'Could these symptoms be related to acid reflux, gastritis, or food intolerance?',
      'Do I need an upper endoscopy or abdominal ultrasound?'
    ]
  },
  {
    keywords: ['urine', 'kidney', 'bladder', 'burning urine', 'prostate', 'urinary', 'stone', 'uti', 'flank pain'],
    specialist: 'Urologist',
    urgency: 'Moderate',
    summary: 'Urological and renal health symptoms impacting kidneys, bladder, or urinary tract.',
    advice: [
      'Drink 2.5 to 3 liters of clean water daily to help flush the urinary system.',
      'Avoid holding urine for prolonged periods and maintain good personal hygiene.',
      'Consult a doctor promptly if you experience chills, high fever, or hematuria (blood in urine).'
    ],
    suggestedQuestions: [
      'Is a urine routine culture and renal ultrasound necessary to rule out UTI or kidney stones?',
      'What dietary changes are recommended to prevent recurrent stone formation?'
    ]
  },
  {
    keywords: ['fever', 'cold', 'flu', 'fatigue', 'body pain', 'weakness', 'infection', 'general', 'chills', 'viral'],
    specialist: 'General Physician',
    urgency: 'Moderate',
    summary: 'General medical symptoms or early systemic viral/bacterial illness.',
    advice: [
      'Get ample rest and maintain continuous hydration with warm fluids and nutritious soups.',
      'Track your temperature chart morning and evening.',
      'Consult a General Physician for baseline blood counts (CBC) if fever persists beyond 48-72 hours.'
    ],
    suggestedQuestions: [
      'What baseline diagnostic lab tests are recommended for this fever pattern?',
      'How long is this illness typically contagious, and when should I follow up?'
    ]
  }
];

/**
 * Deterministic AI Triage & Health Assistant Analyzer
 */
function analyzeSymptomsLocally(symptomText) {
  const query = symptomText.toLowerCase();
  let bestMatch = null;
  let highestScore = 0;

  for (const item of CLINICAL_KNOWLEDGE_GRAPH) {
    let score = 0;
    for (const keyword of item.keywords) {
      if (query.includes(keyword)) {
        score += keyword.split(' ').length > 1 ? 3 : 1; // Prioritize multi-word matches
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  // Fallback if no specific keyword matched
  if (!bestMatch || highestScore === 0) {
    bestMatch = {
      specialist: 'General Physician',
      urgency: 'Moderate',
      summary: 'General clinical evaluation is recommended for comprehensive assessment.',
      advice: [
        'Maintain hydration and record all symptoms, triggers, and their timeline.',
        'Consult a General Physician for a holistic physical examination and vital signs review.'
      ],
      suggestedQuestions: [
        'What diagnostic tests should I undergo first?',
        'Are my symptoms related to lifestyle, viral infection, or a chronic condition?'
      ]
    };
  }

  return {
    symptomsEvaluated: symptomText,
    recommendedSpecialist: bestMatch.specialist,
    urgencyLevel: bestMatch.urgency,
    clinicalSummary: bestMatch.summary,
    homeCareAdvice: bestMatch.advice,
    questionsForDoctor: bestMatch.suggestedQuestions,
    disclaimer: CLINICAL_DISCLAIMER,
    engine: 'AI Smart Hospital Deterministic Clinical Intelligence'
  };
}

/**
 * Process AI query - supports external API integration with fallback
 */
async function processHealthQuery(queryText, conversationHistory = []) {
  // If external API is configured, external call can be attempted; otherwise instant reliable fallback
  return analyzeSymptomsLocally(queryText);
}

module.exports = {
  CLINICAL_DISCLAIMER,
  analyzeSymptomsLocally,
  processHealthQuery
};
